/* global coreui: false */

// js-docs-start chip-variants
const chipInputElement = document.querySelector('#chipVariants')
const chipInput = new coreui.ChipInput(chipInputElement, {
  // Class is resolved dynamically from chip value.
  chipClassName(value) {
    const variants = {
      approved: 'chip-success',
      blocking: 'chip-danger',
      feature: 'chip-primary',
      'needs review': 'chip-warning'
    }

    return variants[value.trim().toLowerCase()] || 'chip-secondary'
  },
  placeholder: 'Add a bug...'
})

chipInput.add('Feature')
// js-docs-end chip-variants
