/**
 * --------------------------------------------------------------------------
 * CoreUI (v4.0.0-alpha.0): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin,
  emulateTransitionEnd,
  getTransitionDurationFromElement,
  reflow,
  typeCheckConfig
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import Manipulator from './dom/manipulator'
import BaseComponent from './base-component'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'sidebar'
const DATA_KEY = 'coreui.sidebar'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const Default = {}

const DefaultType = {}

const CLASS_NAME_BACKDROP = 'sidebar-backdrop'
const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_SIDEBAR_NARROW = 'sidebar-narrow'
const CLASS_NAME_SIDEBAR_OVERLAID = 'sidebar-overlaid'
const CLASS_NAME_SIDEBAR_SHOW = 'sidebar-show'
const CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE = 'sidebar-narrow-unfoldable'

// eslint-disable-next-line prefer-regex-literals
const REGEXP_SIDEBAR_SHOW = new RegExp('sidebar.*show')

const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`

const SELECTOR_SIDEBAR = '.sidebar'
const SELECTOR_SIDEBAR_TOGGLER = '.sidebar-toggler'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Sidebar extends BaseComponent {
  constructor(element, config) {
    super(element)
    this._config = this._getConfig(config)
    this._show = this._isVisible()
    this._mobile = this._isMobile()
    this._overlaid = this._isOverlaid()
    this._narrow = this._isNarrow()
    this._unfoldable = this._isUnfoldable()
    this._backdrop = null
    this._addEventListeners()

    Data.setData(element, DATA_KEY, this)
  }

  // Getters

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  // Public

  show(breakpoint) {
    EventHandler.trigger(this._element, EVENT_SHOW)

    if (typeof breakpoint !== 'undefined') {
      this._element.classList.add(breakpoint)
    }

    if (typeof breakpoint === 'undefined' || this._isMobile()) {
      this._element.classList.add(CLASS_NAME_SIDEBAR_SHOW)
    }

    if (this._isMobile()) {
      this._showBackdrop()
    }

    const complete = () => {
      if (this._isVisible() === true) {
        this._show = true
        if (this._isMobile() || this._isOverlaid()) {
          this._addClickOutListener()
        }

        EventHandler.trigger(this._element, EVENT_SHOWN)
      }
    }

    const transitionDuration = getTransitionDurationFromElement(this._element)

    EventHandler.one(this._element, 'transitionend', complete)
    emulateTransitionEnd(this._element, transitionDuration)
  }

  hide(breakpoint) {
    EventHandler.trigger(this._element, EVENT_HIDE)

    if (typeof breakpoint !== 'undefined') {
      this._element.classList.remove(breakpoint)
      return
    }

    if (typeof breakpoint === 'undefined' || this._isMobile()) {
      // eslint-disable-next-line unicorn/prefer-spread
      Array.from(this._element.classList).forEach(className => {
        if (className.match(REGEXP_SIDEBAR_SHOW)) {
          this._element.classList.remove(className)
        }
      })
    }

    if (this._isMobile()) {
      this._removeBackdrop()
    }

    const complete = () => {
      if (this._isVisible() === false) {
        this._show = false
        if (this._isMobile() || this._isOverlaid()) {
          this._removeClickOutListener()
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN)
      }
    }

    const transitionDuration = getTransitionDurationFromElement(this._element)

    EventHandler.one(this._element, 'transitionend', complete)
    emulateTransitionEnd(this._element, transitionDuration)
  }

  toggle(breakpoint) {
    if (this._show) {
      this.hide(breakpoint)
      return
    }

    this.show(breakpoint)
  }

  narrow() {
    if (!this._isMobile()) {
      this._addClassName(CLASS_NAME_SIDEBAR_NARROW)
      this._narrow = true
    }
  }

  unfoldable() {
    if (!this._isMobile()) {
      this._addClassName(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE)
      this._unfoldable = true
    }
  }

  reset() {
    if (!this._isMobile()) {
      if (this._narrow) {
        this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW)
        this._narrow = false
      }

      if (this._unfoldable) {
        this._element.classList.remove(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE)
        this._unfoldable = false
      }
    }
  }

  toggleNarrow() {
    if (this._narrow) {
      this.reset()
      return
    }

    this.narrow()
  }

  toggleUnfoldable() {
    if (this._unfoldable) {
      this.reset()
      return
    }

    this.unfoldable()
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

  _isIOS() {
    const iOSDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ]

    const platform = Boolean(navigator.platform)

    if (platform) {
      while (iOSDevices.length) {
        if (navigator.platform === iOSDevices.pop()) {
          return true
        }
      }
    }

    return false
  }

  _isNarrow() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW)
  }

  _isOverlaid() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_OVERLAID)
  }

  _isUnfoldable() {
    return this._element.classList.contains(CLASS_NAME_SIDEBAR_NARROW_UNFOLDABLE)
  }

  // eslint-disable-next-line no-warning-comments
  // TODO: ta metoda nie zawsze działa poprawnie
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

  _removeBackdrop() {
    if (this._backdrop) {
      this._backdrop.parentNode.removeChild(this._backdrop)
      this._backdrop = null
    }
  }

  _showBackdrop() {
    if (!this._backdrop) {
      this._backdrop = document.createElement('div')
      this._backdrop.className = CLASS_NAME_BACKDROP
      this._backdrop.classList.add(CLASS_NAME_FADE)
      document.body.appendChild(this._backdrop)
      reflow(this._backdrop)
      this._backdrop.classList.add(CLASS_NAME_SHOW)
    }
  }

  _clickOutListener(event, sidebar) {
    if (event.target.closest(SELECTOR_SIDEBAR) === null) { // or use:
      event.preventDefault()
      event.stopPropagation()
      sidebar.hide()
    }
  }

  _addClickOutListener() {
    EventHandler.on(document, EVENT_CLICK_DATA_API, event => {
      this._clickOutListener(event, this)
    })
  }

  _removeClickOutListener() {
    EventHandler.off(document, EVENT_CLICK_DATA_API)
  }

  // Sidebar navigation
  _addEventListeners() {
    if (this._mobile && this._show) {
      this._addClickOutListener()
    }

    if (this._overlaid && this._show) {
      this._addClickOutListener()
    }

    EventHandler.on(this._element, EVENT_CLICK_DATA_API, SELECTOR_SIDEBAR_TOGGLER, event => {
      event.preventDefault()
      const toggle = Manipulator.getDataAttribute(event.target, 'toggle')

      if (toggle === 'narrow') {
        this.toggleNarrow()
      }

      if (toggle === 'unfoldable') {
        this.toggleUnfoldable()
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
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  // eslint-disable-next-line unicorn/prefer-spread
  Array.from(document.querySelectorAll(SELECTOR_SIDEBAR)).forEach(element => {
    Sidebar._sidebarInterface(element)
  })
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(NAME, Sidebar)

export default Sidebar
