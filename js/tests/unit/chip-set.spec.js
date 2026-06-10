import Chip from '../../src/chip.js'
import ChipSet from '../../src/chip-set.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('ChipSet', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  const setMarkup = (chips = ['First', 'Second', 'Third'], attrs = '') => {
    fixtureEl.innerHTML = [
      `<div class="chip-set"${attrs}>`,
      ...chips.map(chip => `  <span class="chip">${chip}</span>`),
      '</div>'
    ].join('')

    return fixtureEl.querySelector('.chip-set')
  }

  it('should take care of element either passed as a CSS selector or DOM element', () => {
    const el = setMarkup()
    const bySelector = new ChipSet('.chip-set')
    const byElement = new ChipSet(el)

    expect(bySelector._element).toEqual(el)
    expect(byElement._element).toEqual(el)
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(ChipSet.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(ChipSet.DATA_KEY).toEqual('coreui.chip-set')
    })
  })

  describe('Default', () => {
    it('should return default configuration', () => {
      expect(ChipSet.Default).toEqual(jasmine.objectContaining({
        disabled: false,
        removable: false,
        selectable: false,
        selectionMode: 'multiple'
      }))
    })
  })

  describe('DefaultType', () => {
    it('should return default type configuration', () => {
      expect(ChipSet.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('constructor', () => {
    it('should instantiate each child chip', () => {
      const el = setMarkup()
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      for (const chip of el.querySelectorAll('.chip')) {
        expect(Chip.getInstance(chip)).not.toBeNull()
      }
    })

    it('should not override an already instantiated chip', () => {
      const el = setMarkup()
      const firstChip = el.querySelector('.chip')
      const chip = new Chip(firstChip, { selectable: true })

      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: false })

      expect(Chip.getInstance(firstChip)).toEqual(chip)
    })

    it('should let a chip opt out of a set-level option via its own data attribute', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-set">',
        '  <span class="chip">First</span>',
        '  <span class="chip" data-coreui-removable="false">Second</span>',
        '</div>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-set')
      // eslint-disable-next-line no-new
      new ChipSet(el, { removable: true })

      const chips = el.querySelectorAll('.chip')
      expect(chips[0].querySelector('.chip-remove')).not.toBeNull()
      expect(chips[1].querySelector('.chip-remove')).toBeNull()
    })
  })

  describe('keyboard navigation', () => {
    it('should focus previous chip on ArrowLeft', () => {
      const el = setMarkup(['First', 'Second'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[1].focus()
      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))

      expect(document.activeElement).toEqual(chips[0])
    })

    it('should focus next chip on ArrowRight', () => {
      const el = setMarkup(['First', 'Second'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

      expect(document.activeElement).toEqual(chips[1])
    })

    it('should not move focus past the last chip on ArrowRight', () => {
      const el = setMarkup(['First', 'Second'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[1].focus()
      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

      expect(document.activeElement).toEqual(chips[1])
    })

    it('should mirror arrow keys in RTL', () => {
      document.documentElement.dir = 'rtl'

      const el = setMarkup(['First', 'Second'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[0].focus()
      // In RTL, ArrowLeft moves to the next chip.
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
      expect(document.activeElement).toEqual(chips[1])

      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      expect(document.activeElement).toEqual(chips[0])

      document.documentElement.dir = ''
    })

    it('should focus first chip on Home key', () => {
      const el = setMarkup()
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[2].focus()
      chips[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))

      expect(document.activeElement).toEqual(chips[0])
    })

    it('should focus last chip on End key', () => {
      const el = setMarkup()
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))

      expect(document.activeElement).toEqual(chips[2])
    })

    it('should skip disabled chips when navigating', () => {
      fixtureEl.innerHTML = [
        '<div class="chip-set">',
        '  <span class="chip">First</span>',
        '  <span class="chip disabled">Second</span>',
        '  <span class="chip">Third</span>',
        '</div>'
      ].join('')

      const el = fixtureEl.querySelector('.chip-set')
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

      expect(document.activeElement).toEqual(chips[2])
    })
  })

  describe('removal', () => {
    it('should move focus to the next chip after removing a focused chip', () => {
      const el = setMarkup()
      // eslint-disable-next-line no-new
      new ChipSet(el, { removable: true })

      const chips = el.querySelectorAll('.chip')
      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))

      const remaining = el.querySelectorAll('.chip')
      expect(remaining).toHaveSize(2)
      expect(document.activeElement).toEqual(remaining[0])
    })

    it('should move focus to the previous chip after removing the last chip', () => {
      const el = setMarkup(['First', 'Second'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { removable: true })

      const chips = el.querySelectorAll('.chip')
      chips[1].focus()
      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))

      const remaining = el.querySelectorAll('.chip')
      expect(remaining).toHaveSize(1)
      expect(document.activeElement).toEqual(remaining[0])
    })

    it('should emit a cancelable remove.coreui.chip-set with the chip and value', () => {
      const el = setMarkup(['First', 'Second'], ' data-coreui-removable="true"')
      const chipSet = new ChipSet(el, { removable: true })

      const chip = el.querySelector('.chip')
      const spy = jasmine.createSpy('remove')
      el.addEventListener('remove.coreui.chip-set', spy)

      chipSet.remove('First')

      expect(spy).toHaveBeenCalled()
      const event = spy.calls.mostRecent().args[0]
      expect(event.value).toEqual('First')
      expect(event.chip).toEqual(chip)
    })

    it('should not remove the chip when remove.coreui.chip-set is prevented', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { removable: true })

      el.addEventListener('remove.coreui.chip-set', event => event.preventDefault())

      chipSet.remove('First')

      expect(el.querySelectorAll('.chip')).toHaveSize(1)
    })
  })

  describe('selection', () => {
    it('should allow multiple selected chips by default', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0]).select()
      Chip.getInstance(chips[1]).select()

      expect(chipSet.getSelected()).toHaveSize(2)
    })

    it('should deselect siblings in single selection mode', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { selectable: true, selectionMode: 'single' })

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0]).select()
      Chip.getInstance(chips[1]).select()

      expect(chipSet.getSelected()).toEqual([chips[1]])
    })

    it('should emit select.coreui.chip-set on selection change', () => {
      return new Promise(resolve => {
        const el = setMarkup(['First'])
        // eslint-disable-next-line no-new
        new ChipSet(el, { selectable: true })

        const chip = el.querySelector('.chip')

        el.addEventListener('select.coreui.chip-set', event => {
          expect(event.selected).toEqual(['First'])
          resolve()
        })

        Chip.getInstance(chip).select()
      })
    })

    it('should forward filter so a selected chip shows a check icon', () => {
      const el = setMarkup(['First'])
      // eslint-disable-next-line no-new
      new ChipSet(el, { selectable: true, filter: true })

      const chip = el.querySelector('.chip')
      expect(chip.querySelector('.chip-check')).toBeNull()

      Chip.getInstance(chip).select()

      expect(chip.querySelector('.chip-check')).not.toBeNull()
    })

    it('should select and deselect all chips', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { selectable: true })

      chipSet.selectAll()
      expect(chipSet.getSelected()).toHaveSize(2)

      chipSet.deselectAll()
      expect(chipSet.getSelected()).toHaveSize(0)
    })
  })

  describe('chip management', () => {
    it('should select a specific chip with selectChip', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { selectable: true })

      const chips = el.querySelectorAll('.chip')
      chipSet.selectChip(chips[1])

      expect(chipSet.getSelected()).toEqual([chips[1]])
    })

    it('should ignore selectChip for an element outside the set', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { selectable: true })
      const outside = document.createElement('span')
      outside.className = 'chip'

      chipSet.selectChip(outside)

      expect(chipSet.getSelected()).toHaveSize(0)
    })

    it('should append a chip element with add', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el)

      const chip = document.createElement('span')
      chip.className = 'chip'
      chip.textContent = 'Second'

      const returned = chipSet.add(chip)

      expect(returned).toEqual(chip)
      expect(el.querySelectorAll('.chip')).toHaveSize(2)
      expect(Chip.getInstance(chip)).not.toBeNull()
    })

    it('should create and append a chip from a label with add', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el)

      const chip = chipSet.add('Second')

      expect(chip.textContent).toContain('Second')
      expect(chip.dataset.coreuiChipValue).toEqual('Second')
      expect(el.querySelectorAll('.chip')).toHaveSize(2)
    })

    it('should emit a cancelable add.coreui.chip-set before adding', () => {
      const el = setMarkup([])
      const chipSet = new ChipSet(el)

      el.addEventListener('add.coreui.chip-set', event => event.preventDefault())

      expect(chipSet.add('Nope')).toBeNull()
      expect(el.querySelectorAll('.chip')).toHaveSize(0)
    })

    it('should remove a single chip with remove', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { removable: true })

      chipSet.remove(el.querySelector('.chip'))

      expect(el.querySelectorAll('.chip')).toHaveSize(1)
    })

    it('should remove every chip with clear', () => {
      const el = setMarkup()
      const chipSet = new ChipSet(el, { removable: true })

      chipSet.clear()

      expect(el.querySelectorAll('.chip')).toHaveSize(0)
    })

    it('should remove only selected chips with removeSelected', () => {
      const el = setMarkup(['First', 'Second', 'Third'])
      const chipSet = new ChipSet(el, { selectable: true, removable: true })

      const chips = el.querySelectorAll('.chip')
      Chip.getInstance(chips[0]).select()
      Chip.getInstance(chips[2]).select()

      chipSet.removeSelected()

      const remaining = el.querySelectorAll('.chip')
      expect(remaining).toHaveSize(1)
      expect(remaining[0].textContent).toContain('Second')
    })
  })

  describe('values', () => {
    it('should expose chip values with getValues', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el)

      expect(chipSet.getValues()).toEqual(['First', 'Second'])
    })

    it('should track values when adding and removing chips', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { removable: true })

      chipSet.add('Second')
      expect(chipSet.getValues()).toEqual(['First', 'Second'])

      chipSet.remove('First')
      expect(chipSet.getValues()).toEqual(['Second'])
    })

    it('should allow duplicate values by default', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el)

      chipSet.add('First')
      expect(chipSet.getValues()).toEqual(['First', 'First'])
    })

    it('should reject duplicate values when unique is set', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { unique: true })

      expect(chipSet.add('First')).toBeNull()
      expect(chipSet.getValues()).toEqual(['First'])
    })

    it('should reject chips beyond maxChips', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { maxChips: 1 })

      expect(chipSet.add('Second')).toBeNull()
      expect(chipSet.getValues()).toEqual(['First'])
    })

    it('should emit change.coreui.chip-set with the values on add', () => {
      return new Promise(resolve => {
        const el = setMarkup(['First'])
        const chipSet = new ChipSet(el)

        el.addEventListener('change.coreui.chip-set', event => {
          expect(event.values).toEqual(['First', 'Second'])
          resolve()
        })

        chipSet.add('Second')
      })
    })
  })

  describe('data-api', () => {
    it('should initialize chip set via data attribute', () => {
      const el = setMarkup(['First'], ' data-coreui-chip-set')

      document.dispatchEvent(new Event('DOMContentLoaded'))

      expect(ChipSet.getInstance(el)).not.toBeNull()
    })
  })

  describe('dispose', () => {
    it('should dispose a chip set and stop handling navigation', () => {
      const el = setMarkup(['First', 'Second'])
      const chipSet = new ChipSet(el, { selectable: true })

      expect(ChipSet.getInstance(el)).not.toBeNull()

      chipSet.dispose()

      expect(ChipSet.getInstance(el)).toBeNull()

      const chips = el.querySelectorAll('.chip')
      chips[1].focus()
      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))

      expect(document.activeElement).toEqual(chips[1])
    })
  })

  describe('jQueryInterface', () => {
    it('should create a chip set instance', () => {
      const el = setMarkup(['First'])

      jQueryMock.fn.chipSet = ChipSet.jQueryInterface
      jQueryMock.elements = [el]

      jQueryMock.fn.chipSet.call(jQueryMock)

      expect(ChipSet.getInstance(el)).not.toBeNull()
    })

    it('should call a method via jQueryInterface', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { selectable: true })
      const spy = spyOn(chipSet, 'deselectAll')

      jQueryMock.fn.chipSet = ChipSet.jQueryInterface
      jQueryMock.elements = [el]

      jQueryMock.fn.chipSet.call(jQueryMock, 'deselectAll')

      expect(spy).toHaveBeenCalled()
    })

    it('should throw an error on undefined method', () => {
      const el = setMarkup(['First'])
      const action = 'undefinedMethod'

      jQueryMock.fn.chipSet = ChipSet.jQueryInterface
      jQueryMock.elements = [el]

      expect(() => {
        jQueryMock.fn.chipSet.call(jQueryMock, action)
      }).toThrowError(TypeError, `No method named "${action}"`)
    })
  })

  describe('chipSetInterface', () => {
    it('should call a method when config is a string', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { selectable: true })
      const spy = spyOn(chipSet, 'deselectAll')

      ChipSet.chipSetInterface(el, 'deselectAll')

      expect(spy).toHaveBeenCalled()
    })

    it('should throw on an undefined method', () => {
      const el = setMarkup(['First'])

      expect(() => {
        ChipSet.chipSetInterface(el, 'undefinedMethod')
      }).toThrowError(TypeError, 'No method named "undefinedMethod"')
    })
  })

  describe('disabled', () => {
    it('should not add a chip when the set is disabled', () => {
      const el = setMarkup([])
      const chipSet = new ChipSet(el, { disabled: true })

      expect(chipSet.add('Nope')).toBeNull()
      expect(el.querySelectorAll('.chip')).toHaveSize(0)
    })

    it('should not remove a chip when the set is disabled', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el, { disabled: true, removable: true })

      expect(chipSet.remove('First')).toBeFalse()
      expect(el.querySelectorAll('.chip')).toHaveSize(1)
    })

    it('should remove a chip that has no instance via its value', () => {
      const el = setMarkup(['First'])
      const chipSet = new ChipSet(el)

      const raw = document.createElement('span')
      raw.className = 'chip'
      raw.textContent = 'Manual'
      el.append(raw)

      chipSet.remove('Manual')

      expect(el.querySelector('.chip').textContent).toContain('First')
    })
  })
})
