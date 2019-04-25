/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.1): async-load.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import {
  jQuery as $
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/eventHandler'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'asyncLoad'
const VERSION = '3.0.0'
const DATA_KEY = 'coreui.asyncLoad'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ClassName = {
  ACTIVE: 'active',
  NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
  NAV_PILLS: 'nav-pills',
  NAV_TABS: 'nav-tabs',
  OPEN: 'open',
  VIEW_SCRIPT: 'view-script'
}

const Event = {
  CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
  LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
  XHR_STATUS: 'xhr'
}

const Selector = {
  HEAD: 'head',
  NAV_DROPDOWN: '.nav .nav-dropdown',
  NAV_LINK: '.dropdown-nav-link, .nav .nav-link',
  NAV_ITEM: '.nav .nav-item',
  SIDEBAT_NAV: '.c-sidebar-nav, .sidebar-nav',
  VIEW_SCRIPT: '.view-script'
}

const Default = {
  defaultPage: 'main.html',
  errorPage: '404.html',
  subpagesDirectory: 'views/'
}

class AsyncLoad {
  constructor(element, config) {
    this._config = this._getConfig(config)
    this._element = element
    const url = location.hash.replace(/^#/, '')

    if (url !== '') {
      this._setUpUrl(url)
    } else {
      this._setUpUrl(this._config.defaultPage)
    }

    this._addEventListeners()
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  // Private

  _getConfig(config) {
    config = {
      ...Default,
      ...config
    }
    return config
  }

  _loadPage(url) {
    const element = this._element
    const config = this._config

    const loadScripts = (src, element = 0) => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = src[element]
      script.className = ClassName.VIEW_SCRIPT
      // eslint-disable-next-line no-multi-assign, unicorn/prefer-add-event-listener
      script.onload = script.onreadystatechange = () => {
        if (!this.readyState || this.readyState === 'complete') {
          if (src.length > element + 1) {
            loadScripts(src, element + 1)
          }
        }
      }

      const body = document.getElementsByTagName('body')[0]
      body.appendChild(script)
    }

    const removeScripts = () => {
      const oldScripts = document.querySelectorAll(Selector.VIEW_SCRIPT)
      if (oldScripts.length) {
        oldScripts.forEach(oldScript => {
          oldScript.remove()
        })
      }
    }

    const xhr = new XMLHttpRequest()
    xhr.open('GET', config.subpagesDirectory + url)
    let event = new CustomEvent(Event.XHR_STATUS, {
      detail: {
        url,
        status: xhr.status
      }
    })
    element.dispatchEvent(event)
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    xhr.onload = result => {
      if (xhr.status === 200) {
        event = new CustomEvent(Event.XHR_STATUS, {
          detail: {
            url,
            status: xhr.status
          }
        })
        element.dispatchEvent(event)
        const wrapper = document.createElement('div')
        wrapper.innerHTML = result.target.response

        // eslint-disable-next-line unicorn/prefer-spread
        const scripts = Array.from(wrapper.querySelectorAll('script')).map(script => script.attributes.getNamedItem('src').nodeValue)

        wrapper.querySelectorAll('script').forEach(script => script.remove(script))

        window.scrollTo(0, 0)
        element.innerHTML = ''
        element.appendChild(wrapper)
        removeScripts()
        if (scripts.length) {
          loadScripts(scripts)
        }

        window.location.hash = url
      } else {
        window.location.href = config.errorPage
      }
    }

    xhr.send()
  }

  _setUpUrl(url) {
    url = url.replace(/^\//, '').split('?')[0]

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(element => {
      element.classList.remove(ClassName.ACTIVE)
    })

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(document.querySelectorAll(Selector.NAV_LINK)).forEach(element => {
      element.classList.remove(ClassName.ACTIVE)
    })

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(element => {
      element.classList.remove(ClassName.OPEN)
    })

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(document.querySelectorAll(Selector.NAV_DROPDOWN)).forEach(element => {
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(element.querySelectorAll(`a[href*="${url}"]`)).length > 0) {
        element.classList.add(ClassName.OPEN)
      }
    })

    // eslint-disable-next-line unicorn/prefer-spread
    Array.from(document.querySelectorAll(`${Selector.NAV_ITEM} a[href*="${url}"]`)).forEach(element => {
      element.classList.add(ClassName.ACTIVE)
    })

    this._loadPage(url)
  }

  _loadBlank(url) {
    window.open(url)
  }

  _loadTop(url) {
    window.location = url
  }

  _update(link) {
    if (link.href !== '#') {
      if (typeof link.dataset.toggle === 'undefined' || link.dataset.toggle === 'null') {
        if (link.target === '_top') {
          this._loadTop(link.href)
        } else if (link.target === '_blank') {
          this._loadBlank(link.href)
        } else {
          this._setUpUrl(link.getAttribute('href'))
        }
      }
    }
  }

  _addEventListeners() {
    EventHandler.on(document, Event.CLICK_DATA_API, Selector.NAV_LINK, event => {
      event.preventDefault()
      let link = event.target
      if (!link.classList.contains(ClassName.NAV_LINK)) {
        link = link.closest(Selector.NAV_LINK)
      }

      if (!link.classList.contains(ClassName.NAV_DROPDOWN_TOGGLE) && link.getAttribute('href') !== '#') {
        this._update(link)
      }
    })
  }

  // Static

  static _asyncLoadInterface(element, config) {
    let data = Data.getData(element, DATA_KEY)
    const _config = typeof config === 'object' && config

    if (!data) {
      data = new AsyncLoad(element, _config)
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    }
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      AsyncLoad._asyncLoadInterface(this, config)
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .asyncLoad to jQuery only if jQuery is present
 */

if (typeof $ !== 'undefined') {
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  $.fn[NAME] = AsyncLoad._jQueryInterface
  $.fn[NAME].Constructor = AsyncLoad
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return AsyncLoad._jQueryInterface
  }
}

export default AsyncLoad
