import Manipulator from '../../../src/dom/manipulator'

/** Test helpers */
import { getFixture, clearFixture } from '../../helpers/fixture'

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

      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(false)

      div.setAttribute('data-coreui-test', 'true')
      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(true)

      div.setAttribute('data-coreui-test', '1')
      expect(Manipulator.getDataAttribute(div, 'test')).toEqual(1)
    })
  })

  describe('offset', () => {
    it('should return an object with two properties top and left, both numbers', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const offset = Manipulator.offset(div)

      expect(offset).toBeDefined()
      expect(offset.top).toEqual(jasmine.any(Number))
      expect(offset.left).toEqual(jasmine.any(Number))
    })
  })

  describe('position', () => {
    it('should return an object with two properties top and left, both numbers', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const position = Manipulator.position(div)

      expect(position).toBeDefined()
      expect(position.top).toEqual(jasmine.any(Number))
      expect(position.left).toEqual(jasmine.any(Number))
    })
  })
})
