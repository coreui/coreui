/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-beta.5): rgb-to-hex.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const rgbToHex = (color) => {
  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return rgb ? `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}` : ''
}

export default rgbToHex
