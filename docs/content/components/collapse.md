---
layout: docs
title: Collapse
description: Bootstrap collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.
group: components
aliases:
  - "/components/bootstrap/collapse/"
toc: true
bootstrap: true
other_frameworks: collapse
---

## How it works

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Example

Click the buttons below to show and hide another element via class changes:

- `.collapse` hides content
- `.collapsing` is applied during transitions
- `.collapse.show` shows content

You can use a link with the `href` attribute, or a button with the `data-coreui-target` attribute. In both samples, the `data-coreui-toggle="collapse""` is required.

{{< example >}}
<p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-coreui-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-coreui-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
{{< /example >}}

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the `.collapse-horizontal` modifier class to transition the `width` instead of `height` and set a `width` on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our [width utilities]({{< docsref "/utilities/sizing" >}}).

{{< callout info >}}
Please note that while the example below has a `min-height` set to avoid excessive repaints in our docs, this is not explicitly required. **Only the `width` on the child element is required.**
{{< /callout >}}

{{< example >}}
<p>
  <button class="btn btn-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
{{< /example >}}

## Multiple targets

A `<button>` or `<a>` can show and hide multiple elements by referencing them with a selector in its `href` or `data-coreui-target` attribute.
Multiple `<button>` or `<a>` can show and hide an element if they each reference it with their `href` or `data-coreui-target` attribute

{{< example >}}
<p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-coreui-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-coreui-toggle="collapse" data-coreui-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Accessibility

Be sure to add `aria-expanded` to the control component. This attribute explicitly sends the current state of the collapsible element connected to the control to screen readers and related assistive technologies. If the collapsible part is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you have set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control alternatively. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element – i.e., the `data-coreui-target` attribute is pointing to an `id` selector – you should attach the `aria-controls` attribute to the control part, including the `id` of the collapsible element. Modern screen readers and related assistive technologies address this attribute to provide users with extra shortcuts to navigate directly to the collapsible element itself.

Note that CoreUI for Bootstrap's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - you will need to include these yourself with custom JavaScript.
## Usage

{{< bootstrap-compatibility >}}

The collapse plugin utilizes a few classes to handle the heavy lifting:

- `.collapse` hides the content
- `.collapse.show` shows the content
- `.collapsing` is added when the transition starts, and removed when it finishes

These classes can be found in `_transitions.scss`.

### Via data attributes

Just add `data-coreui-toggle="collapse"` and a `data-coreui-target` to the element to automatically assign control of one or more collapsible elements. The `data-coreui-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `show`.

To add accordion-like group management to a collapsible area, add the data attribute `data-coreui-parent="#selector"`. Refer to the demo to see this in action.

### Via JavaScript

Enable manually with:

```js
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new coreui.Collapse(collapseEl))
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
`parent` | selector, jQuery object, DOM element | `null` | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the `card` class). The attribute has to be set on the target collapsible area. |
`toggle` | boolean | `true` | Toggles the collapsible element on invocation |
{{< /bs-table >}}

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

Activates your content as a collapsible element. Accepts an optional options `object`.

You can create a collapse instance with the constructor, for example:

```js
const bsCollapse = new coreui.Collapse('#myCollapse', {
  toggle: false
})
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's collapse. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the collapse instance associated to a DOM element, you can use it like this: `coreui.Collapse.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a collapse instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Collapse.getOrCreateInstance(element)` |
| `hide` | Hides a collapsible element. **Returns to the caller before the collapsible element has actually been hidden** (e.g., before the `hidden.coreui.collapse` event occurs). |
| `show` | Shows a collapsible element. **Returns to the caller before the collapsible element has actually been shown** (e.g., before the `shown.coreui.collapse` event occurs). |
| `toggle` | Toggles a collapsible element to shown or hidden. **Returns to the caller before the collapsible element has actually been shown or hidden** (i.e. before the `shown.coreui.collapse` or `hidden.coreui.collapse` event occurs). |
{{< /bs-table >}}

### Events

CoreUI for Bootstrap's collapse class exposes a few events for hooking into collapse functionality.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `hide.coreui.collapse` | This event is fired immediately when the `hide` method has been called. |
| `hidden.coreui.collapse` | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete). |
| `show.coreui.collapse` | This event fires immediately when the `show` instance method is called. |
| `shown.coreui.collapse` | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete). |
{{< /bs-table >}}

```js
const myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.coreui.collapse', event => {
  // do something...
})
```


## Customization

### SASS variables

{{< scss-docs name="collapse-transition" file="scss/_variables.scss" >}}

### Classes

Collapse transition classes can be found in `scss/_transitions.scss` as these are shared across multiple components (collapse and accordion).

{{< scss-docs name="collapse-classes" file="scss/_transitions.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Collapse" >}}
{{< /markdown >}}