/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.6): hex-to-rgb.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const hexToRgb = (color) => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = `rgba(${r}, ${g}, ${b}`
  return result
}

export default hexToRgb
