/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.14): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
import getCssCustomProperties from './get-css-custom-properties'

const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = (property) => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style
  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = getCssCustomProperties()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }
  return style
}

export { getStyle }
