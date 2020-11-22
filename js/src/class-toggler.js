/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.4.0): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  getjQuery,
  typeCheckConfig
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import Manipulator from './dom/manipulator'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'class-toggler'
const VERSION = '3.2.2'
const DATA_KEY = 'coreui.class-toggler'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const DefaultType = {
  addClass: '(null|array|string)',
  breakpoints: '(null|array|string)',
  removeClass: '(null|array|string)',
  responsive: '(null|boolean)',
  target: '(null|string)',
  toggleClass: '(null|array|string)'
}

const Default = {
  addClass: null,
  breakpoints: ['', 'sm', 'md', 'lg', 'xl'],
  removeClass: null,
  responsive: false,
  target: 'body',
  toggleClass: null
}

const CLASS_NAME_CLASS_TOGGLER = 'c-class-toggler'

const EVENT_CLASS_ADDED = 'classadded'
const EVENT_CLASS_REMOVED = 'classremoved'
const EVENT_CLASS_TOGGLE = 'classtoggle'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const SELECTOR_CLASS_TOGGLER = '.c-class-toggler'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ClassToggler {
  constructor(element, config) {
    this._element = element
    this._config = this._getConfig(config)

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
  add() {
    const target = this._target()
    const classNames = this._config.addClass.replace(/\s/g, '').split(',')

    classNames.forEach(className => {
      target.classList.add(className)
      this._customEvent(EVENT_CLASS_ADDED, target, true, className)
    })
  }

  remove() {
    const target = this._target()
    const classNames = this._config.removeClass.replace(/\s/g, '').split(',')

    classNames.forEach(className => {
      if (this._config.responsive) {
        this._updateResponsiveClassNames(className).forEach(className => {
          target.classList.remove(className)
          this._customEvent(EVENT_CLASS_REMOVED, target, false, className)
        })
      } else {
        target.classList.remove(className)
        this._customEvent(EVENT_CLASS_REMOVED, target, false, className)
      }
    })
  }

  toggle() {
    const target = this._target()
    const classNames = this._config.toggleClass.replace(/\s/g, '').split(',')

    if (this._config.responsive) {
      classNames.forEach(className => {
        const responsiveClassNames = this._updateResponsiveClassNames(className)

        if (responsiveClassNames.filter(className => target.classList.contains(className)).length) {
          this._updateResponsiveClassNames(className).forEach(className => {
            this._config.removeClass = className
            this.remove()
            this._customEvent(EVENT_CLASS_TOGGLE, target, false, className)
          })
        } else {
          this._config.addClass = className
          this.add()
          this._customEvent(EVENT_CLASS_TOGGLE, target, true, className)
        }
      })
    } else {
      classNames.forEach(className => {
        if (target.classList.contains(className)) {
          this._config.removeClass = className
          this.remove()
          this._customEvent(EVENT_CLASS_TOGGLE, target, false, className)
        } else {
          this._config.addClass = className
          this.add()
          this._customEvent(EVENT_CLASS_TOGGLE, target, true, className)
        }
      })
    }
  }

  class() {
    this._config.toggleClass = this._config.class
    if (this._element.getAttribute('responsive')) {
      this._config.responsive = this._element.getAttribute('responsive')
    }

    this.toggle()
  }

  // Private

  _target() {
    if (this._config.target === 'body') {
      return document.querySelector(this._config.target)
    }

    if (this._config.target === '_parent') {
      return this._element.parentNode
    }

    return document.querySelector(this._config.target)
  }

  _customEvent(eventName, target, add, className) {
    const event = new CustomEvent(eventName, {
      detail: {
        target,
        add,
        className
      }
    })
    target.dispatchEvent(event)
  }

  _breakpoint(className) {
    const { breakpoints } = this._config
    return breakpoints.filter(breakpoint => breakpoint.length > 0).filter(breakpoint => className.includes(breakpoint))[0]
  }

  _breakpoints(className) {
    const { breakpoints } = this._config
    return breakpoints.slice(0, breakpoints.indexOf(breakpoints.filter(breakpoint => breakpoint.length > 0).filter(breakpoint => className.includes(breakpoint))[0]) + 1)
  }

  _updateResponsiveClassNames(className) {
    const bp = this._breakpoint(className)
    return this._breakpoints(className).map(breakpoint => breakpoint.length > 0 ? className.replace(bp, breakpoint) : className.replace(`-${bp}`, breakpoint))
  }

  _includesResponsiveClass(className) {
    return this._updateResponsiveClassNames(className).filter(className => this._config.target.contains(className))
  }

  // Static

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

  static classTogglerInterface(element, config) {
    let data = Data.getData(element, DATA_KEY)
    const _config = typeof config === 'object' && config

    if (!data) {
      data = new ClassToggler(element, _config)
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
      ClassToggler.classTogglerInterface(this, config)
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_CLASS_TOGGLER, event => {
  event.preventDefault()
  event.stopPropagation()
  let toggler = event.target

  if (!toggler.classList.contains(CLASS_NAME_CLASS_TOGGLER)) {
    toggler = toggler.closest(SELECTOR_CLASS_TOGGLER)
  }

  if (typeof toggler.dataset.addClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'add')
  }

  if (typeof toggler.dataset.removeClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'remove')
  }

  if (typeof toggler.dataset.toggleClass !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'toggle')
  }

  if (typeof toggler.dataset.class !== 'undefined') {
    ClassToggler.classTogglerInterface(toggler, 'class')
  }
})

const $ = getjQuery()

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .c-class-toggler to jQuery only if jQuery is present
 */

if ($) {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = ClassToggler.jQueryInterface
  $.fn[NAME].Constructor = ClassToggler
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ClassToggler.jQueryInterface
  }
}

export default ClassToggler
