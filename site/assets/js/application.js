// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getcoreui.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, anchors: false, coreui: false */

(function () {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(function (tooltip) {
      new coreui.Tooltip(tooltip, {
        selector: '[data-coreui-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-coreui-toggle="popover"]')
    .forEach(function (popover) {
      new coreui.Popover(popover)
    })

  var toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = toastPlacement.dataset.originalClass + ' ' + this.value
    })
  }

  document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
      var toast = new coreui.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Demos within modals
  document.querySelectorAll('.tooltip-test')
    .forEach(function (tooltip) {
      new coreui.Tooltip(tooltip)
    })

  document.querySelectorAll('.popover-test')
    .forEach(function (popover) {
      new coreui.Popover(popover)
    })

  // Indeterminate checkbox example
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
      })
    })

  // Modal relatedTarget demo
  var exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.coreui.modal', function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget
      // Extract info from data-coreui-* attributes
      var recipient = button.getAttribute('data-coreui-whatever')

      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
  }

  // Activate animated progress bar
  var btnToggleAnimatedProgress = document.getElementById('btnToggleAnimatedProgress')
  if (btnToggleAnimatedProgress) {
    btnToggleAnimatedProgress.addEventListener('click', function () {
      btnToggleAnimatedProgress.parentNode
        .querySelector('.progress-bar-striped')
        .classList
        .toggle('progress-bar-animated')
    })
  }

  // Insert copy to clipboard button before .highlight
  var btnHtml = '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>'
  document.querySelectorAll('div.highlight')
    .forEach(function (element) {
      element.insertAdjacentHTML('beforebegin', btnHtml)
    })

  document.querySelectorAll('.btn-clipboard')
    .forEach(function (btn) {
      var tooltipBtn = new coreui.Tooltip(btn)

      btn.addEventListener('mouseleave', function () {
        // Explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        tooltipBtn.hide()
      })
    })

  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {
    var tooltipBtn = coreui.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-coreui-original-title', 'Copied!')
    tooltipBtn.show()

    e.trigger.setAttribute('data-coreui-original-title', 'Copy to clipboard')
    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    var modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
    var tooltipBtn = coreui.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-coreui-original-title', fallbackMsg)
    tooltipBtn.show()

    e.trigger.setAttribute('data-coreui-original-title', 'Copy to clipboard')
  })

  anchors.options = {
    icon: '#'
  }
  anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')
})()
