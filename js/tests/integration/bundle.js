import { Tooltip } from '../../../dist/js/bootstrap.esm.js'

window.addEventListener('load', () => {
  [].concat(...document.querySelectorAll('[data-coreui-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
