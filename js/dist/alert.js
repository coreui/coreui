function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.9): alerj.js
 * Licensed under MIT (https://coreui.io/license)
 *
 * This component is a modified version of the Bootstrap's alert.js
 * Bootstrap (v4.3.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { jQuery as $, TRANSITION_END, emulateTransitionEnd, getSelectorFromElement, getTransitionDurationFromElement } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
import SelectorEngine from './dom/selector-engine';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'alert';
var VERSION = '3.0.0-alpha.9';
var DATA_KEY = 'coreui.alert';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-';
var Selector = {
  DISMISS: '[data-dismiss="alert"]'
};
var Event = {
  CLOSE: "close" + EVENT_KEY,
  CLOSED: "closed" + EVENT_KEY,
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
  ALERT: PREFIX + "alert",
  FADE: PREFIX + "fade",
  SHOW: PREFIX + "show"
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Alert =
/*#__PURE__*/
function () {
  function Alert(element) {
    this._element = element;

    if (this._element) {
      Data.setData(element, DATA_KEY, this);
    }
  } // Getters


  var _proto = Alert.prototype;

  // Public
  _proto.close = function close(element) {
    var rootElement = this._element;

    if (element) {
      rootElement = this._getRootElement(element);
    }

    var customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY);
    this._element = null;
  } // Private
  ;

  _proto._getRootElement = function _getRootElement(element) {
    var selector = getSelectorFromElement(element);
    var parent = false;

    if (selector) {
      parent = SelectorEngine.findOne(selector);
    }

    if (!parent) {
      parent = SelectorEngine.closest(element, "." + ClassName.ALERT);
    }

    return parent;
  };

  _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
    return EventHandler.trigger(element, Event.CLOSE);
  };

  _proto._removeElement = function _removeElement(element) {
    var _this = this;

    element.classList.remove(ClassName.SHOW);

    if (!element.classList.contains(ClassName.FADE)) {
      this._destroyElement(element);

      return;
    }

    var transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, TRANSITION_END, function (event) {
      return _this._destroyElement(element, event);
    });
    emulateTransitionEnd(element, transitionDuration);
  };

  _proto._destroyElement = function _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, Event.CLOSED);
  } // Static
  ;

  Alert._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  };

  Alert._handleDismiss = function _handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  };

  Alert._getInstance = function _getInstance(element) {
    return Data.getData(element, DATA_KEY);
  };

  _createClass(Alert, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return Alert;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .alert to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
}

export default Alert;
//# sourceMappingURL=alert.js.map