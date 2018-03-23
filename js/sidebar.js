import $ from 'jquery'
import PerfectScrollbar from 'perfect-scrollbar'
import ToggleClasses from './toggle-classes'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const Sidebar = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'sidebar'
  const VERSION            = '2.0.0-alpha.1'
  const DATA_KEY           = 'coreui.sidebar'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const ClassName = {
    ACTIVE              : 'active',
    BRAND_MINIMIZED     : 'brand-minimized',
    NAV_DROPDOWN_TOGGLE : 'nav-dropdown-toggle',
    OPEN                : 'open',
    SIDEBAR_FIXED       : 'sidebar-fixed',
    SIDEBAR_MINIMIZED   : 'sidebar-minimized',
    SIDEBAR_OFF_CANVAS  : 'sidebar-off-canvas'
  }

  const Event = {
    CLICK   : 'click',
    DESTROY : 'destroy',
    INIT    : 'init',
    LOAD    : 'load',
    TOGGLE  : 'toggle'
  }

  const Selector = {
    BODY                 : 'body',
    BRAND_MINIMIZER      : '.brand-minimizer',
    NAV_DROPDOWN_TOGGLE  : '.nav-dropdown-toggle',
    NAVIGATION_CONTAINER : '.sidebar-nav',
    NAVIGATION           : '.sidebar-nav > .nav',
    SIDEBAR_MINIMIZER    : '.sidebar-minimizer',
    SIDEBAR_TOGGLER      : '.sidebar-toggler'
  }

  const Breakpoints = {
    XS : 'sidebar-show',
    SM : 'sidebar-sm-show',
    MD : 'sidebar-md-show',
    LG : 'sidebar-lg-show',
    XL : 'sidebar-xl-show'
  }

  const ShowClassNames = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
  ]

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Sidebar {
    constructor(element) {
      this._element = element
      this.perfectScrollbar('init')
      this.setActiveLink()
      this._addEventListeners()
    }

    // getBreakpoints() {
    //   const styles = getComputedStyle(document.body)
    //   const xs = style.getPropertyValue('--breakpoint-xs')
    //   const sm = style.getPropertyValue('--breakpoint-sm')
    //   const md = style.getPropertyValue('--breakpoint-md')
    //   const lg = style.getPropertyValue('--breakpoint-lg')
    //   const xl = style.getPropertyValue('--breakpoint-xl')
    // }

    perfectScrollbar(event) {
      let ps

      if (event === Event.INIT && !document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
          suppressScrollX: true
        })
      }

      if (event === Event.DESTROY) {
        ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
          suppressScrollX: true
        })
        ps.destroy()
        ps = null
      }

      if (event === Event.TOGGLE) {
        if (document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
            suppressScrollX: true
          })
          ps.destroy()
          ps = null
        } else {
          ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
            suppressScrollX: true
          })
        }
      }
    }

    setActiveLink() {
      $(Selector.NAVIGATION).find('a').each((key, value) => {
        let link = value
        let cUrl = String(window.location).split('?')[0]

        if (cUrl.substr(cUrl.length - 1) === '#') {
          cUrl = cUrl.slice(0, -1)
        }

        if ($($(link))[0].href === cUrl) {
          $(link).addClass(ClassName.ACTIVE).parents('ul').add(link).each((key, value) => {
            link = value
            $(link).parent().addClass(ClassName.OPEN)
          })
        }
      })
    }

    // Private

    _addEventListeners() {
      $(Selector.BRAND_MINIMIZER).on(Event.CLICK, (event) => {
        event.preventDefault()
        event.stopPropagation()
        $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED)
      })

      $(Selector.NAV_DROPDOWN_TOGGLE).on(Event.CLICK, (event) => {
        event.preventDefault()
        event.stopPropagation()
        let dropdown = event.target
        $(dropdown).parent().toggleClass(ClassName.OPEN)
      })

      $(Selector.SIDEBAR_MINIMIZER).on(Event.CLICK, (event) => {
        event.preventDefault()
        event.stopPropagation()
        $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED)
        this.perfectScrollbar(Event.TOGGLE)
      })

      $(Selector.SIDEBAR_TOGGLER).on(Event.CLICK, (event) => {
        event.preventDefault()
        event.stopPropagation()
        let toggle = event.currentTarget.dataset.toggle
        ToggleClasses(toggle, ShowClassNames)
      })
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        const _config = typeof config === 'object' ? config : null

        if (!data) {
          data = new Sidebar(this, _config)
          $(this).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD, () => {
    Sidebar = new Sidebar()
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Sidebar._jQueryInterface
  $.fn[NAME].Constructor = Sidebar
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Sidebar._jQueryInterface
  }

  return Sidebar
})($)

export default Sidebar
