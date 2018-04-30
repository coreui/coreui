/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-rc.0): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const root = Object.entries(document.styleSheets).filter((value) => value[1].cssText.substring(0, ':root'.length) === ':root')
  const rule = Object.entries(root[0][1].cssRules).filter((value) => value[1].selectorText === '.ie-custom-properties')
  const cssText = rule[0][1].style.cssText
  cssText.split(';').forEach((property) => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      cssCustomProperties[`--${name.trim()}`] = value.trim()
    }
  })
  return cssCustomProperties
}

const isIE11 = () => Boolean(window.MSInputMethodContext) && Boolean(document.documentMode)
const isCustomProperty = (property) => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style
  if (isCustomProperty(property) && isIE11()) {
    const cssCustomProperties = getCssCustomProperties()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }
  return style
}

if (!Object.entries) {
  Object.entries = function (obj) {
    const ownProps = Object.keys(obj)
    let i = ownProps.length
    const resArray = new Array(i)
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]]
    }
    return resArray
  }
}

export default getStyle
