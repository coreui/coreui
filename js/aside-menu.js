import $ from 'jquery'
import ToggleClasses from './toggle-classes'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): aside-menu.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const AsideMenu = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'aside-menu'
  const VERSION            = '2.0.0-alpha.1'
  const DATA_KEY           = 'coreui.aside-menu'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const ClassName = {
    ACTIVE                  : 'active',
    OPEN                    : 'open',
    ASIDE_MENU_FIXED        : 'aside-menu-fixed',
    ASIDE_MENU__OFF_CANVAS  : 'aside-menu-off-canvas'
  }

  const Event = {
    CLICK   : 'click',
    LOAD    : 'load',
    TOGGLE  : 'toggle'
  }

  const Selector = {
    BODY               : 'body',
    ASIDE_MENU_TOGGLER : '.aside-menu-toggler'
  }

  const ShowClassNames = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
  ]

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class AsideMenu {
    constructor(element) {
      this._element = element
      this._addEventListeners()
    }

    // Private

    _addEventListeners() {
      $(Selector.ASIDE_MENU_TOGGLER).on(Event.CLICK, (event) => {
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
          data = new AsideMenu(this, _config)
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
    AsideMenu = new AsideMenu()
  })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = AsideMenu._jQueryInterface
  $.fn[NAME].Constructor = AsideMenu
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return AsideMenu._jQueryInterface
  }

  return AsideMenu
})($)

export default AsideMenu
