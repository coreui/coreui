/* global coreui: false */

// js-docs-start chip-selectable
const chipSelectableElement = document.querySelector('#chipSelectable')
const chipSelectableOutput = document.querySelector('#chipSelectableOutput')

const chipSelectable = new coreui.ChipInput(chipSelectableElement, {
  placeholder: 'Add team role...',
  selectable: true
})

const updateSelectedOutput = selected => {
  chipSelectableOutput.textContent = selected.length > 0 ? selected.join(', ') : 'None'
}

chipSelectableElement.addEventListener('select.coreui.chip-input', event => {
  updateSelectedOutput(event.selected)
})

chipSelectable.add('Frontend')
chipSelectable.add('Security')
updateSelectedOutput(chipSelectable.getSelectedValues())
// js-docs-end chip-selectable
