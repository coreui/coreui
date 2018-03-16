import {
  NAVIGATION_CONTAINER
} from './config'
import PerfectScrollbar from 'perfect-scrollbar'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): navigation-scrollbar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const NavigationScrollbar = (event) => {
  let ps

  if (event === 'init' && !document.body.classList.contains('sidebar-minimized')) {
    ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
      suppressScrollX: true
    })
  }

  if (event === 'destroy') {
    ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
      suppressScrollX: true
    })
    ps.destroy()
    ps = null
  }

  if (event === 'toggle') {
    if (document.body.classList.contains('sidebar-minimized')) {
      ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
        suppressScrollX: true
      })
      ps.destroy()
      ps = null
    } else {
      ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
        suppressScrollX: true
      })
    }
  }
}

export default NavigationScrollbar
