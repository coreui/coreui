import './polyfill';
import $ from 'jquery';
import AjaxLoad from './ajax-load';
import Alert from './alert';
import AsideMenu from './aside-menu';
import Button from './button';
import Carousel from './carousel';
import Collapse from './collapse';
import Dropdown from './dropdown';
import Modal from './modal';
import Popover from './popover';
import Scrollspy from './scrollspy';
import Sidebar from './sidebar';
import Tab from './tab';
import Toast from './toast';
import Tooltip from './tooltip';
import Util from './util';
/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-alpha.7): index.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

(function () {
  if (typeof $ === 'undefined') {
    throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})();

export { Util, AjaxLoad, Alert, AsideMenu, Button, Carousel, Collapse, Dropdown, Modal, Popover, Scrollspy, Sidebar, Tab, Toast, Tooltip }; // Global functions

import getStyle from './utilities/get-style';
window.getStyle = getStyle;
import hexToRgb from './utilities/hex-to-rgb';
window.hexToRgb = hexToRgb;
import hexToRgba from './utilities/hex-to-rgba';
window.hexToRgba = hexToRgba;
import rgbToHex from './utilities/rgb-to-hex';
window.rgbToHex = rgbToHex;
//# sourceMappingURL=index.js.map