// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getcoreui.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, coreui: false */

(() => {
  'use strict'
  // Insert copy to clipboard button before .highlight
  const btnHtml =
    '<div class="docs-clipboard"><button type="button" class="btn-clipboard btn btn-ghost-primary" title="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon fill="var(--ci-primary-color, currentColor)" points="408 432 376 432 376 464 112 464 112 136 144 136 144 104 80 104 80 496 408 496 408 432" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M176,16V400H496V153.373L358.627,16ZM464,368H208V48H312V200H464Zm0-200H344V48h1.372L464,166.627Z" class="ci-primary"/></svg></button></div>'
  document.querySelectorAll('div.highlight').forEach(element => {
    element.insertAdjacentHTML('beforebegin', btnHtml)
  })

  document.querySelectorAll('.btn-clipboard').forEach(btn => {
    const tooltipBtn = new coreui.Tooltip(btn)

    btn.addEventListener('mouseleave', () => {
      // Explicitly hide tooltip, since after clicking it remains
      // focused (as it's a button), so tooltip would otherwise
      // remain visible until focus is moved away
      tooltipBtn.hide()
    })
  })

  const clipboard = new ClipboardJS('.btn-clipboard', {
    target(trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', e => {
    const tooltipBtn = coreui.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-coreui-original-title', 'Copied!')
    tooltipBtn.show()

    e.trigger.setAttribute('data-coreui-original-title', 'Copy to clipboard')
    e.clearSelection()
  })

  clipboard.on('error', event => {
    const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    const fallbackMsg = `Press ${modifierKey}C to copy`
    const tooltipBtn = coreui.Tooltip.getInstance(event.trigger)

    event.trigger.setAttribute('data-coreui-original-title', fallbackMsg)
    tooltipBtn.show()

    event.trigger.setAttribute(
      'data-coreui-original-title',
      'Copy to clipboard'
    )
  })
})()
