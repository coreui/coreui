// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(() => {
  'use strict'

  const searchElement = document.getElementById('docsearch')

  if (!window.docsearch || !searchElement) {
    return
  }

  window.docsearch({
    appId: '5OOVC1SDJS',
    apiKey: 'ab4149e82cfd175c0afe647a937a8d21',
    indexName: 'coreui',
    container: searchElement,
    // Set debug to `true` if you want to inspect the dropdown
    debug: false
  })
})()
