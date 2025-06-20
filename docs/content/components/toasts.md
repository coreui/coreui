---
layout: docs
title: Toasts
description: Send push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
group: components
toc: true
bootstrap: true
other_frameworks: toast
---

Bootstrap toasts are lightweight notifications that mimic the push notifications popularized by mobile and desktop operating systems. They utilize flexbox, making them simple to align and position.

## Overview

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- Toasts will automatically hide if you do not specify `autohide: false`.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Bootstrap toasts are as flexible as you need and require very little markup. At a minimum, you should have a single element containing your “toasted” content, and it's strongly recommended to include a dismiss button.

{{< example class=" bg-body-tertiary" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

{{< callout warning >}}
Previously, our scripts dynamically added the `.hide` class to fully hide a toast (using `display:none` instead of just `opacity:0`). This is no longer necessary. However, for backwards compatibility, our script will still toggle the class (even though there is no practical reason to do so) until the next major version.
{{< /callout >}}

### Live example

Click the button below to display a toast (positioned with our utilities in the lower right corner) that is hidden by default.

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<div class="docs-example">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
</div>

```html
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
```

We use the following JavaScript to trigger our live toast demo:

{{< js-docs name="live-toast" file="docs/assets/js/partials/snippets.js" >}}


### Translucent

Toasts are slightly translucent to blend in with what's below them.

{{< example class="bg-dark" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

### Stacking

Wrap toasts in a toast container to stack them, which adds vertical spacing.

{{< example class=" bg-body-tertiary" >}}
<div class="toast-container position-static">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small class="text-muted">just now</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small class="text-muted">2 seconds ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>
{{< /example >}}

### Custom content

Customize your toasts by removing sub-components, adjusting them with [utilities]({{< docsref "/utilities/api" >}}), or adding your own markup. In this example, we've made a simpler toast by removing the default `.toast-header`, incorporating a custom hide icon from [CoreUI Icons]({{< param icons >}}), and using [flexbox utilities]({{< docsref "/utilities/flex" >}}) to modify the layout.

{{< example class=" bg-body-tertiary" >}}
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    Hello, world! This is a toast message.
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

Alternatively, you can also add additional controls and components to toasts.

{{< example class=" bg-body-tertiary" >}}
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-coreui-dismiss="toast">Close</button>
    </div>
  </div>
</div>
{{< /example >}}

### Color schemes

Building on the previous example, you can design various toast color schemes using our color and background utilities. In this case, we've added .text-bg-primary to the .toast and included .btn-close-white for the close button. To achieve a clean edge, we remove the default border with .border-0.

Building on the previous example, you can design various toast color schemes using our [color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utilities. We added `.text-bg-primary` to the `.toast`, and applied `.btn-close-white` to the close button. To achieve a clean edge, we remove the default border with `.border-0`.

{{< example class=" bg-body-tertiary" >}}
<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
{{< /example >}}

## Placement

Place toasts with custom CSS where needed. The top right and top middle are common positions for notifications. If you're only ever going to display one toast at a time, apply the positioning styles directly to the `.toast`.

{{< example stackblitz_add_js="true" >}}
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected>Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-dark position-relative docs-example-toasts">
  <div class="toast-container position-absolute p-3" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

For systems that generate more notifications, consider using a wrapping element to allow them to stack easily.

{{< example class="bg-dark docs-example-toasts p-0" >}}
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `top-0` & `end-0` to position the toasts in the upper right corner -->
  <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->
  <div class="toast-container top-0 end-0 p-3">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
        <strong class="me-auto">CoreUI for Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
{{< /example >}}

You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.

{{< example class="bg-dark docs-example-toasts d-flex" >}}
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
      <strong class="me-auto">CoreUI for Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
{{< /example >}}

## Accessibility

Toasts are meant to be brief interruptions for your visitors or users. To assist those using screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions, such as injecting or updating a toast component, are automatically announced by screen readers without moving the user's focus or interrupting the user. Additionally, include `aria-atomic="true"` to ensure the entire toast is announced as a single, unfragmented unit, rather than just announcing what changed—this prevents issues if only part of the toast is updated or if the same toast appears again later. If the information is critical to the process, such as a list of form errors, use the [alert component]({{< docsref "/components/alerts" >}}) instead of a toast.

Note that the live region must exist in the markup *before* the toast is generated or updated. If you generate both dynamically and inject them simultaneously, assistive technologies generally will not announce them.

You should also adjust the `role` and `aria-live` level based on the content. For important messages like errors, use `role="alert" aria-live="assertive"`; otherwise, use `role="status" aria-live="polite"`.

As the content changes, remember to update the [`delay` timeout](#options) so users have enough time to read the toast.

```html
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-coreui-delay="10000">
  <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```

When using `autohide: false`, you need to add a close button to let users dismiss the toast.

{{< example class=" bg-body-tertiary" >}}
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-coreui-autohide="false">
  <div class="toast-header">
    {{< placeholder width="20" height="20" background="#007aff" class="rounded me-2" text="false" title="false" >}}
    <strong class="me-auto">CoreUI for Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
{{< /example >}}

While technically it's possible to add focusable or actionable controls, such as additional buttons or links, to your toast, you should avoid doing this with autohiding toasts. Even if you set a long [`delay` timeout](#options), keyboard and assistive technology users might find it hard to reach the toast in time to act because toasts don't receive focus when they appear. If you absolutely need to have additional controls, we recommend using a toast with `autohide: false`.

## Usage

{{< bootstrap-compatibility >}}

Initialize toasts using JavaScript:

```js
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new coreui.Toast(toastEl, option))
```

### Triggers

{{% js-dismiss "toast" %}}

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | boolean | `true` | Adds a CSS fade transition to the toast |
| `autohide` | boolean | `true` | Hides the Bootstrap toast automatically |
| `delay` | number | `5000` | Sets delay before hiding the toast (ms) |
{{< /bs-table >}}


### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Hides an element's toast. Your Bootstrap toast will stay in the DOM but won't be visible anymore. |
| `getInstance` | *Static* method that allows you to get the toast instance associated with a DOM element. For example: `const myToastEl = document.getElementById('myToastEl')` and `const myToast = coreui.Toast.getInstance(myToastEl)`. Returns a Bootstrap toast instance.
| `getOrCreateInstance` | *Static* method that gets the toast instance associated with a DOM element or creates a new one if it wasn't initialized. For example: `const myToastEl = document.getElementById('myToastEl')` and `const myToast = coreui.Toast.getOrCreateInstance(myToastEl)`. Returns a Bootstrap toast instance.
| `hide` | Hides an element's toast. **Returns to the caller before the toast is actually hidden** (i.e., before the `hidden.coreui.toast` event occurs). You need to manually call this method if you set `autohide` to `false`. |
| `isShown` | Returns a boolean indicating the toast's visibility state. |
| `show` | Reveals an element's toast. **Returns to the caller before the toast is actually shown** (i.e., before the `shown.coreui.toast` event occurs). You need to call this method manually; otherwise, your toast won't appear. |
{{< /bs-table >}}

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `hide.coreui.toast` | This event is triggered immediately when the `hide` instance method is called. |
| `hidden.coreui.toast` | This event occurs when the toast has finished hiding from the user. |
| `show.coreui.toast` | This event triggers immediately when the `show` instance method is called. |
| `shown.coreui.toast` | This event occurs when the toast has become visible to the user. |
{{< /bs-table >}}

```js
const myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.coreui.toast', () => {
  // do something...
})
```

## Customizing
### CSS variables

Toasts use local CSS variables on `.toast` for improved real-time customization. Values for these CSS variables are set through Sass, so Sass customization remains supported as well.

{{< scss-docs name="toast-css-vars" file="scss/_toasts.scss" >}}

### SASS variables

{{< scss-docs name="toast-variables" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Toast" >}}
{{< /markdown >}}