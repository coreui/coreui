/*!
  * CoreUI search-button.js v5.7.0 (https://coreui.io)
  * Copyright 2026 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component.js'), require('./dom/event-handler.js'), require('./util/index.js')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './dom/event-handler', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SearchButton = factory(global.BaseComponent, global.EventHandler, global.Index));
})(this, (function (BaseComponent, EventHandler, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI search-button.js
   * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'search-button';
  const DATA_KEY = 'coreui.search-button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_BLUR_DATA_API = `blur${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_TRIGGER = `trigger${EVENT_KEY}`;
  const CLASS_NAME_SHORTCUT_KEYS = 'search-button-keys';
  const CLASS_NAME_SHORTCUT_KEY = 'search-button-key';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-coreui-search-button]';
  const SELECTOR_EDITABLE_TARGET = 'input, textarea, select, [contenteditable=""], [contenteditable="true"], [contenteditable="plaintext-only"]';
  const SELECTOR_PLACEHOLDER = '.search-button-placeholder';
  const SELECTOR_SHORTCUT_KEY = '.search-button-key';
  const SELECTOR_SHORTCUT_KEYS = '.search-button-keys';
  const Default = {
    preventDefault: true,
    shortcut: 'meta+/,ctrl+/'
  };
  const DefaultType = {
    preventDefault: 'boolean',
    shortcut: 'string'
  };
  const MODIFIER_KEYS = new Set(['alt', 'ctrl', 'meta', 'shift']);
  const KEY_ALIASES = {
    cmd: 'meta',
    command: 'meta',
    control: 'ctrl',
    option: 'alt',
    return: 'enter',
    esc: 'escape',
    spacebar: 'space',
    ' ': 'space'
  };
  const KEY_LABELS = {
    alt: 'Alt',
    ctrl: 'Ctrl',
    meta: '⌘',
    shift: 'Shift',
    space: 'Space'
  };

  /**
   * Class definition
   */

  class SearchButton extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._shortcutTriggered = false;
      this._shortcuts = this._parseShortcut(this._config.shortcut);
      this._preferredShortcut = this._getPreferredShortcut(this._shortcuts);
      this._syncShortcutKeys();
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
    trigger() {
      this._triggerEvent('api');
    }

    // Private
    _triggerEvent(trigger) {
      if (this._isDisabled()) {
        return;
      }
      EventHandler.trigger(this._element, EVENT_TRIGGER, {
        trigger
      });
    }
    _handleShortcut(event) {
      if (this._isDisabled() || event.defaultPrevented || event.repeat || this._shouldIgnoreShortcut(event)) {
        return false;
      }
      const matchedShortcut = this._shortcuts.find(shortcut => this._matchesShortcut(shortcut, event));
      if (!matchedShortcut) {
        return false;
      }
      if (this._config.preventDefault) {
        event.preventDefault();
      }
      this._shortcutTriggered = true;
      try {
        this._element.click();
      } finally {
        this._shortcutTriggered = false;
      }
      return true;
    }
    _isDisabled() {
      return this._element.classList.contains('disabled') || this._element.getAttribute('aria-disabled') === 'true' || this._element.disabled;
    }
    _ensureShortcutKeys() {
      const existingShortcutKeys = this._element.querySelector(SELECTOR_SHORTCUT_KEYS);
      if (existingShortcutKeys) {
        return existingShortcutKeys;
      }
      const shortcutKeys = document.createElement('span');
      shortcutKeys.className = CLASS_NAME_SHORTCUT_KEYS;
      shortcutKeys.setAttribute('aria-hidden', 'true');
      const placeholder = this._element.querySelector(SELECTOR_PLACEHOLDER);
      if (placeholder) {
        placeholder.after(shortcutKeys);
        return shortcutKeys;
      }
      this._element.append(shortcutKeys);
      return shortcutKeys;
    }
    _syncShortcutKeys() {
      var _this$_preferredShort;
      const shortcutKeys = this._ensureShortcutKeys();
      const shortcutTokens = this._formatShortcutTokens(((_this$_preferredShort = this._preferredShortcut) == null ? void 0 : _this$_preferredShort.shortcut) || '').filter(Boolean);
      shortcutKeys.replaceChildren();
      for (const key of shortcutTokens) {
        const shortcutKey = document.createElement('span');
        shortcutKey.className = CLASS_NAME_SHORTCUT_KEY;
        shortcutKey.textContent = key;
        shortcutKey.dataset.coreuiSearchButtonKey = key;
        shortcutKeys.append(shortcutKey);
      }
    }
    _syncActiveKeys(event) {
      const pressedKeys = this._getPressedKeys(event);
      for (const shortcutKey of this._element.querySelectorAll(SELECTOR_SHORTCUT_KEY)) {
        shortcutKey.classList.toggle(CLASS_NAME_ACTIVE, pressedKeys.has(shortcutKey.dataset.coreuiSearchButtonKey));
      }
    }
    _clearActiveKeys() {
      for (const shortcutKey of this._element.querySelectorAll(SELECTOR_SHORTCUT_KEY)) {
        shortcutKey.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
    _consumeShortcutTrigger() {
      const shortcutTriggered = this._shortcutTriggered;
      this._shortcutTriggered = false;
      return shortcutTriggered;
    }
    _shouldIgnoreShortcut(event) {
      return this._isEditableTarget(event.target) && !event.ctrlKey && !event.metaKey;
    }
    _isEditableTarget(target) {
      if (!(target instanceof Element)) {
        return false;
      }
      return target.matches(SELECTOR_EDITABLE_TARGET) || target.closest(SELECTOR_EDITABLE_TARGET);
    }
    _normalizeKey(key) {
      return KEY_ALIASES[key.toLowerCase()] || key.toLowerCase();
    }
    _parseShortcut(shortcut) {
      return shortcut.split(',').map(value => value.trim()).filter(Boolean).map(value => {
        const keys = value.split('+').map(part => this._normalizeKey(part.trim()));
        const modifiers = {
          alt: false,
          ctrl: false,
          meta: false,
          shift: false
        };
        let key = '';
        for (const part of keys) {
          if (MODIFIER_KEYS.has(part)) {
            modifiers[part] = true;
            continue;
          }
          key = part;
        }
        return {
          key,
          modifiers,
          shortcut: value
        };
      });
    }
    _matchesShortcut(shortcut, event) {
      if (!shortcut.key || this._normalizeKey(event.key) !== shortcut.key) {
        return false;
      }
      return shortcut.modifiers.alt === event.altKey && shortcut.modifiers.ctrl === event.ctrlKey && shortcut.modifiers.meta === event.metaKey && shortcut.modifiers.shift === event.shiftKey;
    }
    _formatShortcutTokens(shortcut) {
      return shortcut.split('+').map(part => this._normalizeKey(part.trim())).map(part => this._getKeyLabel(part));
    }
    _getPlatform() {
      var _window$navigator$use;
      return ((_window$navigator$use = window.navigator.userAgentData) == null ? void 0 : _window$navigator$use.platform) || window.navigator.platform || window.navigator.userAgent || '';
    }
    _isMacOS() {
      return /Mac|iPhone|iPad|iPod|macOS|Macintosh/.test(this._getPlatform());
    }
    _getPreferredShortcut(shortcuts) {
      return shortcuts.find(shortcut => {
        return this._isMacOS() ? shortcut.modifiers.meta : shortcut.modifiers.ctrl;
      }) || shortcuts[0] || null;
    }
    _getPressedKeys(event) {
      const pressedKeys = new Set();
      if (event.altKey) {
        pressedKeys.add(KEY_LABELS.alt);
      }
      if (event.ctrlKey) {
        pressedKeys.add(KEY_LABELS.ctrl);
      }
      if (event.metaKey) {
        pressedKeys.add(KEY_LABELS.meta);
      }
      if (event.shiftKey) {
        pressedKeys.add(KEY_LABELS.shift);
      }
      const normalizedKey = this._normalizeKey(event.key);
      const keyLabel = this._getKeyLabel(normalizedKey);
      if (!MODIFIER_KEYS.has(normalizedKey) && event.type === 'keydown') {
        pressedKeys.add(keyLabel);
      }
      return pressedKeys;
    }
    _getKeyLabel(key) {
      return KEY_LABELS[key] || (key.length === 1 ? key.toUpperCase() : `${key.charAt(0).toUpperCase()}${key.slice(1)}`);
    }

    // Static
    static searchButtonInterface(element, config) {
      const data = SearchButton.getOrCreateInstance(element, config);
      if (typeof config === 'string') {
        if (config.startsWith('_') || typeof data[config] !== 'function') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        SearchButton.searchButtonInterface(this, config);
      });
    }
    static _initializeDataApi() {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
        SearchButton.getOrCreateInstance(button);
      }
    }
    static _handleDataApiClick(event) {
      event.preventDefault();
      const button = event.target.closest(SELECTOR_DATA_TOGGLE);
      const data = SearchButton.getOrCreateInstance(button);
      const shortcutTriggered = data._consumeShortcutTrigger();
      if (shortcutTriggered) {
        data._triggerEvent('shortcut');
        return;
      }
      data._triggerEvent('click');
    }
    static _handleDataApiKeydown(event) {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
        const data = SearchButton.getOrCreateInstance(button);
        data._syncActiveKeys(event);
        if (data._handleShortcut(event)) {
          break;
        }
      }
    }
    static _handleDataApiKeyup(event) {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
        SearchButton.getOrCreateInstance(button)._syncActiveKeys(event);
      }
    }
    static _handleDataApiBlur() {
      for (const button of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
        SearchButton.getOrCreateInstance(button)._clearActiveKeys();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, `DOMContentLoaded${EVENT_KEY}${DATA_API_KEY}`, () => {
    SearchButton._initializeDataApi();
  });
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    SearchButton._handleDataApiClick(event);
  });
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, event => {
    SearchButton._handleDataApiKeydown(event);
  });
  EventHandler.on(document, EVENT_KEYUP_DATA_API, event => {
    SearchButton._handleDataApiKeyup(event);
  });
  EventHandler.on(window, EVENT_BLUR_DATA_API, () => {
    SearchButton._handleDataApiBlur();
  });

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(SearchButton);

  return SearchButton;

}));
//# sourceMappingURL=search-button.js.map
