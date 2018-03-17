/*!
  * CoreUI v2.0.0-alpha.1 (https://coreui.io)
  * Copyright 2018 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('perfect-scrollbar')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'perfect-scrollbar'], factory) :
	(factory((global.coreui = {}),global.jQuery,global.PerfectScrollbar));
}(this, (function (exports,$,PerfectScrollbar) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): config.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */


var SIDEBAR = document.querySelector('.sidebar-nav');
var NAVIGATION_CONTAINER = document.querySelector('.sidebar-nav');
var NAVIGATION = $('.sidebar-nav > .nav');
var SIDEBAR_SHOW_CLASS_NAMES = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
var ASIDE_MENU = document.querySelector('.aside-menu');
var ASIDE_MENU_SHOW_CLASS_NAMES = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): navigation-scrollbar.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var NavigationScrollbar = function NavigationScrollbar(event) {
  var ps;

  if (event === 'init' && !document.body.classList.contains('sidebar-minimized')) {
    ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
      suppressScrollX: true
    });
  }

  if (event === 'destroy') {
    ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
      suppressScrollX: true
    });
    ps.destroy();
    ps = null;
  }

  if (event === 'toggle') {
    if (document.body.classList.contains('sidebar-minimized')) {
      ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
        suppressScrollX: true
      });
      ps.destroy();
      ps = null;
    } else {
      ps = new PerfectScrollbar(NAVIGATION_CONTAINER, {
        suppressScrollX: true
      });
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): toggle-classes.js
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

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): layout.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var Layout = function ($$$1) {
  $$$1('.sidebar-toggler').click(function () {
    var Toggle = $$$1(this).data('toggle');
    var ClassNames = SIDEBAR_SHOW_CLASS_NAMES;
    ToggleClasses(Toggle, ClassNames);
  });
  $$$1('.sidebar-minimizer').click(function () {
    $$$1('body').toggleClass('sidebar-minimized');
    NavigationScrollbar('toggle');
  });
  $$$1('.brand-minimizer').click(function () {
    $$$1('body').toggleClass('brand-minimized');
  });
  $$$1('.aside-menu-toggler').click(function () {
    var Toggle = $$$1(this).data('toggle');
    var ClassNames = ASIDE_MENU_SHOW_CLASS_NAMES;
    ToggleClasses(Toggle, ClassNames);
  });
  $$$1('.sidebar-close').click(function () {
    $$$1('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
  });
}($);

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): navigation.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

var Navigation = function ($$$1) {
  NavigationScrollbar('init');
  NAVIGATION.find('a').each(function () {
    var cUrl = String(window.location).split('?')[0];

    if (cUrl.substr(cUrl.length - 1) === '#') {
      cUrl = cUrl.slice(0, -1);
    }

    if ($$$1($$$1(this))[0].href === cUrl) {
      $$$1(this).addClass('active');
      $$$1(this).parents('ul').add(this).each(function () {
        $$$1(this).parent().addClass('open');
      });
    }
  }); // Dropdown Menu

  NAVIGATION.on('click', 'a', function (e) {
    if ($$$1(this).hasClass('nav-dropdown-toggle')) {
      e.preventDefault();
      $$$1(this).parent().toggleClass('open');
    }
  });
}($);

/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): index.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

(function ($$$1) {
  if (typeof $$$1 === 'undefined') {
    throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
  }

  var version = $$$1.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

exports.Layout = Layout;
exports.Navigation = Navigation;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui.js.map
