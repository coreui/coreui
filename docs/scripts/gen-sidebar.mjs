// One-off: convert the Hugo docs sidebar (docs/data/sidebar.yml) into the engine's
// sidebar.yml. Hugo lists groups (title + named icon) and pages (title only); the URL
// is `/slug(group)/slug(page)/`. Icons come from the React docs' raw SVGs where the
// section title matches; sections React doesn't have (Content, Helpers, Utilities,
// Integration guides) fall back to the vanilla docs' own named icon partial.
// Run: node scripts/gen-sidebar.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const here = dirname(fileURLToPath(import.meta.url))
const SRC = join(here, '../../docs/data/sidebar.yml')
const REACT_SIDEBAR = join(here, '../../../coreui-react/docs-astro/src/data/sidebar.yml')
const ICONS = join(here, '../../docs/layouts/partials/icons')
const OUT = join(here, '../src/data/sidebar.yml')

// Inner SVG markup of a Hugo nav-icon partial, normalised to the engine's 512×512
// NavIcon canvas (most CoreUI icons are already 512; a stray 64×64 gets scaled).
function hugoIcon(name) {
  if (!name) return null
  const file = join(ICONS, `${name.replace(/\.svg$/, '')}.svg`)
  if (!existsSync(file)) return null
  const svg = readFileSync(file, 'utf8')
    .replace(/\{\{[^}]*\}\}/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<title>[\s\S]*?<\/title>/g, '')
  const viewBox = (svg.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 512 512'
  let inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '').trim()
  const size = Number.parseFloat(viewBox.split(/\s+/)[2]) || 512
  if (size !== 512) inner = `<g transform="scale(${512 / size})" fill="var(--ci-primary-color, currentColor)">${inner}</g>`
  return inner
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const sidebar = yaml.load(readFileSync(SRC, 'utf8'))

// Reuse the React section icons (same sections) keyed by lowercase title.
const reactIcons = {}
for (const g of yaml.load(readFileSync(REACT_SIDEBAR, 'utf8'))) {
  if (g.icon) reactIcons[g.title.toLowerCase()] = g.icon
}

const groups = sidebar.map((group) => {
  const section = slug(group.title)
  const icon = reactIcons[group.title.toLowerCase()] ?? hugoIcon(group.icon)
  const pages = (group.pages ?? []).map((page) => ({
    title: page.title,
    to: `/${section}/${slug(page.title)}/`,
  }))
  return {
    title: group.title,
    ...(icon ? { icon } : {}),
    // A section with no sub-pages (e.g. "Icons") is a single link, not a collapsible
    // group; the engine renders it as a plain nav-link to the section URL.
    ...(pages.length ? {} : { to: `/${section}/` }),
    pages,
  }
})

writeFileSync(OUT, yaml.dump(groups, { lineWidth: -1, quotingType: '"', noRefs: true }))
console.log(`wrote ${OUT}: ${groups.length} groups, ${groups.reduce((n, g) => n + g.pages.length, 0)} pages`)
