/* Test helpers */

import { clearFixture, createEvent, getFixture } from '../../helpers/fixture'
import { enableDismissTrigger } from '../../../src/util/component-functions'
import BaseComponent from '../../../src/base-component'

class DummyClass2 extends BaseComponent {
  static get NAME() {
    return 'test'
  }

  hide() {
    return true
  }

  testMethod() {
    return true
  }
}

describe('Plugin functions', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('data-coreui-dismiss functionality', () => {
    it('should get Plugin and execute the given method, when a click occurred on data-coreui-dismiss="PluginName"', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '      <button type="button" data-coreui-dismiss="test" data-coreui-target="#foo"></button>',
        '</div>'
      ].join('')

      spyOn(DummyClass2, 'getOrCreateInstance').and.callThrough()
      spyOn(DummyClass2.prototype, 'testMethod')
      const componentWrapper = fixtureEl.querySelector('#foo')
      const btnClose = fixtureEl.querySelector('[data-coreui-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2, 'testMethod')
      btnClose.dispatchEvent(event)

      expect(DummyClass2.getOrCreateInstance).toHaveBeenCalledWith(componentWrapper)
      expect(DummyClass2.prototype.testMethod).toHaveBeenCalled()
    })

    it('if data-coreui-dismiss="PluginName" hasn\'t got "data-coreui-target", "getOrCreateInstance" has to be initialized by closest "plugin.Name" class', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '   <button type="button" data-coreui-dismiss="test"></button>',
        '</div>'
      ].join('')

      spyOn(DummyClass2, 'getOrCreateInstance').and.callThrough()
      spyOn(DummyClass2.prototype, 'hide')
      const componentWrapper = fixtureEl.querySelector('#foo')
      const btnClose = fixtureEl.querySelector('[data-coreui-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      btnClose.dispatchEvent(event)

      expect(DummyClass2.getOrCreateInstance).toHaveBeenCalledWith(componentWrapper)
      expect(DummyClass2.prototype.hide).toHaveBeenCalled()
    })

    it('if data-coreui-dismiss="PluginName" is disabled, must not trigger function', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '   <button type="button" disabled data-coreui-dismiss="test"></button>',
        '</div>'
      ].join('')

      spyOn(DummyClass2, 'getOrCreateInstance').and.callThrough()
      const btnClose = fixtureEl.querySelector('[data-coreui-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      btnClose.dispatchEvent(event)

      expect(DummyClass2.getOrCreateInstance).not.toHaveBeenCalled()
    })

    it('should prevent default when the trigger is <a> or <area>', () => {
      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '      <a type="button" data-coreui-dismiss="test"></a>',
        '</div>'
      ].join('')

      const btnClose = fixtureEl.querySelector('[data-coreui-dismiss="test"]')
      const event = createEvent('click')

      enableDismissTrigger(DummyClass2)
      spyOn(Event.prototype, 'preventDefault').and.callThrough()

      btnClose.dispatchEvent(event)

      expect(Event.prototype.preventDefault).toHaveBeenCalled()
    })
  })
})
