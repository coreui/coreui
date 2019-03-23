function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-next): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import $ from 'jquery';
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
var JQUERY_NO_CONFLICT = $.fn[NAME];
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
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
  LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
  TOGGLE: 'toggle'
};
var Selector = {
  BODY: 'body',
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
    var data = this._element.dataset;
    var breakpoints = (data.breakpoints ? data.breakpoints : Default.breakpoints).replace(/ /g, '').split(',');
    var classNames = data.classes.replace(/ /g, '').split(',');
    var postfix = data.postfix ? data.postfix : Default.postfix;
    var targets = (data.target ? data.target : Default.target).replace(/ /g, '').split(',');
    var responsive = data.responsive ? data.responsive : Default.responsive;
    targets.forEach(function (target) {
      classNames.forEach(function (className) {
        if (!responsive) {
          document.querySelector(target).classList.toggle(className);
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
            if (document.querySelector(target).classList.contains(responsiveClass)) {
              addResponsiveClasses = true;
            }
          });

          if (addResponsiveClasses) {
            responsiveClasses.forEach(function (responsiveClass) {
              document.querySelector(target).classList.remove(responsiveClass);
            });
          } else {
            document.querySelector(target).classList.add(className);
          }
        }
      });
    });
  } // Static
  ;

  ClassToggler._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var $element = $(this);
      var data = $element.data(DATA_KEY);

      if (!data) {
        data = new ClassToggler(this);
        $(this).data(DATA_KEY, data);
      }

      if (config === 'toggle') {
        data[config]();
      }
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


$(document).on(Event.CLICK_DATA_API, Selector.CLASS_TOGGLER, function (event) {
  event.preventDefault();
  var toggler = event.target;

  if (!$(toggler).hasClass(ClassName.CLASS_TOGGLER)) {
    toggler = $(toggler).closest(Selector.CLASS_TOGGLER);
  }

  ClassToggler._jQueryInterface.call($(toggler), 'toggle');
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = ClassToggler._jQueryInterface;
$.fn[NAME].Constructor = ClassToggler;

$.fn[NAME].noConflict = function () {
  $.fn[NAME] = JQUERY_NO_CONFLICT;
  return ClassToggler._jQueryInterface;
};

export default ClassToggler;
//# sourceMappingURL=class-toggler.js.map