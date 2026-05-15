/* global coreui: false */

// js-docs-start popovers
document
  .querySelectorAll('[data-coreui-toggle="popover"]')
  .forEach(popover => {
    new coreui.Popover(popover)
  })
// js-docs-end popovers
