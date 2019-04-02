/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dom/selectorEngine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { find as findFn, findOne as _findOne, matches as _matches, closest as _closest } from './polyfill';
import { makeArray } from '../util/index';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  matches: function matches(element, selector) {
    return _matches.call(element, selector);
  },
  find: function find(selector, element) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (typeof selector !== 'string') {
      return null;
    }

    return findFn.call(element, selector);
  },
  findOne: function findOne(selector, element) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (typeof selector !== 'string') {
      return null;
    }

    return _findOne.call(element, selector);
  },
  children: function children(element, selector) {
    var _this = this;

    if (typeof selector !== 'string') {
      return null;
    }

    var children = makeArray(element.children);
    return children.filter(function (child) {
      return _this.matches(child, selector);
    });
  },
  parents: function parents(element, selector) {
    if (typeof selector !== 'string') {
      return null;
    }

    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  closest: function closest(element, selector) {
    if (typeof selector !== 'string') {
      return null;
    }

    return _closest.call(element, selector);
  },
  prev: function prev(element, selector) {
    if (typeof selector !== 'string') {
      return null;
    }

    var siblings = [];
    var previous = element.previousSibling;

    while (previous && previous.nodeType === Node.ELEMENT_NODE && previous.nodeType !== NODE_TEXT) {
      if (this.matches(previous, selector)) {
        siblings.push(previous);
      }

      previous = previous.previousSibling;
    }

    return siblings;
  }
};
export default SelectorEngine;
//# sourceMappingURL=selectorEngine.js.map