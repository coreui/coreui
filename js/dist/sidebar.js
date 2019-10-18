function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-beta.0): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import { jQuery as $ } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler'; // import Manipulator from './dom/manipulator'

import PerfectScrollbar from 'perfect-scrollbar';
import getStyle from './utilities/get-style';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'sidebar';
var VERSION = '3.0.0-beta.0';
var DATA_KEY = 'coreui.sidebar';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-'; // const DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']
// const BS_PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.bsPrefix ? window.CoreUIDefaults.bsPrefix : '' : ''

var DefaultType = {
  dropdownAccordion: 'boolean'
};
var Default = {
  transition: 400 // dropdownAccordion: false

};
var ClassName = {
  ACTIVE: PREFIX + "active",
  NAV_DROPDOWN: PREFIX + "sidebar-nav-dropdown",
  NAV_DROPDOWN_TOGGLE: PREFIX + "sidebar-nav-dropdown-toggle",
  SHOW: PREFIX + "show",
  SIDEBAR_MINIMIZED: PREFIX + "sidebar-minimized",
  SIDEBAR_OVERLAID: PREFIX + "sidebar-overlaid",
  SIDEBAR_SHOW: PREFIX + "sidebar-show"
};
var Event = {
  CLASS_TOGGLE: 'classtoggle',
  CLICK: 'click',
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
  DESTROY: 'destroy',
  INIT: 'init',
  LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
  TOGGLE: 'toggle',
  UPDATE: 'update'
};
var Selector = {
  NAV_DROPDOWN_TOGGLE: "." + PREFIX + "sidebar-nav-dropdown-toggle",
  NAV_DROPDOWN: "." + PREFIX + "sidebar-nav-dropdown",
  NAV_LINK: "." + PREFIX + "sidebar-nav-link",
  // NAV_LINK_QUERIED: `.${PREFIX}sidebar-nav-link-queried`,
  NAVIGATION_CONTAINER: "." + PREFIX + "sidebar-nav",
  SIDEBAR: "." + PREFIX + "sidebar"
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Sidebar =
/*#__PURE__*/
function () {
  function Sidebar(element) {
    this._element = element;
    this.mobile = false;
    this.ps = null;

    this._perfectScrollbar(Event.INIT);

    this._setActiveLink();

    this._breakpointTest = this._breakpointTest.bind(this);

    this._toggleClickOut();

    this._clickOutListener = this._clickOutListener.bind(this);

    this._addEventListeners();

    this._addMediaQuery();
  } // Getters


  var _proto = Sidebar.prototype;

  // Private
  _proto._getAllSiblings = function _getAllSiblings(element, filter) {
    var siblings = [];
    element = element.parentNode.firstChild;

    do {
      if (element.nodeType === 3) {
        continue; // text node
      }

      if (!filter || filter(element)) {
        siblings.push(element);
      } // eslint-disable-next-line no-cond-assign

    } while (element = element.nextSibling);

    return siblings;
  };

  _proto._toggleDropdown = function _toggleDropdown(event) {
    var toggler = event.target;

    if (!toggler.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE)) {
      toggler = toggler.closest(Selector.NAV_DROPDOWN_TOGGLE);
    }

    var dataAttributes = toggler.closest(Selector.NAVIGATION_CONTAINER).dataset; // TODO: find better solution

    if (dataAttributes.drodpownAccordion) {
      this._getAllSiblings(toggler.parentElement).forEach(function (element) {
        if (element !== toggler.parentNode) {
          if (element.classList.contains(ClassName.NAV_DROPDOWN)) {
            element.classList.remove(ClassName.SHOW);
          }
        }
      });
    }

    toggler.parentNode.classList.toggle(ClassName.SHOW); // TODO: Set the toggler's position near to cursor after the click.

    this._perfectScrollbar(Event.UPDATE);
  };

  _proto._closeSidebar = function _closeSidebar(event) {
    var link = event.target;

    if (!link.classList.contains(ClassName.NAV_LINK)) {
      link = link.closest(Selector.NAV_LINK);
    }

    if (this.mobile && !link.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE)) {
      this._removeClickOut();

      this._element.classList.remove(ClassName.SIDEBAR_SHOW);
    }
  };

  _proto._perfectScrollbar = function _perfectScrollbar(event) {
    var _this = this;

    if (typeof PerfectScrollbar !== 'undefined') {
      if (event === Event.INIT && !this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        this.ps = this._makeScrollbar();
      }

      if (event === Event.DESTROY) {
        this._destroyScrollbar();
      }

      if (event === Event.TOGGLE) {
        if (this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          this._destroyScrollbar();
        } else {
          this._destroyScrollbar();

          this.ps = this._makeScrollbar();
        }
      }

      if (event === Event.UPDATE && !this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        // TODO: Add smooth transition
        setTimeout(function () {
          _this._destroyScrollbar();

          _this.ps = _this._makeScrollbar();
        }, Default.transition);
      }
    }
  };

  _proto._makeScrollbar = function _makeScrollbar(container) {
    if (container === void 0) {
      container = Selector.NAVIGATION_CONTAINER;
    }

    if (this._element.querySelector(container)) {
      var ps = new PerfectScrollbar(this._element.querySelector(container), {
        suppressScrollX: true
      });
      return ps;
    }
  };

  _proto._destroyScrollbar = function _destroyScrollbar() {
    if (this.ps) {
      this.ps.destroy();
      this.ps = null;
    }
  };

  _proto._getParents = function _getParents(element, selector) {
    // Setup parents array
    var parents = []; // Get matching parent elements

    for (; element && element !== document; element = element.parentNode) {
      // Add matching parents to array
      if (selector) {
        if (element.matches(selector)) {
          parents.push(element);
        }
      } else {
        parents.push(element);
      }
    }

    return parents;
  };

  _proto._setActiveLink = function _setActiveLink() {
    var _this2 = this;

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(this._element.querySelectorAll(Selector.NAV_LINK)).forEach(function (element) {
      var currentUrl; // eslint-disable-next-line prefer-regex-literals

      var urlHasParams = new RegExp('\\?.*='); // eslint-disable-next-line prefer-regex-literals

      var urlHasQueryString = new RegExp('\\?.'); // eslint-disable-next-line prefer-regex-literals

      var urlHasHash = new RegExp('#.');

      if (urlHasParams.test(String(window.location)) || urlHasQueryString.test(String(window.location))) {
        currentUrl = String(window.location).split('?')[0];
      } else if (urlHasHash.test(String(window.location))) {
        currentUrl = String(window.location).split('#')[0];
      } else {
        currentUrl = String(window.location);
      } // eslint-disable-next-line unicorn/prefer-string-slice


      if (currentUrl.substr(currentUrl.length - 1) === '#') {
        currentUrl = currentUrl.slice(0, -1);
      }

      if (element.href === currentUrl) {
        element.classList.add(ClassName.ACTIVE); // eslint-disable-next-line unicorn/prefer-spread

        Array.from(_this2._getParents(element, Selector.NAV_DROPDOWN)).forEach(function (element) {
          element.classList.add(ClassName.SHOW);
        });
      }
    });
  };

  _proto._addMediaQuery = function _addMediaQuery() {
    var sm = getStyle('--breakpoint-sm');

    if (!sm) {
      return;
    }

    var smValue = parseInt(sm, 10) - 1;
    var mediaQueryList = window.matchMedia("(max-width: " + smValue + "px)");

    this._breakpointTest(mediaQueryList);

    mediaQueryList.addListener(this._breakpointTest);
  };

  _proto._breakpointTest = function _breakpointTest(event) {
    this.mobile = Boolean(event.matches);
  };

  _proto._clickOutListener = function _clickOutListener(event) {
    if (!this._element.contains(event.target)) {
      // or use: event.target.closest(Selector.SIDEBAR) === null
      event.preventDefault();
      event.stopPropagation();

      this._removeClickOut();

      this._element.classList.remove(ClassName.SIDEBAR_SHOW);
    }
  };

  _proto._addClickOut = function _addClickOut() {
    document.addEventListener(Event.CLICK, this._clickOutListener, true);
  };

  _proto._removeClickOut = function _removeClickOut() {
    document.removeEventListener(Event.CLICK, this._clickOutListener, true);
  };

  _proto._toggleClickOut = function _toggleClickOut() {
    if (this.mobile && this._element.classList.contains(ClassName.SIDEBAR_SHOW)) {
      this._addClickOut();
    } else if (this._element.classList.contains(ClassName.SIDEBAR_OVERLAID) && this._element.classList.contains(ClassName.SIDEBAR_SHOW)) {
      this._addClickOut();
    } else {
      this._removeClickOut();
    }
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this3 = this;

    EventHandler.on(this._element, Event.CLASS_TOGGLE, function (event) {
      if (event.detail.className === ClassName.SIDEBAR_MINIMIZED) {
        _this3._perfectScrollbar(Event.TOGGLE);
      }

      if (event.detail.className === ClassName.SIDEBAR_SHOW) {
        _this3._toggleClickOut();
      }
    });
    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
      event.preventDefault();

      _this3._toggleDropdown(event);
    });
    EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_LINK, function (event) {
      _this3._closeSidebar(event);
    });
  } // Static
  ;

  Sidebar._sidebarInterface = function _sidebarInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new Sidebar(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Sidebar._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      Sidebar._sidebarInterface(this, config);
    });
  };

  _createClass(Sidebar, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }]);

  return Sidebar;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, Event.LOAD_DATA_API, function () {
  // eslint-disable-next-line unicorn/prefer-spread
  Array.from(document.querySelectorAll(Selector.SIDEBAR)).forEach(function (element) {
    Sidebar._sidebarInterface(element);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
* add .asyncLoad to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Sidebar._jQueryInterface;
  $.fn[NAME].Constructor = Sidebar;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Sidebar._jQueryInterface;
  };
}

export default Sidebar;
//# sourceMappingURL=sidebar.js.map