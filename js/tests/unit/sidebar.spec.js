import Sidebar from '../../src/sidebar.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('Sidebar', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should take care of element either passed as a CSS selector or DOM element', () => {
    fixtureEl.innerHTML = '<div class="sidebar"></div>'

    const sidebarEl = fixtureEl.querySelector('.sidebar')
    const sidebarBySelector = new Sidebar('.sidebar')
    const sidebarByElement = new Sidebar(sidebarEl)

    expect(sidebarBySelector._element).toEqual(sidebarEl)
    expect(sidebarByElement._element).toEqual(sidebarEl)
  })

  it('should return version', () => {
    expect(Sidebar.VERSION).toEqual(jasmine.any(String))
  })

  describe('Constructor', () => {
    it('should set default config', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      expect(sidebar._config).toEqual({})
    })

    it('should initialize properties correctly', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')

      spyOn(Sidebar.prototype, '_isVisible').and.returnValue(true)
      spyOn(Sidebar.prototype, '_isMobile').and.returnValue(false)
      spyOn(Sidebar.prototype, '_isOverlaid').and.returnValue(false)
      spyOn(Sidebar.prototype, '_isNarrow').and.returnValue(false)
      spyOn(Sidebar.prototype, '_isUnfoldable').and.returnValue(false)

      const sidebar = new Sidebar(sidebarEl)

      expect(sidebar._show).toBe(true)
      expect(sidebar._mobile).toBe(false)
      expect(sidebar._overlaid).toBe(false)
      expect(sidebar._narrow).toBe(false)
      expect(sidebar._unfoldable).toBe(false)
      expect(sidebar._backdrop).toBeDefined()
    })

    it('should call initialization methods', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      spyOn(Sidebar.prototype, '_initializeBackDrop').and.returnValue({})
      spyOn(Sidebar.prototype, '_addEventListeners')

      new Sidebar(sidebarEl) // eslint-disable-line no-new

      expect(Sidebar.prototype._initializeBackDrop).toHaveBeenCalled()
      expect(Sidebar.prototype._addEventListeners).toHaveBeenCalled()
    })
  })

  describe('Data API', () => {
    it('should initialize sidebar on elements with .sidebar class', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      spyOn(Sidebar, 'sidebarInterface')

      const loadEvent = new Event('load')
      window.dispatchEvent(loadEvent)

      expect(Sidebar.sidebarInterface).toHaveBeenCalledWith(sidebarEl)
    })
  })

  describe('Static methods', () => {
    describe('sidebarInterface', () => {
      it('should create instance if config is object', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')

        Sidebar.sidebarInterface(sidebarEl, {})

        expect(Sidebar.getInstance(sidebarEl)).toBeInstanceOf(Sidebar)
      })

      it('should call method if config is string', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)
        spyOn(sidebar, 'show')

        Sidebar.sidebarInterface(sidebarEl, 'show')

        expect(sidebar.show).toHaveBeenCalled()
      })

      it('should throw error for non-existent method', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        new Sidebar(sidebarEl) // eslint-disable-line no-new

        const throwError = () => Sidebar.sidebarInterface(sidebarEl, 'nonExistentMethod')

        expect(throwError).toThrowError(TypeError, 'No method named "nonExistentMethod"')
      })
    })

    describe('jQueryInterface', () => {
      it('should create instance when jQuery is present', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        jQueryMock.fn.sidebar = Sidebar.jQueryInterface
        jQueryMock.elements = [sidebarEl]

        jQueryMock.fn.sidebar.call(jQueryMock)

        expect(Sidebar.getInstance(sidebarEl)).toBeInstanceOf(Sidebar)
      })
    })
  })

  describe('show', () => {
    it('should trigger show event', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isVisible').and.returnValue(false)
      let eventTriggered = false

      sidebarEl.addEventListener('show.coreui.sidebar', () => {
        eventTriggered = true
      })

      sidebar.show()

      expect(eventTriggered).toBe(true)
    })

    it('should remove hide class if present', () => {
      fixtureEl.innerHTML = '<div class="sidebar hide"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      sidebar.show()

      expect(sidebarEl.classList.contains('hide')).toBe(false)
    })

    it('should add show class for overlaid sidebar', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-overlaid"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isOverlaid').and.returnValue(true)

      sidebar.show()

      expect(sidebarEl.classList.contains('show')).toBe(true)
    })

    it('should handle mobile sidebar show', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      spyOn(sidebar._backdrop, 'show')

      sidebar.show()

      expect(sidebarEl.classList.contains('show')).toBe(true)
      expect(sidebar._backdrop.show).toHaveBeenCalled()
    })

    it('should trigger shown event when visible and add click out listener for mobile', done => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      // Make sure it's considered visible when the completion callback runs
      spyOn(sidebar, '_isVisible').and.returnValue(true)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      spyOn(sidebar, '_isOverlaid').and.returnValue(false)
      spyOn(sidebar, '_addClickOutListener')

      sidebarEl.addEventListener('shown.coreui.sidebar', () => {
        expect(sidebar._show).toBe(true)
        expect(sidebar._addClickOutListener).toHaveBeenCalled()
        done()
      })

      sidebar.show()
    })
  })

  describe('hide', () => {
    it('should trigger hide event', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      let eventTriggered = false

      sidebarEl.addEventListener('hide.coreui.sidebar', () => {
        eventTriggered = true
      })

      sidebar.hide()

      expect(eventTriggered).toBe(true)
    })

    it('should remove show class if present', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      sidebar.hide()

      expect(sidebarEl.classList.contains('show')).toBe(false)
    })

    it('should handle mobile sidebar hide', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      spyOn(sidebar._backdrop, 'hide')

      sidebar.hide()

      expect(sidebar._backdrop.hide).toHaveBeenCalled()
    })

    it('should add hide class for non-mobile non-overlaid sidebar', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(false)
      spyOn(sidebar, '_isOverlaid').and.returnValue(false)

      sidebar.hide()

      expect(sidebarEl.classList.contains('hide')).toBe(true)
    })

    it('should trigger hidden event when not visible and remove click out listener for mobile', done => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      // Make sure it's considered not visible when the completion callback runs
      spyOn(sidebar, '_isVisible').and.returnValue(false)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      spyOn(sidebar, '_isOverlaid').and.returnValue(false)
      spyOn(sidebar, '_removeClickOutListener')

      sidebarEl.addEventListener('hidden.coreui.sidebar', () => {
        expect(sidebar._show).toBe(false)
        expect(sidebar._removeClickOutListener).toHaveBeenCalled()
        done()
      })

      sidebar.hide()
    })
  })

  describe('toggle', () => {
    it('should call hide when visible', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isVisible').and.returnValue(true)
      spyOn(sidebar, 'hide')

      sidebar.toggle()

      expect(sidebar.hide).toHaveBeenCalled()
    })

    it('should call show when not visible', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isVisible').and.returnValue(false)
      spyOn(sidebar, 'show')

      sidebar.toggle()

      expect(sidebar.show).toHaveBeenCalled()
    })
  })

  describe('narrow', () => {
    it('should add narrow class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.narrow()

      expect(sidebarEl.classList.contains('sidebar-narrow')).toBe(true)
      expect(sidebar._narrow).toBe(true)
    })

    it('should not add narrow class when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.narrow()

      expect(sidebarEl.classList.contains('sidebar-narrow')).toBe(false)
      expect(sidebar._narrow).toBe(false)
    })
  })

  describe('unfoldable', () => {
    it('should add unfoldable class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.unfoldable()

      expect(sidebarEl.classList.contains('sidebar-narrow-unfoldable')).toBe(true)
      expect(sidebar._unfoldable).toBe(true)
    })

    it('should not add unfoldable class when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.unfoldable()

      expect(sidebarEl.classList.contains('sidebar-narrow-unfoldable')).toBe(false)
      expect(sidebar._unfoldable).toBe(false)
    })
  })

  describe('reset', () => {
    it('should remove narrow class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._narrow = true
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.reset()

      expect(sidebarEl.classList.contains('sidebar-narrow')).toBe(false)
      expect(sidebar._narrow).toBe(false)
    })

    it('should remove unfoldable class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow-unfoldable"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._unfoldable = true
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.reset()

      expect(sidebarEl.classList.contains('sidebar-narrow-unfoldable')).toBe(false)
      expect(sidebar._unfoldable).toBe(false)
    })

    it('should not reset when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._narrow = true
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.reset()

      expect(sidebarEl.classList.contains('sidebar-narrow')).toBe(true)
      expect(sidebar._narrow).toBe(true)
    })
  })

  describe('toggleNarrow', () => {
    it('should call reset when narrow is true', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._narrow = true
      spyOn(sidebar, 'reset')

      sidebar.toggleNarrow()

      expect(sidebar.reset).toHaveBeenCalled()
    })

    it('should call narrow when narrow is false', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._narrow = false
      spyOn(sidebar, 'narrow')

      sidebar.toggleNarrow()

      expect(sidebar.narrow).toHaveBeenCalled()
    })
  })

  describe('toggleUnfoldable', () => {
    it('should call reset when unfoldable is true', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._unfoldable = true
      spyOn(sidebar, 'reset')

      sidebar.toggleUnfoldable()

      expect(sidebar.reset).toHaveBeenCalled()
    })

    it('should call unfoldable when unfoldable is false', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)
      sidebar._unfoldable = false
      spyOn(sidebar, 'unfoldable')

      sidebar.toggleUnfoldable()

      expect(sidebar.unfoldable).toHaveBeenCalled()
    })
  })

  describe('Private methods', () => {
    describe('_initializeBackDrop', () => {
      it('should create backdrop with correct config', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        const backdrop = sidebar._initializeBackDrop()

        expect(backdrop).toBeDefined()
      })
    })

    describe('_isMobile', () => {
      it('should return true when --cui-is-mobile is set', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        spyOn(window, 'getComputedStyle').and.returnValue({
          getPropertyValue: () => 'true'
        })

        expect(sidebar._isMobile()).toBe(true)
      })

      it('should return false when --cui-is-mobile is not set', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        spyOn(window, 'getComputedStyle').and.returnValue({
          getPropertyValue: () => ''
        })

        expect(sidebar._isMobile()).toBe(false)
      })
    })

    describe('_isNarrow', () => {
      it('should return true when sidebar has narrow class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isNarrow()).toBe(true)
      })

      it('should return false when sidebar does not have narrow class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isNarrow()).toBe(false)
      })
    })

    describe('_isOverlaid', () => {
      it('should return true when sidebar has overlaid class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-overlaid"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isOverlaid()).toBe(true)
      })

      it('should return false when sidebar does not have overlaid class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isOverlaid()).toBe(false)
      })
    })

    describe('_isUnfoldable', () => {
      it('should return true when sidebar has unfoldable class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow-unfoldable"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isUnfoldable()).toBe(true)
      })

      it('should return false when sidebar does not have unfoldable class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        expect(sidebar._isUnfoldable()).toBe(false)
      })
    })

    describe('_isVisible', () => {
      it('should return true when sidebar is visible in viewport', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        spyOn(sidebarEl, 'getBoundingClientRect').and.returnValue({
          top: 0,
          left: 0,
          bottom: 100,
          right: 100
        })

        expect(sidebar._isVisible()).toBe(true)
      })

      it('should return false when sidebar is not visible in viewport', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        spyOn(sidebarEl, 'getBoundingClientRect').and.returnValue({
          top: -100,
          left: -100,
          bottom: -50,
          right: -50
        })

        expect(sidebar._isVisible()).toBe(false)
      })
    })

    describe('_addClassName', () => {
      it('should add class to element', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)

        sidebar._addClassName('test-class')

        expect(sidebarEl.classList.contains('test-class')).toBe(true)
      })
    })

    describe('_clickOutListener', () => {
      it('should hide sidebar when clicking outside', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div><div class="outside"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const outsideEl = fixtureEl.querySelector('.outside')
        const sidebar = new Sidebar(sidebarEl)
        const event = {
          target: outsideEl,
          preventDefault: jasmine.createSpy(),
          stopPropagation: jasmine.createSpy()
        }
        spyOn(sidebar, 'hide')

        sidebar._clickOutListener(event, sidebar)

        expect(event.preventDefault).toHaveBeenCalled()
        expect(event.stopPropagation).toHaveBeenCalled()
        expect(sidebar.hide).toHaveBeenCalled()
      })

      it('should not hide sidebar when clicking inside', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><div class="inside"></div></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const insideEl = fixtureEl.querySelector('.inside')
        const sidebar = new Sidebar(sidebarEl)
        const event = {
          target: insideEl,
          preventDefault: jasmine.createSpy(),
          stopPropagation: jasmine.createSpy()
        }
        spyOn(sidebar, 'hide')

        sidebar._clickOutListener(event, sidebar)

        expect(event.preventDefault).not.toHaveBeenCalled()
        expect(event.stopPropagation).not.toHaveBeenCalled()
        expect(sidebar.hide).not.toHaveBeenCalled()
      })
    })

    describe('_addEventListeners', () => {
      it('should add click out listener for mobile visible sidebar', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)
        sidebar._mobile = true
        sidebar._show = true
        spyOn(sidebar, '_addClickOutListener')

        sidebar._addEventListeners()

        expect(sidebar._addClickOutListener).toHaveBeenCalled()
      })

      it('should add click out listener for overlaid visible sidebar', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)
        sidebar._overlaid = true
        sidebar._show = true
        spyOn(sidebar, '_addClickOutListener')

        sidebar._addEventListeners()

        expect(sidebar._addClickOutListener).toHaveBeenCalled()
      })

      it('should handle toggle narrow event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-toggle="narrow">Toggle</button></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const toggleBtn = fixtureEl.querySelector('button')
        const sidebar = new Sidebar(sidebarEl)
        spyOn(sidebar, 'toggleNarrow')

        toggleBtn.click()

        expect(sidebar.toggleNarrow).toHaveBeenCalled()
      })

      it('should handle toggle unfoldable event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-toggle="unfoldable">Toggle</button></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const toggleBtn = fixtureEl.querySelector('button')
        const sidebar = new Sidebar(sidebarEl)
        spyOn(sidebar, 'toggleUnfoldable')

        toggleBtn.click()

        expect(sidebar.toggleUnfoldable).toHaveBeenCalled()
      })

      it('should handle close event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-close="sidebar">Close</button></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const closeBtn = fixtureEl.querySelector('button')
        const sidebar = new Sidebar(sidebarEl)
        spyOn(sidebar, 'hide')

        closeBtn.click()

        expect(sidebar.hide).toHaveBeenCalled()
      })

      it('should handle window resize event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)
        spyOn(sidebar, '_isMobile').and.returnValue(true)
        spyOn(sidebar, '_isVisible').and.returnValue(true)
        spyOn(sidebar, 'hide')
        spyOn(sidebar, '_initializeBackDrop').and.returnValue({})

        const resizeEvent = new Event('resize')
        window.dispatchEvent(resizeEvent)

        expect(sidebar.hide).toHaveBeenCalled()
        expect(sidebar._initializeBackDrop).toHaveBeenCalled()
      })
    })
  })

  describe('Constants and getters', () => {
    it('should have correct NAME', () => {
      expect(Sidebar.NAME).toBe('sidebar')
    })

    it('should have correct Default config', () => {
      expect(Sidebar.Default).toEqual({})
    })

    it('should have correct DefaultType', () => {
      expect(Sidebar.DefaultType).toEqual({})
    })
  })
})
