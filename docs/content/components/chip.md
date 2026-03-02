---
layout: docs
title: Chip
description: Bootstrap Chip component for CoreUI — build removable tags, selectable labels, and filterable chips with icons, avatars, and full keyboard support.
group: components
toc: true
bootstrap: true
preview_component: true
---

## Overview

The CoreUI **Bootstrap Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, dismissal, keyboard navigation, and theming via CSS variables.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized—they don't scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- Chips support keyboard navigation and selection in their container.

See examples of all of this in action below.

## When to use chips

Use the Bootstrap Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `.chip` for standalone chips.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip">Basic chip</span>
  <span class="chip">Basic chip 2</span>
  <span class="chip">Basic chip 3</span>
  <span class="chip">Basic chip 4</span>
</div>
{{< /example >}}

## Outline chips

Add `.chip-outline` to remove all background images and colors on any chip.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-outline">Outline chip</span>
  <span class="chip chip-outline">Outline chip 2</span>
  <span class="chip chip-outline">Outline chip 3</span>
  <span class="chip chip-outline">Outline chip 4</span>
</div>
{{< /example >}}

## Chips with icons

Add `.chip-icon` for a leading icon.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Chip with icon 1
  </span>
  <span class="chip">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Chip with icon 2
  </span>
</div>
{{< /example >}}

## Chips with avatars

Add `.chip-img` for an image like an avatar or use our avatar component.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Chip with avatar
  </span>
  <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Chip with avatar 2
  </span>
  <span class="chip">
    <span class="avatar bg-primary text-white">L</span>
    Chip with avatar 3
  </span>
  <span class="chip">
    <span class="avatar bg-success text-white">L</span>
    Chip with avatar 4
  </span>
</div>
{{< /example >}}

## Variants

Apply `.chip-*` classes to color your chips. Chips are subtle by default as this allows for a clear, themed active state.

{{< example >}}
{{< chip.inline >}}
<div class="d-flex flex-wrap gap-1">
{{- range (index $.Site.Data "theme-colors") }}
  <span class="chip chip-{{ .name }} chip-clickable" tabindex="0">{{ .name | humanize }} chip</span>
  <span class="chip chip-{{ .name }} active" tabindex="0">{{ .name | humanize }} chip</span>{{- end -}}
{{< /chip.inline >}}
</div>
{{< /example >}}

{{< example >}}
{{< chip.inline >}}
<div class="d-flex flex-wrap gap-1">
{{- range (index $.Site.Data "theme-colors") }}
  <span class="chip chip-outline chip-clickable chip-{{ .name }}" tabindex="0">{{ .name | humanize }} chip</span>
  <span class="chip chip-outline chip-{{ .name }} active" tabindex="0">{{ .name | humanize }} chip</span>{{- end -}}
{{< /chip.inline >}}
</div>
{{< /example >}}

### Active state

Add `.active` to make chips use the solid appearance (bg/contrast). This is useful for toggle-style chip selections.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip">Default</span>
  <span class="chip active">Active</span>
  <span class="chip chip-primary">Primary</span>
  <span class="chip chip-primary active">Active</span>
  <span class="chip chip-success">Success</span>
  <span class="chip chip-success active">Active</span>
</div>
{{< /example >}}

## Sizes

Use `.chip-sm` or `.chip-lg` for different sizes.

{{< example >}}
<div class="d-flex flex-wrap gap-1 mb-3">
  <span class="chip chip-sm">Small</span>
  <span class="chip chip-sm">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Small with icon
  </span>
  <span class="chip chip-sm">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Small with avatar
  </span>
  <span class="chip chip-sm">
    <span class="avatar bg-primary text-white">L</span>
    Small with avatar 2
  </span>
  <span class="chip chip-sm">
    Small removable
    <button type="button" class="chip-remove" aria-label="Remove">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>

<div class="d-flex flex-wrap gap-1 mb-3">
  <span class="chip">Default</span>
  <span class="chip chip-sm">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Default with icon 1
  </span>
    <span class="chip">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Default with avatar
  </span>
  <span class="chip">
    <span class="avatar bg-primary text-white">L</span>
    Default with avatar1
  </span>
  <span class="chip">
    Default removable
    <button type="button" class="chip-remove" aria-label="Remove">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>

<div class="d-flex flex-wrap gap-1">
  <span class="chip chip-lg">Large</span>
  <span class="chip chip-lg">
    <span class="chip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
    </span>
    Small with icon 1
  </span>
  <span class="chip chip-lg">
    <img src="/assets/img/avatars/1.jpg" class="chip-img" width="16" height="16" alt="">
    Large with avatar
  </span>
  <span class="chip chip-lg">
    <span class="avatar bg-primary text-white">L</span>
    Large with avatar 2
  </span>
  <span class="chip chip-lg">
    Large removable
    <button type="button" class="chip-remove" aria-label="Remove">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="4" y1="4" x2="12" y2="12"/>
        <line x1="12" y1="4" x2="4" y2="12"/>
      </svg>
    </button>
  </span>
</div>
{{< /example >}}


## Chip component JavaScript plugin

Use the Bootstrap Chip component JavaScript plugin for selection, keyboard navigation, and dismissal. You can initialize chip components via data attributes or JavaScript.

### Data attributes

Add `data-coreui-chip` to enable the plugin and configure behavior with `data-coreui-*` options.

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip" data-coreui-chip data-coreui-selectable="true">Selectable</span>
  <span class="chip" data-coreui-chip data-coreui-removable="true">Removable</span>
  <span class="chip" data-coreui-chip data-coreui-selectable="true" data-coreui-selected="true">Selected</span>
  <span class="chip disabled" data-coreui-chip>Disabled</span>
</div>
{{< /example >}}

### JavaScript

Initialize a chip directly and pass options:

```js
const chip = document.querySelector('#myChip')
coreui.Chip.getOrCreateInstance(chip, {
  selectable: true,
  removable: true
})
```

### Remove button

If `removable` is enabled, the plugin will add the remove button automatically. You can also provide your own markup:

```html
<span class="chip" data-coreui-chip data-coreui-removable="true">
  Removable chip
  <button type="button" class="chip-remove" aria-label="Remove">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="4" y1="4" x2="12" y2="12"/>
      <line x1="12" y1="4" x2="4" y2="12"/>
    </svg>
  </button>
</span>
```

{{< example >}}
<div class="d-flex flex-wrap gap-1">
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 1</span>
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 2</span>
  <span class="chip disabled" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 3</span>
  <span class="chip" data-coreui-removable="true" data-coreui-selectable="true" data-coreui-chip>Chip 4</span>
</div>
{{< /example >}}

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaRemoveLabel` | string | `'Remove'` | Accessible label for the remove button. |
| `disabled` | boolean | `false` | Disables interactions and focus. You can also apply the `.disabled` class in markup. |
| `removable` | boolean | `false` | Adds a remove button (or enables removal if it exists in markup). |
| `removeIcon` | string | SVG | HTML string used as the remove icon. |
| `selectable` | boolean | `false` | Enables selection and keyboard selection behavior. |
| `selected` | boolean | `false` | Sets the initial selected state when `selectable` is enabled. |
{{< /bs-table >}}

### Methods

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `remove` | Removes the chip (fires `remove` and `removed` events). |
| `deselect` | Deselects a selectable chip. |
| `dispose` | Destroys a chip instance. (Removes stored data on the DOM element) |
| `getInstance` | Static method to get the chip instance: `coreui.Chip.getInstance(element)`. |
| `getOrCreateInstance` | Static method to get or create a chip instance: `coreui.Chip.getOrCreateInstance(element)`. |
| `select` | Selects a selectable chip. |
| `toggle` | Toggles selection for a selectable chip. |
{{< /bs-table >}}

### Events

All CoreUI chip events are fired from the chip element and bubble.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `remove.coreui.chip` | Fires immediately when `remove` is called. Cancelable. |
| `removed.coreui.chip` | Fired after the chip has been removed from the DOM. |
| `select.coreui.chip` | Fires immediately before a chip is selected. Cancelable. |
| `selected.coreui.chip` | Fired after a chip is selected. |
| `deselect.coreui.chip` | Fires immediately before a chip is deselected. Cancelable. |
| `deselected.coreui.chip` | Fired after a chip is deselected. |
{{< /bs-table >}}

```js
const myChip = document.getElementById('myChip')
myChip.addEventListener('selected.coreui.chip', event => {
  // handle selection
})
```

## Keyboard behavior

Chips support keyboard navigation when they are `selectable` and/or `removable`.

### When a chip is focused

{{< bs-table >}}
| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (only when `selectable` is enabled) |
| `Backspace` / `Delete` | Close chip when `removable` is enabled |
| `←` | Move focus to previous chip |
| `→` | Move focus to next chip |
| `Home` | Move focus to the first chip in the container |
| `End` | Move focus to the last chip in the container |
{{< /bs-table >}}

### Mouse interaction

{{< bs-table >}}
| Action | Effect |
| --- | --- |
| Click chip | Toggle selection (only when `selectable` is enabled) |
| Click remove | Close chip (only when `removable` is enabled) |
{{< /bs-table >}}

## Accessibility

The Bootstrap Chip component follows WAI-ARIA patterns for interactive widgets, ensuring the chip component is fully usable with keyboards and assistive technologies.

- Chips become focusable when `selectable` or `removable` is enabled.
- `aria-selected` is kept in sync with `.active` on selectable chips.
- `aria-disabled="true"` is applied to disabled chips.
- Each `.chip-remove` button includes an accessible label via `ariaRemoveLabel`.
- Use descriptive `aria-label` attributes on chip containers when the chip component group has a meaningful role (e.g., "Applied filters").

## Customizing

### CSS variables

Chips use local CSS variables on `.chip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="chip-css-vars" file="scss/_chip.scss" >}}

### SASS variables

{{< scss-docs name="chip-variables" file="scss/_chip.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Chip" >}}
{{< /markdown >}}
