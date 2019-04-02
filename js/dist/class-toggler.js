function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-next): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import { jQuery as $ } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/eventHandler';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'class-toggler';
var VERSION = '3.0.0';
var DATA_KEY = 'coreui.class-toggler';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var Default = {
  breakpoints: '-sm,-md,-lg,-xl',
  postfix: '-show',
  responsive: false,
  target: 'body'
};
var ClassName = {
  CLASS_TOGGLER: 'c-class-toggler'
};
var Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var Selector = {
  CLASS_TOGGLER: '.c-class-toggler'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var ClassToggler =
/*#__PURE__*/
function () {
  function ClassToggler(element) {
    this._element = element;
  } // Getters


  var _proto = ClassToggler.prototype;

  // Public
  _proto.toggle = function toggle() {
    var _this = this;

    var data = this._element.dataset;
    var breakpoints = (data.breakpoints ? data.breakpoints : Default.breakpoints).replace(/ /g, '').split(',');
    var classNames = data.classes.replace(/ /g, '').split(',');
    var postfix = data.postfix ? data.postfix : Default.postfix;
    var targets = (data.target ? data.target : Default.target).replace(/ /g, '').split(',');
    var responsive = data.responsive ? data.responsive : Default.responsive;
    targets.forEach(function (target) {
      var el;

      if (target === '_parent' || target === 'parent') {
        el = _this._element.parentNode;
      } else {
        el = document.querySelector(target);
      }

      classNames.forEach(function (className) {
        // eslint-disable-next-line no-negated-condition
        if (!responsive) {
          el.classList.toggle(className);
          var event = new CustomEvent(Event.CLASS_TOGGLE, {
            detail: {
              target: target,
              class: className
            }
          });
          el.dispatchEvent(event);
        } else {
          var currentBreakpoint;
          breakpoints.forEach(function (breakpoint) {
            if (className.includes(breakpoint)) {
              currentBreakpoint = breakpoint;
            }
          });
          var responsiveClasses = [];

          if (typeof currentBreakpoint === 'undefined') {
            responsiveClasses.push(className);
          } else {
            responsiveClasses.push(className.replace("" + currentBreakpoint + postfix, postfix));
            breakpoints = breakpoints.splice(0, breakpoints.indexOf(currentBreakpoint) + 1);
            breakpoints.forEach(function (breakpoint) {
              responsiveClasses.push(className.replace("" + currentBreakpoint + postfix, "" + breakpoint + postfix));
            });
          }

          var addResponsiveClasses = false;
          responsiveClasses.forEach(function (responsiveClass) {
            if (el.classList.contains(responsiveClass)) {
              addResponsiveClasses = true;
            }
          });

          if (addResponsiveClasses) {
            responsiveClasses.forEach(function (responsiveClass) {
              el.classList.remove(responsiveClass);
              var event = new CustomEvent(Event.CLASS_TOGGLE, {
                detail: {
                  target: target,
                  class: responsiveClass
                }
              });
              el.dispatchEvent(event);
            });
          } else {
            el.classList.add(className);

            var _event = new CustomEvent(Event.CLASS_TOGGLE, {
              detail: {
                target: target,
                class: className
              }
            });

            el.dispatchEvent(_event);
          }
        }
      });
    });
  } // Static
  ;

  ClassToggler._classTogglerInterface = function _classTogglerInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new ClassToggler(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  ClassToggler._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      ClassToggler._classTogglerInterface(this, config);
    });
  };

  _createClass(ClassToggler, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return ClassToggler;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, Event.CLICK_DATA_API, Selector.CLASS_TOGGLER, function (event) {
  event.preventDefault();
  var toggler = event.target;

  if (!toggler.classList.contains(ClassName.CLASS_TOGGLER)) {
    toggler = toggler.closest(Selector.CLASS_TOGGLER);
  }

  ClassToggler._classTogglerInterface(toggler, 'toggle');
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .c-class-toggler to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = ClassToggler._jQueryInterface;
  $.fn[NAME].Constructor = ClassToggler;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ClassToggler._jQueryInterface;
  };
}

export default ClassToggler;
//# sourceMappingURL=class-toggler.js.map