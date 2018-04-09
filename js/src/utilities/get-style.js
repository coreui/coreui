/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v1.0.0): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getStyle = (property, element = document.body) => {
  const style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')

  return style
}

export default getStyle
