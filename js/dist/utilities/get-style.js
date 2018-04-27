/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.10): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable */
var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var stylesheets = new Map(Object.entries(document.styleSheets));
  stylesheets.forEach(function (stylesheet) {
    console.log(property);
    var rules = new Map(Object.entries(stylesheet.cssRules));
    rules.forEach(function (rule) {
      if (rule.selectorText === '.ie-custom-properties') {
        rule.style.cssText.split('; ').forEach(function (property) {
          console.log(property);
          var name = property.split(': ')[0];
          var value = property.split(': ')[1];
          cssCustomProperties["--" + name] = value;
        });
      }
    });
  });
  return cssCustomProperties;
};

var isIE11 = function isIE11() {
  return Boolean(window.MSInputMethodContext) && Boolean(document.documentMode);
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  var style;

  if (isCustomProperty(property) && isIE11()) {
    var cssCustomProperties = getCssCustomProperties();
    style = cssCustomProperties[property]; // console.log(cssCustomProperties)
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  } // eslint-disable-next-line no-console
  // console.log(isIE11())
  // eslint-disable-next-line no-console
  // console.log(property)
  // eslint-disable-next-line no-console
  // console.log(isCustomProperty(property))


  return style;
};

if (!Object.entries) Object.entries = function (obj) {
  var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array

  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
};
//# sourceMappingURL=get-style.js.map