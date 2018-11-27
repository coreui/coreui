/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.1.3): get-color.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var getColor = function getColor(rawProperty, element) {
  if (element === void 0) {
    element = document.body;
  }

  var property = "--" + rawProperty;
  var style = getStyle(property, element);
  return style ? style : rawProperty;
};
//# sourceMappingURL=get-color.js.map