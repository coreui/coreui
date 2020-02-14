/*!
  * CoreUI sidebar.js v3.0.0-rc.3 (https://coreui.io)
  * Copyright 2020 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('perfect-scrollbar')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/event-handler.js', 'perfect-scrollbar'], factory) :
  (global = global || self, global.Sidebar = factory(global.Data, global.EventHandler, global.PerfectScrollbar));
}(this, (function (Data, EventHandler, PerfectScrollbar) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var reflow = function reflow(element) {
    return element.offsetHeight;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'sidebar';
  var VERSION = '3.0.0-rc.3';
  var DATA_KEY = 'coreui.sidebar';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var DefaultType = {
    dropdownAccordion: '(string|boolean)'
  };
  var Default = {
    dropdownAccordion: true,
    transition: 400
  };
  var ClassName = {
    ACTIVE: 'c-active',
    BACKDROP: 'c-sidebar-backdrop',
    FADE: 'c-fade',
    NAV_DROPDOWN: 'c-sidebar-nav-dropdown',
    NAV_DROPDOWN_TOGGLE: 'c-sidebar-nav-dropdown-toggle',
    SHOW: 'c-show',
    SIDEBAR_MINIMIZED: 'c-sidebar-minimized',
    SIDEBAR_OVERLAID: 'c-sidebar-overlaid',
    SIDEBAR_SHOW: 'c-sidebar-show'
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
    NAV_DROPDOWN_TOGGLE: '.c-sidebar-nav-dropdown-toggle',
    NAV_DROPDOWN: '.c-sidebar-nav-dropdown',
    NAV_LINK: '.c-sidebar-nav-link',
    NAVIGATION_CONTAINER: '.c-sidebar-nav',
    SIDEBAR: '.c-sidebar'
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
      this.mobile = this._isMobile.bind(this);
      this.ps = null;
      this._backdrop = null;

      this._perfectScrollbar(Event.INIT);

      this._setActiveLink();

      this._toggleClickOut();

      this._clickOutListener = this._clickOutListener.bind(this);

      this._addEventListeners();
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

      var dataAttributes = toggler.closest(Selector.NAVIGATION_CONTAINER).dataset;

      if (typeof dataAttributes.dropdownAccordion !== 'undefined') {
        Default.dropdownAccordion = JSON.parse(dataAttributes.dropdownAccordion);
      } // TODO: find better solution


      if (Default.dropdownAccordion === true) {
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
        var currentUrl;
        var urlHasParams = /\\?.*=/;
        var urlHasQueryString = /\\?./;
        var urlHasHash = /#./;

        if (urlHasParams.test(String(window.location)) || urlHasQueryString.test(String(window.location))) {
          currentUrl = String(window.location).split('?')[0];
        } else if (urlHasHash.test(String(window.location))) {
          currentUrl = String(window.location).split('#')[0];
        } else {
          currentUrl = String(window.location);
        }

        if (currentUrl.slice(-1) === '#') {
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

    _proto._isMobile = function _isMobile(event) {
      return Boolean(window.getComputedStyle(event.target, null).getPropertyValue('--is-mobile'));
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

      this._removeBackdrop();
    };

    _proto._toggleClickOut = function _toggleClickOut() {
      if (this.mobile && this._element.classList.contains(ClassName.SIDEBAR_SHOW)) {
        this._addClickOut();

        this._showBackdrop();
      } else if (this._element.classList.contains(ClassName.SIDEBAR_OVERLAID) && this._element.classList.contains(ClassName.SIDEBAR_SHOW)) {
        this._addClickOut();
      } else {
        this._removeClickOut();
      }
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        this._backdrop.parentNode.removeChild(this._backdrop);

        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop() {
      if (!this._backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        this._backdrop.classList.add(ClassName.FADE);

        document.body.appendChild(this._backdrop);
        reflow(this._backdrop);

        this._backdrop.classList.add(ClassName.SHOW);
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

    Sidebar.jQueryInterface = function jQueryInterface(config) {
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
  var $ = getjQuery();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
  * add .asyncLoad to jQuery only if jQuery is present
   */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = Sidebar.jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar.jQueryInterface;
    };
  }

  return Sidebar;

})));
//# sourceMappingURL=sidebar.js.map
