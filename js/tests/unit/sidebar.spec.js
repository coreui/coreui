import Sidebar from '../../src/sidebar.js'
import EventHandler from '../../src/dom/event-handler.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('Sidebar', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
    // Clean up any event listeners
    EventHandler.off(document, 'click.coreui.sidebar.data-api')
    EventHandler.off(window, 'resize')
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(Sidebar.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin defaults', () => {
      expect(Sidebar.Default).toEqual({})
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default types', () => {
      expect(Sidebar.DefaultType).toEqual({})
    })
  })

  describe('NAME', () => {
    it('should return plugin name', () => {
      expect(Sidebar.NAME).toBe('sidebar')
    })
  })

  describe('Constructor', () => {
    it('should create sidebar instance with CSS selector', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')

      expect(sidebar._element).toEqual(fixtureEl.querySelector('.sidebar'))
    })

    it('should create sidebar instance with DOM element', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const sidebar = new Sidebar(sidebarEl)

      expect(sidebar._element).toEqual(sidebarEl)
    })

    it('should initialize default config', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')

      expect(sidebar._config).toEqual({})
    })

    it('should initialize instance properties', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')

      expect(sidebar._show).toBeDefined()
      expect(sidebar._mobile).toBeDefined()
      expect(sidebar._overlaid).toBeDefined()
      expect(sidebar._narrow).toBeDefined()
      expect(sidebar._unfoldable).toBeDefined()
      expect(sidebar._backdrop).toBeDefined()
    })

    it('should call initialization methods', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'

      const spyInitializeBackDrop = spyOn(Sidebar.prototype, '_initializeBackDrop').and.returnValue({})
      const spyAddEventListeners = spyOn(Sidebar.prototype, '_addEventListeners')

      // eslint-disable-next-line no-new
      new Sidebar('.sidebar')

      expect(spyInitializeBackDrop).toHaveBeenCalled()
      expect(spyAddEventListeners).toHaveBeenCalled()
    })
  })

  describe('show', () => {
    it('should trigger show event', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      let showEventTriggered = false

      sidebar._element.addEventListener('show.coreui.sidebar', () => {
        showEventTriggered = true
      })

      sidebar.show()

      expect(showEventTriggered).toBe(true)
    })

    it('should remove hide class if present', () => {
      fixtureEl.innerHTML = '<div class="sidebar hide"></div>'
      const sidebar = new Sidebar('.sidebar')

      sidebar.show()

      expect(sidebar._element.classList.contains('hide')).toBe(false)
    })

    it('should add show class for overlaid sidebar', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-overlaid"></div>'
      const sidebar = new Sidebar('.sidebar')

      sidebar.show()

      expect(sidebar._element.classList.contains('show')).toBe(true)
    })

    it('should handle mobile sidebar show', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      const spyBackdropShow = spyOn(sidebar._backdrop, 'show')

      sidebar.show()

      expect(sidebar._element.classList.contains('show')).toBe(true)
      expect(spyBackdropShow).toHaveBeenCalled()
    })

    it('should trigger shown event and add click out listener when completed', done => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isVisible').and.returnValue(true)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      const spyAddClickOutListener = spyOn(sidebar, '_addClickOutListener')

      sidebar._element.addEventListener('shown.coreui.sidebar', () => {
        expect(sidebar._show).toBe(true)
        expect(spyAddClickOutListener).toHaveBeenCalled()
        done()
      })

      sidebar.show()
    })
  })

  describe('hide', () => {
    it('should trigger hide event', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebar = new Sidebar('.sidebar')
      let hideEventTriggered = false

      sidebar._element.addEventListener('hide.coreui.sidebar', () => {
        hideEventTriggered = true
      })

      sidebar.hide()

      expect(hideEventTriggered).toBe(true)
    })

    it('should remove show class if present', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebar = new Sidebar('.sidebar')

      sidebar.hide()

      expect(sidebar._element.classList.contains('show')).toBe(false)
    })

    it('should handle mobile sidebar hide', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      const spyBackdropHide = spyOn(sidebar._backdrop, 'hide')

      sidebar.hide()

      expect(spyBackdropHide).toHaveBeenCalled()
    })

    it('should add hide class for non-mobile non-overlaid sidebar', () => {
      fixtureEl.innerHTML = '<div class="sidebar show"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(false)
      sidebar._overlaid = false

      sidebar.hide()

      expect(sidebar._element.classList.contains('hide')).toBe(true)
    })

    it('should trigger hidden event and remove click out listener when completed', done => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isVisible').and.returnValue(false)
      spyOn(sidebar, '_isMobile').and.returnValue(true)
      const spyRemoveClickOutListener = spyOn(sidebar, '_removeClickOutListener')

      sidebar._element.addEventListener('hidden.coreui.sidebar', () => {
        expect(sidebar._show).toBe(false)
        expect(spyRemoveClickOutListener).toHaveBeenCalled()
        done()
      })

      sidebar.hide()
    })
  })

  describe('toggle', () => {
    it('should call hide when sidebar is visible', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isVisible').and.returnValue(true)
      const spyHide = spyOn(sidebar, 'hide')

      sidebar.toggle()

      expect(spyHide).toHaveBeenCalled()
    })

    it('should call show when sidebar is not visible', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isVisible').and.returnValue(false)
      const spyShow = spyOn(sidebar, 'show')

      sidebar.toggle()

      expect(spyShow).toHaveBeenCalled()
    })
  })

  describe('narrow', () => {
    it('should add narrow class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.narrow()

      expect(sidebar._element.classList.contains('sidebar-narrow')).toBe(true)
      expect(sidebar._narrow).toBe(true)
    })

    it('should not add narrow class when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.narrow()

      expect(sidebar._element.classList.contains('sidebar-narrow')).toBe(false)
      expect(sidebar._narrow).toBe(false)
    })
  })

  describe('unfoldable', () => {
    it('should add unfoldable class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.unfoldable()

      expect(sidebar._element.classList.contains('sidebar-narrow-unfoldable')).toBe(true)
      expect(sidebar._unfoldable).toBe(true)
    })

    it('should not add unfoldable class when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.unfoldable()

      expect(sidebar._element.classList.contains('sidebar-narrow-unfoldable')).toBe(false)
      expect(sidebar._unfoldable).toBe(false)
    })
  })

  describe('reset', () => {
    it('should remove narrow class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._narrow = true
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.reset()

      expect(sidebar._element.classList.contains('sidebar-narrow')).toBe(false)
      expect(sidebar._narrow).toBe(false)
    })

    it('should remove unfoldable class when not mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow-unfoldable"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._unfoldable = true
      spyOn(sidebar, '_isMobile').and.returnValue(false)

      sidebar.reset()

      expect(sidebar._element.classList.contains('sidebar-narrow-unfoldable')).toBe(false)
      expect(sidebar._unfoldable).toBe(false)
    })

    it('should not reset when mobile', () => {
      fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._narrow = true
      spyOn(sidebar, '_isMobile').and.returnValue(true)

      sidebar.reset()

      expect(sidebar._element.classList.contains('sidebar-narrow')).toBe(true)
      expect(sidebar._narrow).toBe(true)
    })
  })

  describe('toggleNarrow', () => {
    it('should call reset when narrow is true', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._narrow = true
      const spyReset = spyOn(sidebar, 'reset')

      sidebar.toggleNarrow()

      expect(spyReset).toHaveBeenCalled()
    })

    it('should call narrow when narrow is false', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._narrow = false
      const spyNarrow = spyOn(sidebar, 'narrow')

      sidebar.toggleNarrow()

      expect(spyNarrow).toHaveBeenCalled()
    })
  })

  describe('toggleUnfoldable', () => {
    it('should call reset when unfoldable is true', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._unfoldable = true
      const spyReset = spyOn(sidebar, 'reset')

      sidebar.toggleUnfoldable()

      expect(spyReset).toHaveBeenCalled()
    })

    it('should call unfoldable when unfoldable is false', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebar = new Sidebar('.sidebar')
      sidebar._unfoldable = false
      const spyUnfoldable = spyOn(sidebar, 'unfoldable')

      sidebar.toggleUnfoldable()

      expect(spyUnfoldable).toHaveBeenCalled()
    })
  })

  describe('Private Methods', () => {
    describe('_initializeBackDrop', () => {
      it('should create backdrop with correct configuration', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')

        const backdrop = sidebar._initializeBackDrop()

        expect(backdrop).toBeDefined()
        expect(typeof backdrop.show).toBe('function')
        expect(typeof backdrop.hide).toBe('function')
      })
    })

    describe('_isMobile', () => {
      it('should return true when --cui-is-mobile CSS variable is set', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        spyOn(window, 'getComputedStyle').and.returnValue({
          getPropertyValue: () => 'true'
        })

        expect(sidebar._isMobile()).toBe(true)
      })

      it('should return false when --cui-is-mobile CSS variable is not set', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        spyOn(window, 'getComputedStyle').and.returnValue({
          getPropertyValue: () => ''
        })

        expect(sidebar._isMobile()).toBe(false)
      })
    })

    describe('_isNarrow', () => {
      it('should return true when sidebar has narrow class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isNarrow()).toBe(true)
      })

      it('should return false when sidebar does not have narrow class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isNarrow()).toBe(false)
      })
    })

    describe('_isOverlaid', () => {
      it('should return true when sidebar has overlaid class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-overlaid"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isOverlaid()).toBe(true)
      })

      it('should return false when sidebar does not have overlaid class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isOverlaid()).toBe(false)
      })
    })

    describe('_isUnfoldable', () => {
      it('should return true when sidebar has unfoldable class', () => {
        fixtureEl.innerHTML = '<div class="sidebar sidebar-narrow-unfoldable"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isUnfoldable()).toBe(true)
      })

      it('should return false when sidebar does not have unfoldable class', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')

        expect(sidebar._isUnfoldable()).toBe(false)
      })
    })

    describe('_isVisible', () => {
      it('should return true when sidebar is visible in viewport', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        spyOn(sidebar._element, 'getBoundingClientRect').and.returnValue({
          top: 0,
          left: 0,
          bottom: 100,
          right: 100
        })

        expect(sidebar._isVisible()).toBe(true)
      })

      it('should return false when sidebar is not visible in viewport', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        spyOn(sidebar._element, 'getBoundingClientRect').and.returnValue({
          top: -100,
          left: -100,
          bottom: -50,
          right: -50
        })

        expect(sidebar._isVisible()).toBe(false)
      })
    })

    describe('_addClassName', () => {
      it('should add class to sidebar element', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')

        sidebar._addClassName('test-class')

        expect(sidebar._element.classList.contains('test-class')).toBe(true)
      })
    })

    describe('_clickOutListener', () => {
      it('should hide sidebar when clicking outside', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div><div class="outside"></div>'
        const sidebar = new Sidebar('.sidebar')
        const outsideEl = fixtureEl.querySelector('.outside')
        const spyHide = spyOn(sidebar, 'hide')
        const mockEvent = {
          target: outsideEl,
          preventDefault: jasmine.createSpy('preventDefault'),
          stopPropagation: jasmine.createSpy('stopPropagation')
        }

        sidebar._clickOutListener(mockEvent, sidebar)

        expect(mockEvent.preventDefault).toHaveBeenCalled()
        expect(mockEvent.stopPropagation).toHaveBeenCalled()
        expect(spyHide).toHaveBeenCalled()
      })

      it('should not hide sidebar when clicking inside', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><div class="inside"></div></div>'
        const sidebar = new Sidebar('.sidebar')
        const insideEl = fixtureEl.querySelector('.inside')
        const spyHide = spyOn(sidebar, 'hide')
        const mockEvent = {
          target: insideEl,
          preventDefault: jasmine.createSpy('preventDefault'),
          stopPropagation: jasmine.createSpy('stopPropagation')
        }

        sidebar._clickOutListener(mockEvent, sidebar)

        expect(mockEvent.preventDefault).not.toHaveBeenCalled()
        expect(mockEvent.stopPropagation).not.toHaveBeenCalled()
        expect(spyHide).not.toHaveBeenCalled()
      })
    })

    describe('_addEventListeners', () => {
      it('should add click out listener for mobile visible sidebar', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        sidebar._mobile = true
        sidebar._show = true
        const spyAddClickOutListener = spyOn(sidebar, '_addClickOutListener')

        sidebar._addEventListeners()

        expect(spyAddClickOutListener).toHaveBeenCalled()
      })

      it('should add click out listener for overlaid visible sidebar', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        sidebar._overlaid = true
        sidebar._show = true
        const spyAddClickOutListener = spyOn(sidebar, '_addClickOutListener')

        sidebar._addEventListeners()

        expect(spyAddClickOutListener).toHaveBeenCalled()
      })

      it('should handle toggle narrow event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-toggle="narrow">Toggle</button></div>'
        const sidebar = new Sidebar('.sidebar')
        const toggleBtn = fixtureEl.querySelector('button')
        const spyToggleNarrow = spyOn(sidebar, 'toggleNarrow')

        toggleBtn.click()

        expect(spyToggleNarrow).toHaveBeenCalled()
      })

      it('should handle toggle unfoldable event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-toggle="unfoldable">Toggle</button></div>'
        const sidebar = new Sidebar('.sidebar')
        const toggleBtn = fixtureEl.querySelector('button')
        const spyToggleUnfoldable = spyOn(sidebar, 'toggleUnfoldable')

        toggleBtn.click()

        expect(spyToggleUnfoldable).toHaveBeenCalled()
      })

      it('should handle close event', () => {
        fixtureEl.innerHTML = '<div class="sidebar"><button data-coreui-close="sidebar">Close</button></div>'
        const sidebar = new Sidebar('.sidebar')
        const closeBtn = fixtureEl.querySelector('button')
        const spyHide = spyOn(sidebar, 'hide')

        closeBtn.click()

        expect(spyHide).toHaveBeenCalled()
      })

      it('should handle window resize event for mobile visible sidebar', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebar = new Sidebar('.sidebar')
        spyOn(sidebar, '_isMobile').and.returnValue(true)
        spyOn(sidebar, '_isVisible').and.returnValue(true)
        const spyHide = spyOn(sidebar, 'hide')
        const spyInitializeBackDrop = spyOn(sidebar, '_initializeBackDrop').and.returnValue({})

        const resizeEvent = new Event('resize')
        window.dispatchEvent(resizeEvent)

        expect(spyHide).toHaveBeenCalled()
        expect(spyInitializeBackDrop).toHaveBeenCalled()
      })
    })
  })

  describe('Static Methods', () => {
    describe('sidebarInterface', () => {
      it('should create instance when config is object', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')

        Sidebar.sidebarInterface(sidebarEl, {})

        expect(Sidebar.getInstance(sidebarEl)).toBeInstanceOf(Sidebar)
      })

      it('should call method when config is string', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        const sidebar = new Sidebar(sidebarEl)
        const spyShow = spyOn(sidebar, 'show')

        Sidebar.sidebarInterface(sidebarEl, 'show')

        expect(spyShow).toHaveBeenCalled()
      })

      it('should throw error for non-existent method', () => {
        fixtureEl.innerHTML = '<div class="sidebar"></div>'
        const sidebarEl = fixtureEl.querySelector('.sidebar')
        // eslint-disable-next-line no-new
        new Sidebar(sidebarEl)

        expect(() => {
          Sidebar.sidebarInterface(sidebarEl, 'nonExistentMethod')
        }).toThrowError(TypeError, 'No method named "nonExistentMethod"')
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

  describe('Data API', () => {
    it('should initialize sidebar on elements with .sidebar class on window load', () => {
      fixtureEl.innerHTML = '<div class="sidebar"></div>'
      const sidebarEl = fixtureEl.querySelector('.sidebar')
      const spySidebarInterface = spyOn(Sidebar, 'sidebarInterface')

      const loadEvent = new Event('load')
      window.dispatchEvent(loadEvent)

      expect(spySidebarInterface).toHaveBeenCalledWith(sidebarEl)
    })
  })
})
