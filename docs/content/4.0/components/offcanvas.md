---
layout: docs
title: Offcanvas
description: Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.
group: components
toc: true
---

## How it works

Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and `data` attributes are used to invoke our JavaScript.

- Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.
- Similarly, some [source Sass](#sass) variables for offcanvas's styles and dimensions are inherited from the modal's variables.
- When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.
- Similar to modals, only one offcanvas can be shown at a time.

**Heads up!** Given how CSS handles animations, you cannot use `margin` or `translate` on an `.offcanvas` element. Instead, use the class as an independent wrapping element.

{{< callout info >}}
{{< partial "callout-info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Offcanvas components

Below is a _static_ offcanvas example (meaning its `position`, `display`, and `visibility` have been overridden). Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

{{< example class="bd-example-offcanvas p-0 bg-light" >}}
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
{{< /example >}}

### Live demo

Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the `.show` class on an element with the `.offcanvas` class.

- `.offcanvas` hides content (default)
- `.offcanvas.show` shows content

You can use a link with the `href` attribute, or a button with the `data-coreui-target` attribute. In both cases, the `data-coreui-toggle="offcanvas"` is required.

{{< example >}}
<a class="btn btn-primary" data-coreui-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-coreui-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-coreui-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Placement

There's no default placement for offcanvas components, so you must add one of the modifier classes below;

- `.offcanvas-start` places offcanvas on the left of the viewport (shown above)
- `.offcanvas-end` places offcanvas on the right of the viewport
- `.offcanvas-bottom` places offcanvas on the bottom of the viewport

Try the right and bottom examples out below.

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
{{< /example >}}

## Options

By default, we disable scrolling on the `<body>` when an offcanvas is visible and use a gray backdrop. Use the `data-coreui-body` attribute to enable `<body>` scrolling, or a combination of both options

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Enable backdrop (default)</button>
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-coreui-body="scroll" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-coreui-body="backdrop" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>.....</p>
  </div>
</div>
<div class="offcanvas offcanvas-start" data-coreui-body="scroll,backdrop" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `.offcanvas`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript.

## Usage

The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:

- `.offcanvas` hides the content
- `.offcanvas.show` shows the content
- `.offcanvas-start` hides the offcanvas on the left
- `.offcanvas-end` hides the offcanvas on the right
- `.offcanvas-bottom` hides the offcanvas on the bottom
- `data-coreui-body="scroll"` enables `<body>` scrolling when offcanvas is open
- `data-coreui-body="backdrop"` disables scrolling and creates a backdrop over the `<body>` when offcanvas is open `(default)`
- `data-coreui-body="backdrop,scroll"` combines both options to enable `<body>` scrolling and create a backdrop over the `<body>` when offcanvas is open

Add a dismiss button with the `data-coreui-dismiss="offcanvas"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.

### Via data attributes

Add `data-coreui-toggle="offcanvas"` and a `data-coreui-target` or `href` to the element to automatically assign control of one offcanvas element. The `data-coreui-target` attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the class `offcanvas` to the offcanvas element. If you'd like it to default open, add the additional class `show`.

### Via JavaScript

Enable manually with:

```js
var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
```

### Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Activates your content as an offcanvas element. Accepts an optional options `object`.

You can create an offcanvas instance with the constructor, for example:

```js
var myOffcanvas = document.getElementById('myOffcanvas')
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
```

| Method | Description |
| --- | --- |
| `toggle` | Toggles an offcanvas element to shown or hidden. **Returns to the caller before the offcanvas element has actually been shown or hidden** (i.e. before the `shown.coreui.offcanvas` or `hidden.coreui.offcanvas` event occurs). |
| `show` | Shows an offcanvas element. **Returns to the caller before the offcanvas element has actually been shown** (i.e. before the `shown.coreui.offcanvas` event occurs).|
| `hide` | Hides an offcanvas element. **Returns to the caller before the offcanvas element has actually been hidden** (i.e. before the `hidden.coreui.offcanvas` event occurs).|
| `_getInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element |

### Events

Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.coreui.offcanvas</td>
      <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
      <td>shown.coreui.offcanvas</td>
      <td>This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
      <td>hide.coreui.offcanvas</td>
      <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
    </tr>
    <tr>
      <td>hidden.coreui.offcanvas</td>
      <td>This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
  </tbody>
</table>

```js
var myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.coreui.offcanvas', function () {
  // do something...
})
```

## Customization

### SASS

#### Variables

{{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}}
