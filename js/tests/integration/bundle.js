import 'popper.js'
// import 'Popper.createPopper'
import { Tooltip } from '../../../dist/js/coreui.esm.js'

window.addEventListener('load', () => {
  [...document.querySelectorAll('[data-toggle="tooltip"]')]
    .map(tooltipNode => new Tooltip(tooltipNode))
})
