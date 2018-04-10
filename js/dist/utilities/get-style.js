/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.5): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  var style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  return style;
};
//# sourceMappingURL=get-style.js.map