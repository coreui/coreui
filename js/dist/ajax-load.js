function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-beta.2): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import { jQuery as $ } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/eventHandler';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'ajaxLoad';
var VERSION = '3.0.0';
var DATA_KEY = 'coreui.ajaxLoad';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = $.fn[NAME];
var ClassName = {
  ACTIVE: 'active',
  NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
  NAV_PILLS: 'nav-pills',
  NAV_TABS: 'nav-tabs',
  OPEN: 'open',
  VIEW_SCRIPT: 'view-script'
};
var Event = {
  CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
  LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
};
var Selector = {
  HEAD: 'head',
  NAV_DROPDOWN: '.nav .nav-dropdown',
  NAV_LINK: '.dropdown-nav-link, .nav .nav-link',
  NAV_ITEM: '.nav .nav-item',
  SIDEBAT_NAV: '.c-sidebar-nav, .sidebar-nav',
  VIEW_SCRIPT: '.view-script'
};
var Default = {
  defaultPage: 'main.html',
  errorPage: '404.html',
  subpagesDirectory: 'views/'
};

var AjaxLoad =
/*#__PURE__*/
function () {
  function AjaxLoad(element, config) {
    this._config = this._getConfig(config);
    this._element = element;
    var url = location.hash.replace(/^#/, '');

    if (url !== '') {
      this.setUpUrl(url);
    } else {
      this.setUpUrl(this._config.defaultPage);
    }

    this._addEventListeners();
  } // Getters


  var _proto = AjaxLoad.prototype;

  // Public
  _proto.loadPage = function loadPage(url) {
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

    var xhr = new XMLHttpRequest();
    xhr.open('GET', config.subpagesDirectory + url); // eslint-disable-next-line unicorn/prefer-add-event-listener

    xhr.onload = function (result) {
      if (xhr.status === 200) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = result.target.response; // eslint-disable-next-line unicorn/prefer-spread

        var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
          return script.attributes.getNamedItem('src').nodeValue;
        });
        wrapper.querySelectorAll('script').forEach(function (script) {
          return script.remove(script);
        });
        window.scrollTo(0, 0);
        $(element).html(wrapper);

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

  _proto.setUpUrl = function setUpUrl(url) {
    url = url.replace(/^\//, '').split('?')[0]; // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(function (element) {
      element.classList.remove(ClassName.ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(function (element) {
      element.classList.remove(ClassName.ACTIVE);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(function (element) {
      element.classList.remove(ClassName.OPEN);
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(function (element) {
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(element.querySelectorAll("a[href*=\"" + url + "\"]")).length > 0) {
        element.classList.add(ClassName.OPEN);
      }
    }); // eslint-disable-next-line unicorn/prefer-spread

    Array.from(document.querySelectorAll(Selector.NAV_ITEM + " a[href*=\"" + url + "\"]")).forEach(function (element) {
      element.classList.add(ClassName.ACTIVE);
    });
    this.loadPage(url);
  };

  _proto.loadBlank = function loadBlank(url) {
    window.open(url);
  };

  _proto.loadTop = function loadTop(url) {
    window.location = url;
  };

  _proto.update = function update(link) {
    if (link.href !== '#') {
      if (typeof link.dataset.toggle === 'undefined' || link.dataset.toggle === 'null') {
        if (link.target === '_top') {
          this.loadTop(link.href);
        } else if (link.target === '_blank') {
          this.loadBlank(link.href);
        } else {
          this.setUpUrl(link.getAttribute('href'));
        }
      }
    }
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread({}, Default, config);
    return config;
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
        _this2.update(link);
      }
    });
  } // Static
  ;

  AjaxLoad._ajaxLoadInterface = function _ajaxLoadInterface(element, config) {
    var data = Data.getData(element, DATA_KEY);

    var _config = typeof config === 'object' && config;

    if (!data) {
      data = new AjaxLoad(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      AjaxLoad._ajaxLoadInterface(this, config);
    });
  };

  _createClass(AjaxLoad, null, [{
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

  return AjaxLoad;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */
// EventHandler.on(window, Event.LOAD_DATA_API, event => {
//   console.log(event)
//   // const ajax = Array.from(SelectorEngine)
//   // makeArray(SelectorEngine.find(Selector.DATA_RIDE))
//   console.log('Event Loooooooad')
//   // AjaxLoad._ajaxLoadInterface()
// })

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 *  * add .ajaxLoad to jQuery only if jQuery is present
 */


if (typeof $ !== 'undefined') {
  var _JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = AjaxLoad._jQueryInterface;
  $.fn[NAME].Constructor = AjaxLoad;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = _JQUERY_NO_CONFLICT;
    return AjaxLoad._jQueryInterface;
  };
}

export default AjaxLoad;
//# sourceMappingURL=ajax-load.js.map
