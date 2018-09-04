function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.6): sidebar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var Sidebar = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'sidebar';
  var VERSION = '2.0.6';
  var DATA_KEY = 'coreui.sidebar';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BRAND_MINIMIZED: 'brand-minimized',
    NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
    OPEN: 'open',
    SIDEBAR_FIXED: 'sidebar-fixed',
    SIDEBAR_MINIMIZED: 'sidebar-minimized',
    SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
  };
  var Event = {
    CLICK: 'click',
    DESTROY: 'destroy',
    INIT: 'init',
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    TOGGLE: 'toggle'
  };
  var Selector = {
    BODY: 'body',
    BRAND_MINIMIZER: '.brand-minimizer',
    NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
    NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
    NAV_ITEM: '.nav-item',
    NAV_LINK: '.nav-link',
    NAVIGATION_CONTAINER: '.sidebar-nav',
    NAVIGATION: '.sidebar-nav > .nav',
    SIDEBAR: '.sidebar',
    SIDEBAR_MINIMIZER: '.sidebar-minimizer',
    SIDEBAR_TOGGLER: '.sidebar-toggler'
  };
  var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
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
      this.perfectScrollbar(Event.INIT);
      this.setActiveLink();

      this._addEventListeners();
    } // Getters


    var _proto = Sidebar.prototype;

    // Public
    _proto.perfectScrollbar = function perfectScrollbar(event) {
      if (typeof PerfectScrollbar !== 'undefined') {
        var ps;

        if (event === Event.INIT && !document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
            suppressScrollX: true
          });
        }

        if (event === Event.DESTROY) {
          ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
            suppressScrollX: true
          });
          ps.destroy();
          ps = null;
        }

        if (event === Event.TOGGLE) {
          if (document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
              suppressScrollX: true
            });
            ps.destroy();
            ps = null;
          } else {
            ps = new PerfectScrollbar(document.querySelector(Selector.NAVIGATION_CONTAINER), {
              suppressScrollX: true
            });
          }
        }
      }
    };

    _proto.setActiveLink = function setActiveLink() {
      $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
        var link = value;
        var cUrl = String(window.location).split('?')[0];

        if (cUrl.substr(cUrl.length - 1) === '#') {
          cUrl = cUrl.slice(0, -1);
        }

        if ($($(link))[0].href === cUrl) {
          $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
            link = value;
            $(link).parent().addClass(ClassName.OPEN);
          });
        }
      });
    }; // Private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(Selector.BRAND_MINIMIZER).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
      });
      $(Selector.NAV_DROPDOWN_TOGGLE).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        var dropdown = event.target;
        $(dropdown).parent().toggleClass(ClassName.OPEN);
      });
      $(Selector.SIDEBAR_MINIMIZER).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

        _this.perfectScrollbar(Event.TOGGLE);
      });
      $(Selector.SIDEBAR_TOGGLER).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        var toggle = event.currentTarget.dataset.toggle;
        toggleClasses(toggle, ShowClassNames);
      });
      $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
        document.body.classList.remove('sidebar-show');
      });
    }; // Static


    Sidebar._jQueryInterface = function _jQueryInterface() {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Sidebar(this);
          $element.data(DATA_KEY, data);
        }
      });
    };

    _createClass(Sidebar, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Sidebar;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event.LOAD_DATA_API, function () {
    var sidebar = $(Selector.SIDEBAR);

    Sidebar._jQueryInterface.call(sidebar);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Sidebar._jQueryInterface;
  $.fn[NAME].Constructor = Sidebar;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Sidebar._jQueryInterface;
  };

  return Sidebar;
}($);
//# sourceMappingURL=sidebar.js.map