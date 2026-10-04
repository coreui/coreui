/*!
  * CoreUI focustrap.js v5.9.1 (https://coreui.io)
  * Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('../dom/event-handler.js'), require('../dom/selector-engine.js'), require('./config.js')) :
  typeof define === 'function' && define.amd ? define(['../dom/event-handler', '../dom/selector-engine', './config'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Focustrap = factory(global.EventHandler, global.SelectorEngine, global.Config));
})(this, (function (EventHandler, SelectorEngine, Config) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI util/focustrap.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   *
   * This is a modified version of the Bootstrap's util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'focustrap';
  const DATA_KEY = 'coreui.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };
  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  // Only the most recently activated trap reacts. Two traps over disjoint
  // elements would otherwise throw focus at each other without end.
  const activeTraps = [];

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
      this._focusinHandler = event => this._handleFocusin(event);
      this._keydownHandler = event => this._handleKeydown(event);
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.on(document, EVENT_FOCUSIN, this._focusinHandler);
      EventHandler.on(document, EVENT_KEYDOWN_TAB, this._keydownHandler);
      activeTraps.push(this);
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      activeTraps.splice(activeTraps.indexOf(this), 1);
      EventHandler.off(document, EVENT_FOCUSIN, this._focusinHandler);
      EventHandler.off(document, EVENT_KEYDOWN_TAB, this._keydownHandler);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (!this._isTopmost() || event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (!this._isTopmost() || event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
    _isTopmost() {
      return activeTraps[activeTraps.length - 1] === this;
    }
  }

  return FocusTrap;

}));
//# sourceMappingURL=focustrap.js.map
