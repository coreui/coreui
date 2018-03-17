import {
  ASIDE_MENU_SHOW_CLASS_NAMES,
  SIDEBAR_SHOW_CLASS_NAMES
} from './config'
import $ from 'jquery'
import NavigationScrollbar from './navigation-scrollbar'
import ToggleClasses from './toggle-classes'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): layout.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const Layout = (($) => {
  $('.sidebar-toggler').click(function () {
    const Toggle = $(this).data('toggle')
    const ClassNames = SIDEBAR_SHOW_CLASS_NAMES
    ToggleClasses(Toggle, ClassNames)
  })

  $('.sidebar-minimizer').click(() => {
    $('body').toggleClass('sidebar-minimized')
    NavigationScrollbar('toggle')
  })

  $('.brand-minimizer').click(() => {
    $('body').toggleClass('brand-minimized')
  })

  $('.aside-menu-toggler').click(function () {
    const Toggle = $(this).data('toggle')
    const ClassNames = ASIDE_MENU_SHOW_CLASS_NAMES
    ToggleClasses(Toggle, ClassNames)
  })

  $('.sidebar-close').click(() => {
    $('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened')
  })
})($)

export default Layout
