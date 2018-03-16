import { NAVIGATION } from './config'
import $ from 'jquery'
import NavigationScrollbar from './navigation-scrollbar'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): navigation.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const Navigation = (($) => {
  NavigationScrollbar('init')

  NAVIGATION.find('a').each(function () {
    let cUrl = String(window.location).split('?')[0]

    if (cUrl.substr(cUrl.length - 1) === '#') {
      cUrl = cUrl.slice(0, -1)
    }

    if ($($(this))[0].href === cUrl) {
      $(this).addClass('active')

      $(this).parents('ul').add(this).each(function () {
        $(this).parent().addClass('open')
      })
    }
  })

  // Dropdown Menu
  NAVIGATION.on('click', 'a', function (e) {

    if ($(this).hasClass('nav-dropdown-toggle')) {
      e.preventDefault()
      $(this).parent().toggleClass('open')
    }
  })
})($)

export default Navigation
