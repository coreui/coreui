/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v1.0.0): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var GetStyle = function GetStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  var style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  return style;
};
//# sourceMappingURL=get-style.js.map