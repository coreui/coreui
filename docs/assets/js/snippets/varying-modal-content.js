// js-docs-start varying-modal-content
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.coreui.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-coreui-* attributes
    const recipient = button.getAttribute('data-coreui-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}
// js-docs-end varying-modal-content
