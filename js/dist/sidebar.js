/*!
  * CoreUI sidebar.js v3.0.0 (https://coreui.io)
  * Copyright 2020 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/manipulator.js'), require('perfect-scrollbar')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/event-handler.js', './dom/manipulator.js', 'perfect-scrollbar'], factory) :
  (global = global || self, global.Sidebar = factory(global.Data, global.EventHandler, global.Manipulator, global.PerfectScrollbar));
}(this, (function (Data, EventHandler, Manipulator, PerfectScrollbar) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  Manipulator = Manipulator && Manipulator.hasOwnProperty('default') ? Manipulator['default'] : Manipulator;
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  var toType = function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  var isElement = function isElement(obj) {
    return (obj[0] || obj).nodeType;
  };

  var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function (property) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
      }
    });
  };

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
  var VERSION = '3.0.0-rc.4';
  var DATA_KEY = 'coreui.sidebar';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var Default = {
    breakpoints: {
      xs: 'c-sidebar-show',
      sm: 'c-sidebar-sm-show',
      md: 'c-sidebar-md-show',
      lg: 'c-sidebar-lg-show',
      xl: 'c-sidebar-xl-show'
    },
    dropdownAccordion: true
  };
  var DefaultType = {
    breakpoints: 'object',
    dropdownAccordion: '(string|boolean)'
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
    SIDEBAR_SHOW: 'c-sidebar-show',
    SIDEBAR_UNFOLDABLE: 'c-sidebar-unfoldable'
  };
  var Event = {
    CLASS_TOGGLE: 'classtoggle',
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    OPEN: "open" + EVENT_KEY,
    OPENED: "opened" + EVENT_KEY
  };
  var Selector = {
    NAV_DROPDOWN_TOGGLE: '.c-sidebar-nav-dropdown-toggle',
    NAV_DROPDOWN: '.c-sidebar-nav-dropdown',
    NAV_LINK: '.c-sidebar-nav-link',
    NAVIGATION_CONTAINER: '.c-sidebar-nav',
    NAVIGATION_DROPDOWN_ITEMS: '.c-sidebar-nav-dropdown-items',
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
    function Sidebar(element, config) {
      if (typeof PerfectScrollbar === 'undefined') {
        throw new TypeError('CoreUI\'s sidebar require Perfect Scrollbar');
      }

      this._element = element;
      this._config = this._getConfig(config);
      this._open = this._isVisible();
      this._mobile = this._isMobile();
      this._overlaid = this._isOverlaid();
      this._minimize = this._isMinimized();
      this._unfoldable = this._isUnfoldable();

      this._setActiveLink();

      this._ps = null;
      this._backdrop = null;

      this._psInit();

      this._addEventListeners();

      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = Sidebar.prototype;

    // Public
    _proto.open = function open(breakpoint) {
      var _this = this;

      EventHandler.trigger(this._element, Event.OPEN);

      if (this._isMobile()) {
        this._addClassName(this._firstBreakpointClassName());

        this._showBackdrop();

        EventHandler.one(this._element, TRANSITION_END, function () {
          _this._addClickOutListener();
        });
      } else if (breakpoint) {
        this._addClassName(this._getBreakpointClassName(breakpoint));
      } else {
        this._addClassName(this._firstBreakpointClassName());
      }

      var complete = function complete() {
        if (_this._isVisible() === true) {
          _this._open = true;
          EventHandler.trigger(_this._element, Event.OPENED);
        }
      };

      EventHandler.one(this._element, TRANSITION_END, complete);
    };

    _proto.close = function close(breakpoint) {
      var _this2 = this;

      EventHandler.trigger(this._element, Event.CLOSE);

      if (this._isMobile()) {
        this._element.classList.remove(this._firstBreakpointClassName());

        this._removeBackdrop();

        this._removeClickOutListener();
      } else if (breakpoint) {
        this._element.classList.remove(this._getBreakpointClassName(breakpoint));
      } else {
        this._element.classList.remove(this._firstBreakpointClassName());
      }

      var complete = function complete() {
        if (_this2._isVisible() === false) {
          _this2._open = false;
          EventHandler.trigger(_this2._element, Event.CLOSED);
        }
      };

      EventHandler.one(this._element, TRANSITION_END, complete);
    };

    _proto.toggle = function toggle(breakpoint) {
      if (this._open) {
        this.close(breakpoint);
      } else {
        this.open(breakpoint);
      }
    };

    _proto.minimize = function minimize() {
      if (!this._isMobile()) {
        this._addClassName(ClassName.SIDEBAR_MINIMIZED);

        this._minimize = true;

        this._psDestroy();
      }
    };

    _proto.unfoldable = function unfoldable() {
      if (!this._isMobile()) {
        this._addClassName(ClassName.SIDEBAR_UNFOLDABLE);

        this._unfoldable = true;
      }
    };

    _proto.reset = function reset() {
      if (this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
        this._element.classList.remove(ClassName.SIDEBAR_MINIMIZED);

        this._minimize = false;
        EventHandler.one(this._element, TRANSITION_END, this._psInit());
      }

      if (this._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE)) {
        this._element.classList.remove(ClassName.SIDEBAR_UNFOLDABLE);

        this._unfoldable = false;
      }
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, config);
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._isMobile = function _isMobile() {
      return Boolean(window.getComputedStyle(this._element, null).getPropertyValue('--is-mobile'));
    };

    _proto._isMinimized = function _isMinimized() {
      return this._element.classList.contains(ClassName.SIDEBAR_MINIMIZED);
    };

    _proto._isOverlaid = function _isOverlaid() {
      return this._element.classList.contains(ClassName.SIDEBAR_OVERLAID);
    };

    _proto._isUnfoldable = function _isUnfoldable() {
      return this._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE);
    };

    _proto._isVisible = function _isVisible() {
      var rect = this._element.getBoundingClientRect();

      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      /* or $(window).width() */
      ;
    };

    _proto._addClassName = function _addClassName(className) {
      this._element.classList.add(className);
    };

    _proto._firstBreakpointClassName = function _firstBreakpointClassName() {
      return Object.keys(Default.breakpoints).map(function (key) {
        return Default.breakpoints[key];
      })[0];
    };

    _proto._getBreakpointClassName = function _getBreakpointClassName(breakpoint) {
      return Default.breakpoints[breakpoint];
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

    _proto._clickOutListener = function _clickOutListener(event, sidebar) {
      if (event.target.closest(Selector.SIDEBAR) === null) {
        // or use:
        event.preventDefault();
        event.stopPropagation();
        sidebar.close();
      }
    };

    _proto._addClickOutListener = function _addClickOutListener() {
      var _this3 = this;

      EventHandler.on(document, Event.CLICK_DATA_API, function (event) {
        _this3._clickOutListener(event, _this3);
      });
    };

    _proto._removeClickOutListener = function _removeClickOutListener() {
      EventHandler.off(document, Event.CLICK_DATA_API);
    } // Sidebar navigation
    ;

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

    _proto._toggleDropdown = function _toggleDropdown(event, sidebar) {
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
      // TODO: add transition end

      sidebar._psUpdate();
    } // PerfectScrollbar
    ;

    _proto._psInit = function _psInit() {
      if (this._element.querySelector(Selector.NAVIGATION_CONTAINER)) {
        this._ps = new PerfectScrollbar(this._element.querySelector(Selector.NAVIGATION_CONTAINER), {
          suppressScrollX: true
        });
      }
    };

    _proto._psUpdate = function _psUpdate() {
      if (this._ps) {
        this._ps.update();
      }
    };

    _proto._psDestroy = function _psDestroy() {
      if (this._ps) {
        this._ps.destroy();

        this._ps = null;
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
      var _this4 = this;

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

          Array.from(_this4._getParents(element, Selector.NAV_DROPDOWN)).forEach(function (element) {
            element.classList.add(ClassName.SHOW);
          });
        }
      });
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this5 = this;

      if (this._mobile && this._open) {
        this._addClickOutListener();
      }

      if (this._overlaid && this._open) {
        this._addClickOutListener();
      }

      EventHandler.on(this._element, Event.CLASS_TOGGLE, function (event) {
        if (event.detail.className === ClassName.SIDEBAR_MINIMIZED) {
          if (_this5._element.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            _this5.minimize();
          } else {
            _this5.reset();
          }
        }

        if (event.detail.className === ClassName.SIDEBAR_UNFOLDABLE) {
          if (_this5._element.classList.contains(ClassName.SIDEBAR_UNFOLDABLE)) {
            _this5.unfoldable();
          } else {
            _this5.reset();
          }
        }

        if (typeof Object.keys(Default.breakpoints).find(function (key) {
          return Default.breakpoints[key] === event.detail.className;
        }) !== 'undefined') {
          var className = event.detail.className;
          var breakpoint = Object.keys(Default.breakpoints).find(function (key) {
            return Default.breakpoints[key] === className;
          });

          if (event.detail.add) {
            _this5.open(breakpoint);
          } else {
            _this5.close(breakpoint);
          }
        }
      });
      EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
        event.preventDefault();

        _this5._toggleDropdown(event, _this5);
      });
      EventHandler.on(this._element, Event.CLICK_DATA_API, Selector.NAV_LINK, function () {
        if (_this5._isMobile()) {
          _this5.close();
        }
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

    Sidebar.getInstance = function getInstance(element) {
      return Data.getData(element, DATA_KEY);
    };

    _createClass(Sidebar, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
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
