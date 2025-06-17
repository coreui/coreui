---
layout: docs
title: Tooltips
description: Use Bootstrap Tooltips to add small, informative text boxes that appear when users hover or focus on an element. This feature enhances UX by providing contextual help without cluttering your interface.
group: components
toc: true
bootstrap: true
other_frameworks: tooltip
---

## Overview

Things to keep in mind when using the Bootstrap tooltip plugin:

- Our Bootstrap tooltips depend on the third-party library [Popper](https://popper.js.org/) for positioning. You need to include [popper.min.js]({{< param "cdn.popper" >}}) before `coreui.js` or use `coreui.bundle.min.js/coreui.bundle.js`, which includes Popper to ensure tooltips function correctly!
- Tooltips are optional for performance reasons, so you need to initialize them yourself.
- Bootstrap Tooltips with empty titles are never displayed.
- Specify `container: 'body'` to prevent rendering issues in more complex components (such as our input groups, button groups, etc.).
- Bootstrap tooltips cannot be triggered on hidden elements.
- Tooltips for elements that are `.disabled` or `disabled` need to be activated on a wrapper element.
- When triggered by hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>` elements to avoid this behavior.
- Tooltips must be hidden before the related elements are removed from the DOM.
- Our Bootstrap tooltips can be triggered thanks to an element inside a shadow DOM.

Got all that? Awesome! Now, let's explore how they work through some examples.

{{< callout info >}}
{{< partial "callouts/info-sanitizer.md" >}}
{{< /callout >}}

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

Got all that? Great, let's see how they work with some examples.

## Examples

### Enable Bootstrap tooltips

You can enable tooltips using JavaScript or data attributes. Here's how to initialize all tooltip elements on a page:

```js
const tooltipTriggerList = document.querySelectorAll('[data-coreui-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new coreui.Tooltip(tooltipTriggerEl))
```

### Tooltips on links

Hover your cursor over the links below to see tooltips:

<div class="docs-example tooltip-demo">
  <p class="muted">
    Sample text to illustrate <a href="#" data-coreui-toggle="tooltip" title="Default tooltip">inline links</a> accompanied by tooltips. This serves purely as filler, lacking substance. The content here merely simulates <a href="#" data-coreui-toggle="tooltip" title="Another tooltip">genuine text</a> presence. All of this is to demonstrate how <a href="#" data-coreui-toggle="tooltip" title="Another one here too">tooltips</a> would appear in actual scenarios. Hopefully, you have now observed how these link tooltips function effectively in practice, ready to be used on your own website or project.
  </p>
</div>

{{< callout warning >}}
{{< partial "callouts/warning-data-bs-title-vs-title.md" >}}
{{< /callout >}}

### Custom tooltips

{{< added-in "4.2.0" >}}

Feel free to personalize the look of your tooltips with [CSS variables](#variables)! By setting a custom class using `data-coreui-custom-class="custom-tooltip"`, you can easily define your custom style and use it to adjust a local CSS variable.

{{< scss-docs name="custom-tooltip" file="docs/assets/scss/_component-examples.scss" >}}

{{< example class="tooltip-demo" stackblitz_add_js="true" >}}
<button type="button" class="btn btn-outline"
        data-coreui-toggle="tooltip" data-coreui-placement="top"
        data-coreui-custom-class="custom-tooltip"
        data-coreui-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button>
{{< /example >}}

### Positioning

Bootstrap Tooltips support multiple placements: top, right, bottom, and left. The default is top. Directions are mirrored when using CoreUI in RTL. To change placement, use the `data-coreui-placement` attribute:

{{< example class="tooltip-demo" >}}
<button type="button" class="btn btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="top" title="Tooltip on top">Tooltip on top</button>
<button type="button" class="btn btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="right" title="Tooltip on right">Tooltip on right</button>
<button type="button" class="btn btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button type="button" class="btn btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="left" title="Tooltip on left">Tooltip on left</button>
{{< /example >}}

### Tooltips with HTML Content

Bootstrap Tooltips support HTML content, allowing you to insert styled elements like `<em>`, `<strong>`, or `<u>` directly inside the tooltip. This feature is useful when you want to emphasize certain words, add inline formatting, or even insert icons.

To enable this, set the `data-coreui-html="true"` attribute and include valid HTML in the title attribute. Be mindful of security when injecting dynamic content.

{{< example class="tooltip-demo" >}}
<button type="button" class="btn btn-outline" data-coreui-toggle="tooltip" data-coreui-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
{{< /example >}}

This will render a styled tooltip that interprets the HTML tags instead of treating them as plain text. HTML tooltips are especially handy when you need richer formatting within a compact UI hint.

### Tooltips on SVG Elements

Applying Bootstrap Tooltips to SVG elements requires a different approach, since SVGs do not support the `title` attribute in the same way HTML elements do. To show tooltips on SVG icons or shapes, you must initialize them manually using JavaScript.

It’s recommended to set the container option to `'body'` to avoid positioning issues, especially when SVGs are nested inside complex layouts.

{{< example class="tooltip-demo" >}}
<a href="#" class="d-inline-block" data-coreui-toggle="tooltip" title="Default tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
    <rect width="100%" height="100%" fill="#563d7c"/>
    <circle cx="50" cy="50" r="30" fill="#007bff"/>
  </svg>
</a>
{{< /example >}}

Using Bootstrap Tooltips with SVGs is a great way to enhance accessibility and interactivity for icon-based UIs or data visualizations without modifying the structure of your SVGs.

## Usage

{{< bootstrap-compatibility >}}

The tooltip plugin creates content and markup as needed, and by default places tooltips following their trigger elements.

Trigger the tooltip via JavaScript:

```js
const exampleEl = document.getElementById('example')
const tooltip = new coreui.Tooltip(exampleEl, options)
```

{{< callout warning >}}
##### Overflow `auto` and `scroll`

When a parent container has `overflow: auto` or `overflow: scroll`, such as with our `.table-responsive`, the tooltip position attempts to adjust automatically while maintaining its original placement. To fix this, set the boundary option in the flip modifier using the `popperConfig` option to any HTMLElement to replace the default value, `'clippingParents'`, like `document.body`:

```js
const tooltip = new coreui.Tooltip('#example', {
  boundary: document.body // or document.querySelector('#boundary')
})
```
{{< /callout >}}

### Markup

The markup needed for a tooltip consists solely of a `data` attribute and a `title` on the HTML element you want to display a tooltip. The markup generated for a tooltip is quite simple, although it does require a position, which is set to `top` by default in the plugin.

{{< callout warning >}}
##### Making tooltips work for keyboard and assistive technology users

Only add tooltips to HTML elements that are inherently keyboard-focusable and interactive, like links or form controls. While it is possible to make arbitrary HTML elements like `<span>`s focusable by using the `tabindex="0"` attribute, doing so may create confusing tab stops on non-interactive elements for keyboard users. Moreover, most assistive technologies typically do not announce tooltips in these cases. Additionally, avoid depending solely on `hover` to trigger your tooltips, as this approach renders them inaccessible for keyboard users.
{{< /callout >}}

```html
<!-- HTML to write -->
<a href="#" data-coreui-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-auto" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### Disabled elements

Elements that have the `disabled` attribute are non-interactive, which prevents users from focusing, hovering, or clicking on them to display a tooltip (or popover). To address this, consider triggering the tooltip from a surrounding `<div>` or `<span>`, preferably making it keyboard-focusable by using `tabindex="0"`.

{{< example class="tooltip-demo" >}}
<span class="d-inline-block" tabindex="0" data-coreui-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>
{{< /example >}}

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< callout warning >}}
Please note that for security reasons, the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes.
{{< /callout >}}

{{< bs-table "table" >}}

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](/getting-started/javascript#sanitizer) | Defines the set of permitted HTML tags and attributes that can safely appear in the tooltip content when HTML rendering is enabled. This helps maintain control over the output and prevent injection of malicious code. |
| `animation` | boolean | `true` | Determines whether the tooltip should fade in and out using a CSS transition. Set to `false` for instant show/hide behavior, which may be preferable for performance-sensitive interfaces. |
| `container` | string, element, false | `false` | Specifies the parent container in which the tooltip should be inserted. Commonly used value is `'body'`, which helps avoid layout or overflow issues by ensuring the tooltip isn't clipped by parent elements. |
| `delay` | number, object | `0` | Defines how long (in milliseconds) to wait before showing or hiding the tooltip. A single number applies to both actions, or you can provide an object like `{ show: 500, hide: 200 }` for separate control over each. |
| `html` | boolean | `false` | Enables support for HTML content inside the tooltip. When set to `true`, the `title` attribute may include tags like `<strong>`, `<em>`, or even icons. Be cautious with untrusted content as it increases XSS risk. |
| `placement` | string, function | `'top'` | Sets the tooltip’s position relative to its target element. Valid values include `'top'`, `'bottom'`, `'left'`, `'right'`, or `'auto'`. You can also pass a function for dynamic placement based on element size or context. |
| `selector` | string, false | `false` | Used to delegate tooltip activation to child elements within a container. This is particularly useful when you’re dynamically adding elements to the DOM that require tooltips. Note: the `title` attribute itself should not be used as a selector. |
| `template` | string | `'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'` | Provides the HTML structure used to generate the tooltip. You can override it to include custom classes or elements. The `title` content is placed inside `.tooltip-inner`, and `.tooltip-arrow` is the visual pointer. |
| `title` | string, element, function | `''` | The content displayed inside the tooltip. If a value is not provided, the component will fall back to the `title` attribute on the element. You can also provide a function that returns the content dynamically.|
| `customClass` | string, function | `''` | Allows adding one or more custom CSS classes to the tooltip when it's rendered. Accepts a string with class names or a callback function that returns the class string. Useful for styling variants (e.g. light vs dark). |
| `trigger` | string | `'hover focus'` | Determines which user interactions will cause the tooltip to show. Options include `click`, `hover`, `focus`, or `manual`. Multiple triggers can be combined using a space-separated string. Use `manual` for full programmatic control. |
| `offset` | array, string, function | `[0, 6]` | Defines how far the tooltip should be offset from the target element. Use a string like `data-coreui-offset="10,20"` in attributes or pass a function to calculate the offset based on context. Popper.js modifiers are used under the hood. |
| `fallbackPlacements` | string, array | `['top', 'right', 'bottom', 'left']` | Specifies alternative placements for the tooltip if the preferred one isn't feasible (e.g., due to lack of space). The tooltip will try these placements in order until one fits. For more information refer to Popper's [behavior docs](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements). |
| `boundary` | string, element | `'clippingParents'` | Determines the boundary within which the tooltip must remain visible. Can be a specific element or one of Popper’s keywords like `'viewport'` or `'window'`. This setting helps avoid unwanted clipping or overflow. For more information refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `sanitize` | boolean | `true` | Controls whether HTML content in the tooltip should be sanitized before rendering. Strongly recommended to leave enabled unless you’re fully managing the content and trust its source. |
| `allowList` | object | \[Default value]\({{< docsref "/getting-started/javascript#sanitizer" >}}) | A detailed whitelist of tags and attributes considered safe when sanitization is enabled. This fine-tunes what HTML will be kept or stripped from the tooltip. |
| `sanitizeFn` | null, function | `null` | You can define your own custom sanitization logic by passing a function here. Ideal if you want to use a specialized HTML sanitizer or integrate with existing security tools. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
| `popperConfig` | null, object, function | `null` | Allows you to override or extend the default Popper.js configuration used by Bootstrap Tooltip. Can be an object or a function that receives the default config and returns a modified one, giving you full control over tooltip behavior and positioning logic. See [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options).|
{{< /bs-table >}}


{{< callout info >}}
#### Data attributes for individual tooltips

Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.
{{< /callout >}}

#### Using function with `popperConfig`

```js
const tooltip = new coreui.Tooltip(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
```

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `show` | Manually displays the Bootstrap tooltip linked to an element. This method is non-blocking—it returns immediately, even though the tooltip will appear shortly after. If the tooltip’s title is empty, nothing will be shown. **Returns to the caller before the tooltip has actually been shown** (i.e. before the `shown.coreui.tooltip` event occurs) |
| `hide` | Hides the tooltip from view when triggered programmatically. Similar to `show`, this method is asynchronous and returns before the hiding animation finishes. **Returns to the caller before the tooltip has actually been hidden** (i.e. before the `hidden.coreui.tooltip` event occurs). |
| `toggle` | Programmatically shows or hides a tooltip based on its current visibility state. Like `show` and `hide`, this method executes immediately and the visual change happens afterward. **Returns to the caller before the tooltip has actually been shown or hidden** (i.e. before the `shown.coreui.tooltip` or `hidden.coreui.tooltip` event occurs). |
| `dispose` | Completely removes the tooltip instance from the target element. It clears event listeners and internal data. Tooltips created using delegation (e.g., via `selector`) cannot be destroyed on individual children. |
| `enable` | Gives an element’s tooltip the ability to be shown. All tooltips are enabled by default unless manually disabled. |
| `disable` | Disables the tooltip from being triggered. This includes both manual and automatic triggers until it's enabled again. |
| `setContent` | Dynamically changes the content of an existing tooltip without reinitializing the instance. Useful for updating text based on user action or application state. |
| `toggleEnabled` | Switches the ability for an element’s tooltip to be shown or hidden. |
| `update` | Recalculates and repositions the tooltip, ensuring correct alignment if the DOM has changed (e.g., due to scroll, resize, or dynamic layout updates). |
| `getInstance` | *Static* method that retrieves the current tooltip instance tied to a specific element. Returns `null` if the tooltip has not been initialized. |
| `getOrCreateInstance` | *Static* method that either returns the existing tooltip instance or initializes a new one if none exists. Ensures consistent behavior in dynamic interfaces. |

{{< /bs-table >}}

```js
const tooltip = coreui.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

// setContent example
tooltip.setContent({ '.tooltip-inner': 'another title' })

```

{{< callout info >}}
The `setContent` method accepts an `object` argument, where each property-key is a valid `string` selector within the popover template, and each related property-value can be `string` | `element` | `function` | `null`
{{< /callout >}}

### Events

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `show.coreui.tooltip` | Triggered right after the `show()` method is invoked. The tooltip is about to become visible, but hasn't been inserted into the DOM yet. You can use this event to perform actions before the tooltip is rendered. |
| `shown.coreui.tooltip` | Fired after the tooltip is fully visible and any CSS transitions (like fade) have completed. Useful for tracking when the user can actually see the Bootstrap tooltip. |
| `hide.coreui.tooltip` | Emitted immediately when the `hide()` method is called. At this point, the tooltip is still visible but is beginning the process of being hidden. |
| `hidden.coreui.tooltip` | Dispatched once the tooltip has been fully removed from view and CSS transitions (if any) have finished. Ideal for cleanup logic or analytics. |
| `inserted.coreui.tooltip` | Occurs after the tooltip has been injected into the DOM but before it becomes visible. This event gives you access to the generated tooltip element for advanced DOM manipulation. |
{{< /bs-table >}}


```js
const myTooltipEl = document.getElementById('myTooltip')
const tooltip = coreui.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('hidden.coreui.tooltip', () => {
  // do something...
})

tooltip.hide()
```

## Customizing

### CSS variables

Bootstrap tooltips utilize local CSS variables on `.tooltip` for improved real-time customization. The values for the CSS variables are configured via Sass, ensuring that Sass customization is still supported as well.

{{< scss-docs name="tooltip-css-vars" file="scss/_tooltip.scss" >}}

### SASS variables

{{< scss-docs name="tooltip-variables" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Tooltip" >}}
{{< /markdown >}}