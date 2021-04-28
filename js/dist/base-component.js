/*!
  * CoreUI base-component.js v4.0.0-beta.0 (https://coreui.io)
  * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Base = factory(global.Data));
}(this, (function (Data) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-beta.0): alert.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '4.0.0-beta.0';

  class BaseComponent {
    constructor(element) {
      element = typeof element === 'string' ? document.querySelector(element) : element;

      if (!element) {
        return;
      }

      this._element = element;
      Data__default['default'].set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data__default['default'].remove(this._element, this.constructor.DATA_KEY);
      this._element = null;
    }
    /** Static */


    static getInstance(element) {
      return Data__default['default'].get(element, this.DATA_KEY);
    }

    static get VERSION() {
      return VERSION;
    }

  }

  return BaseComponent;

})));
//# sourceMappingURL=base-component.js.map
