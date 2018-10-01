function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.13): sidebar.js
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
  var VERSION = '2.0.13';
  var DATA_KEY = 'coreui.sidebar';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {
    transition: 400
  };
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
    TOGGLE: 'toggle',
    UPDATE: 'update'
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
      this.ps = null;
      this.perfectScrollbar(Event.INIT);
      this.setActiveLink();

      this._addEventListeners();
    } // Getters


    var _proto = Sidebar.prototype;

    // Public
    _proto.perfectScrollbar = function perfectScrollbar(event) {
      var _this = this;

      if (typeof PerfectScrollbar !== 'undefined') {
        if (event === Event.INIT && !document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          this.ps = this.makeScrollbar();
        }

        if (event === Event.DESTROY) {
          this.destroyScrollbar();
        }

        if (event === Event.TOGGLE) {
          if (document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.destroyScrollbar();
          } else {
            this.ps = this.makeScrollbar(); // ToDo: find real fix for ps rtl

            this.ps.isRtl = false;
          }
        }

        if (event === Event.UPDATE && !document.body.classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
          // ToDo: Add smooth transition
          setTimeout(function () {
            _this.destroyScrollbar();

            _this.ps = _this.makeScrollbar(); // ToDo: find real fix for ps rtl

            _this.ps.isRtl = false;
          }, Default.transition);
        }
      }
    };

    _proto.makeScrollbar = function makeScrollbar(container) {
      if (container === void 0) {
        container = Selector.NAVIGATION_CONTAINER;
      }

      return new PerfectScrollbar(document.querySelector(container), {
        suppressScrollX: true
      });
    };

    _proto.destroyScrollbar = function destroyScrollbar() {
      if (this.ps) {
        this.ps.destroy();
        this.ps = null;
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
      var _this2 = this;

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

        _this2.perfectScrollbar(Event.UPDATE);
      });
      $(Selector.SIDEBAR_MINIMIZER).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

        _this2.perfectScrollbar(Event.TOGGLE);
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