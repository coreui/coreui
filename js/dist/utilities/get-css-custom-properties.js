var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var sheets = document.styleSheets;
  var cssText = '';

  for (var i = sheets.length - 1; i > -1; i--) {
    var rules = sheets[i].cssRules;

    for (var j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        cssText = rules[j].cssText;
        break;
      }
    }

    if (cssText) {
      break;
    }
  }

  cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
  cssText.split(';').forEach(function (property) {
    if (property) {
      var name = property.split(': ')[0];
      var value = property.split(': ')[1];

      if (name && value) {
        cssCustomProperties["--" + name.trim()] = value.trim();
      }
    }
  });
  return cssCustomProperties;
};
//# sourceMappingURL=get-css-custom-properties.js.map