function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.13): scrollspy.js
 * Licensed under MIT (https://coreui.io/license)
 *
 * This component is a modified version of the Bootstrap's scrollspy.js
 * Bootstrap (v4.3.1): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { jQuery as $, getSelectorFromElement, getUID, makeArray, typeCheckConfig } from './util/index';
import Data from './dom/data';
import EventHandler from './dom/event-handler';
import Manipulator from './dom/manipulator';
import SelectorEngine from './dom/selector-engine';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'scrollspy';
var VERSION = '3.0.0-alpha.13';
var DATA_KEY = 'coreui.scrollspy';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var PREFIX = window.CoreUIDefaults ? window.CoreUIDefaults.prefix ? window.CoreUIDefaults.prefix : 'c-' : 'c-';
var Default = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var Event = {
  ACTIVATE: "activate" + EVENT_KEY,
  SCROLL: "scroll" + EVENT_KEY,
  LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
};
var ClassName = {
  DROPDOWN_ITEM: PREFIX + "dropdown-item",
  ACTIVE: PREFIX + "active"
};
var Selector = {
  DATA_SPY: "[data-spy=\"" + PREFIX + "scroll\"]",
  NAV_LIST_GROUP: "." + PREFIX + "nav, ." + PREFIX + "list-group",
  NAV_LINKS: "." + PREFIX + "nav-link",
  NAV_ITEMS: "." + PREFIX + "nav-item",
  LIST_ITEMS: "." + PREFIX + "list-group-item",
  DROPDOWN: "." + PREFIX + "dropdown",
  DROPDOWN_TOGGLE: "." + PREFIX + "dropdown-toggle"
};
var OffsetMethod = {
  OFFSET: 'offset',
  POSITION: 'position'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var ScrollSpy =
/*#__PURE__*/
function () {
  function ScrollSpy(element, config) {
    var _this = this;

    this._element = element;
    this._scrollElement = element.tagName === 'BODY' ? window : element;
    this._config = this._getConfig(config);
    this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " ." + ClassName.DROPDOWN_ITEM);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    EventHandler.on(this._scrollElement, Event.SCROLL, function (event) {
      return _this._process(event);
    });
    this.refresh();

    this._process();

    Data.setData(element, DATA_KEY, this);
  } // Getters


  var _proto = ScrollSpy.prototype;

  // Public
  _proto.refresh = function refresh() {
    var _this2 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    var targets = makeArray(SelectorEngine.find(this._selector));
    targets.map(function (element) {
      var target;
      var targetSelector = getSelectorFromElement(element);

      if (targetSelector) {
        target = SelectorEngine.findOne(targetSelector);
      }

      if (target) {
        var targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(function (item) {
      return item;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      _this2._offsets.push(item[0]);

      _this2._targets.push(item[1]);
    });
  };

  _proto.dispose = function dispose() {
    Data.removeData(this._element, DATA_KEY);
    EventHandler.off(this._scrollElement, EVENT_KEY);
    this._element = null;
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _objectSpread({}, Default, typeof config === 'object' && config ? config : {});

    if (typeof config.target !== 'string') {
      var id = config.target.id;

      if (!id) {
        id = getUID(NAME);
        config.target.id = id;
      }

      config.target = "#" + id;
    }

    typeCheckConfig(NAME, config, DefaultType);
    return config;
  };

  _proto._getScrollTop = function _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  _proto._getScrollHeight = function _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  _proto._getOffsetHeight = function _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  _proto._process = function _process() {
    var scrollTop = this._getScrollTop() + this._config.offset;

    var scrollHeight = this._getScrollHeight();

    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    var offsetLength = this._offsets.length;

    for (var i = offsetLength; i--;) {
      var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  };

  _proto._activate = function _activate(target) {
    this._activeTarget = target;

    this._clear();

    var queries = this._selector.split(',').map(function (selector) {
      return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
    });

    var link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(ClassName.DROPDOWN_ITEM)) {
      SelectorEngine.findOne(Selector.DROPDOWN_TOGGLE, SelectorEngine.closest(link, Selector.DROPDOWN)).classList.add(ClassName.ACTIVE);
      link.classList.add(ClassName.ACTIVE);
    } else {
      // Set triggered link as active
      link.classList.add(ClassName.ACTIVE);
      SelectorEngine.parents(link, Selector.NAV_LIST_GROUP).forEach(function (listGroup) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).forEach(function (item) {
          return item.classList.add(ClassName.ACTIVE);
        }); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, Selector.NAV_ITEMS).forEach(function (navItem) {
          SelectorEngine.children(navItem, Selector.NAV_LINKS).forEach(function (item) {
            return item.classList.add(ClassName.ACTIVE);
          });
        });
      });
    }

    EventHandler.trigger(this._scrollElement, Event.ACTIVATE, {
      relatedTarget: target
    });
  };

  _proto._clear = function _clear() {
    makeArray(SelectorEngine.find(this._selector)).filter(function (node) {
      return node.classList.contains(ClassName.ACTIVE);
    }).forEach(function (node) {
      return node.classList.remove(ClassName.ACTIVE);
    });
  } // Static
  ;

  ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  ScrollSpy._getInstance = function _getInstance(element) {
    return Data.getData(element, DATA_KEY);
  };

  _createClass(ScrollSpy, null, [{
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

  return ScrollSpy;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, Event.LOAD_DATA_API, function () {
  makeArray(SelectorEngine.find(Selector.DATA_SPY)).forEach(function (spy) {
    return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

if (typeof $ !== 'undefined') {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };
}

export default ScrollSpy;
//# sourceMappingURL=scrollspy.js.map