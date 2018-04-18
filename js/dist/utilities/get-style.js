/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.10): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  return window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
};
//# sourceMappingURL=get-style.js.map