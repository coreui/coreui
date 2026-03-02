/**
 * --------------------------------------------------------------------------
 * CoreUI chip.js
 * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { defineJQueryPlugin, getNextActiveElement } from './util/index.js'

/**
 * Constants
 */

const NAME = 'chip'
const DATA_KEY = 'coreui.chip'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_REMOVE = `remove${EVENT_KEY}`
const EVENT_REMOVED = `removed${EVENT_KEY}`
const EVENT_SELECT = `select${EVENT_KEY}`
const EVENT_SELECTED = `selected${EVENT_KEY}`
const EVENT_DESELECT = `deselect${EVENT_KEY}`
const EVENT_DESELECTED = `deselected${EVENT_KEY}`

const SELECTOR_CHIP_REMOVE = '.chip-remove'
const SELECTOR_DATA_CHIP = '[data-coreui-chip]'
const SELECTOR_FOCUSABLE_ITEMS = '.chip:not(.disabled)'

const CLASS_NAME_CHIP_CLICKABLE = 'chip-clickable'
const CLASS_NAME_CHIP_REMOVE = 'chip-remove'
const CLASS_NAME_ACTIVE = 'active'
const CLASS_NAME_DISABLED = 'disabled'

const DEFAULT_REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>'

const Default = {
  ariaRemoveLabel: 'Remove',
  disabled: false,
  removable: false,
  removeIcon: DEFAULT_REMOVE_ICON,
  selectable: false,
  selected: false
}

const DefaultType = {
  ariaRemoveLabel: 'string',
  disabled: 'boolean',
  removable: 'boolean',
  removeIcon: 'string',
  selectable: 'boolean',
  selected: 'boolean'
}

/**
 * Class definition
 */

class Chip extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._disabled = this._config.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)
    this._selected = this._config.selected || this._element.classList.contains(CLASS_NAME_ACTIVE)

    this._ensureRemoveButton()
    this._applyState()

    if (this._config.selectable || this._config.removable) {
      this._makeFocusable()
    }

    this._addEventListeners()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  remove() {
    const removeEvent = EventHandler.trigger(this._element, EVENT_REMOVE)

    if (removeEvent.defaultPrevented) {
      return
    }

    this._destroyElement()
  }

  toggle() {
    if (!this._config.selectable) {
      return
    }

    if (this._selected) {
      this.deselect()
      return
    }

    this.select()
  }

  select() {
    if (!this._config.selectable) {
      return
    }

    if (this._selected) {
      return
    }

    const selectEvent = EventHandler.trigger(this._element, EVENT_SELECT)
    if (selectEvent.defaultPrevented) {
      return
    }

    this._selected = true
    this._applyState()

    EventHandler.trigger(this._element, EVENT_SELECTED)
  }

  deselect() {
    if (!this._config.selectable) {
      return
    }

    if (!this._selected) {
      return
    }

    const deselectEvent = EventHandler.trigger(this._element, EVENT_DESELECT)
    if (deselectEvent.defaultPrevented) {
      return
    }

    this._selected = false
    this._applyState()

    EventHandler.trigger(this._element, EVENT_DESELECTED)
  }

  // Private
  _addEventListeners() {
    EventHandler.on(this._element, 'keydown', event => this._handleKeydown(event))

    EventHandler.on(this._element, 'click', event => {
      if (this._disabled) {
        return
      }

      if (event.target.closest(SELECTOR_CHIP_REMOVE)) {
        return
      }

      this.toggle()
    })

    EventHandler.on(this._element, 'click', SELECTOR_CHIP_REMOVE, event => {
      event.stopPropagation()
      this.remove()
    })
  }

  _applyState() {
    if (!this._disabled && (this._config.clickable || this._config.selectable)) {
      this._element.classList.add(CLASS_NAME_CHIP_CLICKABLE)
    }

    if (this._disabled) {
      this._element.classList.add(CLASS_NAME_DISABLED)
      this._element.setAttribute('aria-disabled', 'true')
    } else {
      this._element.classList.remove(CLASS_NAME_DISABLED)
      if (this._element.getAttribute('aria-disabled') === 'true') {
        this._element.setAttribute('aria-disabled', 'false')
      }
    }

    if (this._config.selectable) {
      this._element.classList.toggle(CLASS_NAME_ACTIVE, this._selected)
      this._element.setAttribute('aria-selected', this._selected ? 'true' : 'false')
    } else {
      this._element.classList.remove(CLASS_NAME_ACTIVE)
      if (this._element.getAttribute('aria-selected') === 'true') {
        this._element.setAttribute('aria-selected', 'false')
      }
    }
  }

  _createRemoveButton() {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = CLASS_NAME_CHIP_REMOVE
    button.setAttribute('aria-label', this._config.ariaRemoveLabel)
    button.setAttribute('tabindex', '-1') // Not in tab order, chips handle keyboard
    button.innerHTML = this._config.removeIcon
    return button
  }

  _ensureRemoveButton() {
    if (!this._config.removable) {
      return
    }

    if (SelectorEngine.findOne(SELECTOR_CHIP_REMOVE, this._element)) {
      return
    }

    this._element.append(this._createRemoveButton())
  }

  _makeFocusable() {
    if (this._element.hasAttribute('tabindex') || this._disabled) {
      return
    }

    this._element.setAttribute('tabindex', '0')
  }

  _handleKeydown(event) {
    const { key } = event
    if (this._disabled) {
      return
    }

    switch (key) {
      case 'Enter':
      case ' ':
      case 'Spacebar': {
        if (!this._config.selectable) {
          return
        }

        event.preventDefault()
        this.toggle()
        break
      }

      case 'Backspace':
      case 'Delete': {
        if (this._config.removable) {
          event.preventDefault()
          const sibling = this._getFocusableSibling(false) || this._getFocusableSibling(true)
          sibling?.focus()
          this.remove()
        }

        break
      }

      case 'ArrowLeft': {
        event.preventDefault()
        const chip = this._getFocusableSibling(false)
        chip?.focus()

        break
      }

      case 'ArrowRight': {
        event.preventDefault()
        const chip = this._getFocusableSibling(true)
        chip?.focus()

        break
      }

      case 'Home': {
        event.preventDefault()
        this._navigateToEdge(0)
        break
      }

      case 'End': {
        event.preventDefault()
        this._navigateToEdge(-1)
        break
      }

      // No default
    }
  }

  _getFocusableSibling(shouldGetNext) {
    const chips = SelectorEngine.find(SELECTOR_FOCUSABLE_ITEMS, this._element.parentElement)
    const sibling = getNextActiveElement(chips, this._element, shouldGetNext, !chips.includes(this._element))
    return sibling === this._element ? null : sibling
  }

  _navigateToEdge(targetIndex) {
    const chips = SelectorEngine.find(SELECTOR_FOCUSABLE_ITEMS, this._element.parentElement)
    if (chips.length === 0) {
      return
    }

    const targetChip = chips.at(targetIndex)
    targetChip?.focus()
  }

  _destroyElement() {
    EventHandler.trigger(this._element, EVENT_REMOVED)
    this._element.remove()
    this.dispose()
  }

  // Static
  static chipInterface(element, config) {
    const data = Chip.getOrCreateInstance(element, config)

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = Chip.getOrCreateInstance(this)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config](this)
    })
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, `DOMContentLoaded${EVENT_KEY}${DATA_API_KEY}`, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP)) {
    Chip.chipInterface(element)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(Chip)

export default Chip
