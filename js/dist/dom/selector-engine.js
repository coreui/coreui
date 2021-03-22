/*!
  * CoreUI selector-engine.js v4.0.0-alpha.4 (https://coreui.io)
  * Copyright 2021 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SelectorEngine = factory());
}(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.0.0-alpha.4): dom/selector-engine.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's  dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NODE_TEXT = 3;
  var SelectorEngine = {
    find: function find(selector, element) {
      var _ref;

      if (element === void 0) {
        element = document.documentElement;
      }

      return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, element.children).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };

  return SelectorEngine;

})));
//# sourceMappingURL=selector-engine.js.map
