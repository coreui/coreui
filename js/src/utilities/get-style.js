/**
 * --------------------------------------------------------------------------
 * CoreUI Utilities (v2.0.0-beta.10): get-style.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const stylesheets = new Map(Object.entries(document.styleSheets))
  stylesheets.forEach((stylesheet) => {
    const rules = new Map(Object.entries(stylesheet.cssRules))
    rules.forEach((rule) => {
      if (rule.selectorText === ':root') {
        rule.style.cssText.split('; ').forEach((property) => {
          const name = property.split(': ')[0]
          const value = property.split(': ')[1]
          cssCustomProperties[name] = value
        })
      }
    })
  })
  return cssCustomProperties
}

const isIE11 = () => Boolean(window.MSInputMethodContext) && Boolean(document.documentMode)

const getStyle = (property, element = document.body) => window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')

export default getStyle
