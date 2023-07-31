/* eslint-disable import/extensions, import/no-unassigned-import */

import Tooltip from '../../dist/tooltip'
import '../../dist/carousel'

window.addEventListener('load', () => {
  [].concat(...document.querySelectorAll('[data-coreui-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
