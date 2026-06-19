// Vanilla JS project scaffold for the StackBlitz/CodeSandbox buttons. A static example
// is one index.html pulling CoreUI's CSS+JS from the CDN — the fast `html` template.
// When the example carries a demo snippet (`stackblitz_add_js`) AND the target is
// StackBlitz, we emit the `node` template (npm install + serve, node_modules paths) like
// the Hugo docs. CodeSandbox's define API serves files statically and can't resolve
// node_modules paths, so there we keep the CDN/`html` template and ship the snippet as
// index.js (it uses the global `coreui`, so the CDN bundle is enough).

type SandboxTarget = 'stackblitz' | 'codesandbox'

interface ExampleData {
  code: string
  lang: string
  name: string
  componentName?: string
  pro?: boolean
  /** Demo snippet (the example's `stackblitz_add_js`) shipped as index.js. */
  js?: string | null
}

export function buildProject(data: ExampleData, target: SandboxTarget = 'stackblitz') {
  const { code, componentName = 'CoreUI Example', pro = false, js } = data
  const pkg = pro ? '@coreui/coreui-pro' : '@coreui/coreui'
  const isNode = Boolean(js) && target === 'stackblitz'

  const cssHref = isNode ? `node_modules/${pkg}/dist/css/coreui.min.css` : `https://cdn.jsdelivr.net/npm/${pkg}/dist/css/coreui.min.css`
  const jsSrc = isNode ? `node_modules/${pkg}/dist/js/coreui.bundle.min.js` : `https://cdn.jsdelivr.net/npm/${pkg}/dist/js/coreui.bundle.min.js`

  const scripts = [`<script src="${jsSrc}"></script>`]
  if (js) scripts.push('<script src="index.js"></script>')

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="${cssHref}" rel="stylesheet" />
    <title>CoreUI ${componentName} Example</title>
  </head>
  <body class="p-3">
${code}
    ${scripts.join('\n    ')}
  </body>
</html>
`

  const packageJson = JSON.stringify(
    {
      name: 'coreui-example',
      private: true,
      dependencies: { [pkg]: 'latest', serve: 'latest' },
      scripts: { start: 'serve . --no-clipboard' },
    },
    null,
    2
  )

  return {
    title: `${componentName} Example`,
    description: `CoreUI — ${componentName} example`,
    template: isNode ? 'node' : 'html',
    files: {
      'index.html': indexHtml,
      ...(js ? { 'index.js': js } : {}),
      ...(isNode ? { 'package.json': packageJson } : {}),
    },
    dependencies: isNode ? { [pkg]: 'latest', serve: 'latest' } : {},
    openFile: 'index.html',
  }
}
