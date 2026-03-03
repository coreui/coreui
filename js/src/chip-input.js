/**
 * --------------------------------------------------------------------------
 * CoreUI chip-input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 *
 * This component is a highly modified version of the Bootstrap's chip-input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component.js'
import Chip from './chip.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { getUID } from './util/index.js'

/**
 * Constants
 */

const NAME = 'chip-input'
const DATA_KEY = 'coreui.chip-input'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_ADD = `add${EVENT_KEY}`
const EVENT_REMOVE = `remove${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`
const EVENT_SELECT = `select${EVENT_KEY}`
const EVENT_INPUT = `input${EVENT_KEY}`

const SELECTOR_DATA_CHIP_INPUT = '[data-coreui-chip-input]'
const SELECTOR_CHIP = '.chip'
const SELECTOR_CHIP_ACTIVE = `${SELECTOR_CHIP}.active`
const SELECTOR_CHIP_INPUT_LABEL = '.chip-input-label'
const SELECTOR_CHIP_REMOVE = '.chip-remove'
const SELECTOR_FOCUSABLE_ITEMS = '.chip:not(.disabled)'

const CLASS_NAME_CHIP = 'chip'
const CLASS_NAME_DISABLED = 'disabled'
const CLASS_NAME_CHIP_INPUT_FIELD = 'chip-input-field'

const DEFAULT_REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>'

const Default = {
  chipClassName: null,
  createOnBlur: true,
  disabled: false,
  id: null,
  maxChips: null,
  name: null,
  placeholder: '',
  readonly: false,
  removable: true,
  removeIcon: DEFAULT_REMOVE_ICON,
  selectable: false,
  separator: ','
}

const DefaultType = {
  chipClassName: '(string|function|null)',
  createOnBlur: 'boolean',
  disabled: 'boolean',
  maxChips: '(number|null)',
  id: '(string|null)',
  name: '(string|null)',
  placeholder: 'string',
  readonly: 'boolean',
  removable: 'boolean',
  removeIcon: 'string',
  selectable: 'boolean',
  separator: '(string|null)'
}

/**
 * Class definition
 */

class ChipInput extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._uniqueId = this._config.id ?? getUID(`${this.constructor.NAME}`)
    this._disabled = this._config.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)
    this._readonly = this._config.readonly

    this._chips = []
    this._input = SelectorEngine.findOne('input', this._element)
    this._hiddenInput = null

    if (this._input) {
      this._setInputSize()
    } else {
      this._createInput()
    }

    this._applyInteractionState()
    this._initializeExistingChips()
    this._createHiddenInput()
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
  add(value) {
    if (this._disabled || this._readonly) {
      return null
    }

    const trimmedValue = String(value).trim()

    if (!trimmedValue) {
      return null
    }

    // Chips are unique by value
    if (this._chips.includes(trimmedValue)) {
      return null
    }

    // Check max chips limit
    if (this._config.maxChips !== null && this._chips.length >= this._config.maxChips) {
      return null
    }

    const addEvent = EventHandler.trigger(this._element, EVENT_ADD, {
      value: trimmedValue,
      relatedTarget: this._input
    })

    if (addEvent.defaultPrevented) {
      return null
    }

    const chip = this._createChip(trimmedValue)
    this._element.insertBefore(chip, this._input)
    this._chips.push(trimmedValue)

    const values = this.getValues()
    this._hiddenInput.value = values.join(',')

    EventHandler.trigger(this._element, EVENT_CHANGE, {
      values
    })

    return chip
  }

  remove(chipOrValue) {
    if (this._disabled || this._readonly) {
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

    const removeEvent = EventHandler.trigger(this._element, EVENT_REMOVE, {
      value,
      chip,
      relatedTarget: this._input
    })

    if (removeEvent.defaultPrevented) {
      return false
    }

    const chipInstance = Chip.getInstance(chip)
    if (chipInstance) {
      chipInstance.remove()
    } else {
      chip.remove()
      this._handleChipRemoved(chip, value)
    }

    return !chip.isConnected
  }

  removeSelected() {
    const chipsToRemove = this._getSelectedChipElements()
    for (const chip of chipsToRemove) {
      this.remove(chip)
    }

    this._input?.focus()
  }

  getValues() {
    return [...this._chips]
  }

  getSelectedValues() {
    return this._getSelectedChipElements().map(chip => this._getChipValue(chip))
  }

  clear() {
    const chips = SelectorEngine.find(SELECTOR_CHIP, this._element)
    for (const chip of chips) {
      this.remove(chip)
    }
  }

  clearSelection() {
    for (const chip of this._getSelectedChipElements()) {
      Chip.getInstance(chip)?.deselect()
    }

    EventHandler.trigger(this._element, EVENT_SELECT, {
      selected: []
    })
  }

  selectChip(chip) {
    const chipElements = this._getChipElements()

    if (!chipElements.includes(chip)) {
      return
    }

    const chipInstance = Chip.getInstance(chip)
    if (!chipInstance) {
      return
    }

    chipInstance.select()
  }

  focus() {
    this._input?.focus()
  }

  // Private
  _emitSelectionChange() {
    EventHandler.trigger(this._element, EVENT_SELECT, {
      selected: this.getSelectedValues()
    })
  }

  _getChipElements() {
    return SelectorEngine.find(SELECTOR_CHIP, this._element)
  }

  _getSelectedChipElements() {
    return SelectorEngine.find(SELECTOR_CHIP_ACTIVE, this._element)
  }

  _createInput() {
    const input = document.createElement('input')
    const label = SelectorEngine.findOne(SELECTOR_CHIP_INPUT_LABEL, this._element)
    const labelFor = label?.getAttribute('for')
    const generatedInputId = labelFor || getUID(`${this.constructor.NAME}-input`)

    input.type = 'text'
    input.className = CLASS_NAME_CHIP_INPUT_FIELD
    input.id = generatedInputId
    if (this._config.placeholder) {
      input.placeholder = this._config.placeholder
    }

    if (label && !labelFor) {
      label.setAttribute('for', generatedInputId)
    }

    this._input = input
    this._setInputSize()
    this._element.append(input)
  }

  _createHiddenInput() {
    const hiddenInput = document.createElement('input')
    hiddenInput.type = 'hidden'
    hiddenInput.id = this._uniqueId
    hiddenInput.name = this._config.name || this._uniqueId

    this._element.append(hiddenInput)
    this._hiddenInput = hiddenInput
    this._hiddenInput.value = this.getValues().join(',')
  }

  _createChip(value) {
    const chip = document.createElement('span')
    chip.className = CLASS_NAME_CHIP
    chip.dataset.coreuiChipValue = value
    chip.append(document.createTextNode(value))
    this._applyChipClassName(chip, value)

    this._setupChip(chip)

    return chip
  }

  _createChipFromInput() {
    if (this._disabled || this._readonly) {
      return
    }

    const value = this._input.value.trim()
    if (value) {
      this.add(value)
      this._input.value = ''
      this._setInputSize()
    }
  }

  _findChipByValue(value) {
    const chips = this._getChipElements()
    return chips.find(chip => this._getChipValue(chip) === value)
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

  _initializeExistingChips() {
    const existingChips = SelectorEngine.find(SELECTOR_CHIP, this._element)
    for (const chip of existingChips) {
      const value = this._getChipValue(chip)
      if (value) {
        this._chips.push(value)
        this._applyChipClassName(chip, value)
        this._setupChip(chip)
      }
    }
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

  _setupChip(chip) {
    Chip.getOrCreateInstance(chip, {
      ariaRemoveLabel: `Remove ${this._getChipValue(chip)}`,
      disabled: this._disabled,
      removable: this._config.removable && !this._readonly && !this._disabled,
      removeIcon: this._config.removeIcon,
      selectable: this._config.selectable
    })

    const removeButton = SelectorEngine.findOne(SELECTOR_CHIP_REMOVE, chip)
    if (removeButton) {
      removeButton.disabled = this._disabled || this._readonly
    }
  }

  _applyInteractionState() {
    this._element.classList.toggle(CLASS_NAME_DISABLED, this._disabled)
    this._input.disabled = this._disabled
    this._input.readOnly = !this._disabled && this._readonly
    this._element.setAttribute('aria-disabled', this._disabled ? 'true' : 'false')
    this._element.setAttribute('aria-readonly', this._readonly ? 'true' : 'false')
  }

  _addEventListeners() {
    EventHandler.on(this._element, 'keydown', event => {
      if (event.target === this._input) {
        return
      }

      if (event.key.length === 1) {
        this._input.focus()
      }
    })
    EventHandler.on(this._input, 'keydown', event => this._handleInputKeydown(event))
    EventHandler.on(this._input, 'input', event => this._handleInput(event))
    EventHandler.on(this._input, 'paste', event => this._handlePaste(event))
    EventHandler.on(this._input, 'focus', () => this.clearSelection())

    if (this._config.createOnBlur) {
      EventHandler.on(this._input, 'blur', event => {
        // Don't create chip if clicking on a chip
        if (!event.relatedTarget?.closest(SELECTOR_CHIP)) {
          this._createChipFromInput()
        }
      })
    }

    EventHandler.on(this._element, 'selected.coreui.chip', SELECTOR_CHIP, () => {
      this._emitSelectionChange()
    })

    EventHandler.on(this._element, 'deselected.coreui.chip', SELECTOR_CHIP, () => {
      this._emitSelectionChange()
    })

    EventHandler.on(this._element, 'remove.coreui.chip', SELECTOR_CHIP, event => {
      if (this._disabled || this._readonly) {
        event.preventDefault()
      }
    })

    EventHandler.on(this._element, 'removed.coreui.chip', SELECTOR_CHIP, event => {
      const chip = event.target.closest(SELECTOR_CHIP)
      if (chip) {
        this._handleChipRemoved(chip)
        const focusableChips = SelectorEngine.find(SELECTOR_FOCUSABLE_ITEMS, this._element)

        if (focusableChips.length > 0) {
          this._input?.focus()
        }

        this._emitSelectionChange()
      }
    })

    // Focus input when clicking container background
    EventHandler.on(this._element, 'click', event => {
      if (event.target === this._element) {
        this._input?.focus()
      }
    })
  }

  _handleInputKeydown(event) {
    const { key } = event

    switch (key) {
      case 'Enter': {
        event.preventDefault()
        this._createChipFromInput()
        break
      }

      case 'Backspace':
      case 'Delete': {
        if (this._input.value === '') {
          event.preventDefault()
          const chips = this._getChipElements()

          if (chips.length > 0) {
            const lastChip = chips.at(-1)
            lastChip.focus()
          }
        }

        break
      }

      case 'ArrowLeft': {
        if (this._input.selectionStart === 0 && this._input.selectionEnd === 0) {
          event.preventDefault()
          const chips = this._getChipElements()

          if (chips.length > 0) {
            const lastChip = chips.at(-1)
            lastChip.focus()
          }
        }

        break
      }

      case 'Escape': {
        this._input.value = ''
        this._input.blur()
        break
      }

      // No default
    }
  }

  _handleChipRemoved(chip, value = null) {
    const chipValue = value || this._getChipValue(chip)
    const valueIndex = this._chips.indexOf(chipValue)
    if (valueIndex !== -1) {
      this._chips.splice(valueIndex, 1)
    }

    const values = this.getValues()
    this._hiddenInput.value = values.join(',')

    EventHandler.trigger(this._element, EVENT_CHANGE, {
      values
    })
  }

  _handleInput(event) {
    if (this._disabled || this._readonly) {
      return
    }

    const { value } = event.target
    const { separator } = this._config

    if (separator && value.includes(separator)) {
      const parts = value.split(separator)
      for (const part of parts.slice(0, -1)) {
        this.add(part.trim())
      }

      this._input.value = parts.at(-1)
    }

    this._setInputSize()
    EventHandler.trigger(this._element, EVENT_INPUT, {
      value: this._input.value,
      relatedTarget: this._input
    })
  }

  _handlePaste(event) {
    if (this._disabled || this._readonly) {
      return
    }

    const { separator } = this._config
    if (!separator) {
      return
    }

    const pastedData = (event.clipboardData || window.clipboardData).getData('text')
    if (pastedData.includes(separator)) {
      event.preventDefault()

      const parts = pastedData.split(separator)
      for (const part of parts) {
        this.add(part.trim())
      }
    }
  }

  _setInputSize() {
    if (!this._input) {
      return
    }

    this._input.size = Math.max(this._input.placeholder.length, this._input.value.length) || 1
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, `DOMContentLoaded${EVENT_KEY}${DATA_API_KEY}`, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_CHIP_INPUT)) {
    ChipInput.getOrCreateInstance(element)
  }
})

export default ChipInput
