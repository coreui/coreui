/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.10): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var stylesheets = new Map(Object.entries(document.styleSheets));
  stylesheets.forEach(function (stylesheet) {
    var rules = new Map(Object.entries(stylesheet.cssRules));
    rules.forEach(function (rule) {
      if (rule.selectorText === ':root') {
        rule.style.cssText.split('; ').forEach(function (property) {
          var name = property.split(': ')[0];
          var value = property.split(': ')[1];
          cssCustomProperties[name] = value;
        });
      }
    });
  });
  return cssCustomProperties;
};

var isIE11 = function isIE11() {
  return Boolean(window.MSInputMethodContext) && Boolean(document.documentMode);
};

var getStyle = function getStyle(property, element) {
  if (element === void 0) {
    element = document.body;
  }

  return window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
};
//# sourceMappingURL=get-style.js.map