/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.19): get-color.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var minIEVersion = 10;

var isIE1x = function isIE1x() {
  return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getColor = function getColor(rawProperty, element) {
  if (element === void 0) {
    element = document.body;
  }

  var property = "--" + rawProperty;
  var style;

  if (isCustomProperty(property) && isIE1x()) {
    var cssCustomProperties = getCssCustomProperties();
    style = cssCustomProperties[property];
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  }

  return style ? style : rawProperty;
};
//# sourceMappingURL=get-color.js.map