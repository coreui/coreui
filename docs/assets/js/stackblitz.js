// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for CoreUI's docs (https://coreui.io/)
 * Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

import sdk from '@stackblitz/sdk'
// https://gohugo.io/hugo-pipes/js/#options
import {
  cssCdn, jsBundleCdn, jsSnippetFile
} from '@params' // eslint-disable-line import/no-unresolved

// Open in StackBlitz logic
document.querySelectorAll('.btn-edit').forEach(btn => {
  btn.addEventListener('click', event => {
    const codeSnippet = event.target.closest('.docs-code-snippet')
    const exampleEl = codeSnippet.querySelector('.docs-example')
    const title = document.querySelector('.docs-title')
    const highlight = event.target.closest('.docs-code-snippet').querySelector('.highlight').textContent.trimEnd()
    const isPro = codeSnippet.querySelector('.btn-edit').getAttribute('data-sb-pro')
    const addDayJs = codeSnippet.querySelector('.btn-edit').getAttribute('data-sb-dayjs')

    const htmlSnippet = isPro ? highlight : exampleEl.innerHTML
    const jsSnippet = codeSnippet.querySelector('.btn-edit').getAttribute('data-sb-js-snippet')
    // Get extra classes for this example
    const classes = Array.from(exampleEl.classList).join(' ')

    openCoreUISnippet({
      htmlSnippet, jsSnippet, classes, title, pro: isPro, addDayJs
    })
  })
})

const openCoreUISnippet = ({
  htmlSnippet, jsSnippet, classes, title, pro, addDayJs
}) => {
  // With a JS snippet we need a real runtime (npm install + serve) -> `node` template.
  // Static examples can use the much faster `html` template loading assets from the CDN.
  const isNode = Boolean(jsSnippet)
  const pkgName = `@coreui/${pro ? 'coreui-pro' : 'coreui'}`

  let code
  if (jsSnippet && jsSnippet !== 'true') {
    const snippetElement = document.getElementById(jsSnippet)
    code = snippetElement.querySelector('.highlight').textContent.trimEnd()
  }

  const cssTag = isNode ?
    `<link href="node_modules/${pkgName}/dist/css/coreui.min.css" rel="stylesheet">` :
    `<link href="${cssCdn}" rel="stylesheet">`

  const jsTag = isNode ?
    `<${'script'} src="node_modules/${pkgName}/dist/js/coreui.bundle.min.js"></${'script'}>` :
    `<${'script'} src="${jsBundleCdn}"></${'script'}>`

  // Collect every script tag so empty branches don't leave blank lines in the markup.
  const scripts = [jsTag]
  if (addDayJs) {
    scripts.push(
      '<script src="node_modules/dayjs/dayjs.min.js"></script>',
      '<script src="node_modules/dayjs/plugin/customParseFormat.js"></script>',
      '<script src="node_modules/dayjs/locale/es.js"></script>'
    )
  }

  if (jsSnippet) {
    scripts.push('<script src="index.js"></script>')
  }

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${cssTag}
    <title>CoreUI ${title.innerHTML} Example</title>
  </head>
  <body class="p-3 m-0 border-0 ${classes}">
    <!-- Example Code Start-->
${htmlSnippet.trimStart().replace(/^/gm, '    ').replace(/^ {4}$/gm, '').trimEnd()}
    <!-- Example Code End -->
    ${scripts.join('\n    ')}
  </body>
</html>
`

  const packageJson = JSON.stringify({
    name: 'coreui-example',
    private: true,
    dependencies: {
      [pkgName]: 'latest',
      ...(addDayJs && { dayjs: 'latest' }),
      serve: 'latest'
    },
    scripts: {
      start: 'serve . --no-clipboard'
    }
  }, null, 2)

  const project = {
    files: {
      'index.html': indexHtml,
      ...(isNode && { 'package.json': packageJson }),
      ...(jsSnippet && { 'index.js': code || jsSnippetFile })
    },
    title: `${title.innerHTML} Example`,
    description: `Official example from ${window.location.href}`,
    template: isNode ? 'node' : 'html',
    tags: ['coreui']
  }

  sdk.openProject(project, { openFile: 'index.html' })
}
