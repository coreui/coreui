/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.5): hex-to-rgb.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
var hexToRgb = function hexToRgb(color) {
  var hex = color.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  var result = "rgba(" + r + ", " + g + ", " + b;
  return result;
};
//# sourceMappingURL=hex-to-rgb.js.map