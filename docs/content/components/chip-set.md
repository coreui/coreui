---
layout: docs
title: Chip set
description: Bootstrap Chip set component for CoreUI — group chips into an accessible, keyboard-navigable container with single or multiple selection.
group: components
toc: true
bootstrap: true
preview_component: true
---

## Overview

The CoreUI **Bootstrap Chip set component** groups multiple [chips]({{< docsref "/components/chip" >}}) into a single container that manages roving focus, keyboard navigation, and selection. While an individual chip handles its own state (selection, removal), the chip set is responsible for everything that spans the whole group:

- Arrow-key navigation between chips, with <kbd>Home</kbd>/<kbd>End</kbd> jumping to the edges.
- Moving focus to a neighboring chip after one is removed.
- Single or multiple selection through the `selectionMode` option.
- A flexible, wrapping layout with a configurable gap.

A chip set instantiates the child `.chip` elements for you, so you don't need to initialize each chip separately.

## Basic chip set

Wrap your chips in `.chip-set` and enable the plugin with `data-coreui-chip-set`.

{{< example >}}
<div class="chip-set" data-coreui-chip-set>
  <span class="chip">Apple</span>
  <span class="chip">Banana</span>
  <span class="chip">Cherry</span>
  <span class="chip">Date</span>
</div>
{{< /example >}}

## Selectable chips

Set `data-coreui-selectable="true"` to make every chip in the set selectable. With the default `selectionMode` of `multiple`, any number of chips can be active at once — useful for filters.

{{< example >}}
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true">
  <span class="chip">Design</span>
  <span class="chip active">Development</span>
  <span class="chip">Marketing</span>
  <span class="chip active">Sales</span>
</div>
{{< /example >}}

### Single selection

Use `data-coreui-selection-mode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

{{< example >}}
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true" data-coreui-selection-mode="single">
  <span class="chip active">Small</span>
  <span class="chip">Medium</span>
  <span class="chip">Large</span>
</div>
{{< /example >}}

## Filter chips

Add `data-coreui-filter="true"` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

{{< example >}}
<div class="chip-set" data-coreui-chip-set data-coreui-filter="true">
  <span class="chip">Design</span>
  <span class="chip active">Development</span>
  <span class="chip">Marketing</span>
  <span class="chip active">Sales</span>
</div>
{{< /example >}}

Customize the check with the `selectedIcon` option (or `data-coreui-selected-icon`), the same way you customize the remove icon.

## Removable chips

Set `data-coreui-removable="true"` to add a remove button to every chip. When a chip is removed, focus moves to a neighboring chip.

{{< example >}}
<div class="chip-set" data-coreui-chip-set data-coreui-removable="true">
  <span class="chip">Filter one</span>
  <span class="chip">Filter two</span>
  <span class="chip disabled">Filter three</span>
</div>
{{< /example >}}

## JavaScript plugin

{{< bootstrap-compatibility >}}

### Data attributes

Add `data-coreui-chip-set` to enable the plugin and configure behavior with `data-coreui-*` options. The options are forwarded to every chip in the set.

```html
<div class="chip-set" data-coreui-chip-set data-coreui-selectable="true" data-coreui-selection-mode="single">
  <span class="chip">One</span>
  <span class="chip">Two</span>
</div>
```

### JavaScript

```js
const chipSet = document.querySelector('#myChipSet')
coreui.ChipSet.getOrCreateInstance(chipSet, {
  selectable: true,
  selectionMode: 'single'
})
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaRemoveLabel` | string | `'Remove'` | Accessible label applied to each chip's remove button. |
| `chipClassName` | string, function, null | `null` | CSS class(es) added to chips created through `add`. A function receives the chip value and returns the class string. |
| `disabled` | boolean | `false` | Disables interactions and focus for the chips in the set. |
| `filter` | boolean | `false` | Turns the chips into filter chips — a check icon is shown on the selected ones. Implies `selectable`. |
| `maxChips` | number, null | `null` | Maximum number of chips allowed. `null` means no limit. |
| `removable` | boolean | `false` | Adds a remove button to each chip. |
| `removeIcon` | string | SVG | HTML string used as the remove icon. |
| `selectable` | boolean | `false` | Enables selection and keyboard selection on the chips. |
| `selectedIcon` | string | SVG | HTML string used as the check icon on selected filter chips. |
| `selectionMode` | string | `'multiple'` | Selection behavior: `'multiple'` allows several active chips, `'single'` keeps at most one. |
| `unique` | boolean | `false` | Prevents adding a chip whose value already exists in the set. |
{{< /bs-table >}}

### Methods

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `add` | Adds a chip to the set. Accepts an existing `.chip` element or a label string (a chip element is created for you). Honors `unique` and `maxChips`. Returns the chip element (or `null` if rejected). |
| `remove` | Removes a chip from the set. Accepts a chip element or its value string. |
| `removeSelected` | Removes every selected chip from the set. |
| `clear` | Removes every chip from the set. |
| `getValues` | Returns the array of chip values. |
| `getSelected` | Returns an array of the selected (`.active`) chip elements. |
| `getSelectedValues` | Returns the values of the selected chips. |
| `selectChip` | Selects a specific chip element belonging to the set. |
| `selectAll` | Selects every selectable chip in the set. |
| `deselectAll` | Deselects every selected chip in the set. |
| `clearSelection` | Deselects all chips and emits a selection change. |
| `dispose` | Destroys a chip set instance. (Removes stored data on the DOM element) |
| `getInstance` | Static method to get the chip set instance: `coreui.ChipSet.getInstance(element)`. |
| `getOrCreateInstance` | Static method to get or create a chip set instance: `coreui.ChipSet.getOrCreateInstance(element)`. |
{{< /bs-table >}}

### Events

Chip set events are fired from the chip set element. Individual `*.coreui.chip` events still fire from each chip and bubble up.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `add.coreui.chip-set` | Fires immediately before a chip is added through `add`. Cancelable. Carries the `value`. |
| `remove.coreui.chip-set` | Fires immediately before a chip is removed through `remove`. Cancelable. Carries the `value` and `chip` element. |
| `change.coreui.chip-set` | Fired when the set's membership changes (a chip is added or removed). Carries the current `values` array. |
| `select.coreui.chip-set` | Fired when the selection changes. Carries the `selected` array of chip values. |
{{< /bs-table >}}

```js
const myChipSet = document.getElementById('myChipSet')
myChipSet.addEventListener('change.coreui.chip-set', event => {
  // event.values is the array of chip values
})
```

## Keyboard behavior

When a chip inside a chip set is focused:

{{< bs-table >}}
| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection of the focused chip (when `selectable` is enabled) |
| `Backspace` / `Delete` | Remove the focused chip (when `removable` is enabled) |
| `←` | Move focus to the previous chip |
| `→` | Move focus to the next chip |
| `Home` | Move focus to the first chip |
| `End` | Move focus to the last chip |
{{< /bs-table >}}

Disabled chips (`.chip.disabled`) are skipped while navigating.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set element when the group has a meaningful role (e.g., "Applied filters").
- Selection state is reflected on each chip via `aria-selected`; see the [Chip]({{< docsref "/components/chip" >}}) accessibility notes.

## Customizing

### CSS variables

{{< scss-docs name="chip-set-css-vars" file="scss/_chip-set.scss" >}}

### SASS variables

{{< scss-docs name="chip-set-variables" file="scss/_chip-set.scss" >}}
