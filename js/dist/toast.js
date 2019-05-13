function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { jQuery as $, TRANSITION_END, emulateTransitionEnd, getTransitionDurationFromElement, typeCheckConfig } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/eventHandler';
import Manipulator from './dom/manipulator';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'toast';
var VERSION = '4.3.1';
var DATA_KEY = 'coreui.toast';
var EVENT_KEY = "." + DATA_KEY;
var Event = {
  CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
  HIDE: "hide" + EVENT_KEY,
  HIDDEN: "hidden" + EVENT_KEY,
  SHOW: "show" + EVENT_KEY,
  SHOWN: "shown" + EVENT_KEY
};
var ClassName = {
  FADE: 'c-fade',
  HIDE: 'c-hide',
  SHOW: 'c-show',
  SHOWING: 'c-showing'
};
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 500
};
var Selector = {
  DATA_DISMISS: '[data-dismiss="c-toast"]'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Toast =
/*#__PURE__*/
function () {
  function Toast(element, config) {
    this._element = element;
    this._config = this._getConfig(config);
    this._timeout = null;

    this._setListeners();

    Data.setData(element, DATA_KEY, this);
  } // Getters


  var _proto = Toast.prototype;

  // Public
  _proto.show = function show() {
    var _this = this;

    EventHandler.trigger(this._element, Event.SHOW);

    if (this._config.animation) {
      this._element.classList.add(ClassName.FADE);
    }

    var complete = function complete() {
      _this._element.classList.remove(ClassName.SHOWING);

      _this._element.classList.add(ClassName.SHOW);

      EventHandler.trigger(_this._element, Event.SHOWN);

      if (_this._config.autohide) {
        _this.hide();
      }
    };

    this._element.classList.remove(ClassName.HIDE);

    this._element.classList.add(ClassName.SHOWING);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.hide = function hide(withoutTimeout) {
    var _this2 = this;

    if (!this._element.classList.contains(ClassName.SHOW)) {
      return;
    }

    EventHandler.trigger(this._element, Event.HIDE);

    if (withoutTimeout) {
      this._close();
    } else {
      this._timeout = setTimeout(function () {
        _this2._close();
      }, this._config.delay);
    }
  };

  _proto.dispose = function dispose() {
    clearTimeout(this._timeout);
    this._timeout = null;

    if (this._element.classList.contains(ClassName.SHOW)) {
      this._element.classList.remove(ClassName.SHOW);
    }

    EventHandler.off(this._element, Event.CLICK_DISMISS);
    Data.removeData(this._element, DATA_KEY);
    this._element = null;
    this._config = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread({}, Default, Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {});
    typeCheckConfig(NAME, config, this.constructor.DefaultType);
    return config;
  };

  _proto._setListeners = function _setListeners() {
    var _this3 = this;

    EventHandler.on(this._element, Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
      return _this3.hide(true);
    });
  };

  _proto._close = function _close() {
    var _this4 = this;

    var complete = function complete() {
      _this4._element.classList.add(ClassName.HIDE);

      EventHandler.trigger(_this4._element, Event.HIDDEN);
    };

    this._element.classList.remove(ClassName.SHOW);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  } // Static
  ;

  Toast._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](this);
      }
    });
  };

  Toast._getInstance = function _getInstance(element) {
    return Data.getData(element, DATA_KEY);
  };

  _createClass(Toast, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }]);

  return Toast;
}();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 *  add .toast to jQuery only if jQuery is present
 */


if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Toast._jQueryInterface;
  $.fn[NAME].Constructor = Toast;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Toast._jQueryInterface;
  };
}

export default Toast;
//# sourceMappingURL=toast.js.map