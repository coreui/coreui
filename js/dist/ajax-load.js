function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-beta.5): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var AjaxLoad = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'ajaxLoad';
  var VERSION = '2.0.0-beta.5';
  var DATA_KEY = 'coreui.ajaxLoad';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    NAV_PILLS: 'nav-pills',
    NAV_TABS: 'nav-tabs',
    OPEN: 'open'
  };
  var Event = {
    CLICK: 'click'
  };
  var Selector = {
    NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
    NAV_LINK: '.sidebar-nav .nav-link',
    NAV_ITEM: '.sidebar-nav .nav-item'
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
      url !== '' ? this.setUpUrl(url) : this.setUpUrl(this._config.defaultPage);

      this._addEventListeners();
    } // Getters


    var _proto = AjaxLoad.prototype;

    // Public
    _proto.loadPage = function loadPage(url) {
      var element = this._element;
      var config = this._config;
      $.ajax({
        type: 'GET',
        url: config.subpagesDirectory + url,
        dataType: 'html',
        cache: false,
        async: false,
        success: function success() {
          if (typeof Pace !== 'undefined') {
            Pace.restart();
          }

          $('body').animate({
            scrollTop: 0
          }, 0);
          $(element).load(config.subpagesDirectory + url, null, function () {
            window.location.hash = url;
          });
        },
        error: function error() {
          window.location.href = config.errorPage;
        }
      });
    };

    _proto.setUpUrl = function setUpUrl(url) {
      $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
      $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN); // eslint-disable-next-line prefer-template

      $(Selector.NAV_DROPDOWN + ':has(a[href="' + url.replace(/^\//, '').split('?')[0] + '"])').addClass(ClassName.OPEN); // eslint-disable-next-line prefer-template

      $(Selector.NAV_ITEM + ' a[href="' + url.replace(/^\//, '').split('?')[0] + '"]').addClass(ClassName.ACTIVE);
      this.loadPage(url);
    };

    _proto.loadBlank = function loadBlank(url) {
      window.open(url);
    };

    _proto.loadTop = function loadTop(url) {
      window.location = url;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = Object.assign({}, Default, config);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(document).on(Event.CLICK, Selector.NAV_LINK + '[href!="#"]', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.target === '_top') {
          _this.loadTop(event.currentTarget.href);
        } else if (event.currentTarget.target === '_blank') {
          _this.loadBlank(event.currentTarget.href);
        } else {
          _this.setUpUrl(event.currentTarget.pathname);
        }
      });
    }; // Static


    AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new AjaxLoad(this, _config);
          $(this).data(DATA_KEY, data);
        }
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
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = AjaxLoad._jQueryInterface;
  $.fn[NAME].Constructor = AjaxLoad;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return AjaxLoad._jQueryInterface;
  };

  return AjaxLoad;
}($);
//# sourceMappingURL=ajax-load.js.map