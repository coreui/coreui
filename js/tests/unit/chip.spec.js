import Chip from '../../src/chip.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('Chip', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should take care of element either passed as a CSS selector or DOM element', () => {
    fixtureEl.innerHTML = '<span class="chip">Tag</span>'

    const chipEl = fixtureEl.querySelector('.chip')
    const chipBySelector = new Chip('.chip')
    const chipByElement = new Chip(chipEl)

    expect(chipBySelector._element).toEqual(chipEl)
    expect(chipByElement._element).toEqual(chipEl)
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(Chip.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(Chip.DATA_KEY).toEqual('coreui.chip')
    })
  })

  describe('Default', () => {
    it('should return default configuration', () => {
      expect(Chip.Default).toEqual(jasmine.objectContaining({
        ariaRemoveLabel: 'Remove',
        disabled: false,
        removable: false,
        selectable: false,
        selected: false
      }))
    })
  })

  describe('DefaultType', () => {
    it('should return default type configuration', () => {
      expect(Chip.DefaultType).toEqual(jasmine.objectContaining({
        ariaRemoveLabel: 'string',
        disabled: 'boolean',
        removable: 'boolean',
        selectable: 'boolean',
        selected: 'boolean'
      }))
    })
  })

  describe('constructor', () => {
    it('should initialize with disabled class on element', () => {
      fixtureEl.innerHTML = '<span class="chip disabled">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      expect(chip._disabled).toBeTrue()
    })

    it('should initialize with active class on element as selected', () => {
      fixtureEl.innerHTML = '<span class="chip active">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      expect(chip._selected).toBeTrue()
    })

    it('should initialize as disabled via config', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { disabled: true })

      expect(chip._disabled).toBeTrue()
    })

    it('should initialize as selected via config', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true, selected: true })

      expect(chip._selected).toBeTrue()
    })

    it('should add tabindex when selectable', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true })

      expect(chipEl.getAttribute('tabindex')).toEqual('0')
    })

    it('should add tabindex when removable', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { removable: true })

      expect(chipEl.getAttribute('tabindex')).toEqual('0')
    })

    it('should not override existing tabindex', () => {
      fixtureEl.innerHTML = '<span class="chip" tabindex="2">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true })

      expect(chipEl.getAttribute('tabindex')).toEqual('2')
    })

    it('should not set tabindex when disabled', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { disabled: true, selectable: true })

      expect(chipEl.getAttribute('tabindex')).toBeNull()
    })
  })

  describe('removable', () => {
    it('should append a remove button when removable is true', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { removable: true })

      const btn = chipEl.querySelector('.chip-remove')
      expect(btn).not.toBeNull()
      expect(btn.getAttribute('aria-label')).toEqual('Remove')
    })

    it('should not append a remove button when removable is false', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl)

      expect(chipEl.querySelector('.chip-remove')).toBeNull()
    })

    it('should not append a second remove button if one already exists', () => {
      fixtureEl.innerHTML = [
        '<span class="chip">',
        '  Tag',
        '  <button class="chip-remove" type="button">x</button>',
        '</span>'
      ].join('')

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { removable: true })

      expect(chipEl.querySelectorAll('.chip-remove')).toHaveSize(1)
    })

    it('should use custom ariaRemoveLabel on the remove button', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { removable: true, ariaRemoveLabel: 'Close chip' })

      const btn = chipEl.querySelector('.chip-remove')
      expect(btn.getAttribute('aria-label')).toEqual('Close chip')
    })
  })

  describe('remove', () => {
    it('should remove the chip element from the DOM', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl)

        chipEl.addEventListener('removed.coreui.chip', () => {
          setTimeout(() => {
            expect(fixtureEl.querySelector('.chip')).toBeNull()
            resolve()
          }, 10)
        })

        chip.remove()
      })
    })

    it('should trigger remove event before removing', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl)
        let removeFired = false

        chipEl.addEventListener('remove.coreui.chip', () => {
          removeFired = true
        })

        chipEl.addEventListener('removed.coreui.chip', () => {
          expect(removeFired).toBeTrue()
          resolve()
        })

        chip.remove()
      })
    })

    it('should not remove chip if remove event is prevented', () => {
      return new Promise((resolve, reject) => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl)

        chipEl.addEventListener('remove.coreui.chip', event => {
          event.preventDefault()
          setTimeout(() => {
            expect(fixtureEl.querySelector('.chip')).not.toBeNull()
            resolve()
          }, 10)
        })

        chipEl.addEventListener('removed.coreui.chip', () => {
          reject(new Error('should not fire removed event'))
        })

        chip.remove()
      })
    })

    it('should remove chip via remove button click', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        // eslint-disable-next-line no-new
        new Chip(chipEl, { removable: true })

        chipEl.addEventListener('removed.coreui.chip', () => {
          setTimeout(() => {
            expect(fixtureEl.querySelector('.chip')).toBeNull()
            resolve()
          }, 10)
        })

        chipEl.querySelector('.chip-remove').click()
      })
    })
  })

  describe('select', () => {
    it('should add active class and set aria-selected when selected', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      chip.select()

      expect(chipEl).toHaveClass('active')
      expect(chipEl.getAttribute('aria-selected')).toEqual('true')
    })

    it('should trigger select and selected events', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl, { selectable: true })
        let selectFired = false

        chipEl.addEventListener('select.coreui.chip', () => {
          selectFired = true
        })

        chipEl.addEventListener('selected.coreui.chip', () => {
          expect(selectFired).toBeTrue()
          resolve()
        })

        chip.select()
      })
    })

    it('should not select when selectable is false', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      chip.select()

      expect(chipEl).not.toHaveClass('active')
    })

    it('should not select again if already selected', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true, selected: true })

      const spy = jasmine.createSpy('selectSpy')
      chipEl.addEventListener('selected.coreui.chip', spy)

      chip.select()

      expect(spy).not.toHaveBeenCalled()
    })

    it('should not select if select event is prevented', () => {
      return new Promise((resolve, reject) => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl, { selectable: true })

        chipEl.addEventListener('select.coreui.chip', event => {
          event.preventDefault()
          setTimeout(() => {
            expect(chipEl).not.toHaveClass('active')
            resolve()
          }, 10)
        })

        chipEl.addEventListener('selected.coreui.chip', () => {
          reject(new Error('should not fire selected event'))
        })

        chip.select()
      })
    })
  })

  describe('deselect', () => {
    it('should remove active class and set aria-selected to false when deselected', () => {
      fixtureEl.innerHTML = '<span class="chip active">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true, selected: true })

      chip.deselect()

      expect(chipEl).not.toHaveClass('active')
      expect(chipEl.getAttribute('aria-selected')).toEqual('false')
    })

    it('should trigger deselect and deselected events', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<span class="chip">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl, { selectable: true, selected: true })
        let deselectFired = false

        chipEl.addEventListener('deselect.coreui.chip', () => {
          deselectFired = true
        })

        chipEl.addEventListener('deselected.coreui.chip', () => {
          expect(deselectFired).toBeTrue()
          resolve()
        })

        chip.deselect()
      })
    })

    it('should not fire deselect events when selectable is false', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      const spy = jasmine.createSpy('deselectSpy')
      chipEl.addEventListener('deselect.coreui.chip', spy)

      chip.deselect()

      expect(spy).not.toHaveBeenCalled()
    })

    it('should not deselect if already deselected', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      const spy = jasmine.createSpy('deselectSpy')
      chipEl.addEventListener('deselected.coreui.chip', spy)

      chip.deselect()

      expect(spy).not.toHaveBeenCalled()
    })

    it('should not deselect if deselect event is prevented', () => {
      return new Promise((resolve, reject) => {
        fixtureEl.innerHTML = '<span class="chip active">Tag</span>'

        const chipEl = fixtureEl.querySelector('.chip')
        const chip = new Chip(chipEl, { selectable: true, selected: true })

        chipEl.addEventListener('deselect.coreui.chip', event => {
          event.preventDefault()
          setTimeout(() => {
            expect(chipEl).toHaveClass('active')
            resolve()
          }, 10)
        })

        chipEl.addEventListener('deselected.coreui.chip', () => {
          reject(new Error('should not fire deselected event'))
        })

        chip.deselect()
      })
    })
  })

  describe('toggle', () => {
    it('should select when not selected', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      chip.toggle()

      expect(chipEl).toHaveClass('active')
    })

    it('should deselect when already selected', () => {
      fixtureEl.innerHTML = '<span class="chip active">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true, selected: true })

      chip.toggle()

      expect(chipEl).not.toHaveClass('active')
    })

    it('should do nothing when selectable is false', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      chip.toggle()

      expect(chipEl).not.toHaveClass('active')
    })

    it('should toggle on click when selectable', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true })

      chipEl.click()
      expect(chipEl).toHaveClass('active')

      chipEl.click()
      expect(chipEl).not.toHaveClass('active')
    })

    it('should not toggle on click when disabled', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true, disabled: true })

      chipEl.click()

      expect(chipEl).not.toHaveClass('active')
    })
  })

  describe('keyboard navigation', () => {
    it('should toggle on Enter key', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))

      expect(chip._selected).toBeTrue()
    })

    it('should toggle on Space key', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }))

      expect(chip._selected).toBeTrue()
    })

    it('should remove chip on Backspace key when removable', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div><span class="chip">Tag</span></div>'

        const chipEl = fixtureEl.querySelector('.chip')
        // eslint-disable-next-line no-new
        new Chip(chipEl, { removable: true })

        chipEl.addEventListener('removed.coreui.chip', () => {
          setTimeout(() => {
            expect(fixtureEl.querySelector('.chip')).toBeNull()
            resolve()
          }, 10)
        })

        chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))
      })
    })

    it('should remove chip on Delete key when removable', () => {
      return new Promise(resolve => {
        fixtureEl.innerHTML = '<div><span class="chip">Tag</span></div>'

        const chipEl = fixtureEl.querySelector('.chip')
        // eslint-disable-next-line no-new
        new Chip(chipEl, { removable: true })

        chipEl.addEventListener('removed.coreui.chip', () => {
          setTimeout(() => {
            expect(fixtureEl.querySelector('.chip')).toBeNull()
            resolve()
          }, 10)
        })

        chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete', bubbles: true }))
      })
    })

    it('should not remove chip on Backspace when not removable', () => {
      fixtureEl.innerHTML = '<div><span class="chip">Tag</span></div>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl)

      chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))

      expect(fixtureEl.querySelector('.chip')).not.toBeNull()
    })

    it('should focus previous chip on ArrowLeft', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <span class="chip" tabindex="0">First</span>',
        '  <span class="chip" tabindex="0">Second</span>',
        '</div>'
      ].join('')

      const chips = fixtureEl.querySelectorAll('.chip')
      // eslint-disable-next-line no-new
      new Chip(chips[0], { selectable: true })
      // eslint-disable-next-line no-new
      new Chip(chips[1], { selectable: true })

      chips[1].focus()
      chips[1].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))

      expect(document.activeElement).toEqual(chips[0])
    })

    it('should focus next chip on ArrowRight', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <span class="chip" tabindex="0">First</span>',
        '  <span class="chip" tabindex="0">Second</span>',
        '</div>'
      ].join('')

      const chips = fixtureEl.querySelectorAll('.chip')
      // eslint-disable-next-line no-new
      new Chip(chips[0], { selectable: true })
      // eslint-disable-next-line no-new
      new Chip(chips[1], { selectable: true })

      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

      expect(document.activeElement).toEqual(chips[1])
    })

    it('should focus first chip on Home key', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <span class="chip" tabindex="0">First</span>',
        '  <span class="chip" tabindex="0">Second</span>',
        '  <span class="chip" tabindex="0">Third</span>',
        '</div>'
      ].join('')

      const chips = fixtureEl.querySelectorAll('.chip')
      for (const chip of chips) {
        // eslint-disable-next-line no-new
        new Chip(chip, { selectable: true })
      }

      chips[2].focus()
      chips[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))

      expect(document.activeElement).toEqual(chips[0])
    })

    it('should focus last chip on End key', () => {
      fixtureEl.innerHTML = [
        '<div>',
        '  <span class="chip" tabindex="0">First</span>',
        '  <span class="chip" tabindex="0">Second</span>',
        '  <span class="chip" tabindex="0">Third</span>',
        '</div>'
      ].join('')

      const chips = fixtureEl.querySelectorAll('.chip')
      for (const chip of chips) {
        // eslint-disable-next-line no-new
        new Chip(chip, { selectable: true })
      }

      chips[0].focus()
      chips[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))

      expect(document.activeElement).toEqual(chips[2])
    })

    it('should not handle keyboard events when disabled', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true, disabled: true })

      chipEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))

      expect(chip._selected).toBeFalse()
    })
  })

  describe('_applyState', () => {
    it('should add chip-clickable class when selectable and not disabled', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true })

      expect(chipEl).toHaveClass('chip-clickable')
    })

    it('should add disabled class and aria-disabled when disabled', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { disabled: true })

      expect(chipEl).toHaveClass('disabled')
      expect(chipEl.getAttribute('aria-disabled')).toEqual('true')
    })

    it('should set aria-selected when selectable', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      // eslint-disable-next-line no-new
      new Chip(chipEl, { selectable: true })

      expect(chipEl.getAttribute('aria-selected')).toEqual('false')
    })
  })

  describe('data-api', () => {
    it('should initialize chip via data attribute', () => {
      fixtureEl.innerHTML = '<span class="chip" data-coreui-chip="true">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')

      document.dispatchEvent(new Event('DOMContentLoaded'))

      expect(Chip.getInstance(chipEl)).not.toBeNull()
    })
  })

  describe('dispose', () => {
    it('should dispose a chip', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      expect(Chip.getInstance(chipEl)).not.toBeNull()

      chip.dispose()

      expect(Chip.getInstance(chipEl)).toBeNull()
    })
  })

  describe('jQueryInterface', () => {
    it('should handle config passed and call method on existing chip', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl, { selectable: true })

      const spy = spyOn(chip, 'toggle')

      jQueryMock.fn.chip = Chip.jQueryInterface
      jQueryMock.elements = [chipEl]

      jQueryMock.fn.chip.call(jQueryMock, 'toggle')

      expect(spy).toHaveBeenCalled()
    })

    it('should just create a chip instance without calling a method', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')

      jQueryMock.fn.chip = Chip.jQueryInterface
      jQueryMock.elements = [chipEl]

      jQueryMock.fn.chip.call(jQueryMock)

      expect(Chip.getInstance(chipEl)).not.toBeNull()
    })

    it('should throw an error on undefined method', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const action = 'undefinedMethod'

      jQueryMock.fn.chip = Chip.jQueryInterface
      jQueryMock.elements = [chipEl]

      expect(() => {
        jQueryMock.fn.chip.call(jQueryMock, action)
      }).toThrowError(TypeError, `No method named "${action}"`)
    })

    it('should throw an error on protected method', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const action = '_getConfig'

      jQueryMock.fn.chip = Chip.jQueryInterface
      jQueryMock.elements = [chipEl]

      expect(() => {
        jQueryMock.fn.chip.call(jQueryMock, action)
      }).toThrowError(TypeError, `No method named "${action}"`)
    })
  })

  describe('getInstance', () => {
    it('should return chip instance', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      expect(Chip.getInstance(chipEl)).toEqual(chip)
      expect(Chip.getInstance(chipEl)).toBeInstanceOf(Chip)
    })

    it('should return null when there is no chip instance', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')

      expect(Chip.getInstance(chipEl)).toBeNull()
    })
  })

  describe('getOrCreateInstance', () => {
    it('should return chip instance', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')
      const chip = new Chip(chipEl)

      expect(Chip.getOrCreateInstance(chipEl)).toEqual(chip)
      expect(Chip.getInstance(chipEl)).toEqual(Chip.getOrCreateInstance(chipEl, {}))
      expect(Chip.getOrCreateInstance(chipEl)).toBeInstanceOf(Chip)
    })

    it('should return new instance when there is no chip instance', () => {
      fixtureEl.innerHTML = '<span class="chip">Tag</span>'

      const chipEl = fixtureEl.querySelector('.chip')

      expect(Chip.getInstance(chipEl)).toBeNull()
      expect(Chip.getOrCreateInstance(chipEl)).toBeInstanceOf(Chip)
    })
  })
})
