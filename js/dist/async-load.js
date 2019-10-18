function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-beta.0): asyn-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import { jQuery as $ } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'asyncLoad';
var VERSION = '3.0.0-beta.0';
var DATA_KEY = 'coreui.asyncLoad';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-'; // const BS_PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.bsPrefix ? window.CoreUIDefaults.bsPrefix : '' : ''

var ClassName = {
  ACTIVE: PREFIX + "active",
  NAV_DROPDOWN_TOGGLE: PREFIX + "sidebar-nav-dropdown-toggle",
  // NAV_PILLS: `${PREFIX}nav-pills`,
  // NAV_TABS: `${PREFIX}nav-tabs`,
  SHOW: PREFIX + "show",
  VIEW_SCRIPT: 'view-script'
};
var Event = {
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
  XHR_STATUS: 'xhr'
};
var Selector = {
  NAV_DROPDOWN: "." + PREFIX + "sidebar-nav-dropdown",
  NAV_LINK: "." + PREFIX + "xhr-link, ." + PREFIX + "sidebar-nav-link",
  NAV_ITEM: "." + PREFIX + "sidebar-nav-item",
  VIEW_SCRIPT: '.view-script'
};
var Default = {
  defaultPage: 'main.html',
  errorPage: '404.html',
  subpagesDirectory: 'views/'
};

var AsyncLoad =
/*#__PURE__*/
function () {
  function AsyncLoad(element, config) {
    this._config = this._getConfig(config);
    this._element = element;
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
    config = _objectSpread({}, Default, {}, config);
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
      script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign, unicorn/prefer-add-event-listener

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
      var oldScripts = document.querySelectorAll(Selector.VIEW_SCRIPT);

      if (oldScripts.length) {
        oldScripts.forEach(function (oldScript) {
          oldScript.remove();
        });
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open('GET', config.subpagesDirectory + url);
    var event = new CustomEvent(Event.XHR_STATUS, {
      detail: {
        url: url,
        status: xhr.status
      }
    });
    element.dispatchEvent(event); // eslint-disable-next-line unicorn/prefer-add-event-listener

    xhr.onload = function (result) {
      if (xhr.status === 200) {
        event = new CustomEvent(Event.XHR_STATUS, {
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

    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(function (element) {
      element.classList.remove(ClassName.ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(function (element) {
      element.classList.remove(ClassName.ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(function (element) {
      element.classList.remove(ClassName.SHOW);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(function (element) {
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(element.querySelectorAll("a[href*=\"" + url + "\"]")).length > 0) {
        element.classList.add(ClassName.SHOW);
      }
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_ITEM + " a[href*=\"" + url + "\"]")).forEach(function (element) {
      element.classList.add(ClassName.ACTIVE);
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

    EventHandler.on(document, Event.CLICK_DATA_API, Selector.NAV_LINK, function (event) {
      event.preventDefault();
      var link = event.target;

      if (!link.classList.contains(ClassName.NAV_LINK)) {
        link = link.closest(Selector.NAV_LINK);
      }

      if (!link.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE) && link.getAttribute('href') !== '#') {
        _this2._update(link);
      }
    });
  } // Static
  ;

  AsyncLoad._asyncLoadInterface = function _asyncLoadInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

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

  AsyncLoad._jQueryInterface = function _jQueryInterface(config) {
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
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .asyncLoad to jQuery only if jQuery is present
 */


if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = AsyncLoad._jQueryInterface;
  $.fn[NAME].Constructor = AsyncLoad;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return AsyncLoad._jQueryInterface;
  };
}

export default AsyncLoad;
//# sourceMappingURL=async-load.js.map