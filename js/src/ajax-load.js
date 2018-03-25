import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-beta.0): ajax-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */


const AjaxLoad = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                       = 'ajaxLoad'
  const VERSION                    = '2.0.0-beta.0'
  const DATA_KEY                   = 'coreui.ajaxLoad'
  const JQUERY_NO_CONFLICT         = $.fn[NAME]

  const ClassName = {
    ACTIVE    : 'active',
    NAV_PILLS : 'nav-pills',
    NAV_TABS  : 'nav-tabs',
    OPEN      : 'open'
  }

  const Event = {
    CLICK : 'click'
  }

  const Selector = {
    NAV_DROPDOWN : '.sidebar-nav .nav-dropdown',
    NAV_LINK     : '.sidebar-nav .nav-link',
    NAV_ITEM     : '.sidebar-nav .nav-item'
  }

  const Default = {
    defaultPage       : 'main.html',
    errorPage         : '404.html',
    subpagesDirectory : 'views/'
  }

  class AjaxLoad {
    constructor(element, config) {
      this._config = this._getConfig(config)
      this._element = element

      const url = location.hash.replace(/^#/, '')
      url !== '' ? this.setUpUrl(url) : this.setUpUrl(this._config.defaultPage)
      this._addEventListeners()
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // Public

    loadPage(url) {
      const element = this._element
      const config = this._config

      $.ajax({
        type : 'GET',
        url : config.subpagesDirectory + url,
        dataType : 'html',
        cache : false,
        async: false,
        success: function success() {
          if (typeof Pace !== 'undefined') {
            Pace.restart()
          }
          $('body').animate({
            scrollTop: 0
          }, 0)
          $(element).load(config.subpagesDirectory + url, null, () => {
            window.location.hash = url
          })
        },
        error: function error() {
          window.location.href = config.errorPage
        }
      })
    }

    setUpUrl(url) {
      $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE)
      $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN)
      // eslint-disable-next-line prefer-template
      $(Selector.NAV_DROPDOWN + ':has(a[href="' + url.replace(/^\//, '').split('?')[0] + '"])').addClass(ClassName.OPEN)
      // eslint-disable-next-line prefer-template
      $(Selector.NAV_ITEM + ' a[href="' + url.replace(/^\//, '').split('?')[0] + '"]').addClass(ClassName.ACTIVE)

      this.loadPage(url)
    }

    loadBlank(url) {
      window.open(url)
    }

    loadTop(url) {
      window.location = url
    }

    // Private

    _getConfig(config) {
      config = {
        ...Default,
        ...config
      }
      return config
    }

    _addEventListeners() {
      $(document).on(Event.CLICK, Selector.NAV_LINK + '[href!="#"]', (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (event.currentTarget.target === '_top') {
          this.loadTop(event.currentTarget.href)
        } else if (event.currentTarget.target === '_blank') {
          this.loadBlank(event.currentTarget.href)
        } else {
          this.setUpUrl(event.currentTarget.pathname)
        }
      })
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        const _config = typeof config === 'object' && config

        if (!data) {
          data = new AjaxLoad(this, _config)
          $(this).data(DATA_KEY, data)
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = AjaxLoad._jQueryInterface
  $.fn[NAME].Constructor = AjaxLoad
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return AjaxLoad._jQueryInterface
  }

  return AjaxLoad
})($)

export default AjaxLoad
