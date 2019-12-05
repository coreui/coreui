/*!
  * CoreUI selector-engine.js v3.0.0-beta.4 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./polyfill.js')) :
  typeof define === 'function' && define.amd ? define(['./polyfill.js'], factory) :
  (global = global || self, global.SelectorEngine = factory(global.Polyfill));
}(this, (function (polyfill_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var makeArray = function makeArray(nodeList) {
    if (!nodeList) {
      return [];
    }

    return [].slice.call(nodeList);
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    matches: function matches(element, selector) {
      return polyfill_js.matches.call(element, selector);
    },
    find: function find(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return polyfill_js.find.call(element, selector);
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return polyfill_js.findOne.call(element, selector);
    },
    children: function children(element, selector) {
      var _this = this;

      var children = makeArray(element.children);
      return children.filter(function (child) {
        return _this.matches(child, selector);
      });
    },
    parents: function parents(element, selector) {
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
      return polyfill_js.closest.call(element, selector);
    },
    prev: function prev(element, selector) {
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

  return SelectorEngine;

})));
//# sourceMappingURL=selector-engine.js.map
