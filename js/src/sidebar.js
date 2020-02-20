/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  getjQuery,
  reflow,
  TRANSITION_END,
  typeCheckConfig
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import Manipulator from './dom/manipulator'
import PerfectScrollbar from 'perfect-scrollbar'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'sidebar'
const VERSION = '3.0.0-rc.4'
const DATA_KEY = 'coreui.sidebar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const Default = {
  breakpoints: {
    xs: 'c-sidebar-show',
    sm: 'c-sidebar-sm-show',
    md: 'c-sidebar-md-show',
    lg: 'c-sidebar-lg-show',
    xl: 'c-sidebar-xl-show'
  },
  dropdownAccordion: true
}

const DefaultType = {
  breakpoints: 'object',
  dropdownAccordion: '(string|boolean)'
}

const ClassName = {
  ACTIVE: 'c-active',
  BACKDROP: 'c-sidebar-backdrop',
  FADE: 'c-fade',
  NAV_DROPDOWN: 'c-sidebar-nav-dropdown',
  NAV_DROPDOWN_TOGGLE: 'c-sidebar-nav-dropdown-toggle',
  SHOW: 'c-show',
  SIDEBAR_MINIMIZED: 'c-sidebar-minimized',
  SIDEBAR_OVERLAID: 'c-sidebar-overlaid',
  SIDEBAR_SHOW: 'c-sidebar-show',
  SIDEBAR_UNFOLDABLE: 'c-sidebar-unfoldable'
}

const Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
  CLOSE: `close${EVENT_KEY}`,
  CLOSED: `closed${EVENT_KEY}`,
  LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
  OPEN: `open${EVENT_KEY}`,
  OPENED: `opened${EVENT_KEY}`
}

const Selector = {
  NAV_DROPDOWN_TOGGLE: '.c-sidebar-nav-dropdown-toggle',
  NAV_DROPDOWN: '.c-sidebar-nav-dropdown',
  NAV_LINK: '.c-sidebar-nav-link',
  NAVIGATION_CONTAINER: '.c-sidebar-nav',
  NAVIGATION_DROPDOWN_ITEMS: '.c-sidebar-nav-dropdown-items',
  SIDEBAR: '.c-sidebar'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Sidebar {
  constructor(element, config) {
    if (typeof PerfectScrollbar === 'undefined') {
      throw new TypeError('CoreUI\'s sidebar require Perfect Scrollbar')
    }

    this._element = element
    this._config = this._getConfig(config)
    this._open = this._isVisible()
    this._mobile = this._isMobile()
    this._overlaid = this._isOverlaid()
    this._minimize = this._isMinimized()
    this._unfoldable = this._isUnfoldable()
    this._setActiveLink()
    this._ps = null
    this._backdrop = null
    this._psInit()
    this._addEventListeners()

    Data.setData(element, DATA_KEY, this)
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  // Public

  open(breakpoint) {
    EventHandler.trigger(this._element, Event.OPEN)

    if (this._isMobile()) {
      this._addClassName(this._firstBreakpointClassName())
      this._showBackdrop()
      EventHandler.one(this._element, TRANSITION_END, () => {
        this._addClickOutListener()
      })
    } else if (breakpoint) {
      this._addClassName(this._getBreakpointClassName(breakpoint))
    } else {
      this._addClassName(this._firstBreakpointClassName())
    }

    const complete = () => {
      if (this._isVisible() === true) {
        this._open = true
        EventHandler.trigger(this._element, Event.OPENED)
      }
    }

    EventHandler.one(this._element, TRANSITION_END, complete)
  }

  close(breakpoint) {
    EventHandler.trigger(this._element, Event.CLOSE)

    if (this._isMobile()) {
      this._element.classList.remove(this._firstBreakpointClassName())
      this._removeBackdrop()
      this._removeClickOutListener()
    } else if (breakpoint) {
      this._element.classList.remove(this._getBreakpointClassName(breakpoint))
    } else {
      this._element.classList.remove(this._firstBreakpointClassName())
    }

    const complete = () => {
      if (this._isVisible() === false) {
        this._open = false
        EventHandler.trigger(this._element, Event.CLOSED)
      }
    }

    EventHandler.one(this._element, TRANSITION_END, complete)
  }

  toggle(breakpoint) {
    if (this._open) {
      this.close(breakpoint)
    } else {
      this.open(breakpoint)
    }
  }

  minimize() {
    if (!this._isMobile()) {
      this._addClassName(ClassName.SIDEBAR_MINIMIZED)
      this._minimize = true
      this._psDestroy()
    }
  }

  unfoldable() {
    if (!this._isMobile()) {
      this._addClassName(ClassName.SIDEBAR_UNFOLDABLE)
      this._unfoldable = true
    }
  }

  reset() {
    if (this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
      this._element.classList.remove(ClassName.SIDEBAR_MINIMIZED)
      this._minimize = false
      EventHandler.one(this._element, TRANSITION_END, this._psInit())
    }

    if (this._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE)) {
      this._element.classList.remove(ClassName.SIDEBAR_UNFOLDABLE)
      this._unfoldable = false
    }
  }

  // Private

  _getConfig(config) {
    config = {
      ...this.constructor.Default,
      ...Manipulator.getDataAttributes(this._element),
      ...config
    }

    typeCheckConfig(
      NAME,
      config,
      this.constructor.DefaultType
    )

    return config
  }

  _isMobile() {
    return Boolean(window.getComputedStyle(this._element, null).getPropertyValue('--is-mobile'))
  }

  _isMinimized() {
    return this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)
  }

  _isOverlaid() {
    return this._element.classList.contains(ClassName.SIDEBAR_OVERLAID)
  }

  _isUnfoldable() {
    return this._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE)
  }

  _isVisible() {
    const rect = this._element.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    )
  }

  _addClassName(className) {
    this._element.classList.add(className)
  }

  _firstBreakpointClassName() {
    return Object.keys(Default.breakpoints).map(key => Default.breakpoints[key])[0]
  }

  _getBreakpointClassName(breakpoint) {
    return Default.breakpoints[breakpoint]
  }

  _removeBackdrop() {
    if (this._backdrop) {
      this._backdrop.parentNode.removeChild(this._backdrop)
      this._backdrop = null
    }
  }

  _showBackdrop() {
    if (!this._backdrop) {
      this._backdrop = document.createElement('div')
      this._backdrop.className = ClassName.BACKDROP
      this._backdrop.classList.add(ClassName.FADE)
      document.body.appendChild(this._backdrop)
      reflow(this._backdrop)
      this._backdrop.classList.add(ClassName.SHOW)
    }
  }

  _clickOutListener(event, sidebar) {
    if (event.target.closest(Selector.SIDEBAR) === null) { // or use:
      event.preventDefault()
      event.stopPropagation()
      sidebar.close()
    }
  }

  _addClickOutListener() {
    EventHandler.on(document, Event.CLICK_DATA_API, event => {
      this._clickOutListener(event, this)
    })
  }

  _removeClickOutListener() {
    EventHandler.off(document, Event.CLICK_DATA_API)
  }

  // Sidebar navigation

  _getAllSiblings(element, filter) {
    const siblings = []
    element = element.parentNode.firstChild
    do {
      if (element.nodeType === 3) {
        continue // text node
      }

      if (!filter || filter(element)) {
        siblings.push(element)
      }

    // eslint-disable-next-line no-cond-assign
    } while (element = element.nextSibling)

    return siblings
  }

  _toggleDropdown(event, sidebar) {
    let toggler = event.target
    if (!toggler.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE)) {
      toggler = toggler.closest(Selector.NAV_DROPDOWN_TOGGLE)
    }

    const dataAttributes = toggler.closest(Selector.NAVIGATION_CONTAINER).dataset

    if (typeof dataAttributes.dropdownAccordion !== 'undefined') {
      Default.dropdownAccordion = JSON.parse(dataAttributes.dropdownAccordion)
    }

    // TODO: find better solution
    if (Default.dropdownAccordion === true) {
      this._getAllSiblings(toggler.parentElement).forEach(element => {
        if (element !== toggler.parentNode) {
          if (element.classList.contains(ClassName.NAV_DROPDOWN)) {
            element.classList.remove(ClassName.SHOW)
          }
        }
      })
    }

    toggler.parentNode.classList.toggle(ClassName.SHOW)
    // TODO: Set the toggler's position near to cursor after the click.

    // TODO: add transition end
    sidebar._psUpdate()
  }

  // PerfectScrollbar

  _psInit() {
    if (this._element.querySelector(Selector.NAVIGATION_CONTAINER)) {
      this._ps = new PerfectScrollbar(this._element.querySelector(Selector.NAVIGATION_CONTAINER), {
        suppressScrollX: true
      })
    }
  }

  _psUpdate() {
    if (this._ps) {
      this._ps.update()
    }
  }

  _psDestroy() {
    if (this._ps) {
      this._ps.destroy()
      this._ps = null
    }
  }

  _getParents(element, selector) {
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

      const urlHasParams = /\\?.*=/
      const urlHasQueryString = /\\?./
      const urlHasHash = /#./

      if (urlHasParams.test(String(window.location)) || urlHasQueryString.test(String(window.location))) {
        currentUrl = String(window.location).split('?')[0]
      } else if (urlHasHash.test(String(window.location))) {
        currentUrl = String(window.location).split('#')[0]
      } else {
        currentUrl = String(window.location)
      }

      if (currentUrl.slice(- 1) === '#') {
        currentUrl = currentUrl.slice(0, -1)
      }

      if (element.href === currentUrl) {
        element.classList.add(ClassName.ACTIVE)
        // eslint-disable-next-line unicorn/prefer-spread
        Array.from(this._getParents(element, Selector.NAV_DROPDOWN)).forEach(element => {
          element.classList.add(ClassName.SHOW)
        })
      }
    })
  }

  _addEventListeners() {
    if (this._mobile && this._open) {
      this._addClickOutListener()
    }

    if (this._overlaid && this._open) {
      this._addClickOutListener()
    }

    EventHandler.on(this._element, Event.CLASS_TOGGLE, event => {
      if (event.detail.className === ClassName.SIDEBAR_MINIMIZED) {
        if (this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          this.minimize()
        } else {
          this.reset()
        }
      }

      if (event.detail.className === ClassName.SIDEBAR_UNFOLDABLE) {
        if (this._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE)) {
          this.unfoldable()
        } else {
          this.reset()
        }
      }

      if (typeof Object.keys(Default.breakpoints).find(key => Default.breakpoints[key] === event.detail.className) !== 'undefined') {
        const { className } = event.detail
        const breakpoint = Object.keys(Default.breakpoints).find(key => Default.breakpoints[key] === className)

        if (event.detail.add) {
          this.open(breakpoint)
        } else {
          this.close(breakpoint)
        }
      }
    })

    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_DROPDOWN_TOGGLE, event => {
      event.preventDefault()
      this._toggleDropdown(event, this)
    })

    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_LINK, () => {
      if (this._isMobile()) {
        this.close()
      }
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

  static jQueryInterface(config) {
    return this.each(function () {
      Sidebar._sidebarInterface(this, config)
    })
  }

  static getInstance(element) {
    return Data.getData(element, DATA_KEY)
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

const $ = getjQuery()

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

if ($) {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = Sidebar.jQueryInterface
  $.fn[NAME].Constructor = Sidebar
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Sidebar.jQueryInterface
  }
}

export default Sidebar
