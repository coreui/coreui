---
layout: docs
title: Chip input
description: Bootstrap Chip Input component for CoreUI — create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.
group: forms
toc: true
bootstrap: true
preview_component: true
snippets: 
  - chip-selectable.js
  - chip-variants.js
---

## Overview

The CoreUI **Bootstrap Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press `Enter` (or a separator) to create chips.
- Chips can be removable and selectable.
- The input stays inline and grows as you type.
- Full form integration via a hidden input with configurable `name`.

## When to use Chip Input

Use the Bootstrap Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

Wrap chips and add `data-coreui-chip-input` to enable behavior.

{{< example >}}
<div class="chip-input" data-coreui-chip-input data-coreui-name="chipInputBasicExample" data-coreui-placeholder="Add a skill...">
  <label class="chip-input-label" for="skillsInputBasic">Skills:</label>
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
  <span class="chip">Accessibility</span>
</div>
{{< /example >}}

{{< callout info >}}
**Note:** The `<input class="chip-input-field">` is created automatically by the component when initialized. You can also add it manually in the markup if preferred. Additionally, a hidden input is generated automatically to submit chip values with the form. The `name` attribute of this hidden input is taken from the `data-coreui-name` attribute (e.g., `data-coreui-name="chipInputBasicExample"`).
{{< /callout >}}

```html
<div class="chip-input" data-coreui-chip-input data-coreui-placeholder="Add a skill...">
  <label class="chip-input-label" for="skillsInputBasic">Skills:</label>
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
  <span class="chip">Accessibility</span>
  <input type="text" class="chip-input-field" name="skillsInputBasic" placeholder="Add a skill...">
</div>
```

## Variants

Use contextual chip classes inside Bootstrap 5 Chip Input to represent categories, status, or priority.

{{< example >}}
<div class="chip-input" data-coreui-chip-input data-coreui-name="issues" data-coreui-placeholder="Add label...">
  <span class="chip chip-primary">Feature</span>
  <span class="chip chip-success">Approved</span>
  <span class="chip chip-warning">Needs review</span>
  <span class="chip chip-danger">Blocking</span>
</div>
{{< /example >}}

In the example below, the chip color is assigned dynamically based on the chip text using the `chipClassName` callback. Each value (e.g., `Feature` or `Blocking`) maps to a contextual class, so chips remain visually consistent even when added programmatically.

{{< example stackblitz_add_js="chipVariantsSnippet" >}}
<div id="chipVariants" class="chip-input"></div>
{{< /example >}}

The JavaScript below initializes the example:

{{< js-docs id="chipVariantsSnippet" name="chip-variants" file="docs/assets/js/snippets/chip-variants.js" >}}

## Sizes

Use `chip-input-sm` and `chip-input-lg` to match surrounding form controls. Default size is provided by `.chip-input` without a size modifier.

{{< example >}}
<div class="chip-input chip-input-sm mb-3" data-coreui-chip-input data-coreui-placeholder="Add small tag...">
  <label class="chip-input-label" for="skillsInputSm">Small</label>
  <span class="chip">HTML</span>
</div>

<div class="chip-input mb-3" data-coreui-chip-input data-coreui-placeholder="Add default tag...">
  <label class="chip-input-label" for="skillsInputMd">Default</label>
  <span class="chip">JavaScript</span>
</div>

<div class="chip-input chip-input-lg" data-coreui-chip-input data-coreui-placeholder="Add large tag...">
  <label class="chip-input-label" for="skillsInputLg">Large</label>
  <span class="chip">TypeScript</span>
</div>
{{< /example >}}

## Empty state

Start with just the input and let users add chips as they type.

{{< example >}}
<div class="chip-input" data-coreui-chip-input data-coreui-name="tags" data-coreui-placeholder="Start typing tags..."></div>
{{< /example >}}

## With label

Use a standard form label for accessibility.

{{< example >}}
<div class="mb-3">
  <label class="form-label" for="techStackInput">Tech stack</label>
  <div class="chip-input" data-coreui-chip-input data-coreui-name="techStack" data-coreui-placeholder="Add package...">
    <span class="chip">Vue</span>
    <span class="chip">Vite</span>
  </div>
  <div class="form-text">Press Enter or comma to add a value.</div>
</div>
{{< /example >}}

## Disabled

Set disabled state on the component to make the input and managed chips non-interactive.
You can use either the `disabled` class or the `data-coreui-disabled="true"` option.
For disabled, non-removable chips, combine it with `data-coreui-removable="false"`.

{{< example >}}
<div class="chip-input" data-coreui-chip-input data-coreui-disabled="true" data-coreui-removable="false" data-coreui-placeholder="Input disabled">
  <span class="chip">Read only</span>
  <span class="chip">Locked</span>
</div>
{{< /example >}}

## Readonly

Use readonly state when chips should stay visible and focusable, but values must not change.
Set `data-coreui-readonly="true"` (or `readonly: true` in JavaScript) to block adding and removing chips.

{{< example >}}
<div class="chip-input" data-coreui-chip-input data-coreui-readonly="true" data-coreui-placeholder="Read-only values">
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
</div>
{{< /example >}}

## Selectable chips

Enable selection for chips managed by Chip Input.
In this example, `select.coreui.chip-input` updates a live list of selected values below the field.

{{< example >}}
<div id="chipSelectable" class="chip-input">
  <span class="chip">Design</span>
  <span class="chip">Backend</span>
  <span class="chip active">QA</span>
  <span class="chip active">DevOps</span>
</div>
<p class="form-text mt-2 mb-0">Selected chips: <span id="chipSelectableOutput">None</span></p>
{{< /example >}}

{{< js-docs name="chip-selectable" file="docs/assets/js/snippets/chip-selectable.js" >}}

## Usage

Initialize the Bootstrap Chip Input component via data attributes or JavaScript. The chip input component automatically creates a hidden form input to submit all chip values with the form.

### Via data attributes

Add `data-coreui-chip-input` to initialize the chip input component. Options can be passed as `data-coreui-*` attributes.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="skills" data-coreui-placeholder="Add tags..." data-coreui-separator=","></div>
```

When initialized, Chip Input creates a hidden input to submit values with the form.  
Use `name` (or `data-coreui-name`) to control the submitted field name.

### Via JavaScript

```js
const chipInputElement = document.querySelector('.chip-input')
const chipInput = coreui.ChipInput.getOrCreateInstance(chipInputElement, {
  separator: ',',
  maxChips: 5
})
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `chipClassName` | string \| function \| null | `null` | Adds classes to chips. Use a string for all chips or a function `(value) => className` for per-chip styling. |
| `disabled` | boolean | `false` | Disables the input and marks managed chips as non-interactive. |
| `readonly` | boolean | `false` | Prevents adding and removing chips while keeping input focus behavior. |
| `id` | string \| null | auto-generated | Custom id for the generated hidden input. |
| `name` | string \| null | auto-generated | Name for the generated hidden input used in form submission. |
| `separator` | string \| null | `','` | Character that triggers chip creation when typed. Set to `null` to disable. |
| `maxChips` | number \| null | `null` | Maximum number of chips allowed. `null` for unlimited. |
| `placeholder` | string | `''` | Placeholder text for dynamically created inputs. |
| `selectable` | boolean | `false` | Enables selection behavior for chips managed by Chip Input. |
| `removable` | boolean | `true` | Add remove buttons to created chips. |
| `removeIcon` | string | SVG | HTML string for the remove button icon. |
| `createOnBlur` | boolean | `true` | Create a chip from the input value when the input loses focus. |
{{< /bs-table >}}

### Methods

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `add(value)` | Adds a chip with the given value. Returns the chip element or `null` if rejected. |
| `remove(chipOrValue)` | Removes a chip by element reference or value string. Returns `true` if removed. |
| `removeSelected()` | Removes all currently selected chips. |
| `getValues()` | Returns an array of all chip values. |
| `getSelectedValues()` | Returns an array of selected chip values. |
| `clear()` | Removes all chips. |
| `clearSelection()` | Deselects all chips without removing them. |
| `selectChip(chip)` | Selects a specific chip element. |
| `focus()` | Focuses the ghost input. |
| `dispose()` | Destroys the component instance. |
{{< /bs-table >}}

```js
const chipInputElement = document.querySelector('.chip-input')
const chipInput = coreui.ChipInput.getOrCreateInstance(chipInputElement)

chipInput.add('JavaScript')
chipInput.add('TypeScript')

// eslint-disable-next-line no-console
console.log(chipInput.getValues())

chipInput.remove('JavaScript')
chipInput.clear()
```

### Events

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `input.coreui.chip-input` | Fired when the inline input value changes. Contains `value` and `relatedTarget`. |
| `add.coreui.chip-input` | Fired before a chip is added. Call `event.preventDefault()` to cancel. |
| `remove.coreui.chip-input` | Fired before a chip is removed. Call `event.preventDefault()` to cancel. |
| `change.coreui.chip-input` | Fired after any chip is added or removed. Contains `values`. |
| `select.coreui.chip-input` | Fired when chip selection changes. Contains `selected`. |
{{< /bs-table >}}

```js
const chipInputElement = document.querySelector('.chip-input')

chipInputElement.addEventListener('add.coreui.chip-input', event => {
  if (event.value.length < 2) {
    event.preventDefault()
  }
})

chipInputElement.addEventListener('input.coreui.chip-input', event => {
  // eslint-disable-next-line no-console
  console.log('Input value:', event.value)
})

chipInputElement.addEventListener('change.coreui.chip-input', event => {
  // eslint-disable-next-line no-console
  console.log('Current values:', event.values)
})
```

## Keyboard behavior

### When input is focused

{{< bs-table >}}
| Key | Action |
| --- | --- |
| `Enter` | Create chip from current input value |
| `,` (or separator) | Create chip from current input value |
| `Backspace` / `Delete` | When input is empty, move focus to the last chip |
| `←` | When cursor is at start, move focus to the last chip |
| `Escape` | Clear selection, clear input, and blur |
{{< /bs-table >}}

### When a chip is focused

{{< bs-table >}}
| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (selectable chips) |
| `Backspace` / `Delete` | Remove chip (removable chips) |
| `←` | Move to previous chip |
| `→` | Move to next chip |
| `Home` | Move to first chip |
| `End` | Move to last chip |
{{< /bs-table >}}

## Accessibility

The Bootstrap Chip Input component follows WAI-ARIA patterns to ensure the chip input is fully usable with keyboards and assistive technologies.

- Associate a `<label>` with the ghost input for screen readers.
- Chips are focusable and keyboard navigable when initialized by the plugin.
- Remove buttons include `aria-label="Remove"` by default.
- Selected chips are reflected via `.active` and `aria-selected`.
- Use a descriptive `aria-label` or `<label>` on the chip input container to communicate its purpose (e.g., "Add skills" or "Recipients").

## Customizing

### CSS variables

Chips inputs use local CSS variables on `.chip-input` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="chip-input-css-vars" file="scss/forms/_chip-input.scss" >}}

### SASS variables

{{< scss-docs name="chip-input-variables" file="scss/forms/_chip-input.scss" >}}
