function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.11): tab.js
 * Licensed under MIT (https://coreui.io/license)
 *
 * This component is a modified version of the Bootstrap's tab.js
 * Bootstrap (v4.3.1): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { jQuery as $, TRANSITION_END, emulateTransitionEnd, getSelectorFromElement, getTransitionDurationFromElement, makeArray, reflow } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
import SelectorEngine from './dom/selector-engine';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'tab';
var VERSION = '3.0.0-alpha.11';
var DATA_KEY = 'coreui.tab';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-';
var Event = {
  HIDE: "hide" + EVENT_KEY,
  HIDDEN: "hidden" + EVENT_KEY,
  SHOW: "show" + EVENT_KEY,
  SHOWN: "shown" + EVENT_KEY,
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
  DROPDOWN_MENU: PREFIX + "dropdown-menu",
  ACTIVE: PREFIX + "active",
  DISABLED: 'disabled',
  FADE: PREFIX + "fade",
  SHOW: PREFIX + "show"
};
var Selector = {
  DROPDOWN: "." + PREFIX + "dropdown",
  NAV_LIST_GROUP: "." + PREFIX + "nav, ." + PREFIX + "list-group",
  ACTIVE: "." + PREFIX + "active",
  ACTIVE_UL: ":scope > li > ." + PREFIX + "active",
  DATA_TOGGLE: "[data-toggle=\"" + PREFIX + "tab\"], [data-toggle=\"" + PREFIX + "pill\"], [data-toggle=\"" + PREFIX + "list\"]",
  DROPDOWN_TOGGLE: "." + PREFIX + "dropdown-toggle",
  DROPDOWN_ACTIVE_CHILD: ":scope > ." + PREFIX + "dropdown-menu ." + PREFIX + "active"
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Tab =
/*#__PURE__*/
function () {
  function Tab(element) {
    this._element = element;
    Data.setData(this._element, DATA_KEY, this);
  } // Getters


  var _proto = Tab.prototype;

  // Public
  _proto.show = function show() {
    var _this = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(ClassName.ACTIVE) || this._element.classList.contains(ClassName.DISABLED)) {
      return;
    }

    var target;
    var previous;
    var listElement = SelectorEngine.closest(this._element, Selector.NAV_LIST_GROUP);
    var selector = getSelectorFromElement(this._element);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
      previous = makeArray(SelectorEngine.find(itemSelector, listElement));
      previous = previous[previous.length - 1];
    }

    var hideEvent = null;

    if (previous) {
      hideEvent = EventHandler.trigger(previous, Event.HIDE, {
        relatedTarget: this._element
      });
    }

    var showEvent = EventHandler.trigger(this._element, Event.SHOW, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    if (selector) {
      target = SelectorEngine.findOne(selector);
    }

    this._activate(this._element, listElement);

    var complete = function complete() {
      EventHandler.trigger(previous, Event.HIDDEN, {
        relatedTarget: _this._element
      });
      EventHandler.trigger(_this._element, Event.SHOWN, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY);
    this._element = null;
  } // Private
  ;

  _proto._activate = function _activate(element, container, callback) {
    var _this2 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(Selector.ACTIVE_UL, container) : SelectorEngine.children(container, Selector.ACTIVE);
    var active = activeElements[0];
    var isTransitioning = callback && active && active.classList.contains(ClassName.FADE);

    var complete = function complete() {
      return _this2._transitionComplete(element, active, callback);
    };

    if (active && isTransitioning) {
      var transitionDuration = getTransitionDurationFromElement(active);
      active.classList.remove(ClassName.SHOW);
      EventHandler.one(active, TRANSITION_END, complete);
      emulateTransitionEnd(active, transitionDuration);
    } else {
      complete();
    }
  };

  _proto._transitionComplete = function _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(ClassName.ACTIVE);
      var dropdownChild = SelectorEngine.findOne(Selector.DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(ClassName.ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(ClassName.ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(ClassName.FADE)) {
      element.classList.add(ClassName.SHOW);
    }

    if (element.parentNode && element.parentNode.classList.contains(ClassName.DROPDOWN_MENU)) {
      var dropdownElement = SelectorEngine.closest(element, Selector.DROPDOWN);

      if (dropdownElement) {
        makeArray(SelectorEngine.find(Selector.DROPDOWN_TOGGLE)).forEach(function (dropdown) {
          return dropdown.classList.add(ClassName.ACTIVE);
        });
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static
  ;

  Tab._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  Tab._getInstance = function _getInstance(element) {
    return Data.getData(element, DATA_KEY);
  };

  _createClass(Tab, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return Tab;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  event.preventDefault();
  var data = Data.getData(this, DATA_KEY) || new Tab(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .tab to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };
}

export default Tab;
//# sourceMappingURL=tab.js.map