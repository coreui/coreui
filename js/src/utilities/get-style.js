/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.10): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getStyle = (property, element = !!window.MSInputMethodContext && !!document.documentMode ? document.getElementsByClassName('.app')[0] : document.body) => window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')

export default getStyle
