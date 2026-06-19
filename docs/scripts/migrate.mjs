// One-off migration: port the vanilla (Hugo) docs into the Astro engine. Hugo
// shortcodes become engine components; `{{< example >}}` blocks are static HTML
// rendered via <Example html> (the global CoreUI JS hydrates them by data-attribute,
// so there's no framework island). Modelled on Bootstrap's own Hugo→Astro migration.
// Run: node scripts/migrate.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, cpSync } from 'node:fs'
import { join, dirname, basename, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const here = dirname(fileURLToPath(import.meta.url))
const SRC = join(here, '../../docs/content')
const PARTIALS = join(here, '../../docs/layouts/partials')
const DATA = join(here, '../../docs/data')

const themeColors = yaml.load(readFileSync(join(DATA, 'theme-colors.yml'), 'utf8'))
const breakpoints = yaml.load(readFileSync(join(DATA, 'breakpoints.yml'), 'utf8'))
const colors = yaml.load(readFileSync(join(DATA, 'colors.yml'), 'utf8'))
const grays = yaml.load(readFileSync(join(DATA, 'grays.yml'), 'utf8'))
// Hugo `{{< param "cdn.js_bundle" >}}` etc. read site params (the CDN URLs + SRI hashes);
// resolve them from hugo.yml at migrate time, like Bootstrap's `[[config:…]]`.
const hugoParams = yaml.load(readFileSync(join(here, '../../hugo.yml'), 'utf8'))?.params ?? {}
const param = (key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), hugoParams) ?? ''
const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1)

// Hugo `{{ range … }} … {{ end }}` loops are expanded over the data files (the engine
// renders plain HTML, so the iteration happens at migrate time). Bootstrap's Astro docs
// defer this to `getData('…').map(…)`; we do the same iteration up front. Ranges nest
// (breakpoints > seq) and their `{{ end }}` can share the inner blocks' trim form, so a
// balanced scanner (counting range/if/with vs end) finds each range's real end.
function findMatchingEnd(body, fromIdx) {
  const re = /\{\{[-\s]*(range|if|with|block|define|end)\b/g
  re.lastIndex = fromIdx
  let depth = 1
  let m
  while ((m = re.exec(body))) {
    if (m[1] === 'end') {
      depth -= 1
      if (depth === 0) return { innerEnd: m.index, after: body.indexOf('}}', m.index) + 2 }
    } else depth += 1
  }
  return null
}

function expandRange(body, openSource, render) {
  const open = new RegExp(openSource, 'g')
  let result = ''
  let last = 0
  let m
  while ((m = open.exec(body))) {
    if (m.index < last) continue
    const openEnd = m.index + m[0].length
    const found = findMatchingEnd(body, openEnd)
    if (!found) continue
    // Respect Hugo whitespace trims: `… -}}` on the open trims the body's leading
    // whitespace, `{{- end …` on the close trims its trailing — otherwise each loop
    // iteration keeps a stray newline and the output gains blank lines between items.
    let inner = body.slice(openEnd, found.innerEnd)
    if (/-\}\}$/.test(m[0])) inner = inner.replace(/^[ \t]*\n/, '')
    if (/^\{\{-/.test(body.slice(found.innerEnd))) inner = inner.replace(/\n[ \t]*$/, '')
    result += body.slice(last, m.index) + render(inner, m)
    last = found.after
    open.lastIndex = found.after
  }
  return result + body.slice(last)
}

function substColor(inner, c) {
  return inner
    .replace(/\{\{\s*with \.contrast_color\s*\}\}([\s\S]*?)\{\{\s*else\s*\}\}([\s\S]*?)\{\{\s*end\s*\}\}/g, (_m, a, b) => (c.contrast_color ? a.replace(/\{\{\s*\.\s*\}\}/g, c.contrast_color) : b))
    .replace(/\{\{\s*if \.contrast_color\s*\}\}([\s\S]*?)\{\{\s*else\s*\}\}([\s\S]*?)\{\{\s*end\s*\}\}/g, (_m, a, b) => (c.contrast_color ? a.replace(/\{\{\s*\.contrast_color\s*\}\}/g, c.contrast_color) : b))
    .replace(/\{\{\s*if (eq|ne) \.name "([^"]+)"\s*\}\}([\s\S]*?)(?:\{\{\s*else\s*\}\}([\s\S]*?))?\{\{\s*end\s*\}\}/g, (_m, op, x, a, b = '') => ((op === 'eq' ? c.name === x : c.name !== x) ? a : b))
    .replace(/\{\{\s*title \.name\s*\}\}/g, titleCase(c.name))
    .replace(/\{\{\s*\.name\s*\|\s*(?:title|humanize)\s*\}\}/g, titleCase(c.name))
    .replace(/\{\{\s*\.name\s*\}\}/g, c.name)
    .replace(/\{\{\s*\.contrast_color\s*\}\}/g, c.contrast_color || '')
    .replace(/\{\{\s*\.hex\s*\}\}/g, c.hex || '')
    .replace(/\{\{\s*\.abbr\s*\}\}/g, c.abbr || c.name)
}

function substColorEntry(inner, c) {
  return inner
    .replace(/\{\{-?\s*if \(and ((?:\(not \(eq \$color\.name "[^"]+"\)\) ?)+)\)\s*-?\}\}([\s\S]*?)\{\{-?\s*end\s*-?\}\}/g, (_m, conds, body) =>
      [...conds.matchAll(/"([^"]+)"/g)].map((x) => x[1]).includes(c.name) ? '' : body
    )
    .replace(/\{\{-?\s*\$color\.name\s*-?\}\}/g, c.name)
    .replace(/\{\{-?\s*\$color\.hex\s*-?\}\}/g, c.hex)
}

function substGray(inner, g) {
  return inner
    .replace(/\{\{-?\s*\.name\s*-?\}\}/g, g.name)
    .replace(/\{\{-?\s*\.hex\s*-?\}\}/g, g.hex)
}

function substBreakpoint(inner, b) {
  return inner
    .replace(/\{\{-?\s*if not \(eq \$?(?:bp|\.)? ?"xs"\)\s*-?\}\}([\s\S]*?)\{\{-?\s*end\s*-?\}\}/g, (_m, a) => (b.breakpoint === 'xs' ? '' : a))
    .replace(/\{\{-?\s*\$?(?:bp)?\.abbr\s*-?\}\}/g, b.abbr || '')
    .replace(/\{\{-?\s*\$?(?:bp)?\.name\s*-?\}\}/g, b.name || '')
}

function expandRanges(rawBody) {
  // Mask fenced code first — examples that SHOW `{{ range }}`/`{{ end }}` as text would
  // otherwise throw off the balanced end scanner.
  const fences = []
  let body = rawBody.replace(/```[\s\S]*?```/g, (m) => `@@COREUIFENCE${fences.push(m) - 1}@@`)
  // Outer ranges first; nested ranges (e.g. a seq inside a breakpoints loop) are
  // expanded on the next pass once the outer body has been repeated.
  body = expandRange(body, '\\{\\{-?\\s*range (?:\\$bp := )?\\$\\.Site\\.Data\\.breakpoints\\s*-?\\}\\}', (inner) =>
    breakpoints.map((b) => substBreakpoint(inner, b)).join('')
  )
  body = expandRange(body, '\\{\\{-?\\s*range \\(seq ([\\d ]+)\\)\\s*-?\\}\\}', (inner, m) => {
    const parts = m[1].trim().split(/\s+/).map(Number)
    const [start, step, end] = parts.length === 3 ? parts : [parts[0], 1, parts[1]]
    let out = ''
    for (let i = start; i <= end; i += step) out += inner.replace(/\{\{\s*\.\s*\}\}/g, i)
    return out
  })
  body = expandRange(body, '\\{\\{-?\\s*range \\(slice ((?:"[^"]*" ?)+)\\)\\s*-?\\}\\}', (inner, m) =>
    (m[1].match(/"([^"]*)"/g) || []).map((q) => inner.replace(/\{\{\s*\.\s*\}\}/g, q.slice(1, -1))).join('')
  )
  body = expandRange(body, '\\{\\{-?\\s*range \\(index \\$\\.Site\\.Data "theme-colors"\\)\\s*-?\\}\\}', (inner) =>
    themeColors.map((c) => substColor(inner, c)).join('')
  )
  body = expandRange(body, '\\{\\{-?\\s*range \\$color := \\$\\.Site\\.Data\\.colors\\s*-?\\}\\}', (inner) =>
    colors.map((c) => substColorEntry(inner, c)).join('')
  )
  body = expandRange(body, '\\{\\{-?\\s*range \\$\\.Site\\.Data\\.grays\\s*-?\\}\\}', (inner) =>
    grays.map((g) => substGray(inner, g)).join('')
  )
  return body.replace(/@@COREUIFENCE(\d+)@@/g, (_m, i) => fences[Number(i)])
}
const DST = join(here, '../src/content/docs')
const SECTIONS = ['components', 'forms', 'layout', 'content', 'utilities', 'getting-started', 'customize', 'helpers', 'migration', 'templates', 'integration-guides']
const ONLY = process.env.ONLY
// Pages built from complex Hugo templates (nested range/if over colors/CSS-vars) that
// the simple theme-colors expander doesn't cover. Handled in a later pass.
const SKIP = new Set([])

const walk = (dir, out = []) => {
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name.endsWith('.md')) out.push(p)
  }
  return out
}

// Escape a string so it can live inside a `code={`…`}` template literal in MDX.
const tl = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

// Encode multi-line markup as an array of single-line template literals
// (`[`line1`, `line2`]`) for an <Example> `code`/`html` prop — the engine joins it with
// "\n". One backtick string per line keeps each single-line, so MDX can't dedent a
// multi-line literal (which stripped examples' indentation). Backticks (not JSON strings)
// because MDX's expression parser mis-reads a `<` inside a double-quoted string as JSX.
const lineArray = (s) => `[${s.split('\n').map((l) => `\`${tl(l)}\``).join(', ')}]`

function placeholder(attrs) {
  const get = (n) => (attrs.match(new RegExp(`${n}="([^"]*)"`)) || [])[1]
  const w = get('width') || '100%'
  const h = get('height') || '180'
  const cls = get('class') || ''
  const text = get('text') || ''
  const title = get('title') || text
  return `<svg class="docs-placeholder-img ${cls}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" preserveAspectRatio="xMidYMid slice" focusable="false"><title>${title}</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">${text}</text></svg>`
}

// Self-contained callout shortcodes (docs/layouts/shortcodes/callout-*.html) carry fixed
// CoreUI copy. Read the source, map its `.docs-callout-<color>` to the engine <Callout>.
const SHORTCODES = join(here, '../../docs/layouts/shortcodes')
function calloutShortcode(name) {
  const file = join(SHORTCODES, `${name}.html`)
  if (!existsSync(file)) return ''
  const html = readFileSync(file, 'utf8')
  const color = (html.match(/docs-callout-(\w+)/) || [, 'info'])[1]
  const inner = html
    .replace(/^[\s\S]*?<div class="docs-callout[^"]*">/, '')
    .replace(/<\/div>\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
  return `<Callout color="${color}"><Fragment set:html={\`${tl(inner)}\`} /></Callout>`
}

// `{{< js.inline >}}{{ readFile "x.js" }}{{< /js.inline >}}` inlines a behavioural demo
// script; `{{< root.inline >}}` emits the built `:root` CSS-variable block as a code
// sample. Both are resolved at migrate time from the repo's source / built assets.
function inlineScript(path) {
  const file = join(here, '../../', path)
  return existsSync(file) ? `<script is:inline set:html={\`${tl(readFileSync(file, 'utf8').trim())}\`} />` : ''
}
function rootCss() {
  const file = join(here, '../../dist/css/coreui.css')
  if (!existsSync(file)) return ''
  const m = readFileSync(file, 'utf8').match(/:root,\s*\[data-coreui-theme=light\] \{[^}]*\}/)
  return m ? '```css\n' + m[0] + '\n```' : ''
}

// `{{< js-docs name="X" file="…x.js" >}}` DISPLAYS the snippet code between its
// `// js-docs-start X` / `// js-docs-end X` markers (a fenced block). Execution is
// separate: per-page demos come from the page's frontmatter `snippets:` list, common
// ones from the global docs glue (see snippetScripts / public/js/docs-snippets.js).
// Raw code of a snippet's `// js-docs-start NAME … // js-docs-end` section.
function snippetCode(name, file) {
  const full = join(here, '../../', file)
  if (!existsSync(full)) return ''
  const re = new RegExp(`// js-docs-start ${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n([\\s\\S]*?)// js-docs-end`)
  const m = readFileSync(full, 'utf8').match(re)
  return m ? m[1].replace(/^\s*\/\/ js-docs-.*\n/gm, '').replace(/\n+$/, '') : ''
}
function jsDocs(name, file) {
  const code = snippetCode(name, file)
  return code ? `\`\`\`js\n${code}\n\`\`\`` : ''
}

// A page's frontmatter `snippets:` lists demo files in docs/assets/js/snippets/. Each is
// inlined as a deferred `<script>` so the live demo runs — only on that page, so the
// example's StackBlitz export pulls just what it needs. Deferred to DOMContentLoaded so
// the engine's `window.coreui` (set by its module) is ready and the demo's DOM exists.
const SNIPPETS = join(here, '../../docs/assets/js/snippets')
function snippetScripts(fm) {
  const block = fm.match(/^snippets:\s*\n((?:\s*-\s*.+\n?)+)/m)
  if (!block) return ''
  const files = [...block[1].matchAll(/-\s*(.+?)\s*$/gm)].map((m) => m[1].trim())
  return files
    .map((name) => join(SNIPPETS, name))
    .filter(existsSync)
    .map((file) => readFileSync(file, 'utf8').replace(/^\s*\/\/ js-docs-.*\n/gm, '').replace(/^\/\*\s*global[^*]*\*\/\n?/m, '').trim())
    .map((code) => `\n<script is:inline set:html={\`document.addEventListener('DOMContentLoaded', function () {\n${tl(code)}\n})\`} />`)
    .join('')
}

// Resolve `{{< partial "x.md" >}}` to the partial's content (recursively expanded).
function partial(name) {
  const file = join(PARTIALS, name)
  if (!existsSync(file)) return ''
  return shortcodes(readFileSync(file, 'utf8'))
}

// Some demos are written as raw `<div class="docs-example">…</div>` (no `{{< example >}}`,
// no code shown). Render them through <Example html> too, so their HTML (often with
// unclosed void elements / inline styles) never has to parse as MDX.
function extractRawExamples(rawBody) {
  // Skip docs-example divs nested inside a `{{< example >}}` block — those are the
  // example's own markup and must stay verbatim in its shown code, not become a second
  // (nested) <Example>. Mask the example blocks, extract the standalone ones, restore.
  const blocks = []
  const body = rawBody.replace(/\{\{< example[\s\S]*?\{\{< \/example >\}\}/g, (m) => `@@EXBLOCK${blocks.push(m) - 1}@@`)
  const open = /<div class="docs-example([^"]*)"[^>]*>/g
  let result = ''
  let last = 0
  let m
  while ((m = open.exec(body))) {
    if (m.index < last) continue
    result += body.slice(last, m.index)
    const tag = /<div\b|<\/div>/g
    tag.lastIndex = m.index
    let depth = 0
    let end = -1
    let t
    while ((t = tag.exec(body))) {
      if (t[0] === '</div>') {
        depth -= 1
        if (depth === 0) {
          end = t.index + 6
          break
        }
      } else depth += 1
    }
    if (end < 0) {
      result += body.slice(m.index)
      last = body.length
      break
    }
    const inner = body.slice(m.index + m[0].length, end - 6).trim()
    const cls = m[1].trim()
    result += `<Example lang="html"${cls ? ` class="${cls}"` : ''} html={${lineArray(inner)}} />`
    last = end
  }
  return (result + body.slice(last)).replace(/@@EXBLOCK(\d+)@@/g, (_m, i) => blocks[Number(i)])
}

// Prose-only MDX fixes (strip HTML comments, linkify autolinks, self-close void tags).
// They'd corrupt fenced code and <Example> arrays — both already MDX-safe and meant to
// stay verbatim — so mask those first, fix the prose, then restore.
function proseFixups(body) {
  const keep = []
  return body
    .replace(/```[\s\S]*?```/g, (m) => `@@KEEP${keep.push(m) - 1}@@`)
    .replace(/<Example\b[^\n]*\/>/g, (m) => `@@KEEP${keep.push(m) - 1}@@`)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(https?:\/\/[^>\s]+)>/g, '[$1]($1)')
    .replace(/<(area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr)((?:\s[^>]*?)?)(?<!\/)>/gi, '<$1$2 />')
    .replace(/@@KEEP(\d+)@@/g, (_m, i) => keep[Number(i)])
}

function shortcodes(body, ctx = {}) {
  const { componentName = 'CoreUI', slug = 'example' } = ctx
  // Map a js-docs `id` to its snippet so an `{{< example stackblitz_add_js="id" >}}` can
  // ship that demo JS into its StackBlitz/CodeSandbox project.
  const jsDocsById = {}
  for (const m of body.matchAll(/\{\{< js-docs ([^>]*?)>\}\}/g)) {
    const id = (m[1].match(/id="([^"]+)"/) || [])[1]
    const name = (m[1].match(/name="([^"]+)"/) || [])[1]
    const file = (m[1].match(/file="([^"]+)"/) || [])[1]
    if (id && name && file) jsDocsById[id] = { name, file }
  }
  let exampleN = 0
  const chain = (
    extractRawExamples(expandRanges(body))
      // Hugo render-hook wrappers (`{{< theme-colors.inline >}}` …) sit on their own
      // line around generated content; drop the whole line — before examples are
      // captured — so they don't leave a blank line in the shown code.
      .replace(/^[ \t]*\{\{< \/?[\w.-]*\.inline >\}\}[ \t]*\n?/gm, '')
      // Page-level <style> blocks: MDX reads the CSS `{` as a JS expression, so emit
      // the CSS through set:html. (No example block contains a <style>, so this is safe.)
      .replace(/<style>([\s\S]*?)<\/style>/g, (_f, css) => `<style set:html={\`${tl(css)}\`} />`)
      .replace(/\{\{<\s*js\.inline\s*>\}\}\s*\{\{-?\s*readFile \(?(?:path\.Join )?"([^"]+)"\)? -?\}\}\s*\{\{<\s*\/js\.inline\s*>\}\}/g, (_f, p) => inlineScript(p))
      .replace(/\{\{<\s*root\.inline\s*>\}\}[\s\S]*?\{\{<\s*\/root\.inline\s*>\}\}/g, () => rootCss())
      .replace(/\{\{<\s*(callout-dart-sass-[\w-]+)\s*>\}\}/g, (_f, name) => calloutShortcode(name))
      .replace(/\{\{< partial "([^"]+)" >\}\}/g, (_, p) => partial(p))
      .replace(/\{\{< example([^>]*)>\}\}\n([\s\S]*?)\n\{\{< \/example >\}\}/g, (_full, attrs, html) => {
        const cls = (attrs.match(/class="([^"]*)"/) || [])[1]
        // The Hugo `example` shortcode trims leading/trailing newlines (`trim … "\n"`).
        const arr = lineArray(html.replace(/^\n+|\n+$/g, ''))
        // `name` turns on the StackBlitz/CodeSandbox buttons; `stackblitz_add_js` resolves
        // to the demo snippet shipped into the sandbox so the live example runs there too.
        const name = `${slug}-${(exampleN += 1)}`
        const sbId = (attrs.match(/stackblitz_add_js="([^"]+)"/) || [])[1]
        const snip = sbId && jsDocsById[sbId] ? snippetCode(jsDocsById[sbId].name, jsDocsById[sbId].file) : ''
        const sandboxJs = snip ? ` sandboxJs={${lineArray(snip)}.join('\\n')}` : ''
        return `<Example lang="html" name="${name}" componentName="${componentName}"${cls ? ` class="${cls}"` : ''} code={${arr}} html={${arr}}${sandboxJs} />`
      })
      .replace(/\{\{< callout(?:-[\w-]+)? (\w+) >\}\}\n([\s\S]*?)\n\{\{< \/callout(?:-[\w-]+)? >\}\}/g, (_f, color, content) => `<Callout color="${color}">\n${content.trim()}\n</Callout>`)
      .replace(/\{\{< added-in "([^"]+)" >\}\}/g, '<AddedIn version="$1" />')
      .replace(/\{\{< deprecated-in "([^"]+)" >\}\}/g, '')
      .replace(/\{\{< docsref "([^"#]+)(#[^"]*)?" >\}\}/g, '$1/$2')
      .replace(/\{\{< scss-docs name="([^"]+)" file="([^"]+)"[^>]*>\}\}/g, (_f, name, file) => `<ScssDocs file="${file}" capture="${name}" />`)
      .replace(/\{\{< js-docs ([^>]*?)>\}\}/g, (_f, attrs) => {
        const name = (attrs.match(/name="([^"]+)"/) || [])[1]
        const file = (attrs.match(/file="([^"]+)"/) || [])[1]
        return name && file ? jsDocs(name, file) : ''
      })
      .replace(/\{\{< placeholder([^>]*)>\}\}/g, (_f, attrs) => placeholder(attrs))
      .replace(/\{\{% js-dismiss "([^"]+)" %\}\}/g, (_f, name) => `Dismissal can be achieved with the \`data\` attribute on a button **within the ${name}** as demonstrated below:\n\n\`\`\`html\n<button type="button" class="btn-close" data-coreui-dismiss="${name}" aria-label="Close"></button>\n\`\`\``)
      .replace(/\{\{< param "?([\w.]+)"? >\}\}/g, (_f, key) => param(key))
      // drop any remaining shortcodes we don't translate yet, leaving their inner text.
      // The `{{< … >}}` (HTML) and `{{% … %}}` (markdown) forms both just get their
      // wrapper tags removed, so paired ones (bs-table, markdown, table) keep content.
      .replace(/\{\{< \/?[\w.-]+[^>]*>\}\}/g, '')
      .replace(/\{\{% \/?[\w.-]+[^%]*%\}\}/g, '')
  )
  return proseFixups(chain)
}

function transformFrontmatter(fm, css = []) {
  let title = null
  let description = null
  let bootstrap = false
  const otherFrameworks = []
  for (const line of fm.split('\n')) {
    const m = line.match(/^([a-z_]+):\s*(.*)$/)
    if (!m) continue
    const [, key, raw] = m
    const value = raw.replace(/^["']|["']$/g, '')
    if (key === 'title') title = value
    else if (key === 'description') description = value
    else if (key === 'bootstrap') bootstrap = value === 'true'
    else if (key === 'other_frameworks') value.split(/[,\s]+/).filter(Boolean).forEach((s) => otherFrameworks.push(s))
  }
  // Bootstrap-compat pages get the dual heading (Hugo docs.html `if .Params.bootstrap`):
  // a small SEO `Bootstrap 5 <Title>` h1 over the large `<Title>` h2. The engine renders
  // that whenever `name` differs from `title`. (We don't set the engine `bootstrap` prop —
  // that drives the React/Vue PRO "designed for <framework>" banner, not wanted here.)
  const t = title || 'Docs'
  const out = bootstrap
    ? [`title: ${JSON.stringify('Bootstrap 5 ' + t.replace(/\b\w/g, (c) => c.toUpperCase()))}`, `name: ${JSON.stringify(t)}`]
    : [`title: ${JSON.stringify(t)}`]
  if (description) out.push(`description: ${JSON.stringify(description)}`)
  if (otherFrameworks.length) {
    out.push('otherFrameworks:')
    otherFrameworks.forEach((s) => out.push(`  - ${s}`))
  }
  if (css.length) {
    out.push('css:')
    css.forEach((href) => out.push(`  - ${JSON.stringify(href)}`))
  }
  return out.join('\n')
}

// CoreUI Icons CDN stylesheets — pages whose markup uses the icon font (`cil-`/`cib-`
// classes) declare them via frontmatter `css` so the icons render (the engine injects
// per-page <link>s). Matches the old Hugo head.html include.
const ICONS_CDN = 'https://cdn.jsdelivr.net/npm/@coreui/icons@3.1.0/css'
function iconStylesheets(body) {
  const css = []
  if (/\bcil-[a-z]/.test(body)) css.push(`${ICONS_CDN}/free.min.css`)
  if (/\bcib-[a-z]/.test(body)) css.push(`${ICONS_CDN}/brand.min.css`)
  return css
}

rmSync(DST, { recursive: true, force: true })

// Global docs demo glue (Hugo's application.js -> partials/snippets.js): element-guarded
// instantiation of the common example demos (tooltips, carousels, toast placement,
// indeterminate checks, offcanvas) that aren't tied to a single page. Ported to
// public/js/docs-snippets.js and loaded on every page via config.yml `js`. Deferred to
// DOMContentLoaded so the engine's `window.coreui` is ready.
const gluePartial = join(here, '../../docs/assets/js/partials/snippets.js')
if (existsSync(gluePartial)) {
  const body = readFileSync(gluePartial, 'utf8')
    .replace(/^[\s\S]*?export default \(\) => \{/, '')
    .replace(/\}\s*$/, '')
  mkdirSync(join(here, '../public/js'), { recursive: true })
  writeFileSync(join(here, '../public/js/docs-snippets.js'), `document.addEventListener('DOMContentLoaded', () => {${body}})\n`)
}

// Static example assets (avatars, brand images, …). The Hugo docs serve them from
// /assets/; copy them to public/assets/ so the same paths resolve (the engine
// base-prefixes them in the rendered demo).
const staticAssets = join(here, '../../docs/static/assets')
if (existsSync(staticAssets)) cpSync(staticAssets, join(here, '../public/assets'), { recursive: true })

const files = SECTIONS.flatMap((section) => walk(join(SRC, section)))
// "Icons" is a single root-level page (no section dir); the sidebar links to /icons/.
const iconsPage = join(SRC, 'icons.md')
if (existsSync(iconsPage)) files.push(iconsPage)

let pages = 0
for (const f of files) {
  const rel = relative(SRC, f).replace(/\.md$/, '')
  if (ONLY && rel !== ONLY) continue
  if (SKIP.has(rel)) continue
  const raw = readFileSync(f, 'utf8')
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!fmMatch) continue
  const [, fm, body] = fmMatch
  const dest = join(DST, `${rel}.mdx`)
  mkdirSync(dirname(dest), { recursive: true })
  const componentName = ((fm.match(/^title:\s*(.+)$/m) || [])[1] || 'CoreUI').replace(/^["']|["']$/g, '')
  const slug = rel.replace(/[^a-z0-9]+/gi, '-')
  const ctx = { componentName, slug }
  writeFileSync(dest, `---\n${transformFrontmatter(fm, iconStylesheets(body))}\n---\n\n${shortcodes(body, ctx).replace(/^\n+/, '')}\n${snippetScripts(fm)}`)
  pages += 1
}

console.log(`migrated ${pages} pages${ONLY ? ` (ONLY=${ONLY})` : ''}`)
