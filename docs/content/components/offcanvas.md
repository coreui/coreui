---
layout: docs
title: Offcanvas
description: Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.
group: components
toc: true
bootstrap: true
other_frameworks: offcanvas
---

## How it works

The Bootstrap Offcanvas component serves as a sidebar element that can be activated through JavaScript, allowing it to slide in from the left, right, top, or bottom of the viewport. Triggers, like buttons or anchors, are linked to the elements you want to toggle, and data attributes facilitate their activation in JavaScript.

- Offcanvas shares some JavaScript code with modals. Conceptually, they are quite similar, but they remain separate plugins.
- Likewise, some [source Sass](#sass) variables for offcanvas styles and dimensions are derived from the modal variables.
- When displayed, offcanvas features a default backdrop that can be clicked to hide it.
- As with modals, only one offcanvas can be displayed at a time.

**Attention!** Due to CSS animation handling, `margin` or `translate` cannot be applied to an `.offcanvas` element. Instead, utilize the class as a separate wrapping element.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Examples

### Offcanvas components

Below is a default offcanvas example (via `.show` on `.offcanvas`). Offcanvas supports a header with a close button and an optional body class for initial `padding`. We recommend including offcanvas headers with dismiss actions whenever possible, or providing an explicit dismiss action.

{{< example class="docs-example-offcanvas p-0 bg-light overflow-hidden" >}}
<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    The content for the Bootstrap offcanvas goes here. You can place nearly any Bootstrap component or custom element here.
  </div>
</div>
{{< /example >}}

### Live demo

Utilize the buttons below to toggle the visibility of an offcanvas element using JavaScript, which adds or removes the `.show` class from an element with the `.offcanvas` class.

- `.offcanvas` hides content.
- `.offcanvas.show` shows content.

You can employ a link with the `href` attribute or a button featuring the `data-coreui-target` attribute. In both instances, including `data-coreui-toggle="offcanvas"` is necessary.

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
      Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-coreui-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

### Body scrolling

The `<body>` element's scrolling is disabled when the Bootstrap offcanvas and its backdrop are visible. Utilize the `data-coreui-scroll` attribute to allow scrolling on the `<body>`.

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div class="offcanvas offcanvas-start" data-coreui-scroll="true" data-coreui-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Scroll further down the page to see this option in action.
</p>
  </div>
</div>
{{< /example >}}

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-coreui-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

### Static backdrop

When the backdrop is set to static, the Bootstrap offcanvas will remain open when clicking outside of it.
{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div class="offcanvas offcanvas-start" data-coreui-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I won’t close if you click outside of me.
    </div>
  </div>
</div>
{{< /example >}}

## Dark offcanvas

{{< deprecated-in "5.0.0" >}} {{< added-in "4.2.6" >}}

Change the appearance of offcanvas elements using utilities to better match various contexts, such as dark navbars. Here, we add `.text-bg-dark` to the `.offcanvas` and `.btn-close-white` to `.btn-close` for proper styling with a dark offcanvas. If there are dropdowns inside, consider also adding `.dropdown-menu-dark` to `.dropdown-menu`.

{{< callout warning >}}
Attention! Dark variants for components are no longer supported as of v5.3.0 due to the introduction of color modes. Instead of manually adding the classes mentioned earlier, simply set `data-coreui-theme="dark"` on the root element, a parent wrapper, or the component itself.
{{< /callout >}}

{{< example class="docs-example-offcanvas p-0 bg-body-secondary overflow-hidden" >}}
<div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button type="button" class="btn-close btn-close-white" data-coreui-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
</div>
{{< /example >}}

## Responsive

{{< added-in "4.2.6" >}}

Responsive offcanvas classes hide content that is outside the viewport from a specified breakpoint and lower. Above that breakpoint, the content will behave normally. For example, `.offcanvas-lg` hides content in an offcanvas below the `lg` breakpoint, but displays the content above the `lg` breakpoint.

{{< example >}}
<button class="btn btn-primary d-lg-none" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

<div class="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" data-coreui-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</div>
{{< /example >}}

Responsive offcanvas classes are available for each breakpoint.

- `.offcanvas`
- `.offcanvas-sm`
- `.offcanvas-md`
- `.offcanvas-lg`
- `.offcanvas-xl`
- `.offcanvas-xxl`

## Placement

Offcanvas components do not have a default position; therefore, you need to apply one of the modifier classes listed below.

- `.offcanvas-start` places the offcanvas on the left side of the viewport (as shown above)
- `.offcanvas-end` places the offcanvas on the right side of the viewport
- `.offcanvas-top` places offcanvas at the top of the viewport
- `.offcanvas-bottom` places offcanvas at the bottom of the viewport

Feel free to experiment with the top, right, and bottom examples below.

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" data-coreui-toggle="offcanvas" data-coreui-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
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
    <button type="button" class="btn-close" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
{{< /example >}}

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `.offcanvas`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript.

## Usage

{{< bootstrap-compatibility >}}

The offcanvas plugin leverages several classes and attributes to perform its functions:

- `.offcanvas` hides the content
- `.offcanvas.show` shows the content
- `.offcanvas-start` hides the offcanvas on the left
- `.offcanvas-end` hides the offcanvas on the right
- `.offcanvas-top` hides the offcanvas at the top
- `.offcanvas-bottom` hides the offcanvas at the bottom

Include a dismiss button using the `data-coreui-dismiss="offcanvas"` attribute to activate the JavaScript functionality. Ensure you use the `<button>` element for consistent behavior across all devices.

### Via data attributes

Include `data-coreui-toggle="offcanvas"` along with a `data-coreui-target` or `href` in the element to automatically control a single offcanvas component. The `data-coreui-target` attribute allows you to specify a CSS selector for the associated offcanvas. Remember to apply the `offcanvas` class to the offcanvas element. To have it open by default, also add the `show` class.

#### Dismiss

{{% js-dismiss "offcanvas" %}}

{{< callout warning >}}
While both methods for dismissing an offcanvas are supported, remember that dismissing from the outside of an offcanvas does not align with the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Proceed with caution.
{{< /callout >}}

### Via JavaScript

Enable manually with:

```js
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new coreui.Offcanvas(offcanvasEl))
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean or the string `static` | `true` | Applies a backdrop to the body while the Bootstrap offcanvas is open. Alternatively, specify `static` for a backdrop that doesn't close the offcanvas component when clicked. |
| `keyboard` | boolean | `true` | Closes the offcanvas when the escape key is pressed. |
| `scroll` | boolean | `false` | Allows body scrolling while the offcanvas is open.
{{< /bs-table >}}

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

Activates your content as an offcanvas element and accepts an optional options `object`.  

You can create an offcanvas instance using the constructor; for example:

```js
const cuiOffcanvas = new coreui.Offcanvas('#myOffcanvas')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getInstance` | *Static* method that allows you to obtain the offcanvas instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method that enables you to retrieve the offcanvas instance linked to a DOM element, or create a new one if it hasn't been initialized |
| `hide` | Hides an offcanvas element. **Returns to the caller before the offcanvas element is actually hidden** (i.e. before the `hidden.coreui.offcanvas` event occurs).|
| `show` | Displays an offcanvas element. **Returns to the caller before the offcanvas element is actually shown** (i.e. before the `shown.coreui.offcanvas` event occurs).|
| `toggle` | Switches an offcanvas element between shown and hidden. **Returns to the caller before the offcanvas element is actually shown or hidden** (i.e. before the `shown.coreui.offcanvas` or `hidden.coreui.offcanvas` event occurs).
{{< /bs-table >}}

### Events

CoreUI for Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.

{{< bs-table "table" >}}
| Event Type | Description |
| --- | --- |
| `hide.coreui.offcanvas` | This event is fired immediately after the `hide` method has been called. |
| `hidden.coreui.offcanvas` | This event is fired when an offcanvas element is hidden from the user (it will wait for CSS transitions to complete). |
| `hidePrevented.coreui.offcanvas` | This event is triggered when the offcanvas is shown, its backdrop is `static`, and a click outside of the offcanvas occurs. The event is also triggered when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.coreui.offcanvas` | This event fires immediately when the `show` instance method is invoked. |
| `shown.coreui.offcanvas` | This event is fired when an offcanvas element becomes visible to the user (it will wait for CSS transitions to complete).
{{< /bs-table >}}

```js
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.coreui.offcanvas', event => {
  // do something...
})
```

## Customization

### CSS variables

Offcanvas utilizes local CSS variables on `.offcanvas` for improved real-time customization. The values for the CSS variables are defined through Sass, ensuring that Sass customization remains supported as well.

{{< scss-docs name="offcanvas-css-vars" file="scss/_offcanvas.scss" >}}

### SASS variables

{{< scss-docs name="offcanvas-variables" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Offcanvas" >}}
{{< /markdown >}}