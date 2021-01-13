import { Tooltip } from '../../../dist/js/coreui.esm.js'

window.addEventListener('load', () => {
  [].concat(...document.querySelectorAll('[data-coreui-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
