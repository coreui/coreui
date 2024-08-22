// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

import docsearch from '@docsearch/js'
// https://gohugo.io/hugo-pipes/js/#options
// eslint-disable-next-line import/no-unresolved
import { appId, apiKey, indexName } from '@params';

(() => {
  const searchElement = document.getElementById('docsearch')

  if (!searchElement) {
    return
  }

  docsearch({
    apiKey,
    indexName,
    appId,
    container: searchElement
  })
})()
