/* istanbul ignore file */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dom/polyfill.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { getUID } from '../util/index';
var _Element$prototype = Element.prototype,
    matches = _Element$prototype.matches,
    closest = _Element$prototype.closest;
var find = Element.prototype.querySelectorAll;
var findOne = Element.prototype.querySelector;

var createCustomEvent = function createCustomEvent(eventName, params) {
  var cEvent = new CustomEvent(eventName, params);
  return cEvent;
};

if (typeof window.CustomEvent !== 'function') {
  createCustomEvent = function createCustomEvent(eventName, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
}

var workingDefaultPrevented = function () {
  var e = document.createEvent('CustomEvent');
  e.initEvent('Bootstrap', true, true);
  e.preventDefault();
  return e.defaultPrevented;
}();

if (!workingDefaultPrevented) {
  var origPreventDefault = Event.prototype.preventDefault;

  Event.prototype.preventDefault = function () {
    if (!this.cancelable) {
      return;
    }

    origPreventDefault.call(this);
    Object.defineProperty(this, 'defaultPrevented', {
      get: function get() {
        return true;
      },
      configurable: true
    });
  };
} // MSEdge resets defaultPrevented flag upon dispatchEvent call if at least one listener is attached


var defaultPreventedPreservedOnDispatch = function () {
  var e = createCustomEvent('Bootstrap', {
    cancelable: true
  });
  var element = document.createElement('div');
  element.addEventListener('Bootstrap', function () {
    return null;
  });
  e.preventDefault();
  element.dispatchEvent(e);
  return e.defaultPrevented;
}();

if (!matches) {
  matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!closest) {
  closest = function closest(selector) {
    var element = this;

    do {
      if (matches.call(element, selector)) {
        return element;
      }

      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === 1);

    return null;
  };
}

var scopeSelectorRegex = /:scope\b/;

var supportScopeQuery = function () {
  var element = document.createElement('div');

  try {
    element.querySelectorAll(':scope *'); // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false;
  }

  return true;
}();

if (!supportScopeQuery) {
  find = function find(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelectorAll(selector);
    }

    var hasId = Boolean(this.id);

    if (!hasId) {
      this.id = getUID('scope');
    }

    var nodeList = null;

    try {
      selector = selector.replace(scopeSelectorRegex, "#" + this.id);
      nodeList = this.querySelectorAll(selector);
    } finally {
      if (!hasId) {
        this.removeAttribute('id');
      }
    }

    return nodeList;
  };

  findOne = function findOne(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelector(selector);
    }

    var matches = find.call(this, selector);

    if (typeof matches[0] !== 'undefined') {
      return matches[0];
    }

    return null;
  };
}

export { createCustomEvent, find, findOne, matches, closest, defaultPreventedPreservedOnDispatch };
//# sourceMappingURL=polyfill.js.map