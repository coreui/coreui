import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */


const AjaxLoad = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                       = 'ajaxload'
  const VERSION                    = '2.0.0-alpha.1'
  const DATA_KEY                   = 'coreui.ajaxload'
  const EVENT_KEY                  = `.${DATA_KEY}`
  const DATA_API_KEY               = '.data-api'
  const JQUERY_NO_CONFLICT         = $.fn[NAME]
  const DEFAULT_PAGE               = 'main.html'
  const SUBPAGES_DIRECTORY         = 'views/'
  const PAGE_404                   = '404.html'
  const MAIN_CONTENT               = '#ui-view'
  const PAGE_LOAD_TRANSITION_SPEED = 250

  class AjaxLoad {
    constructor(element) {
      this._element = element
      const url = location.hash.replace(/^#/, '')
      url !== '' ? this.setUpUrl(url) : setUpUrl(DEFAULT_PAGE)
      this._addEventListeners()
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    loadPage(url) {
      $.ajax({
        type : 'GET',
        url : SUBPAGES_DIRECTORY + url,
        dataType : 'html',
        cache : false,
        async: true,
        beforeSend: function beforeSend() {
          MAIN_CONTENT.css({
            opacity: 0
          })
        },
        success: function success() {
          // eslint-disable-next-line no-undef
          if (typeof Pace !== 'undefined') {
            // eslint-disable-next-line no-undef
            Pace.restart()
          }
          $('html, body').animate({
            scrollTop: 0
          }, 0)
          MAIN_CONTENT.load(SUBPAGES_DIRECTORY + url, null, (response, status, xhr) => {
            // console.log(response.getElementsByTagName("script"))
            window.location.hash = url
          }).delay(PAGE_LOAD_TRANSITION_SPEED).animate({
            opacity : 1
          }, 0)
        },
        error: function error() {
          window.location.href = PAGE_404
        }
      })
    }

    setUpUrl(url) {
      $('nav .nav li .nav-link').removeClass('active')
      $('nav .nav li.nav-dropdown').removeClass('open')
      // eslint-disable-next-line prefer-template
      $('nav .nav li:has(a[href="' + url.split('?')[0] + '"])').addClass('open')
      // eslint-disable-next-line prefer-template
      $('nav .nav a[href="' + url.split('?')[0] + '"]').addClass('active')

      this.loadPage(url)
    }

    // Private

    _addEventListeners() {
      $(document).on('click', '.nav a[href!="#"]', function (event) {
        const thisNav = $(this).parent().parent()
        if (thisNav.hasClass('nav-tabs') || thisNav.hasClass('nav-pills')) {
          event.preventDefault()
        } else if ($(this).attr('target') === '_top') {
          event.preventDefault()
          const target = $(event.currentTarget)
          window.location = target.attr('href')
        } else if ($(this).attr('target') === '_blank') {
          event.preventDefault()
          const target = $(event.currentTarget)
          window.open(target.attr('href'))
        } else {
          event.preventDefault()
          const target = $(event.currentTarget)
          SetUpUrl(target.attr('href'))
        }
      })

      $(document).on('click', 'a[href="#"]', (event) => {
        event.preventDefault()
      })
    }
  }

  return AjaxLoad
})($)

export default AjaxLoad
