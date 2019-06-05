/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.9): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  jQuery as $
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import PerfectScrollbar from 'perfect-scrollbar'
import getStyle from './utilities/get-style'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'sidebar'
const VERSION = '3.0.0-alpha.9'
const DATA_KEY = 'coreui.sidebar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-'

const Default = {
  transition: 400
}

const ClassName = {
  ACTIVE: `${PREFIX}active`,
  NAV_DROPDOWN_TOGGLE: `${PREFIX}nav-dropdown-toggle`,
  OPEN: `${PREFIX}open`,
  SIDEBAR_MINIMIZED: `${PREFIX}sidebar-minimized`,
  SIDEBAR_SHOW: `${PREFIX}sidebar-show`
}

const Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK: 'click',
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
  DESTROY: 'destroy',
  INIT: 'init',
  LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
  TOGGLE: 'toggle',
  UPDATE: 'update'
}

const Selector = {
  NAV_DROPDOWN_TOGGLE: `.${PREFIX}nav-dropdown-toggle`,
  NAV_DROPDOWN: `.${PREFIX}nav-dropdown`,
  NAV_LINK: `.${PREFIX}nav-link`,
  NAV_LINK_QUERIED: `.${PREFIX}nav-link-queried`,
  NAVIGATION_CONTAINER: `.${PREFIX}sidebar-nav`,
  SIDEBAR: `.${PREFIX}sidebar`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Sidebar {
  constructor(element) {
    this._element = element
    this.mobile = false
    this.ps = null
    this._perfectScrollbar(Event.INIT)
    this._setActiveLink()
    this._breakpointTest = this._breakpointTest.bind(this)
    this._clickOutListener = this._clickOutListener.bind(this)
    this._addEventListeners()
    this._addMediaQuery()
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  // Private

  _toggleDropdown(event) {
    let toggler = event.target
    if (!toggler.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE)) {
      toggler = toggler.closest(Selector.NAV_DROPDOWN_TOGGLE)
    }

    toggler.parentNode.classList.toggle(ClassName.OPEN)
    this._perfectScrollbar(Event.UPDATE)
  }

  _closeSidebar(event) {
    let link = event.target
    if (!link.classList.contains(ClassName.NAV_LINK)) {
      link = link.closest(Selector.NAV_LINK)
    }

    if (this.mobile && !link.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE)) {
      this._removeClickOut()
      this._element.classList.remove(ClassName.SIDEBAR_SHOW)
    }
  }

  _perfectScrollbar(event) {
    if (typeof PerfectScrollbar !== 'undefined') {
      if (event === Event.INIT && !this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        this.ps = this._makeScrollbar()
      }

      if (event === Event.DESTROY) {
        this._destroyScrollbar()
      }

      if (event === Event.TOGGLE) {
        if (this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          this._destroyScrollbar()
        } else {
          this._destroyScrollbar()
          this.ps = this._makeScrollbar()
        }
      }

      if (event === Event.UPDATE && !this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        // TODO: Add smooth transition
        setTimeout(() => {
          this._destroyScrollbar()
          this.ps = this._makeScrollbar()
        }, Default.transition)
      }
    }
  }

  _makeScrollbar(container = Selector.NAVIGATION_CONTAINER) {
    const ps = new PerfectScrollbar(document.querySelector(container), {
      suppressScrollX: true
    })
    // TODO: find real fix for ps rtl
    ps.isRtl = false
    return ps
  }

  _destroyScrollbar() {
    if (this.ps) {
      this.ps.destroy()
      this.ps = null
    }
  }

  _getParents(element, selector) {
    // Element.matches() polyfill
    // if (!Element.prototype.matches) {
    //   Element.prototype.matches =
    //     Element.prototype.matchesSelector ||
    //     Element.prototype.mozMatchesSelector ||
    //     Element.prototype.msMatchesSelector ||
    //     Element.prototype.oMatchesSelector ||
    //     Element.prototype.webkitMatchesSelector ||
    //     function(s) {
    //       var matches = (this.document || this.ownerDocument).querySelectorAll(s),
    //         i = matches.length;
    //       while (--i >= 0 && matches.item(i) !== this) {}
    //       return i > -1;
    //     };
    // }

    // Setup parents array
    const parents = []

    // Get matching parent elements
    for (; element && element !== document; element = element.parentNode) {
      // Add matching parents to array
      if (selector) {
        if (element.matches(selector)) {
          parents.push(element)
        }
      } else {
        parents.push(element)
      }
    }

    return parents
  }

  _setActiveLink() {
    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(this._element.querySelectorAll(Selector.NAV_LINK)).forEach(element => {
      let currentUrl
      if (element.classList.contains(Selector.NAV_LINK_QUERIED)) {
        currentUrl = String(window.location)
      } else {
        currentUrl = String(window.location).split('?')[0]
      }

      if (currentUrl.substr(currentUrl.length - 1) === '#') {
        currentUrl = currentUrl.slice(0, -1)
      }

      if (element.href === currentUrl) {
        element.classList.add(ClassName.ACTIVE)
        // eslint-disable-next-line unicorn/prefer-spread
        Array.from(this._getParents(element, Selector.NAV_DROPDOWN)).forEach(element => {
          element.classList.add(ClassName.OPEN)
        })
      }
    })
  }

  _addMediaQuery() {
    const sm = getStyle('--breakpoint-sm')
    if (!sm) {
      return
    }

    const smValue = parseInt(sm, 10) - 1
    const mediaQueryList = window.matchMedia(`(max-width: ${smValue}px)`)

    this._breakpointTest(mediaQueryList)

    mediaQueryList.addListener(this._breakpointTest)
  }

  _breakpointTest(event) {
    this.mobile = Boolean(event.matches)
    this._toggleClickOut()
  }

  _clickOutListener(event) {
    if (!this._element.contains(event.target)) { // or use: event.target.closest(Selector.SIDEBAR) === null
      event.preventDefault()
      event.stopPropagation()
      this._removeClickOut()
      this._element.classList.remove(ClassName.SIDEBAR_SHOW)
    }
  }

  _addClickOut() {
    document.addEventListener(Event.CLICK, this._clickOutListener, true)
  }

  _removeClickOut() {
    document.removeEventListener(Event.CLICK, this._clickOutListener, true)
  }

  _toggleClickOut() {
    if (this.mobile && this._element.classList.contains(ClassName.SIDEBAR_SHOW)) {
      this._addClickOut()
    } else {
      this._removeClickOut()
    }
  }

  _addEventListeners() {
    EventHandler.on(this._element, Event.CLASS_TOGGLE, event => {
      if (event.detail.className === ClassName.SIDEBAR_MINIMIZED) {
        this._perfectScrollbar(Event.TOGGLE)
      }

      if (event.detail.className === ClassName.SIDEBAR_SHOW) {
        this._toggleClickOut()
      }
    })

    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_DROPDOWN_TOGGLE, event => {
      event.preventDefault()
      this._toggleDropdown(event)
    })

    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_LINK, event => {
      this._closeSidebar(event)
    })
  }

  // Static

  static _sidebarInterface(element, config) {
    let data = Data.getData(element, DATA_KEY)
    const _config = typeof config === 'object' && config

    if (!data) {
      data = new Sidebar(element, _config)
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    }
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      Sidebar._sidebarInterface(this, config)
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(window, Event.LOAD_DATA_API, () => {
  // eslint-disable-next-line unicorn/prefer-spread
  Array.from(document.querySelectorAll(Selector.SIDEBAR)).forEach(element => {
    Sidebar._sidebarInterface(element)
  })
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
* add .asyncLoad to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = Sidebar._jQueryInterface
  $.fn[NAME].Constructor = Sidebar
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Sidebar._jQueryInterface
  }
}

export default Sidebar
