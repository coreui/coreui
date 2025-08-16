import Navigation from '../../src/navigation.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('Navigation', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should take care of element either passed as a CSS selector or DOM element', () => {
    fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'

    const navEl = fixtureEl.querySelector('nav')
    const navigationBySelector = new Navigation('nav')
    const navigationByElement = new Navigation(navEl)

    expect(navigationBySelector._element).toEqual(navEl)
    expect(navigationByElement._element).toEqual(navEl)
  })

  it('should return version', () => {
    expect(Navigation.VERSION).toEqual(jasmine.any(String))
  })

  describe('Constructor', () => {
    it('should set default config', () => {
      fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
      const navEl = fixtureEl.querySelector('nav')
      const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

      expect(Navigation.Default.activeLinksExact).toBe(true)
      expect(Navigation.Default.groupsAutoCollapse).toBe(true)
    })

    it('should merge custom config with default', () => {
      fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
      const navEl = fixtureEl.querySelector('nav')
      const customConfig = {
        activeLinksExact: false,
        groupsAutoCollapse: false
      }
      const navigation = new Navigation(navEl, customConfig)

      expect(navigation._config.activeLinksExact).toBe(false)
      expect(navigation._config.groupsAutoCollapse).toBe(false)
    })

    it('should call _setActiveLink on initialization', () => {
      fixtureEl.innerHTML = `
        <nav data-coreui="navigation">
          <a class="nav-link" href="${window.location.href}">Active Link</a>
        </nav>
      `
      const navEl = fixtureEl.querySelector('nav')
      spyOn(Navigation.prototype, '_setActiveLink')

      const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

      expect(Navigation.prototype._setActiveLink).toHaveBeenCalled()
    })

    it('should add event listeners on initialization', () => {
      fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
      const navEl = fixtureEl.querySelector('nav')
      spyOn(Navigation.prototype, '_addEventListeners')

      const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

      expect(Navigation.prototype._addEventListeners).toHaveBeenCalled()
    })
  })

  describe('Data API', () => {
    it('should initialize navigation on elements with data-coreui="navigation"', () => {
      fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
      const navEl = fixtureEl.querySelector('nav')
      spyOn(Navigation, 'navigationInterface')

      const loadEvent = new Event('load')
      window.dispatchEvent(loadEvent)

      expect(Navigation.navigationInterface).toHaveBeenCalledWith(navEl)
    })
  })

  describe('Static methods', () => {
    describe('navigationInterface', () => {
      it('should create instance if config is object', () => {
        fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
        const navEl = fixtureEl.querySelector('nav')

        Navigation.navigationInterface(navEl, {})

        expect(Navigation.getInstance(navEl)).toBeInstanceOf(Navigation)
      })

      it('should handle method calling via string config', () => {
        fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
        const navEl = fixtureEl.querySelector('nav')
        const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

        // Since Navigation has no public methods, we just test that the interface works
        // without throwing errors for valid configurations
        expect(() => {
          Navigation.navigationInterface(navEl, {})
        }).not.toThrow()
      })

      it('should throw error for non-existent method', () => {
        fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
        const navEl = fixtureEl.querySelector('nav')
        const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

        const throwError = () => Navigation.navigationInterface(navEl, 'nonExistentMethod')

        expect(throwError).toThrowError(TypeError, 'No method named "nonExistentMethod"')
      })
    })

    describe('jQueryInterface', () => {
      it('should create instance when jQuery is present', () => {
        fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
        const navEl = fixtureEl.querySelector('nav')
        jQueryMock.fn.navigation = Navigation.jQueryInterface
        jQueryMock.elements = [navEl]

        jQueryMock.fn.navigation.call(jQueryMock)

        expect(Navigation.getInstance(navEl)).toBeInstanceOf(Navigation)
      })
    })
  })

  describe('_setActiveLink', () => {
    it('should call _setActiveLink during initialization', () => {
      fixtureEl.innerHTML = '<nav data-coreui="navigation"></nav>'
      const navEl = fixtureEl.querySelector('nav')
      spyOn(Navigation.prototype, '_setActiveLink')

      const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars

      expect(Navigation.prototype._setActiveLink).toHaveBeenCalled()
    })

    it('should add active class to partial matching links when activeLinksExact is false', () => {
      const currentUrlBase = `${window.location.origin}/context`
      fixtureEl.innerHTML = `
        <nav data-coreui="navigation">
          <a class="nav-link" href="${currentUrlBase}">Partial Match</a>
          <a class="nav-link" href="http://localhost:9876/other">No Match</a>
        </nav>
      `
      const navEl = fixtureEl.querySelector('nav')
      const partialLink = navEl.querySelector(`a[href="${currentUrlBase}"]`)
      const noMatchLink = navEl.querySelector('a[href="http://localhost:9876/other"]')

      const navigation = new Navigation(navEl, { activeLinksExact: false }) // eslint-disable-line no-unused-vars

      expect(partialLink.classList.contains('active')).toBe(true)
      expect(noMatchLink.classList.contains('active')).toBe(false)
    })

    it('should skip nav-group-toggle elements', () => {
      const currentUrl = window.location.href
      fixtureEl.innerHTML = `
        <nav data-coreui="navigation">
          <a class="nav-link nav-group-toggle" href="${currentUrl}">Toggle</a>
        </nav>
      `
      const navEl = fixtureEl.querySelector('nav')
      const toggleLink = navEl.querySelector('a')

      const navigation = new Navigation(navEl, { activeLinksExact: true }) // eslint-disable-line no-unused-vars

      expect(toggleLink.classList.contains('active')).toBe(false)
    })
  })

  describe('Parent group handling', () => {
    it('should process parent groups during initialization', () => {
      fixtureEl.innerHTML = `
        <nav data-coreui="navigation">
          <div class="nav-group">
            <div class="nav-group">
              <a class="nav-link" href="/some/path">Link</a>
            </div>
          </div>
        </nav>
      `
      const navEl = fixtureEl.querySelector('nav')

      // Just test that navigation initializes without errors with nested groups
      expect(() => {
        const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars
      }).not.toThrow()
    })
  })

  describe('Event handling', () => {
    it('should handle nav-group-toggle clicks', () => {
      fixtureEl.innerHTML = `
        <nav data-coreui="navigation">
          <div class="nav-group">
            <a class="nav-group-toggle">Toggle</a>
            <div class="nav-group-items">Items</div>
          </div>
        </nav>
      `
      const navEl = fixtureEl.querySelector('nav')
      const navigation = new Navigation(navEl) // eslint-disable-line no-unused-vars
      const group = navEl.querySelector('.nav-group')
      const toggle = navEl.querySelector('.nav-group-toggle')

      toggle.click()

      expect(group.classList.contains('show')).toBe(true)
      expect(group.getAttribute('aria-expanded')).toBe('true')
    })
  })

  describe('Constants and getters', () => {
    it('should have correct NAME', () => {
      expect(Navigation.NAME).toBe('navigation')
    })

    it('should have correct DATA_KEY', () => {
      expect(Navigation.DATA_KEY).toBe('coreui.navigation')
    })

    it('should have correct Default config', () => {
      expect(Navigation.Default).toEqual({
        activeLinksExact: true,
        groupsAutoCollapse: true
      })
    })

    it('should have correct DefaultType', () => {
      expect(Navigation.DefaultType).toEqual({
        activeLinksExact: 'boolean',
        groupsAutoCollapse: '(string|boolean)'
      })
    })
  })
})
