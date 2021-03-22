/*!
  * CoreUI offcanvas.js v4.0.0-alpha.4 (https://coreui.io)
  * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/selector-engine.js'), require('./dom/manipulator.js'), require('./dom/data.js'), require('./dom/event-handler.js'), require('./base-component.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/selector-engine', './dom/manipulator', './dom/data', './dom/event-handler', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.OffCanvas = factory(global.SelectorEngine, global.Manipulator, global.Data, global.EventHandler, global.Base));
}(this, (function (SelectorEngine, Manipulator, Data, EventHandler, BaseComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.4): alert.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var MILLISECONDS_MULTIPLIER = 1000;

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-coreui-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = '#' + hrefAttr.split('#')[1];
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var isVisible = function isVisible(element) {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      var elementStyle = getComputedStyle(element);
      var parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-coreui-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  var defineJQueryPlugin = function defineJQueryPlugin(name, plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-beta2): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';

  var getWidth = function getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    var documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };

  var hide = function hide(width) {
    if (width === void 0) {
      width = getWidth();
    }

    document.body.style.overflow = 'hidden';

    _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });

    _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
      return calculatedValue - width;
    });

    _setElementAttributes('body', 'paddingRight', function (calculatedValue) {
      return calculatedValue + width;
    });
  };

  var _setElementAttributes = function _setElementAttributes(selector, styleProp, callback) {
    var scrollbarWidth = getWidth();
    SelectorEngine__default['default'].find(selector).forEach(function (element) {
      if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      var actualValue = element.style[styleProp];
      var calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator__default['default'].setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = callback(Number.parseFloat(calculatedValue)) + 'px';
    });
  };

  var reset = function reset() {
    document.body.style.overflow = 'auto';

    _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');

    _resetElementAttributes('body', 'paddingRight');
  };

  var _resetElementAttributes = function _resetElementAttributes(selector, styleProp) {
    SelectorEngine__default['default'].find(selector).forEach(function (element) {
      var value = Manipulator__default['default'].getDataAttribute(element, styleProp);

      if (typeof value === 'undefined' && element === document.body) {
        element.style.removeProperty(styleProp);
      } else {
        Manipulator__default['default'].removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'offcanvas';
  var DATA_KEY = 'coreui.offcanvas';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var DATA_BODY_ACTIONS = 'data-coreui-body';
  var CLASS_NAME_BACKDROP_BODY = 'offcanvas-backdrop';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_TOGGLING = 'offcanvas-toggling';
  var ACTIVE_SELECTOR = ".offcanvas.show, ." + CLASS_NAME_TOGGLING;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var SELECTOR_DATA_DISMISS = '[data-coreui-dismiss="offcanvas"]';
  var SELECTOR_DATA_TOGGLE = '[data-coreui-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var OffCanvas = /*#__PURE__*/function (_BaseComponent) {
    _inheritsLoose(OffCanvas, _BaseComponent);

    function OffCanvas(element) {
      var _this;

      _this = _BaseComponent.call(this, element) || this;
      _this._isShown = element.classList.contains(CLASS_NAME_SHOW);
      _this._bodyOptions = element.getAttribute(DATA_BODY_ACTIONS) || '';

      _this._addEventListeners();

      return _this;
    } // Public


    var _proto = OffCanvas.prototype;

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this2 = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler__default['default'].trigger(this._element, EVENT_SHOW, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      if (this._bodyOptionsHas('backdrop') || !this._bodyOptions.length) {
        document.body.classList.add(CLASS_NAME_BACKDROP_BODY);
      }

      if (!this._bodyOptionsHas('scroll')) {
        hide();
      }

      this._element.classList.add(CLASS_NAME_TOGGLING);

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW);

      var completeCallBack = function completeCallBack() {
        _this2._element.classList.remove(CLASS_NAME_TOGGLING);

        EventHandler__default['default'].trigger(_this2._element, EVENT_SHOWN, {
          relatedTarget: relatedTarget
        });

        _this2._enforceFocusOnElement(_this2._element);
      };

      setTimeout(completeCallBack, getTransitionDurationFromElement(this._element));
    };

    _proto.hide = function hide() {
      var _this3 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler__default['default'].trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._element.classList.add(CLASS_NAME_TOGGLING);

      EventHandler__default['default'].off(document, EVENT_FOCUSIN);

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW);

      var completeCallback = function completeCallback() {
        _this3._element.setAttribute('aria-hidden', true);

        _this3._element.removeAttribute('aria-modal');

        _this3._element.removeAttribute('role');

        _this3._element.style.visibility = 'hidden';

        if (_this3._bodyOptionsHas('backdrop') || !_this3._bodyOptions.length) {
          document.body.classList.remove(CLASS_NAME_BACKDROP_BODY);
        }

        if (!_this3._bodyOptionsHas('scroll')) {
          reset();
        }

        EventHandler__default['default'].trigger(_this3._element, EVENT_HIDDEN);

        _this3._element.classList.remove(CLASS_NAME_TOGGLING);
      };

      setTimeout(completeCallback, getTransitionDurationFromElement(this._element));
    };

    _proto._enforceFocusOnElement = function _enforceFocusOnElement(element) {
      EventHandler__default['default'].off(document, EVENT_FOCUSIN); // guard against infinite focus loop

      EventHandler__default['default'].on(document, EVENT_FOCUSIN, function (event) {
        if (document !== event.target && element !== event.target && !element.contains(event.target)) {
          element.focus();
        }
      });
      element.focus();
    };

    _proto._bodyOptionsHas = function _bodyOptionsHas(option) {
      return this._bodyOptions.split(',').includes(option);
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      EventHandler__default['default'].on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this4.hide();
      });
      EventHandler__default['default'].on(document, 'keydown', function (event) {
        if (event.key === ESCAPE_KEY) {
          _this4.hide();
        }
      });
      EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, function (event) {
        var target = SelectorEngine__default['default'].findOne(getSelectorFromElement(event.target));

        if (!_this4._element.contains(event.target) && target !== _this4._element) {
          _this4.hide();
        }
      });
    } // Static
    ;

    OffCanvas.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data__default['default'].get(this, DATA_KEY) || new OffCanvas(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    return OffCanvas;
  }(BaseComponent__default['default']);
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this5 = this;

    var target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    EventHandler__default['default'].one(target, EVENT_HIDDEN, function () {
      // focus on trigger when it is closed
      if (isVisible(_this5)) {
        _this5.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    var allReadyOpen = SelectorEngine__default['default'].findOne(ACTIVE_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      return;
    }

    var data = Data__default['default'].get(target, DATA_KEY) || new OffCanvas(target);
    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(NAME, OffCanvas);

  return OffCanvas;

})));
//# sourceMappingURL=offcanvas.js.map
