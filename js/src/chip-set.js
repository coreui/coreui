/**
 * --------------------------------------------------------------------------
 * CoreUI chip-set.js
 * Licensed under MIT (https://github.com/coreui/coreui/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import Chip from './chip.js'
import EventHandler from './dom/event-handler.js'
import Manipulator from './dom/manipulator.js'
import SelectorEngine from './dom/selector-engine.js'
import { defineJQueryPlugin, getNextActiveElement, isRTL } from './util/index.js'

/**
 * Constants
 */

const NAME = 'chip-set'
const DATA_KEY = 'coreui.chip-set'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_ADD = 'add'
const EVENT_REMOVE = 'remove'
const EVENT_CHANGE = 'change'
const EVENT_SELECT = 'select'
const EVENT_KEYDOWN = 'keydown'

const EVENT_CHIP_SELECTED = 'selected.coreui.chip'
const EVENT_CHIP_DESELECTED = 'deselected.coreui.chip'
const EVENT_CHIP_REMOVE = 'remove.coreui.chip'
const EVENT_CHIP_REMOVED = 'removed.coreui.chip'

const SELECTOR_DATA_CHIP_SET = '[data-coreui-chip-set]'
const SELECTOR_CHIP = '.chip'
const SELECTOR_CHIP_ACTIVE = `${SELECTOR_CHIP}.active`
const SELECTOR_CHIP_REMOVE = '.chip-remove'
const SELECTOR_FOCUSABLE_ITEMS = '.chip:not(.disabled)'

const CLASS_NAME_CHIP = 'chip'
const CLASS_NAME_DISABLED = 'disabled'

const SELECTION_MODE_SINGLE = 'single'

const DEFAULT_REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>'
const DEFAULT_SELECTED_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M425.373 89.373 196 318.745 86.627 209.373l-45.254 45.254L196 409.255l274.627-274.628z"/></svg>'

const Default = {
  ariaRemoveLabel: 'Remove',
  chipClassName: null,
  disabled: false,
  filter: false,
  maxChips: null,
  removable: false,
  removeIcon: DEFAULT_REMOVE_ICON,
  selectable: false,
  selectedIcon: DEFAULT_SELECTED_ICON,
  selectionMode: 'multiple',
  unique: false
}

const DefaultType = {
  ariaRemoveLabel: 'string',
  chipClassName: '(string|function|null)',
  disabled: 'boolean',
  filter: 'boolean',
  maxChips: '(number|null)',
  removable: 'boolean',
  removeIcon: 'string',
  selectable: 'boolean',
  selectedIcon: 'string',
  selectionMode: 'string',
  unique: 'boolean'
}

/**
 * Class definition
 */

class ChipSet extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._disabled = this._config.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)
    this._pendingFocus = null
    this._chips = []

    this._initChips()
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
  add(chip) {
    if (!this._canModify()) {
      return null
    }

    const isElement = typeof chip !== 'string'
    const value = isElement ? this._getChipValue(chip) : String(chip).trim()

    if (!value) {
      return null
    }

    if (this._config.unique && this._chips.includes(value)) {
      return null
    }

    if (this._config.maxChips !== null && this._chips.length >= this._config.maxChips) {
      return null
    }

    const addEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_ADD), {
      value,
      relatedTarget: this._input ?? null
    })

    if (addEvent.defaultPrevented) {
      return null
    }

    const element = isElement ? chip : this._createChip(value)
    this._appendChip(element)
    this._setupChip(element)
    this._chips.push(value)

    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_CHANGE), {
      values: this.getValues()
    })

    return element
  }

  remove(chipOrValue) {
    if (!this._canModify()) {
      return false
    }

    let chip
    let value

    if (typeof chipOrValue === 'string') {
      value = chipOrValue
      chip = this._findChipByValue(value)
    } else {
      chip = chipOrValue
      value = this._getChipValue(chip)
    }

    if (!chip || !value) {
      return false
    }

    const removeEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_REMOVE), {
      value,
      chip,
      relatedTarget: this._input ?? null
    })

    if (removeEvent.defaultPrevented) {
      return false
    }

    const instance = Chip.getInstance(chip)
    if (instance) {
      instance.remove()
    } else {
      chip.remove()
      this._handleChipRemoval(chip, value)
    }

    return !chip.isConnected
  }

  removeSelected() {
    for (const chip of this.getSelected()) {
      this.remove(chip)
    }
  }

  clear() {
    for (const chip of this._getChipElements()) {
      this.remove(chip)
    }
  }

  selectChip(chip) {
    if (!this._getChipElements().includes(chip)) {
      return
    }

    Chip.getInstance(chip)?.select()
  }

  selectAll() {
    if (!this._config.selectable) {
      return
    }

    for (const chip of this._getChipElements()) {
      Chip.getInstance(chip)?.select()
    }
  }

  deselectAll() {
    for (const chip of this.getSelected()) {
      Chip.getInstance(chip)?.deselect()
    }
  }

  clearSelection() {
    this.deselectAll()
    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
      selected: this.getSelectedValues()
    })
  }

  getSelected() {
    return SelectorEngine.find(SELECTOR_CHIP_ACTIVE, this._element)
  }

  getValues() {
    return [...this._chips]
  }

  getSelectedValues() {
    return this.getSelected().map(chip => this._getChipValue(chip))
  }

  dispose() {
    EventHandler.off(this._element, Chip.EVENT_KEY)
    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    // Filter chips are selectable by definition.
    if (config.filter) {
      config.selectable = true
    }

    return config
  }

  _canModify() {
    return !this._disabled
  }

  _appendChip(chip) {
    this._element.append(chip)
  }

  _getChipElements() {
    return SelectorEngine.find(SELECTOR_CHIP, this._element)
  }

  _findChipByValue(value) {
    return this._getChipElements().find(chip => this._getChipValue(chip) === value)
  }

  _getChipValue(chip) {
    if (chip.dataset.coreuiChipValue) {
      return chip.dataset.coreuiChipValue
    }

    const clone = chip.cloneNode(true)
    const remove = SelectorEngine.findOne(SELECTOR_CHIP_REMOVE, clone)
    if (remove) {
      remove.remove()
    }

    return clone.textContent?.trim() || ''
  }

  _getFocusableChips() {
    return SelectorEngine.find(SELECTOR_FOCUSABLE_ITEMS, this._element)
  }

  _initChips() {
    for (const chip of this._getChipElements()) {
      const value = this._getChipValue(chip)
      if (value) {
        this._chips.push(value)
        this._applyChipClassName(chip, value)
      }

      this._setupChip(chip)
    }
  }

  _setupChip(chip) {
    Chip.getOrCreateInstance(chip, this._getChipConfig(chip))
  }

  _getChipConfig(chip) {
    // A chip's own data attributes override the set's options.
    return {
      ariaRemoveLabel: this._config.ariaRemoveLabel,
      disabled: this._disabled,
      filter: this._config.filter,
      removable: this._config.removable,
      removeIcon: this._config.removeIcon,
      selectable: this._config.selectable,
      selectedIcon: this._config.selectedIcon,
      ...Manipulator.getDataAttributes(chip)
    }
  }

  _createChip(value) {
    const chip = document.createElement('span')
    chip.className = CLASS_NAME_CHIP
    chip.dataset.coreuiChipValue = value
    chip.append(document.createTextNode(value))
    this._applyChipClassName(chip, value)
    return chip
  }

  _applyChipClassName(chip, value) {
    const className = this._resolveChipClassName(value)
    if (!className) {
      return
    }

    chip.classList.add(...className.split(/\s+/).filter(Boolean))
  }

  _resolveChipClassName(value) {
    const { chipClassName } = this._config
    if (!chipClassName) {
      return ''
    }

    if (typeof chipClassName === 'function') {
      const resolvedClassName = chipClassName(value)
      return typeof resolvedClassName === 'string' ? resolvedClassName : ''
    }

    return typeof chipClassName === 'string' ? chipClassName : ''
  }

  _addEventListeners() {
    EventHandler.on(this._element, this.constructor.eventName(EVENT_KEYDOWN), SELECTOR_CHIP, event => this._handleKeydown(event))

    EventHandler.on(this._element, EVENT_CHIP_SELECTED, SELECTOR_CHIP, event => this._handleSelectionChange(event))
    EventHandler.on(this._element, EVENT_CHIP_DESELECTED, SELECTOR_CHIP, event => this._handleSelectionChange(event))
    EventHandler.on(this._element, EVENT_CHIP_REMOVE, SELECTOR_CHIP, event => this._handleChipRemove(event))
    EventHandler.on(this._element, EVENT_CHIP_REMOVED, SELECTOR_CHIP, event => this._handleChipRemoved(event))
  }

  _handleKeydown(event) {
    const chip = event.target.closest(SELECTOR_CHIP)
    if (!chip || chip.classList.contains(CLASS_NAME_DISABLED)) {
      return
    }

    switch (event.key) {
      case 'ArrowLeft': {
        event.preventDefault()
        // In RTL the visual direction is mirrored, so ArrowLeft moves to the next chip.
        this._focusSibling(chip, isRTL())
        break
      }

      case 'ArrowRight': {
        event.preventDefault()
        this._focusSibling(chip, !isRTL())
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

  _focusSibling(chip, shouldGetNext) {
    const chips = this._getFocusableChips()
    if (chips.length === 0) {
      return
    }

    // No cycling: navigation stops at the edges.
    const sibling = getNextActiveElement(chips, chip, shouldGetNext, false)
    if (sibling && sibling !== chip) {
      sibling.focus()
    }
  }

  _getRemovalNeighbor(chip) {
    const chips = this._getFocusableChips()
    if (chips.length === 0) {
      return null
    }

    // Prefer the next chip, fall back to the previous one at the end.
    const next = getNextActiveElement(chips, chip, true, false)
    if (next && next !== chip) {
      return next
    }

    const previous = getNextActiveElement(chips, chip, false, false)
    return previous && previous !== chip ? previous : null
  }

  _navigateToEdge(targetIndex) {
    const chips = this._getFocusableChips()
    chips.at(targetIndex)?.focus()
  }

  _handleSelectionChange(event) {
    const chip = event.target.closest(SELECTOR_CHIP)
    if (this._config.selectionMode === SELECTION_MODE_SINGLE && chip?.matches(SELECTOR_CHIP_ACTIVE)) {
      this._enforceSingleSelection(chip)
    }

    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
      selected: this.getSelectedValues()
    })
  }

  _enforceSingleSelection(selectedChip) {
    for (const chip of this.getSelected()) {
      if (chip !== selectedChip) {
        Chip.getInstance(chip)?.deselect()
      }
    }
  }

  _handleChipRemove(event) {
    const chip = event.target.closest(SELECTOR_CHIP)
    this._pendingFocus = chip ? this._getRemovalNeighbor(chip) : null
  }

  _handleChipRemoved(event) {
    const chip = event.target.closest(SELECTOR_CHIP)

    this._pendingFocus?.focus()
    this._pendingFocus = null

    this._handleChipRemoval(chip, this._getChipValue(chip))
  }

  _handleChipRemoval(chip, value) {
    const index = this._chips.indexOf(value)
    if (index !== -1) {
      this._chips.splice(index, 1)
    }

    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_CHANGE), {
      values: this.getValues()
    })
    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SELECT), {
      selected: this.getSelectedValues()
    })
  }

  // Static
  static chipSetInterface(element, config) {
    const data = ChipSet.getOrCreateInstance(element, config)

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = ChipSet.getOrCreateInstance(this)

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
  for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP_SET)) {
    ChipSet.chipSetInterface(element)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(ChipSet)

export default ChipSet
