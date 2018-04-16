/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.8): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getStyle = (property, element = document.body) => window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')

export default getStyle
