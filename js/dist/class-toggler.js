function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.7): class-toggler.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import { jQuery as $ } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
import { isArray } from 'util';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'class-toggler';
var VERSION = '3.0.0-alpha.7';
var DATA_KEY = 'coreui.class-toggler';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-';
var Default = {
  breakpoints: '-sm,-md,-lg,-xl',
  postfix: '-show',
  responsive: false,
  target: 'body'
};
var ClassName = {
  CLASS_TOGGLER: PREFIX + "class-toggler"
};
var Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var Selector = {
  CLASS_TOGGLER: "." + PREFIX + "class-toggler"
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

    this._getElementDataAttributes(this._element).forEach(function (dataAttributes) {
      var element;
      var target = dataAttributes.target,
          toggle = dataAttributes.toggle;

      if (target === '_parent' || target === 'parent') {
        element = _this._element.parentNode;
      } else {
        element = document.querySelector(target);
      }

      toggle.forEach(function (object) {
        var className = object.className,
            responsive = object.responsive,
            postfix = object.postfix;
        var breakpoints = typeof object.breakpoints === 'undefined' || object.breakpoints === null ? null : _this._arrayFromString(object.breakpoints); // eslint-disable-next-line no-negated-condition

        if (!responsive) {
          element.classList.toggle(className);
          var event = new CustomEvent(Event.CLASS_TOGGLE, {
            detail: {
              target: target,
              className: className
            }
          });
          element.dispatchEvent(event);
        } else {
          var currentBreakpoint;
          breakpoints.forEach(function (breakpoint) {
            if (className.includes(breakpoint)) {
              currentBreakpoint = breakpoint;
            }
          });
          var responsiveClassNames = [];

          if (typeof currentBreakpoint === 'undefined') {
            responsiveClassNames.push(className);
          } else {
            responsiveClassNames.push(className.replace("" + currentBreakpoint + postfix, postfix));
            breakpoints.splice(0, breakpoints.indexOf(currentBreakpoint) + 1).forEach(function (breakpoint) {
              responsiveClassNames.push(className.replace("" + currentBreakpoint + postfix, "" + breakpoint + postfix));
            });
          }

          var addResponsiveClasses = false;
          responsiveClassNames.forEach(function (responsiveClassName) {
            if (element.classList.contains(responsiveClassName)) {
              addResponsiveClasses = true;
            }
          });

          if (addResponsiveClasses) {
            responsiveClassNames.forEach(function (responsiveClassName) {
              element.classList.remove(responsiveClassName);
              var event = new CustomEvent(Event.CLASS_TOGGLE, {
                detail: {
                  target: target,
                  className: responsiveClassName
                }
              });
              element.dispatchEvent(event);
            });
          } else {
            element.classList.add(className);

            var _event = new CustomEvent(Event.CLASS_TOGGLE, {
              detail: {
                target: target,
                className: className
              }
            });

            element.dispatchEvent(_event);
          }
        }
      });
    });
  } // Private
  ;

  _proto._arrayFromString = function _arrayFromString(string) {
    return string.replace(/ /g, '').split(',');
  };

  _proto._isArray = function _isArray(array) {
    try {
      JSON.parse(array.replace(/'/g, '"'));
      return true;
    } catch (_unused) {
      return false;
    }
  };

  _proto._convertToArray = function _convertToArray(array) {
    return JSON.parse(array.replace(/'/g, '"'));
  };

  _proto._getDataAttributes = function _getDataAttributes(data, attribute) {
    var dataAttribute = data[attribute];
    return this._isArray(dataAttribute) ? this._convertToArray(dataAttribute) : dataAttribute;
  };

  _proto._getToggleDetails = function _getToggleDetails(classNames, responsive, breakpoints, postfix) {
    var ToggleDetails = function ToggleDetails(className, responsive, breakpoints, postfix) {
      if (responsive === void 0) {
        responsive = Default.responsive;
      }

      this.className = className;
      this.responsive = responsive;
      this.breakpoints = breakpoints;
      this.postfix = postfix;
    };

    var toggle = [];

    if (Array.isArray(classNames)) {
      classNames.forEach(function (className, index) {
        responsive = Array.isArray(responsive) ? responsive[index] : responsive;
        breakpoints = responsive ? Array.isArray(breakpoints) ? breakpoints[index] : breakpoints : null;
        postfix = responsive ? Array.isArray(postfix) ? postfix[index] : postfix : null;
        toggle.push(new ToggleDetails(className, responsive, breakpoints, postfix));
      });
    } else {
      breakpoints = responsive ? breakpoints : null;
      postfix = responsive ? postfix : null;
      toggle.push(new ToggleDetails(classNames, responsive, breakpoints, postfix));
    }

    return toggle;
  };

  _proto._ifArray = function _ifArray(array, index) {
    return Array.isArray(array) ? array[index] : array;
  };

  _proto._getElementDataAttributes = function _getElementDataAttributes(element) {
    var _this2 = this;

    var data = element.dataset;
    var targets = typeof data.target === 'undefined' ? Default.target : this._getDataAttributes(data, 'target');
    var classNames = typeof data.class === 'undefined' ? 'undefined' : this._getDataAttributes(data, 'class');
    var responsive = typeof data.responsive === 'undefined' ? Default.responsive : this._getDataAttributes(data, 'responsive');
    var breakpoints = typeof data.breakpoints === 'undefined' ? Default.breakpoints : this._getDataAttributes(data, 'breakpoints');
    var postfix = typeof data.postfix === 'undefined' ? Default.postfix : this._getDataAttributes(data, 'postfix');
    var toggle = [];

    var TargetDetails = function TargetDetails(target, toggle) {
      this.target = target;
      this.toggle = toggle;
    };

    if (Array.isArray(targets)) {
      targets.forEach(function (target, index) {
        toggle.push(new TargetDetails(target, _this2._getToggleDetails(_this2._ifArray(classNames, index), _this2._ifArray(responsive, index), _this2._ifArray(breakpoints, index), _this2._ifArray(postfix, index))));
      });
    } else {
      toggle.push(new TargetDetails(targets, this._getToggleDetails(classNames, responsive, breakpoints, postfix)));
    }

    return toggle;
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
 * add .${PREFIX}class-toggler to jQuery only if jQuery is present
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