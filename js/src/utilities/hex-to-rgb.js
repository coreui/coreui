/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.14): hex-to-rgb.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const hexToRgb = (color) => {
  if (typeof color === 'undefined') {
    throw new Error('Hex color is not defined')
  }
  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }
  let r
  let g
  let b
  if (color.length === 7) {
    r = parseInt(color.substring(1, 3), 16)
    g = parseInt(color.substring(3, 5), 16)
    b = parseInt(color.substring(5, 7), 16)
  } else {
    r = parseInt(color.substring(1, 2), 16)
    g = parseInt(color.substring(2, 3), 16)
    b = parseInt(color.substring(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

export { hexToRgb }
