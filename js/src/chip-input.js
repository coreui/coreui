/**
 * --------------------------------------------------------------------------
 * CoreUI chip-input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 *
 * This component is a highly modified version of the Bootstrap's chip-input.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import ChipSet from './chip-set.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { getUID, isRTL } from './util/index.js'

/**
 * Constants
 */

const NAME = 'chip-input'
const DATA_KEY = 'coreui.chip-input'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_INPUT = `input${EVENT_KEY}`

const SELECTOR_DATA_CHIP_INPUT = '[data-coreui-chip-input]'
const SELECTOR_CHIP = '.chip'
const SELECTOR_CHIP_INPUT_LABEL = '.chip-input-label'
const SELECTOR_CHIP_REMOVE = '.chip-remove'

const CLASS_NAME_DISABLED = 'disabled'
const CLASS_NAME_CHIP_INPUT_FIELD = 'chip-input-field'

const Default = {
  ...ChipSet.Default,
  createOnBlur: true,
  id: null,
  name: null,
  placeholder: '',
  readonly: false,
  removable: true,
  separator: ',',
  unique: true
}

const DefaultType = {
  ...ChipSet.DefaultType,
  createOnBlur: 'boolean',
  id: '(string|null)',
  name: '(string|null)',
  placeholder: 'string',
  readonly: 'boolean',
  separator: '(string|null)'
}

/**
 * Class definition
 *
 * ChipInput is a thin input layer on top of ChipSet: ChipSet owns the chips
 * (the single source of truth), while ChipInput only adds the text field, form
 * integration (hidden input) and turns typed text into chips. The public API
 * (methods + `*.coreui.chip-input` events) is preserved through overrides.
 */

class ChipInput extends ChipSet {
  constructor(element, config) {
    super(element, config)

    this._uniqueId = this._config.id ?? getUID(NAME)
    this._hiddenInput = null

    this._input = SelectorEngine.findOne('input', this._element)
    if (this._input) {
      this._setInputSize()
    } else {
      this._createInput()
    }

    this._applyInteractionState()
    this._createHiddenInput()
    this._addInputEventListeners()
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
  // Keep the inherited add behavior and mirror the new value into the form input.
  add(value) {
    const chip = super.add(value)
    if (chip) {
      this._syncHiddenInput()
    }

    return chip
  }

  focus() {
    this._input?.focus()
  }

  // Private
  _canModify() {
    return !this._disabled && !this._config.readonly
  }

  // Chips live before the text field, not at the end of the set.
  _appendChip(chip) {
    this._element.insertBefore(chip, this._input)
  }

  // Per-chip configuration based on the chip value and the input's
  // disabled/readonly state.
  _getChipConfig(chip) {
    return {
      ariaRemoveLabel: `Remove ${this._getChipValue(chip)}`,
      disabled: this._disabled,
      removable: this._config.removable && !this._config.readonly && !this._disabled,
      removeIcon: this._config.removeIcon,
      selectable: this._config.selectable
    }
  }

  // Keep the inherited chip instantiation and sync the remove button.
  _setupChip(chip) {
    super._setupChip(chip)

    const removeButton = SelectorEngine.findOne(SELECTOR_CHIP_REMOVE, chip)
    if (removeButton) {
      removeButton.disabled = this._disabled || this._config.readonly
    }
  }

  // Sync the form mirror and refocus the text field after a chip is removed.
  _handleChipRemoved(event) {
    super._handleChipRemoved(event)
    this._syncHiddenInput()
    this._input?.focus()
  }

  _syncHiddenInput() {
    if (this._hiddenInput) {
      this._hiddenInput.value = this.getValues().join(',')
    }
  }

  _addInputEventListeners() {
    EventHandler.on(this._element, 'keydown', event => {
      if (event.target === this._input) {
        return
      }

      // The arrow key past the last chip moves focus into the text field, which
      // sits after the chips (mirrors the input's "go to last chip" key). The
      // direction is mirrored in RTL.
      if (event.key === (isRTL() ? 'ArrowLeft' : 'ArrowRight')) {
        const chips = this._getFocusableChips()
        if (chips.length > 0 && chips.at(-1).contains(event.target)) {
          event.preventDefault()
          this._input.focus()
          return
        }
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

    // Focus input when clicking container background
    EventHandler.on(this._element, 'click', event => {
      if (event.target === this._element) {
        this._input?.focus()
      }
    })
  }

  _createInput() {
    const input = document.createElement('input')
    const label = SelectorEngine.findOne(SELECTOR_CHIP_INPUT_LABEL, this._element)
    const labelFor = label?.getAttribute('for')
    const generatedInputId = labelFor || getUID(`${NAME}-input`)

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

  _createChipFromInput() {
    if (!this._canModify()) {
      return
    }

    const value = this._input.value.trim()
    if (value) {
      this.add(value)
      this._input.value = ''
      this._setInputSize()
    }
  }

  _applyInteractionState() {
    const { readonly } = this._config
    this._element.classList.toggle(CLASS_NAME_DISABLED, this._disabled)
    this._input.disabled = this._disabled
    this._input.readOnly = !this._disabled && readonly
    this._element.setAttribute('aria-disabled', this._disabled ? 'true' : 'false')
    this._element.setAttribute('aria-readonly', readonly ? 'true' : 'false')
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
            chips.at(-1).focus()
          }
        }

        break
      }

      case 'ArrowLeft':
      case 'ArrowRight': {
        // The arrow pointing toward the chips (left in LTR, right in RTL) jumps
        // to the last chip when the caret is at the start of the input.
        const towardChipsKey = isRTL() ? 'ArrowRight' : 'ArrowLeft'
        if (
          key === towardChipsKey &&
          this._input.selectionStart === 0 &&
          this._input.selectionEnd === 0
        ) {
          event.preventDefault()
          const chips = this._getChipElements()

          if (chips.length > 0) {
            chips.at(-1).focus()
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

  _handleInput(event) {
    if (!this._canModify()) {
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
    if (!this._canModify()) {
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
