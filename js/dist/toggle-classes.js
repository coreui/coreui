/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-beta.5): toggle-classes.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
var RemoveClasses = function RemoveClasses(NewClassNames) {
  var MatchClasses = NewClassNames.map(function (Class) {
    return document.body.classList.contains(Class);
  });
  return MatchClasses.indexOf(true) !== -1;
};

var ToggleClasses = function ToggleClasses(Toggle, ClassNames) {
  var Level = ClassNames.indexOf(Toggle);
  var NewClassNames = ClassNames.slice(0, Level + 1);

  if (RemoveClasses(NewClassNames)) {
    NewClassNames.map(function (Class) {
      return document.body.classList.remove(Class);
    });
  } else {
    document.body.classList.add(Toggle);
  }
};
//# sourceMappingURL=toggle-classes.js.map