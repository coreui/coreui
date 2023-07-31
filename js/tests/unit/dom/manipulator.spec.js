import Manipulator from '../../../src/dom/manipulator.js'
import { clearFixture, getFixture } from '../../helpers/fixture.js'

describe('Manipulator', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('setDataAttribute', () => {
    it('should set data attribute prefixed with bs', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      Manipulator.setDataAttribute(div, 'key', 'value')
      expect(div.getAttribute('data-coreui-key')).toEqual('value')
    })

    it('should set data attribute in kebab case', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      Manipulator.setDataAttribute(div, 'testKey', 'value')
      expect(div.getAttribute('data-coreui-test-key')).toEqual('value')
    })
  })

  describe('removeDataAttribute', () => {
    it('should only remove bs-prefixed data attribute', () => {
      fixtureEl.innerHTML = '<div data-coreui-key="value" data-key-bs="postfixed" data-key="value"></div>'

      const div = fixtureEl.querySelector('div')

      Manipulator.removeDataAttribute(div, 'key')
      expect(div.getAttribute('data-coreui-key')).toBeNull()
      expect(div.getAttribute('data-key-bs')).toEqual('postfixed')
      expect(div.getAttribute('data-key')).toEqual('value')
    })

    it('should remove data attribute in kebab case', () => {
      fixtureEl.innerHTML = '<div data-coreui-test-key="value"></div>'

      const div = fixtureEl.querySelector('div')

      Manipulator.removeDataAttribute(div, 'testKey')
      expect(div.getAttribute('data-coreui-test-key')).toBeNull()
    })
  })

  describe('getDataAttributes', () => {
    it('should return an empty object for null', () => {
      expect(Manipulator.getDataAttributes(null)).toEqual({})
      expect().nothing()
    })

    it('should get only bs-prefixed data attributes without bs namespace', () => {
      fixtureEl.innerHTML = '<div data-coreui-toggle="tabs" data-coreui-target="#element" data-another="value" data-target-bs="#element" data-in-coreui-out="in-between"></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttributes(div)).toEqual({
        toggle: 'tabs',
        target: '#element'
      })
    })

    it('should omit `coreui-config` data attribute', () => {
      fixtureEl.innerHTML = '<div data-coreui-toggle="tabs" data-coreui-target="#element" data-coreui-config=\'{"testBool":false}\'></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttributes(div)).toEqual({
        toggle: 'tabs',
        target: '#element'
      })
    })
  })

  describe('getDataAttribute', () => {
    it('should only get bs-prefixed data attribute', () => {
      fixtureEl.innerHTML = '<div data-coreui-key="value" data-test-bs="postFixed" data-toggle="tab"></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttribute(div, 'key')).toEqual('value')
      expect(Manipulator.getDataAttribute(div, 'test')).toBeNull()
      expect(Manipulator.getDataAttribute(div, 'toggle')).toBeNull()
    })

    it('should get data attribute in kebab case', () => {
      fixtureEl.innerHTML = '<div data-coreui-test-key="value" ></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttribute(div, 'testKey')).toEqual('value')
    })

    it('should normalize data', () => {
      fixtureEl.innerHTML = '<div data-coreui-test="false" ></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttribute(div, 'test')).toBeFalse()

      div.setAttribute('data-coreui-test', 'true')
      expect(Manipulator.getDataAttribute(div, 'test')).toBeTrue()

      div.setAttribute('data-coreui-test', '1')
      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(1)
    })

    it('should normalize json data', () => {
      fixtureEl.innerHTML = '<div data-coreui-test=\'{"delay":{"show":100,"hide":10}}\'></div>'

      const div = fixtureEl.querySelector('div')

      expect(Manipulator.getDataAttribute(div, 'test')).toEqual({ delay: { show: 100, hide: 10 } })

      const objectData = { 'Super Hero': ['Iron Man', 'Super Man'], testNum: 90, url: 'http://localhost:8080/test?foo=bar' }
      const dataStr = JSON.stringify(objectData)
      div.setAttribute('data-coreui-test', encodeURIComponent(dataStr))
      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(objectData)

      div.setAttribute('data-coreui-test', dataStr)
      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(objectData)
    })
  })
})
