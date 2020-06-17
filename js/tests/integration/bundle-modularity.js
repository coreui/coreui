import 'popper.js'
// import createPopper
// import { createPopper } from '@popperjs/core'
import Tooltip from '../../dist/tooltip'

window.addEventListener('load', () => {
  [...document.querySelectorAll('[data-toggle="tooltip"]')]
    .map(tooltipNode => new Tooltip(tooltipNode))
})
