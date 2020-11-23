/*!
  * CoreUI async-load.js v3.4.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data', './dom/event-handler'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AsyncLoad = factory(global.Data, global.EventHandler));
}(this, (function (Data, EventHandler) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0-alpha1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'asyncLoad';
  var VERSION = '3.2.2';
  var DATA_KEY = 'coreui.asyncLoad';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var CLASS_NAME_ACTIVE = 'c-active';
  var CLASS_NAME_NAV_DROPDOWN_TOGGLE = 'c-sidebar-nav-dropdown-toggle';
  var CLASS_NAME_NAV_LINK = 'c-sidebar-nav-link';
  var CLASS_NAME_SHOW = 'c-show';
  var CLASS_NAME_VIEW_SCRIPT = 'view-script';
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var EVENT_XHR_STATUS = 'xhr';
  var SELECTOR_NAV_DROPDOWN = '.c-sidebar-nav-dropdown';
  var SELECTOR_NAV_LINK = '.c-xhr-link, .c-sidebar-nav-link';
  var SELECTOR_NAV_ITEM = '.c-sidebar-nav-item';
  var SELECTOR_VIEW_SCRIPT = '.view-script';
  var Default = {
    defaultPage: 'main.html',
    errorPage: '404.html',
    subpagesDirectory: 'views/'
  };

  var AsyncLoad = /*#__PURE__*/function () {
    function AsyncLoad(element, config) {
      this._config = this._getConfig(config);
      this._element = element; // eslint-disable-next-line no-restricted-globals

      var url = location.hash.replace(/^#/, ''); // eslint-disable-next-line no-negated-condition

      if (url !== '') {
        this._setUpUrl(url);
      } else {
        this._setUpUrl(this._config.defaultPage);
      }

      this._addEventListeners();
    } // Getters


    var _proto = AsyncLoad.prototype;

    // Private
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default), config);
      return config;
    };

    _proto._loadPage = function _loadPage(url) {
      var _this = this;

      var element = this._element;
      var config = this._config;

      var loadScripts = function loadScripts(src, element) {
        if (element === void 0) {
          element = 0;
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src[element];
        script.className = CLASS_NAME_VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign, unicorn/prefer-add-event-listener

        script.onload = script.onreadystatechange = function () {
          if (!_this.readyState || _this.readyState === 'complete') {
            if (src.length > element + 1) {
              loadScripts(src, element + 1);
            }
          }
        };

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
      };

      var removeScripts = function removeScripts() {
        var oldScripts = document.querySelectorAll(SELECTOR_VIEW_SCRIPT);

        if (oldScripts.length) {
          oldScripts.forEach(function (oldScript) {
            oldScript.remove();
          });
        }
      };

      var xhr = new XMLHttpRequest();
      xhr.open('GET', config.subpagesDirectory + url);
      var event = new CustomEvent(EVENT_XHR_STATUS, {
        detail: {
          url: url,
          status: xhr.status
        }
      });
      element.dispatchEvent(event); // eslint-disable-next-line unicorn/prefer-add-event-listener

      xhr.onload = function (result) {
        if (xhr.status === 200) {
          event = new CustomEvent(EVENT_XHR_STATUS, {
            detail: {
              url: url,
              status: xhr.status
            }
          });
          element.dispatchEvent(event);
          var wrapper = document.createElement('div');
          wrapper.innerHTML = result.target.response; // eslint-disable-next-line unicorn/prefer-spread

          var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
            return script.attributes.getNamedItem('src').nodeValue;
          });
          wrapper.querySelectorAll('script').forEach(function (script) {
            return script.remove(script);
          });
          window.scrollTo(0, 0);
          element.innerHTML = '';
          element.appendChild(wrapper);
          removeScripts();

          if (scripts.length) {
            loadScripts(scripts);
          }

          window.location.hash = url;
        } else {
          window.location.href = config.errorPage;
        }
      };

      xhr.send();
    };

    _proto._setUpUrl = function _setUpUrl(url) {
      url = url.replace(/^\//, '').split('?')[0]; // eslint-disable-next-line unicorn/prefer-spread

      Array.from(document.querySelectorAll(SELECTOR_NAV_LINK)).forEach(function (element) {
        element.classList.remove(CLASS_NAME_ACTIVE);
      }); // eslint-disable-next-line unicorn/prefer-spread

      Array.from(document.querySelectorAll(SELECTOR_NAV_LINK)).forEach(function (element) {
        element.classList.remove(CLASS_NAME_ACTIVE);
      }); // eslint-disable-next-line unicorn/prefer-spread

      Array.from(document.querySelectorAll(SELECTOR_NAV_DROPDOWN)).forEach(function (element) {
        element.classList.remove(CLASS_NAME_SHOW);
      }); // eslint-disable-next-line unicorn/prefer-spread

      Array.from(document.querySelectorAll(SELECTOR_NAV_DROPDOWN)).forEach(function (element) {
        // eslint-disable-next-line unicorn/prefer-spread
        if (Array.from(element.querySelectorAll("a[href*=\"" + url + "\"]")).length > 0) {
          element.classList.add(CLASS_NAME_SHOW);
        }
      }); // eslint-disable-next-line unicorn/prefer-spread

      Array.from(document.querySelectorAll(SELECTOR_NAV_ITEM + " a[href*=\"" + url + "\"]")).forEach(function (element) {
        element.classList.add(CLASS_NAME_ACTIVE);
      });

      this._loadPage(url);
    };

    _proto._loadBlank = function _loadBlank(url) {
      window.open(url);
    };

    _proto._loadTop = function _loadTop(url) {
      window.location = url;
    };

    _proto._update = function _update(link) {
      if (link.href !== '#') {
        if (typeof link.dataset.toggle === 'undefined' || link.dataset.toggle === 'null') {
          if (link.target === '_top') {
            this._loadTop(link.href);
          } else if (link.target === '_blank') {
            this._loadBlank(link.href);
          } else {
            this._setUpUrl(link.getAttribute('href'));
          }
        }
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      EventHandler__default['default'].on(document, EVENT_CLICK_DATA_API, SELECTOR_NAV_LINK, function (event) {
        event.preventDefault();
        var link = event.target;

        if (!link.classList.contains(CLASS_NAME_NAV_LINK)) {
          link = link.closest(SELECTOR_NAV_LINK);
        }

        if (!link.classList.contains(CLASS_NAME_NAV_DROPDOWN_TOGGLE) && link.getAttribute('href') !== '#') {
          _this2._update(link);
        }
      });
    } // Static
    ;

    AsyncLoad._asyncLoadInterface = function _asyncLoadInterface(element, config) {
      var data = Data__default['default'].getData(element, DATA_KEY);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new AsyncLoad(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    };

    AsyncLoad.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        AsyncLoad._asyncLoadInterface(this, config);
      });
    };

    _createClass(AsyncLoad, null, [{
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

    return AsyncLoad;
  }();

  var $ = getjQuery();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .asyncLoad to jQuery only if jQuery is present
   */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = AsyncLoad.jQueryInterface;
    $.fn[NAME].Constructor = AsyncLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsyncLoad.jQueryInterface;
    };
  }

  return AsyncLoad;

})));
//# sourceMappingURL=async-load.js.map
