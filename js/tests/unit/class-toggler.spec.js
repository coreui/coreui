import ClassToggler from '../../src/class-toggler'

/** Test helpers */
import { getFixture, clearFixture, jQueryMock } from '../helpers/fixture'

describe('ClassToggler', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('add', () => {
    it('should add the `add-class` class to `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-add-class="add-class"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classadded', () => {
        expect(c.classList.contains('add-class')).toEqual(true)
        done()
      })

      toggler.click()
    })

    it('should add `add-class1` and `add-class2` classes to `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-add-class="add-class1,add-class2"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classadded', () => {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          expect(c.classList.contains('add-class1')).toEqual(true)
          expect(c.classList.contains('add-class2')).toEqual(true)
          done()
        }, 250)
      })

      toggler.click()
    })
  })

  describe('remove', () => {
    it('should remove the `remove-class` class from `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app remove-class">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-remove-class="remove-class"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('remove-class')).toEqual(false)
        done()
      })

      toggler.click()
    })

    it('should remove `remove-class1`, `remove-class2` and ` remove-class2` classes from `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-remove-class="remove-class1,remove-class2, remove-class3"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          expect(c.classList.contains('remove-class1')).toEqual(false)
          expect(c.classList.contains('remove-class2')).toEqual(false)
          expect(c.classList.contains('remove-class3')).toEqual(false)
          done()
        }, 250)
      })

      toggler.click()
    })

    it('should remove following classes from the `.c-app` element `test-xl-show`, `test-lg-show`, `test-md-show`, `test-sm-show`, `test-show`', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app test-xl-show test-lg-show test-md-show test-sm-show test-show">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-remove-class="test-xl-show" data-responsive="true"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          expect(c.classList.contains('test-xl-show')).toEqual(false)
          expect(c.classList.contains('test-lg-show')).toEqual(false)
          expect(c.classList.contains('test-md-show')).toEqual(false)
          expect(c.classList.contains('test-sm-show')).toEqual(false)
          expect(c.classList.contains('test-show')).toEqual(false)
          done()
        }, 250)
      })

      toggler.click()
    })

    it('should remove the `test-show` class from the `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app test-show">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-remove-class="test-xl-show" data-responsive="true"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('test-show')).toEqual(false)
        done()
      })

      toggler.click()
    })
  })

  describe('toggle', () => {
    it('should add the `toggle` class to `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-toggle-class="toggle"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classtoggle', () => {
        expect(c.classList.contains('toggle')).toEqual(true)
        done()
      })

      toggler.click()
    })

    it('should remove the `toggle` class from `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app toggle">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-toggle-class="toggle"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('toggle')).toEqual(false)
        done()
      })

      toggler.click()
    })

    it('should add the `add-class` to `.c-app` element and remove `remove-class`', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app remove-class">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-toggle-class="add-class, remove-class"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classtoggle', () => {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          expect(c.classList.contains('add-class')).toEqual(true)
          expect(c.classList.contains('remove-class')).toEqual(false)
          done()
        }, 250)
      })

      toggler.click()
    })

    it('should remove the `test-show` class from the `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app test-show">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-toggle-class="test-xl-show" data-responsive="true"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classtoggle', () => {
        // eslint-disable-next-line max-nested-callbacks
        setTimeout(() => {
          expect(c.classList.contains('test-show')).toEqual(false)
          expect(c.classList.contains('test-xl-show')).toEqual(false)
          done()
        }, 250)
      })

      toggler.click()
    })

    it('should remove the `test-show` class from the `.c-app` element and then add `text-xl-show`', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app test-show">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-toggle-class="test-xl-show" data-responsive="true"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('test-show')).toEqual(false)
        expect(c.classList.contains('test-xl-show')).toEqual(false)
      })

      c.addEventListener('classadded', () => {
        expect(c.classList.contains('test-show')).toEqual(false)
        expect(c.classList.contains('test-xl-show')).toEqual(true)
        done()
      })

      toggler.click()
      toggler.click()
    })
  })

  describe('class', () => {
    it('should add the `toggle` class to `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-class="toggle"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classtoggle', () => {
        expect(c.classList.contains('toggle')).toEqual(true)
        done()
      })

      toggler.click()
    })

    it('should remove the `toggle` class from `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app toggle">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-class="toggle"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('toggle')).toEqual(false)
        done()
      })

      toggler.click()
    })

    it('should remove the `test-show` class from the `.c-app` element', done => {
      fixtureEl.innerHTML = [
        '<div class="c-app test-show">',
        '  <button type="button" class="c-class-toggler" data-target=".c-app" data-class="test-xl-show" data-responsive="true"></div>',
        '</div>'
      ].join('')

      const c = document.querySelector('.c-app')
      const toggler = document.querySelector('.c-class-toggler')

      c.addEventListener('classremoved', () => {
        expect(c.classList.contains('test-show')).toEqual(false)
        done()
      })

      toggler.click()
    })
  })
})
