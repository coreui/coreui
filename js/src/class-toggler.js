/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-next): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  jQuery as $
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/eventHandler'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'class-toggler'
const VERSION = '3.0.0'
const DATA_KEY = 'coreui.class-toggler'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const Default = {
  breakpoints: '-sm,-md,-lg,-xl',
  postfix: '-show',
  responsive: false,
  target: 'body'
}

const ClassName = {
  CLASS_TOGGLER: 'c-class-toggler'
}

const Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
}

const Selector = {
  CLASS_TOGGLER: '.c-class-toggler'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ClassToggler {
  constructor(element) {
    this._element = element
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  // Public
  toggle() {
    const data = this._element.dataset
    let breakpoints = (data.breakpoints ? data.breakpoints : Default.breakpoints).replace(/ /g, '').split(',')
    const classNames = data.classes.replace(/ /g, '').split(',')
    const postfix = data.postfix ? data.postfix : Default.postfix
    const targets = (data.target ? data.target : Default.target).replace(/ /g, '').split(',')
    const responsive = data.responsive ? data.responsive : Default.responsive

    targets.forEach(target => {
      let el
      if (target === '_parent' || target === 'parent') {
        el = this._element.parentNode
      } else {
        el = document.querySelector(target)
      }

      classNames.forEach(className => {
        // eslint-disable-next-line no-negated-condition
        if (!responsive) {
          el.classList.toggle(className)
          const event = new CustomEvent(Event.CLASS_TOGGLE, {
            detail: {
              target,
              class: className
            }
          })
          el.dispatchEvent(event)
        } else {
          let currentBreakpoint
          breakpoints.forEach(breakpoint => {
            if (className.includes(breakpoint)) {
              currentBreakpoint = breakpoint
            }
          })
          const responsiveClasses = []
          if (typeof currentBreakpoint === 'undefined') {
            responsiveClasses.push(className)
          } else {
            responsiveClasses.push(className.replace(`${currentBreakpoint}${postfix}`, postfix))
            breakpoints = breakpoints.splice(0, breakpoints.indexOf(currentBreakpoint) + 1)
            breakpoints.forEach(breakpoint => {
              responsiveClasses.push(className.replace(`${currentBreakpoint}${postfix}`, `${breakpoint}${postfix}`))
            })
          }

          let addResponsiveClasses = false
          responsiveClasses.forEach(responsiveClass => {
            if (el.classList.contains(responsiveClass)) {
              addResponsiveClasses = true
            }
          })

          if (addResponsiveClasses) {
            responsiveClasses.forEach(responsiveClass => {
              el.classList.remove(responsiveClass)
              const event = new CustomEvent(Event.CLASS_TOGGLE, {
                detail: {
                  target,
                  class: responsiveClass
                }
              })
              el.dispatchEvent(event)
            })
          } else {
            el.classList.add(className)
            const event = new CustomEvent(Event.CLASS_TOGGLE, {
              detail: {
                target,
                class: className
              }
            })
            el.dispatchEvent(event)
          }
        }
      })
    })
  }

  // Static

  static _classTogglerInterface(element, config) {
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

  static _jQueryInterface(config) {
    return this.each(function () {
      ClassToggler._classTogglerInterface(this, config)
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(document, Event.CLICK_DATA_API, Selector.CLASS_TOGGLER, event => {
  event.preventDefault()
  let toggler = event.target
  if (!toggler.classList.contains(ClassName.CLASS_TOGGLER)) {
    toggler = toggler.closest(Selector.CLASS_TOGGLER)
  }

  ClassToggler._classTogglerInterface(toggler, 'toggle')
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .c-class-toggler to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = ClassToggler._jQueryInterface
  $.fn[NAME].Constructor = ClassToggler
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ClassToggler._jQueryInterface
  }
}

export default ClassToggler
