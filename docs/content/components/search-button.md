---
layout: docs
title: Search Button
description: Bootstrap Search Button for CoreUI is a keyboard-aware trigger component that can open search interfaces, modals, offcanvas panels, and custom flows from click or shortcut.
group: components
toc: true
bootstrap: true
preview_component: true
other_frameworks: search-button
---

## Overview

The CoreUI **Bootstrap Search Button component** is a trigger element designed for search entry points and command-style actions. It behaves like a regular button on click, but it can also react to a configurable keyboard shortcut such as `meta+/` or `ctrl+/`.

- Use it as a standalone trigger for a custom search UI.
- Combine it with `data-coreui-toggle` and `data-coreui-target` to open a modal or offcanvas.
- Shortcut keys are rendered automatically.
- Displayed shortcut keys react to keyboard interaction and receive an `.active` state while pressed.

## Basic example

Use `.search-button` together with `data-coreui-search-button`. The keyboard shortcut keys are generated automatically by JavaScript. Because the component dispatches a real `click()` when the configured shortcut matches, it works with CoreUI data APIs such as modal, offcanvas, or collapse triggers.

{{< example >}}
<button
  type="button"
  class="search-button"
  data-coreui-search-button
  data-coreui-shortcut="meta+/,ctrl+/"
  data-coreui-toggle="modal"
  data-coreui-target="#searchButtonModal"
>
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="m479.6 399.716-81.084-81.084-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2 81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.837 23.894 76.573 76.572a24.03 24.03 0 0 1-.002 33.941"/>
  </svg>
  <span class="search-button-placeholder">Search</span>
</button>
<div class="modal fade" id="searchButtonModal" tabindex="-1" aria-labelledby="searchButtonModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <input type="text" class="form-control border-0 p-0 rounded-0 shadow-none" placeholder="Search">
        <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="text-body-secondary small mb-2">Recent searches</p>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" class="text-body-secondary flex-shrink-0"><path fill="currentcolor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
            <span>CoreUI components overview</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" class="text-body-secondary flex-shrink-0"><path fill="currentcolor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
            <span>Modal dialog examples</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" class="text-body-secondary flex-shrink-0"><path fill="currentcolor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
            <span>Form validation with Bootstrap</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" class="text-body-secondary flex-shrink-0"><path fill="currentcolor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
            <span>Sidebar navigation customization</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" class="text-body-secondary flex-shrink-0"><path fill="currentcolor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
            <span>CSS variables theming</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<button type="button" class="search-button" data-coreui-search-button>
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="..."/>
  </svg>
  <span class="search-button-placeholder">Search</span>
</button>
```

## Custom shortcut

Configure the shortcut with `data-coreui-shortcut`. On macOS, the component prefers the `meta` variant for the visual label. On Windows and Linux, it prefers the `ctrl` variant.

{{< callout warning >}}
Shortcuts such as `meta+f`, `ctrl+f`, `meta+s`, or `ctrl+s` can override native browser or system shortcuts. Prefer safer combinations such as `meta+/` and `ctrl+/` unless replacing the default behavior is intentional.
{{< /callout >}}

{{< example >}}
<button type="button" class="search-button" data-coreui-search-button data-coreui-shortcut="meta+k,ctrl+k">
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="m479.6 399.716-81.084-81.084-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2 81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.837 23.894 76.573 76.572a24.03 24.03 0 0 1-.002 33.941"/>
  </svg>
  <span class="search-button-placeholder">Command palette</span>
</button>
{{< /example >}}

```html
<button type="button" class="search-button" data-coreui-search-button data-coreui-shortcut="meta+k,ctrl+k">
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="..."/>
  </svg>
  <span class="search-button-placeholder">Command palette</span>
</button>
```

## Launch an offcanvas

Because the component dispatches a real `click()` when the configured shortcut matches, it works with CoreUI data APIs such as modal, offcanvas, or collapse triggers. This demo uses `meta+shift+o` / `ctrl+shift+o` to avoid colliding with other live examples on the page.

{{< example >}}
<button
  type="button"
  class="search-button"
  data-coreui-search-button
  data-coreui-shortcut="meta+shift+o,ctrl+shift+o"
  data-coreui-toggle="offcanvas"
  data-coreui-target="#searchButtonOffcanvas"
  aria-controls="searchButtonOffcanvas"
>
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="m479.6 399.716-81.084-81.084-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2 81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.837 23.894 76.573 76.572a24.03 24.03 0 0 1-.002 33.941"/>
  </svg>
  <span class="search-button-placeholder">Search</span>
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="searchButtonOffcanvas" aria-labelledby="searchButtonOffcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="searchButtonOffcanvasLabel">Search panel</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <input type="search" class="form-control mb-3" placeholder="Search...">
    <p class="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
  </div>
</div>
{{< /example >}}

```html
<button
  type="button"
  class="search-button"
  data-coreui-search-button
  data-coreui-shortcut="meta+shift+o,ctrl+shift+o"
  data-coreui-toggle="offcanvas"
  data-coreui-target="#searchButtonOffcanvas"
  aria-controls="searchButtonOffcanvas"
>
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="..."/>
  </svg>
  <span class="search-button-placeholder">Search</span>
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="searchButtonOffcanvas" aria-labelledby="searchButtonOffcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="searchButtonOffcanvasLabel">Search panel</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <input type="search" class="form-control mb-3" placeholder="Search...">
    <p class="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
  </div>
</div>
```

## Keyboard behavior

### When the configured shortcut is pressed

{{< bs-table >}}
| Key | Action |
| --- | --- |
| `Enter` / `Space` on a focused search button | Trigger the same action as a pointer click |
| Configured shortcut, e.g. `⌘/` / `Ctrl+/` | Trigger the same action as a pointer click |
| Modifier key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |
| Final key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |
{{< /bs-table >}}

### Keyboard state behavior

{{< bs-table >}}
| Interaction | Effect |
| --- | --- |
| Matching shortcut on `keydown` | Optionally prevents the browser's default behavior and dispatches the component trigger |
| Plain typing inside `input`, `textarea`, `select`, or `contenteditable` | Does not trigger the component without `meta` or `ctrl` |
| `keyup` after a shortcut key press | Removes `.active` from the rendered shortcut keys |
| Browser window `blur` | Clears all active shortcut key states |
| Multiple configured shortcuts | The component listens to all configured shortcuts and renders the platform-preferred one in the UI |
{{< /bs-table >}}

## Accessibility

Accessibility is an important part of the Search Button design. The component includes built-in behaviors that help preserve expected keyboard interaction and reduce conflicts with assistive technologies, but accessible results still depend on choosing the right markup and shortcut combinations.

### Built-in accessibility behavior

- Native button semantics are preserved when the component is used on a `<button type="button">`.
- Rendered `.search-button-keys` are treated as visual hints only and are hidden from assistive technologies.
- Plain typing inside editable fields does not trigger the component unless the shortcut also includes `meta` or `ctrl`.
- The component keeps standard button keyboard behavior such as `Enter` and `Space`.

### Author responsibilities

- Use a native `<button type="button">` element so the component keeps expected focus behavior and keyboard interaction.
- Mark decorative icons with `aria-hidden="true"` when they do not contribute to the accessible name.
- Choose shortcuts carefully and avoid overriding common browser or system shortcuts unless that behavior is intentional and clearly communicated.
- Make sure the visible button label clearly describes the action, for example `Search`, `Open search`, or `Command palette`.

## Usage

Initialize the CoreUI Search Button component via data attributes or JavaScript. The component automatically creates a shortcut key container and renders the visible shortcut keys based on the configured shortcut.

### Data attributes

Use `data-coreui-search-button` to enable the plugin. Configure behavior with `data-coreui-*` options.

```html
<button
  type="button"
  class="search-button"
  data-coreui-search-button
  data-coreui-shortcut="meta+/,ctrl+/"
  data-coreui-toggle="modal"
  data-coreui-target="#searchButtonModal"
>
  <svg class="search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
    <path fill="currentcolor" d="..."/>
  </svg>
  <span class="search-button-placeholder">Search</span>
</button>
```

### Via JavaScript

```js
const searchButton = document.querySelector('[data-coreui-search-button]')

new coreui.SearchButton(searchButton, {
  shortcut: 'meta+k,ctrl+k'
})
```

### Options

{{< bs-table >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `preventDefault` | `boolean` | `true` | Prevents the browser's default behavior when the configured shortcut matches. |
| `shortcut` | `string` | `'meta+/,ctrl+/'` | Comma-separated shortcut list. The component matches all configured shortcuts and prefers the platform-appropriate one for rendering. Plain typing inside editable fields is ignored unless the shortcut also includes `meta` or `ctrl`. |
{{< /bs-table >}}

### Methods

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `trigger()` | Triggers the `trigger.coreui.search-button` event manually. |
{{< /bs-table >}}

```js
const element = document.querySelector('[data-coreui-search-button]')
const searchButton = coreui.SearchButton.getOrCreateInstance(element)

searchButton.trigger()
```

### Events

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `trigger.coreui.search-button` | Fired when the component is activated by click, API call, or keyboard shortcut. |
{{< /bs-table >}}

The event exposes these extra properties:

- `trigger`: `'click'`, `'shortcut'`, or `'api'`

```js
const element = document.querySelector('[data-coreui-search-button]')

element.addEventListener('trigger.coreui.search-button', event => {
  // eslint-disable-next-line no-console
  console.log(event.trigger)
})
```

## Customizing

### CSS variables

Search buttons use local CSS variables on `.search-button` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="search-button-css-vars" file="scss/_search-button.scss" >}}

### SASS variables

{{< scss-docs name="search-button-variables" file="scss/_search-button.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Search Button" >}}
{{< /markdown >}}
