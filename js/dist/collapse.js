function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-beta.0): collapse.js
 * Licensed under MIT (https://coreui.io/license)
 *
 * This component is a modified version of the Bootstrap's collapse.js
 * Bootstrap (v4.3.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { jQuery as $, TRANSITION_END, emulateTransitionEnd, getSelectorFromElement, getTransitionDurationFromElement, isElement, makeArray, reflow, typeCheckConfig } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
import Manipulator from './dom/manipulator';
import SelectorEngine from './dom/selector-engine';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'collapse';
var VERSION = '3.0.0-beta.0';
var DATA_KEY = 'coreui.collapse';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var BS_PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.bsPrefix ? window.CoreUIDefaults.bsPrefix : '' : '';
var Default = {
  toggle: true,
  parent: ''
};
var DefaultType = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var Event = {
  SHOW: "show" + EVENT_KEY,
  SHOWN: "shown" + EVENT_KEY,
  HIDE: "hide" + EVENT_KEY,
  HIDDEN: "hidden" + EVENT_KEY,
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
  SHOW: BS_PREFIX + "show",
  COLLAPSE: BS_PREFIX + "collapse",
  COLLAPSING: BS_PREFIX + "collapsing",
  COLLAPSED: BS_PREFIX + "collapsed"
};
var Dimension = {
  WIDTH: 'width',
  HEIGHT: 'height'
};
var Selector = {
  ACTIVES: "." + BS_PREFIX + "show, ." + BS_PREFIX + "collapsing",
  DATA_TOGGLE: "[data-toggle=\"" + BS_PREFIX + "collapse\"]"
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse =
/*#__PURE__*/
function () {
  function Collapse(element, config) {
    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = makeArray(SelectorEngine.find("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
    var toggleList = makeArray(SelectorEngine.find(Selector.DATA_TOGGLE));

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = makeArray(SelectorEngine.find(selector)).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }

    Data.setData(element, DATA_KEY, this);
  } // Getters


  var _proto = Collapse.prototype;

  // Public
  _proto.toggle = function toggle() {
    if (this._element.classList.contains(ClassName.SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.show = function show() {
    var _this = this;

    if (this._isTransitioning || this._element.classList.contains(ClassName.SHOW)) {
      return;
    }

    var actives;
    var activesData;

    if (this._parent) {
      actives = makeArray(SelectorEngine.find(Selector.ACTIVES, this._parent)).filter(function (elem) {
        if (typeof _this._config.parent === 'string') {
          return elem.getAttribute('data-parent') === _this._config.parent;
        }

        return elem.classList.contains(ClassName.COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    var container = SelectorEngine.findOne(this._selector);

    if (actives) {
      var tempActiveData = actives.filter(function (elem) {
        return container !== elem;
      });
      activesData = tempActiveData[0] ? Data.getData(tempActiveData[0], DATA_KEY) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = EventHandler.trigger(this._element, Event.SHOW);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse._collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.setData(elemActive, DATA_KEY, null);
        }
      });
    }

    var dimension = this._getDimension();

    this._element.classList.remove(ClassName.COLLAPSE);

    this._element.classList.add(ClassName.COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(function (element) {
        element.classList.remove(ClassName.COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this._element.classList.remove(ClassName.COLLAPSING);

      _this._element.classList.add(ClassName.COLLAPSE);

      _this._element.classList.add(ClassName.SHOW);

      _this._element.style[dimension] = '';

      _this.setTransitioning(false);

      EventHandler.trigger(_this._element, Event.SHOWN);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = "scroll" + capitalizedDimension;
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
    this._element.style[dimension] = this._element[scrollSize] + "px";
  };

  _proto.hide = function hide() {
    var _this2 = this;

    if (this._isTransitioning || !this._element.classList.contains(ClassName.SHOW)) {
      return;
    }

    var startEvent = EventHandler.trigger(this._element, Event.HIDE);

    if (startEvent.defaultPrevented) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
    reflow(this._element);

    this._element.classList.add(ClassName.COLLAPSING);

    this._element.classList.remove(ClassName.COLLAPSE);

    this._element.classList.remove(ClassName.SHOW);

    var triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var selector = getSelectorFromElement(trigger);

        if (selector !== null) {
          var elem = SelectorEngine.findOne(selector);

          if (!elem.classList.contains(ClassName.SHOW)) {
            trigger.classList.add(ClassName.COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this2.setTransitioning(false);

      _this2._element.classList.remove(ClassName.COLLAPSING);

      _this2._element.classList.add(ClassName.COLLAPSE);

      EventHandler.trigger(_this2._element, Event.HIDDEN);
    };

    this._element.style[dimension] = '';
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.setTransitioning = function setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY);
    this._config = null;
    this._parent = null;
    this._element = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread({}, Default, {}, config);
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME, config, DefaultType);
    return config;
  };

  _proto._getDimension = function _getDimension() {
    var hasWidth = this._element.classList.contains(Dimension.WIDTH);

    return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
  };

  _proto._getParent = function _getParent() {
    var _this3 = this;

    var parent = this._config.parent;

    if (isElement(parent)) {
      // it's a jQuery object
      if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
        parent = parent[0];
      }
    } else {
      parent = SelectorEngine.findOne(parent);
    }

    var selector = "[data-toggle=\"collapse\"][data-parent=\"" + parent + "\"]";
    makeArray(SelectorEngine.find(selector, parent)).forEach(function (element) {
      _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
    });
    return parent;
  };

  _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
    if (element) {
      var isOpen = element.classList.contains(ClassName.SHOW);

      if (triggerArray.length) {
        triggerArray.forEach(function (elem) {
          if (isOpen) {
            elem.classList.remove(ClassName.COLLAPSED);
          } else {
            elem.classList.add(ClassName.COLLAPSED);
          }

          elem.setAttribute('aria-expanded', isOpen);
        });
      }
    }
  } // Static
  ;

  Collapse._getTargetFromElement = function _getTargetFromElement(element) {
    var selector = getSelectorFromElement(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  };

  Collapse._collapseInterface = function _collapseInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

    var _config = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(element), {}, typeof config === 'object' && config ? config : {});

    if (!data && _config.toggle && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Collapse._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      Collapse._collapseInterface(this, config);
    });
  };

  Collapse._getInstance = function _getInstance(element) {
    return Data.getData(element, DATA_KEY);
  };

  _createClass(Collapse, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }]);

  return Collapse;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }

  var triggerData = Manipulator.getDataAttributes(this);
  var selector = getSelectorFromElement(this);
  var selectorElements = makeArray(SelectorEngine.find(selector));
  selectorElements.forEach(function (element) {
    var data = Data.getData(element, DATA_KEY);
    var config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse._collapseInterface(element, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .collapse to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };
}

export default Collapse;
//# sourceMappingURL=collapse.js.map