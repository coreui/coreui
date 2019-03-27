/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-next): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME                = 'class-toggler'
const VERSION             = '3.0.0'
const DATA_KEY            = 'coreui.class-toggler'
const EVENT_KEY           = `.${DATA_KEY}`
const DATA_API_KEY        = '.data-api'
const JQUERY_NO_CONFLICT  = $.fn[NAME]

const Default = {
  breakpoints: '-sm,-md,-lg,-xl',
  postfix: '-show',
  responsive: false,
  target : 'body'
}

const ClassName = {
  CLASS_TOGGLER : 'c-class-toggler'
}

const Event = {
  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`,
  LOAD_DATA_API  : `load${EVENT_KEY}${DATA_API_KEY}`,
  TOGGLE         : 'toggle'
}

const Selector = {
  BODY               : 'body',
  CLASS_TOGGLER     : '.c-class-toggler'
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

    targets.forEach((target) => {
      let el
      if (target === '_parent' || target === 'parent') {
        el = this._element.parentNode
      } else {
        el = document.querySelector(target)
      }
      classNames.forEach((className) => {
        if (!responsive) {
          el.classList.toggle(className)
        } else {
          let currentBreakpoint
          breakpoints.forEach((breakpoint) => {
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
            breakpoints.forEach((breakpoint) => {
              responsiveClasses.push(className.replace(`${currentBreakpoint}${postfix}`, `${breakpoint}${postfix}`))
            })
          }

          let addResponsiveClasses = false
          responsiveClasses.forEach((responsiveClass) => {
            if (el.classList.contains(responsiveClass)) {
              addResponsiveClasses = true
            }
          })

          if (addResponsiveClasses) {
            responsiveClasses.forEach((responsiveClass) => {
              el.classList.remove(responsiveClass)
            })
          } else {
            el.classList.add(className)
          }
        }
      })
    })
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new ClassToggler(this)
        $(this).data(DATA_KEY, data)
      }

      if (config === 'toggle') {
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

$(document)
  .on(Event.CLICK_DATA_API, Selector.CLASS_TOGGLER, (event) => {
    event.preventDefault()

    let toggler = event.target

    if (!$(toggler).hasClass(ClassName.CLASS_TOGGLER)) {
      toggler = $(toggler).closest(Selector.CLASS_TOGGLER)
    }
    ClassToggler._jQueryInterface.call($(toggler), 'toggle')
  })

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = ClassToggler._jQueryInterface
$.fn[NAME].Constructor = ClassToggler
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return ClassToggler._jQueryInterface
}


export default ClassToggler
