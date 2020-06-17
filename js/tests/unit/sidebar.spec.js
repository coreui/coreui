import Sidebar from '../../src/sidebar'

/** Test helpers */
import { getFixture, clearFixture, jQueryMock } from '../helpers/fixture'

describe('Sidebar', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should return version', () => {
    expect(typeof Sidebar.VERSION).toEqual('string')
  })

  describe('open', () => {
    it('should open a sidebar', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <div class="c-sidebar2"></div>',
        '</div>'
      ].join('')


      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, '_isVisible').and.callFake(() => true)

      sidebarEl.addEventListener('open.coreui.sidebar', e => {
        expect(e).toBeDefined()
      })

      sidebarEl.addEventListener('opened.coreui.sidebar', () => {
        expect(sidebarEl.classList.contains('c-sidebar-show')).toEqual(true)
        done()
      })

      sidebar.open()
    })
  })

  describe('close', () => {
    it('should close a sidebar', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <div class="c-sidebar2 c-sidebar-show"></div>',
        '</div>'
      ].join('')

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, '_isVisible').and.callFake(() => false)

      sidebarEl.addEventListener('close.coreui.sidebar', e => {
        expect(e).toBeDefined()
      })

      sidebarEl.addEventListener('closed.coreui.sidebar', () => {
        expect(sidebarEl.classList.contains('c-sidebar-show')).toEqual(false)
        done()
      })

      sidebar.close()
    })
  })

  describe('toggle', () => {
    it('should close a sidebar', done => {
      fixtureEl.innerHTML = '<div class="c-sidebar2 c-sidebar-show"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, '_open').and.returnValue(true)

      sidebarEl.addEventListener('close.coreui.sidebar', e => {
        expect(e).toBeDefined()
      })

      sidebarEl.addEventListener('closed.coreui.sidebar', () => {
        expect(sidebarEl.classList.contains('c-sidebar-show')).toEqual(false)
        done()
      })

      sidebar.toggle()
    })

    it('should open a sidebar', done => {
      fixtureEl.innerHTML = '<div class="c-sidebar2 c-sidebar-show"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, '_open').and.returnValue(false)

      sidebar._isVisible = () => false

      sidebarEl.addEventListener('close.coreui.sidebar', e => {
        expect(e).toBeDefined()
      })

      sidebarEl.addEventListener('closed.coreui.sidebar', () => {
        expect(sidebarEl.classList.contains('c-sidebar-show')).toEqual(false)
        done()
      })

      sidebar.toggle()
    })
  })

  describe('minimize', () => {
    it('should minimize a sidebar', () => {
      fixtureEl.innerHTML = '<div class="c-sidebar2"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      sidebar.minimize()

      expect(sidebarEl.classList.contains('c-sidebar-minimized')).toEqual(true)
    })
  })

  describe('unfoldable', () => {
    it('should make the unfoldable sidebar', () => {
      fixtureEl.innerHTML = '<div class="c-sidebar2"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      sidebar.unfoldable()

      expect(sidebarEl.classList.contains('c-sidebar-unfoldable')).toEqual(true)
    })
  })

  describe('reset', () => {
    it('should unminimize a sidebar', () => {
      fixtureEl.innerHTML = '<div class="c-sidebar2 c-sidebar-minimized"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, '_psInit').and.callFake(() => true)

      sidebar.reset()

      expect(sidebarEl.classList.contains('c-sidebar-minimized')).toEqual(false)
    })

    it('should make the standard sidebar', () => {
      fixtureEl.innerHTML = '<div class="c-sidebar2 c-sidebar-unfoldable"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      sidebar.reset()

      expect(sidebarEl.classList.contains('c-sidebar-unfoldable')).toEqual(false)
    })
  })

  describe('jQueryInterface', () => {
    it('should handle config passed and toggle existing sidebar', () => {
      fixtureEl.innerHTML = '<div class="c-sidebar2"></div>'

      const sidebarEl = document.querySelector('.c-sidebar2')
      const sidebar = new Sidebar(sidebarEl)

      spyOn(sidebar, 'toggle')

      jQueryMock.fn.sidebar = Sidebar.jQueryInterface
      jQueryMock.elements = [sidebarEl]

      jQueryMock.fn.sidebar.call(jQueryMock, 'toggle')

      expect(sidebar.toggle).toHaveBeenCalled()
    })
  })

  describe('getInstance', () => {
    it('should return sidebar instance', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const sidebar = new Sidebar(div)

      expect(Sidebar.getInstance(div)).toEqual(sidebar)
    })

    it('should return null when there is no collapse instance', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      expect(Sidebar.getInstance(div)).toEqual(null)
    })
  })
})
