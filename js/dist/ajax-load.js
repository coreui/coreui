function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var AjaxLoad = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'ajaxload';
  var VERSION = '2.0.0-alpha.1';
  var DATA_KEY = 'coreui.ajaxload';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var DEFAULT_PAGE = 'main.html';
  var SUBPAGES_DIRECTORY = 'views/';
  var PAGE_404 = '404.html';
  var MAIN_CONTENT = '#ui-view';
  var PAGE_LOAD_TRANSITION_SPEED = 250;

  var AjaxLoad =
  /*#__PURE__*/
  function () {
    function AjaxLoad(element) {
      this._element = element;
      var url = location.hash.replace(/^#/, '');
      url !== '' ? this.setUpUrl(url) : setUpUrl(DEFAULT_PAGE);

      this._addEventListeners();
    } // Getters


    var _proto = AjaxLoad.prototype;

    // Public
    _proto.loadPage = function loadPage(url) {
      $.ajax({
        type: 'GET',
        url: SUBPAGES_DIRECTORY + url,
        dataType: 'html',
        cache: false,
        async: true,
        beforeSend: function beforeSend() {
          MAIN_CONTENT.css({
            opacity: 0
          });
        },
        success: function success() {
          // eslint-disable-next-line no-undef
          if (typeof Pace !== 'undefined') {
            // eslint-disable-next-line no-undef
            Pace.restart();
          }

          $('html, body').animate({
            scrollTop: 0
          }, 0);
          MAIN_CONTENT.load(SUBPAGES_DIRECTORY + url, null, function (response, status, xhr) {
            // console.log(response.getElementsByTagName("script"))
            window.location.hash = url;
          }).delay(PAGE_LOAD_TRANSITION_SPEED).animate({
            opacity: 1
          }, 0);
        },
        error: function error() {
          window.location.href = PAGE_404;
        }
      });
    };

    _proto.setUpUrl = function setUpUrl(url) {
      $('nav .nav li .nav-link').removeClass('active');
      $('nav .nav li.nav-dropdown').removeClass('open'); // eslint-disable-next-line prefer-template

      $('nav .nav li:has(a[href="' + url.split('?')[0] + '"])').addClass('open'); // eslint-disable-next-line prefer-template

      $('nav .nav a[href="' + url.split('?')[0] + '"]').addClass('active');
      this.loadPage(url);
    }; // Private


    _proto._addEventListeners = function _addEventListeners() {
      $(document).on('click', '.nav a[href!="#"]', function (event) {
        var thisNav = $(this).parent().parent();

        if (thisNav.hasClass('nav-tabs') || thisNav.hasClass('nav-pills')) {
          event.preventDefault();
        } else if ($(this).attr('target') === '_top') {
          event.preventDefault();
          var target = $(event.currentTarget);
          window.location = target.attr('href');
        } else if ($(this).attr('target') === '_blank') {
          event.preventDefault();

          var _target = $(event.currentTarget);

          window.open(_target.attr('href'));
        } else {
          event.preventDefault();

          var _target2 = $(event.currentTarget);

          SetUpUrl(_target2.attr('href'));
        }
      });
      $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
      });
    };

    _createClass(AjaxLoad, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return AjaxLoad;
  }();

  return AjaxLoad;
}($);
//# sourceMappingURL=ajax-load.js.map