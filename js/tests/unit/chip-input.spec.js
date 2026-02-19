import ChipInput from '../../src/chip-input.js'
import Chip from '../../src/chip.js'
import { clearFixture, getFixture } from '../helpers/fixture.js'

describe('ChipInput', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should take care of element either passed as a CSS selector or DOM element', () => {
    fixtureEl.innerHTML = '<div class="chip-input" data-coreui-chip-input="true"></div>'

    const el = fixtureEl.querySelector('.chip-input')
    const bySelector = new ChipInput('.chip-input')
    const byElement = new ChipInput(el)

    expect(bySelector._element).toEqual(el)
    expect(byElement._element).toEqual(el)
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(ChipInput.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(ChipInput.DATA_KEY).toEqual('coreui.chip-input')
    })
  })

  describe('Default', () => {
    it('should return default configuration', () => {
      expect(ChipInput.Default).toEqual(jasmine.objectContaining({
        createOnBlur: true,
        disabled: false,
        readonly: false,
        dismissible: true,
        selectable: false,
        separator: ','
      }))
    })
  })

  describe('DefaultType', () => {
    it('should return default type configuration', () => {
      expect(ChipInput.DefaultType).toEqual(jasmine.objectContaining({
        disabled: 'boolean',
        readonly: 'boolean',
        dismissible: 'boolean',
        selectable: 'boolean'
      }))
    })
  })

  describe('constructor', () => {
    it('should create an input element when none exists', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el)

      expect(el.querySelector('input[type="text"]')).not.toBeNull()
    })

    it('should use existing input element', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-input">',
        '  <input type="text" class="chip-input-field" id="my-input">',
        '</div>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-input')
      const existingInput = el.querySelector('input')
      const chipInput = new ChipInput(el)

      expect(chipInput._input).toEqual(existingInput)
    })

    it('should create a hidden input for form submission', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el)

      expect(el.querySelector('input[type="hidden"]')).not.toBeNull()
    })

    it('should use custom name on hidden input', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el, { name: 'my-tags' })

      expect(el.querySelector('input[type="hidden"]').name).toEqual('my-tags')
    })

    it('should use custom id on hidden input', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el, { id: 'my-id' })

      expect(el.querySelector('input[type="hidden"]').id).toEqual('my-id')
    })

    it('should initialize as disabled via config', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { disabled: true })

      expect(chipInput._disabled).toBeTrue()
      expect(el).toHaveClass('disabled')
      expect(el.querySelector('input[type="text"]').disabled).toBeTrue()
    })

    it('should initialize as disabled via class', () => {
      fixtureEl.innerHTML = '<div class="chip-input disabled"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(chipInput._disabled).toBeTrue()
    })

    it('should initialize as readonly via config', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { readonly: true })

      expect(chipInput._readonly).toBeTrue()
      expect(el.querySelector('input[type="text"]').readOnly).toBeTrue()
    })

    it('should set placeholder on text input', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el, { placeholder: 'Add tag...' })

      expect(el.querySelector('input[type="text"]').placeholder).toEqual('Add tag...')
    })

    it('should initialize existing chips', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-input">',
        '  <span class="chip">First</span>',
        '  <span class="chip">Second</span>',
        '</div>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(chipInput.getValues()).toEqual(['First', 'Second'])
    })

    it('should set aria attributes on element', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el)

      expect(el.getAttribute('aria-disabled')).toEqual('false')
      expect(el.getAttribute('aria-readonly')).toEqual('false')
    })

    it('should set label for attribute when label has no for', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-input">',
        '  <label class="chip-input-label">Tags</label>',
        '</div>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-input')
      // eslint-disable-next-line no-new
      new ChipInput(el)

      const label = el.querySelector('.chip-input-label')
      const input = el.querySelector('input[type="text"]')
      expect(label.getAttribute('for')).toEqual(input.id)
    })
  })

  describe('add', () => {
    it('should add a chip with the given value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')

      expect(chipInput.getValues()).toEqual(['JavaScript'])
      expect(el.querySelector('.chip')).not.toBeNull()
    })

    it('should return the created chip element', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      const chip = chipInput.add('JavaScript')

      expect(chip).not.toBeNull()
      expect(chip.classList.contains('chip')).toBeTrue()
    })

    it('should trim whitespace from value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('  JavaScript  ')

      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })

    it('should not add empty value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      const result = chipInput.add('   ')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual([])
    })

    it('should not add duplicate values', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      const result = chipInput.add('JavaScript')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })

    it('should not add when disabled', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { disabled: true })

      const result = chipInput.add('JavaScript')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual([])
    })

    it('should not add when readonly', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { readonly: true })

      const result = chipInput.add('JavaScript')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual([])
    })

    it('should not add more chips than maxChips allows', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { maxChips: 2 })

      chipInput.add('First')
      chipInput.add('Second')
      const result = chipInput.add('Third')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual(['First', 'Second'])
    })

    it('should trigger add event', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el)

        el.addEventListener('add.coreui.chip-input', event => {
          expect(event.value).toEqual('JavaScript')
          resolve()
        })

        chipInput.add('JavaScript')
      })
    })

    it('should trigger change event after adding', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el)

        el.addEventListener('change.coreui.chip-input', event => {
          expect(event.values).toEqual(['JavaScript'])
          resolve()
        })

        chipInput.add('JavaScript')
      })
    })

    it('should not add chip if add event is prevented', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      el.addEventListener('add.coreui.chip-input', event => {
        event.preventDefault()
      })

      const result = chipInput.add('JavaScript')

      expect(result).toBeNull()
      expect(chipInput.getValues()).toEqual([])
    })

    it('should update hidden input value after adding', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('First')
      chipInput.add('Second')

      expect(chipInput._hiddenInput.value).toEqual('First,Second')
    })

    it('should apply chipClassName string to added chip', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { chipClassName: 'chip-primary' })

      chipInput.add('JavaScript')

      expect(el.querySelector('.chip')).toHaveClass('chip-primary')
    })

    it('should apply chipClassName function to added chip', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { chipClassName: value => `chip-${value.toLowerCase()}` })

      chipInput.add('JS')

      expect(el.querySelector('.chip')).toHaveClass('chip-js')
    })
  })

  describe('remove', () => {
    it('should remove a chip by value string', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      chipInput.remove('JavaScript')

      expect(chipInput.getValues()).toEqual([])
    })

    it('should remove a chip by element reference', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      const chipEl = el.querySelector('.chip')
      chipInput.remove(chipEl)

      expect(chipInput.getValues()).toEqual([])
    })

    it('should return false for non-existent value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(chipInput.remove('nonexistent')).toBeFalse()
    })

    it('should return false when disabled', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { disabled: true })

      expect(chipInput.remove('JavaScript')).toBeFalse()
    })

    it('should return false when readonly', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { readonly: true })

      expect(chipInput.remove('JavaScript')).toBeFalse()
    })

    it('should trigger remove event', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el)

        chipInput.add('JavaScript')

        el.addEventListener('remove.coreui.chip-input', event => {
          expect(event.value).toEqual('JavaScript')
          resolve()
        })

        chipInput.remove('JavaScript')
      })
    })

    it('should not remove if remove event is prevented', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')

      el.addEventListener('remove.coreui.chip-input', event => {
        event.preventDefault()
      })

      chipInput.remove('JavaScript')

      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })

    it('should update hidden input value after removing', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('First')
      chipInput.add('Second')
      chipInput.remove('First')

      expect(chipInput._hiddenInput.value).toEqual('Second')
    })
  })

  describe('getValues', () => {
    it('should return empty array when no chips', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(chipInput.getValues()).toEqual([])
    })

    it('should return array of chip values', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('First')
      chipInput.add('Second')
      chipInput.add('Third')

      expect(chipInput.getValues()).toEqual(['First', 'Second', 'Third'])
    })

    it('should return a copy of the chips array', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      const values = chipInput.getValues()
      values.push('mutated')

      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })
  })

  describe('clear', () => {
    it('should remove all chips', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('First')
      chipInput.add('Second')
      chipInput.add('Third')
      chipInput.clear()

      expect(chipInput.getValues()).toEqual([])
      expect(el.querySelectorAll('.chip')).toHaveSize(0)
    })

    it('should clear hidden input value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('First')
      chipInput.clear()

      expect(chipInput._hiddenInput.value).toEqual('')
    })
  })

  describe('getSelectedValues', () => {
    it('should return empty array when no chips are selected', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })

      chipInput.add('First')
      chipInput.add('Second')

      expect(chipInput.getSelectedValues()).toEqual([])
    })

    it('should return values of selected chips', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })

      chipInput.add('First')
      chipInput.add('Second')

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0])?.select()

      expect(chipInput.getSelectedValues()).toEqual(['First'])
    })
  })

  describe('clearSelection', () => {
    it('should deselect all selected chips', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })

      chipInput.add('First')
      chipInput.add('Second')

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0])?.select()
      Chip.getInstance(chips[1])?.select()

      chipInput.clearSelection()

      expect(chipInput.getSelectedValues()).toEqual([])
    })

    it('should trigger select event with empty array', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el, { selectable: true })

        chipInput.add('First')
        const chips = el.querySelectorAll('.chip')
        Chip.getInstance(chips[0])?.select()

        el.addEventListener('select.coreui.chip-input', event => {
          expect(event.selected).toEqual([])
          resolve()
        })

        chipInput.clearSelection()
      })
    })
  })

  describe('selectChip', () => {
    it('should select a chip element', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })

      chipInput.add('JavaScript')
      const chipEl = el.querySelector('.chip')

      chipInput.selectChip(chipEl)

      expect(chipEl).toHaveClass('active')
    })

    it('should not select a chip not belonging to this input', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-input"></div>',
        '<span class="chip" tabindex="0">External</span>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })
      const externalChip = fixtureEl.querySelector('span.chip')
      // eslint-disable-next-line no-new
      new Chip(externalChip, { selectable: true })

      chipInput.selectChip(externalChip)

      expect(externalChip).not.toHaveClass('active')
    })
  })

  describe('removeSelected', () => {
    it('should remove all selected chips', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { selectable: true })

      chipInput.add('First')
      chipInput.add('Second')
      chipInput.add('Third')

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0])?.select()
      Chip.getInstance(chips[2])?.select()

      chipInput.removeSelected()

      expect(chipInput.getValues()).toEqual(['Second'])
    })
  })

  describe('focus', () => {
    it('should focus the text input', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.focus()

      expect(document.activeElement).toEqual(chipInput._input)
    })
  })

  describe('keyboard navigation - input', () => {
    it('should create chip on Enter key', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput._input.value = 'JavaScript'
      chipInput._input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))

      expect(chipInput.getValues()).toEqual(['JavaScript'])
      expect(chipInput._input.value).toEqual('')
    })

    it('should focus last chip on Backspace when input is empty', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      chipInput._input.value = ''
      chipInput._input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))

      const lastChip = el.querySelectorAll('.chip')[0]
      expect(document.activeElement).toEqual(lastChip)
    })

    it('should not focus chip on Backspace when input has value', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      chipInput._input.value = 'some text'
      chipInput._input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))

      expect(document.activeElement).not.toEqual(el.querySelector('.chip'))
    })

    it('should focus last chip on ArrowLeft when cursor is at start', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      chipInput._input.value = ''
      chipInput._input.setSelectionRange(0, 0)
      chipInput._input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))

      expect(document.activeElement).toEqual(el.querySelector('.chip'))
    })

    it('should clear input and blur on Escape key', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput._input.value = 'some text'
      chipInput._input.focus()
      chipInput._input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))

      expect(chipInput._input.value).toEqual('')
    })
  })

  describe('separator', () => {
    it('should create chip when separator character is typed', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput._input.value = 'JavaScript,'
      chipInput._input.dispatchEvent(new InputEvent('input', { bubbles: true }))

      expect(chipInput.getValues()).toEqual(['JavaScript'])
      expect(chipInput._input.value).toEqual('')
    })

    it('should split pasted text by separator', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      const pasteEvent = new ClipboardEvent('paste', {
        clipboardData: new DataTransfer(),
        bubbles: true
      })
      pasteEvent.clipboardData.setData('text/plain', 'First,Second,Third')
      chipInput._input.dispatchEvent(pasteEvent)

      expect(chipInput.getValues()).toContain('First')
      expect(chipInput.getValues()).toContain('Second')
      expect(chipInput.getValues()).toContain('Third')
    })

    it('should not split paste when separator is null', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { separator: null })

      const pasteEvent = new ClipboardEvent('paste', {
        clipboardData: new DataTransfer(),
        bubbles: true
      })
      pasteEvent.clipboardData.setData('text/plain', 'First,Second')
      chipInput._input.dispatchEvent(pasteEvent)

      expect(chipInput.getValues()).toEqual([])
    })
  })

  describe('createOnBlur', () => {
    it('should create chip on blur when createOnBlur is true', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { createOnBlur: true })

      chipInput._input.value = 'JavaScript'
      chipInput._input.dispatchEvent(new FocusEvent('blur', { bubbles: true }))

      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })

    it('should not create chip on blur when createOnBlur is false', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el, { createOnBlur: false })

      chipInput._input.value = 'JavaScript'
      chipInput._input.dispatchEvent(new FocusEvent('blur', { bubbles: true }))

      expect(chipInput.getValues()).toEqual([])
    })
  })

  describe('input event', () => {
    it('should trigger input event on typing', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el)

        el.addEventListener('input.coreui.chip-input', event => {
          expect(event.value).toEqual('Java')
          resolve()
        })

        chipInput._input.value = 'Java'
        chipInput._input.dispatchEvent(new InputEvent('input', { bubbles: true }))
      })
    })
  })

  describe('selection events', () => {
    it('should trigger select event when chip is selected', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el, { selectable: true })

        chipInput.add('JavaScript')

        el.addEventListener('select.coreui.chip-input', event => {
          expect(event.selected).toContain('JavaScript')
          resolve()
        })

        Chip.getInstance(el.querySelector('.chip'))?.select()
      })
    })

    it('should trigger select event when chip is deselected', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div class="chip-input"></div>'

        const el = fixtureEl.querySelector('.chip-input')
        const chipInput = new ChipInput(el, { selectable: true })

        chipInput.add('JavaScript')
        const chipInstance = Chip.getInstance(el.querySelector('.chip'))
        chipInstance?.select()

        let callCount = 0
        el.addEventListener('select.coreui.chip-input', event => {
          callCount++
          if (callCount === 1) {
            expect(event.selected).toEqual([])
            resolve()
          }
        })

        chipInstance?.deselect()
      })
    })
  })

  describe('disabled state', () => {
    it('should prevent chip removal when disabled', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      chipInput.add('JavaScript')
      chipInput._disabled = true

      const chipEl = el.querySelector('.chip')
      chipEl.dispatchEvent(new Event('remove.coreui.chip', { bubbles: true, cancelable: true }))

      expect(chipInput.getValues()).toEqual(['JavaScript'])
    })
  })

  describe('data-api', () => {
    it('should initialize via data attribute on DOMContentLoaded', () => {
      fixtureEl.innerHTML = '<div class="chip-input" data-coreui-chip-input="true"></div>'

      const el = fixtureEl.querySelector('.chip-input')

      document.dispatchEvent(new Event('DOMContentLoaded'))

      expect(ChipInput.getInstance(el)).not.toBeNull()
    })
  })

  describe('dispose', () => {
    it('should dispose a chip-input instance', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(ChipInput.getInstance(el)).not.toBeNull()

      chipInput.dispose()

      expect(ChipInput.getInstance(el)).toBeNull()
    })
  })

  describe('getInstance', () => {
    it('should return chip-input instance', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(ChipInput.getInstance(el)).toEqual(chipInput)
      expect(ChipInput.getInstance(el)).toBeInstanceOf(ChipInput)
    })

    it('should return null when there is no instance', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')

      expect(ChipInput.getInstance(el)).toBeNull()
    })
  })

  describe('getOrCreateInstance', () => {
    it('should return existing instance', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')
      const chipInput = new ChipInput(el)

      expect(ChipInput.getOrCreateInstance(el)).toEqual(chipInput)
      expect(ChipInput.getInstance(el)).toEqual(ChipInput.getOrCreateInstance(el, {}))
      expect(ChipInput.getOrCreateInstance(el)).toBeInstanceOf(ChipInput)
    })

    it('should create new instance when none exists', () => {
      fixtureEl.innerHTML = '<div class="chip-input"></div>'

      const el = fixtureEl.querySelector('.chip-input')

      expect(ChipInput.getInstance(el)).toBeNull()
      expect(ChipInput.getOrCreateInstance(el)).toBeInstanceOf(ChipInput)
    })
  })
})
