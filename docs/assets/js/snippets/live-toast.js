/* global coreui: false */

// js-docs-start live-toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastCoreUI = coreui.Toast.getOrCreateInstance(toastLiveExample)
toastTrigger.addEventListener('click', () => {
  toastCoreUI.show()
})
// js-docs-end live-toast
