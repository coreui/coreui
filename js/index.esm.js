/**
 * --------------------------------------------------------------------------
 * CoreUI (v3.0.0-next): index.esm.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

import AjaxLoad from './src/ajax-load'
import Alert from './src/alert'
import AsideMenu from './src/aside-menu'
import Button from './src/button'
import Carousel from './src/carousel'
import Collapse from './src/collapse'
import Dropdown from './src/dropdown'
import Modal from './src/modal'
import Popover from './src/popover'
import Scrollspy from './src/scrollspy'
import Sidebar from './src/sidebar'
import Tab from './src/tab'
import Toast from './src/toast'
import Tooltip from './src/tooltip'
import Util from './src/util'

export {
  Util,
  AjaxLoad,
  Alert,
  AsideMenu,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Sidebar,
  Tab,
  Toast,
  Tooltip
}

// Global functions
import getStyle from './src/utilities/get-style'
window.getStyle = getStyle

import hexToRgb from './src/utilities/hex-to-rgb'
window.hexToRgb = hexToRgb

import hexToRgba from './src/utilities/hex-to-rgba'
window.hexToRgba = hexToRgba

import rgbToHex from './src/utilities/rgb-to-hex'
window.rgbToHex = rgbToHex
