/**
 * --------------------------------------------------------------------------
 * CoreUI (v2.0.0-alpha.1): resize-broadcast.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

const ResizeBroadcast = () => {
  let timesRun = 5
  const milliseconds = 62.5
  const interval = setInterval(
    () => {
      timesRun--
      if (timesRun === 0) {
        clearInterval(interval)
      }
      if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        const evt = document.createEvent('UIEvents')
        evt.initUIEvent('resize', true, false, window, 0)
        window.dispatchEvent(evt)
      } else {
        window.dispatchEvent(new Event('resize'))
      }
    }, milliseconds
  )
}

export default ResizeBroadcast
