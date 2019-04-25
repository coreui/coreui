/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v3.0.0-alpha.1): get-color.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import getStyle from './get-style';

var getColor = function getColor(rawProperty, element) {
  if (element === void 0) {
    element = document.body;
  }

  var property = "--" + rawProperty;
  var style = getStyle(property, element);
  return style ? style : rawProperty;
};

export default getColor;
//# sourceMappingURL=get-color.js.map