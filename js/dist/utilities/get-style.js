/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.1): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var root = Object.entries(document.styleSheets).filter(function (value) {
    return value[1].cssText.substring(0, ':root'.length) === ':root';
  });

  if (root.length === 0) {
    root = Object.entries(document.styleSheets);
  }

  var rule = Object.entries(root[0][1].cssRules).filter(function (value) {
    return value[1].selectorText === '.ie-custom-properties';
  });
  var cssText = rule[0][1].style.cssText;
  cssText.split(';').forEach(function (property) {
    if (property) {
      var name = property.split(': ')[0];
      var value = property.split(': ')[1];
      cssCustomProperties["--" + name.trim()] = value.trim();
    }
  });
  return cssCustomProperties;
};

var minIEVersion = 10;

var isIE1x = function isIE1x() {
  return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  var style;

  if (isCustomProperty(property) && isIE1x()) {
    var cssCustomProperties = getCssCustomProperties();
    style = cssCustomProperties[property];
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  }

  return style;
};

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}
//# sourceMappingURL=get-style.js.map