---
layout: docs
title: Buttons
description: Bootstrap button component for actions in tables, forms, cards, and more. CoreUI for Bootstrap provides various styles, states, and size. Ready to use and easy to customize.
group: components
aliases:
  - "/components/button/"
  - "/components/bootstrap/button/"
toc: true
bootstrap: true
other_frameworks: button
---

## Base class

CoreUI has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, and lack any explicit focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

{{< callout warning >}}
If you are using the `.btn` class on its own, remember to at least define some explicit `:focus` and/or `:focus-visible` styles.
{{< /callout >}}

## Variants

CoreUI includes a bunch of predefined Bootstrap buttons, each serving its own semantic purpose. CoreUI also offers some unique buttons styles.

Buttons show what action will happen when the user clicks or touches it. Bootstrap buttons are used to initialize operations, both in the background or foreground of an experience.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### With icons

You can combine button with our [CoreUI Icons](https://icons.coreui.io/).

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}"><span class="cil-contrast"></span> {{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button tags

The `.btn` classes are designed for `<button>` ,  `<a>`  or  `<input>` elements (though some browsers may apply a slightly different rendering).

If you're using `.btn` classes on `<a>` elements that are used to trigger functionality ex. collapsing content,  these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

{{< example >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

### Base outline style: `.btn-outline`

The `.btn-outline` class provides a neutral outline button style without any color modifiers. It’s useful as a foundation for minimal buttons without background color or strong visual emphasis.

{{< example >}}
<button type="button" class="btn btn-outline">Base outline button</button>
<button type="button" class="btn btn-outline active">Active state</button>
<button type="button" class="btn btn-outline" disabled>Disabled state</button>
{{< /example >}}

These buttons use a transparent background, subtle border, and inherit text color from the parent context. They’re best suited for minimalist UI elements like modals, toolbars, or secondary actions.

### Themed outline variants: `.btn-outline-*`

If you need a button, but without the strong background colors. Replace the default modifier classes with the `.btn-outline-*` ones to remove all background colors on any element with `.btn` class.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

These outline variant buttons retain transparent backgrounds by default, but display a subtle background tint on hover or focus to indicate interactivity. They're ideal for secondary actions when you want to visually differentiate from solid `.btn-*` buttons.

{{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

## Ghost buttons

### Base ghost style: `.btn-ghost`

Use the `.btn-ghost` class to create ultra-minimalist buttons with no borders and a fully transparent background. These buttons rely solely on text color for visibility and apply a subtle background highlight on hover or active states.

They’re perfect for interfaces where you want buttons to be present but visually unobtrusive—such as action buttons in modals, cards, or toolbars.

{{< example >}}
<button type="button" class="btn btn-ghost">Base ghost button</button>
<button type="button" class="btn btn-ghost active">Active state</button>
<button type="button" class="btn btn-ghost" disabled>Disabled state</button>
{{< /example >}}

### Themed ghost variants: `.btn-ghost-*`

To apply theme colors to ghost buttons, use `.btn-ghost-*` classes. These variants color only the text by default. On hover or focus, they add a faint background tint corresponding to the theme color.

{{< example >}}
<button type="button" class="btn btn-ghost-primary">Primary</button>
<button type="button" class="btn btn-ghost-secondary">Secondary</button>
<button type="button" class="btn btn-ghost-success">Success</button>
<button type="button" class="btn btn-ghost-danger">Danger</button>
<button type="button" class="btn btn-ghost-warning">Warning</button>
<button type="button" class="btn btn-ghost-info">Info</button>
{{< /example >}}

## Sizes

Larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}
<button type="button" class="btn btn-primary"
        style="--cui-btn-padding-y: .25rem; --cui-btn-padding-x: .5rem; --cui-btn-font-size: .75rem;">
  Custom button
</button>
{{< /example >}}


## Shapes

### Pill buttons

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }} rounded-pill">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

<div class="pro-component"></div>

### Square buttons

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }} rounded-0">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}



## Disabled state

Add the `disabled` boolean attribute to any `<button>` element to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

{{< example >}}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{{< /example >}}

Disabled buttons using the `<a>` element act a little different:

`<a>`s don't support the `disabled` attribute, so you have to add `.disabled` class to make buttons look inactive. The disabled bootstrap button must have the `aria-disabled="true"` attribute to show the state of the element to assistive technologies.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Toggle states

Add `data-coreui-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.

{{< example >}}
<p class="d-inline-flex gap-1">
  <button type="button" class="btn" data-coreui-toggle="button">Toggle button</button>
  <button type="button" class="btn active" data-coreui-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn" disabled data-coreui-toggle="button">Disabled toggle button</button>
</p>
<p class="d-inline-flex gap-1">
  <button type="button" class="btn btn-primary" data-coreui-toggle="button">Toggle button</button>
  <button type="button" class="btn btn-primary active" data-coreui-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn btn-primary" disabled data-coreui-toggle="button">Disabled toggle button</button>
</p>
{{< /example >}}

{{< example >}}
<p class="d-inline-flex gap-1">
  <a href="#" class="btn" role="button" data-coreui-toggle="button">Toggle link</a>
  <a href="#" class="btn active" role="button" data-coreui-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn disabled" aria-disabled="true" role="button" data-coreui-toggle="button">Disabled toggle link</a>
</p>
<p class="d-inline-flex gap-1">
  <a href="#" class="btn btn-primary" role="button" data-coreui-toggle="button">Toggle link</a>
  <a href="#" class="btn btn-primary active" role="button" data-coreui-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-coreui-toggle="button">Disabled toggle link</a>
</p>
{{< /example >}}

### Methods

You can create a button instance with the button constructor, for example:

```js
const bsButton = new coreui.Button('#myButton')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated to a DOM element, you can use it like this: `coreui.Button.getInstance(element)`|
| `getOrCreateInstance` | Static method which returns a button instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Button.getOrCreateInstance(element)` |
{{< /bs-table >}}

For example, to toggle all buttons

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = coreui.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

## Customizing

### CSS variables

Buttons use local CSS variables on `.btn` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="btn-css-vars" file="scss/_buttons.scss" >}}

Each `.btn-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `button-variant()`, `button-outline-variant()`, and `button-size()` mixins.

Here's an example of building a custom `.btn-*` modifier class like we do for the buttons unique to our docs by reassigning Bootstrap's CSS variables with a mixture of our own CSS and Sass variables.

<div class="docs-example">
  <button type="button" class="btn btn-cd-primary">Custom button</button>
</div>

{{< scss-docs name="btn-css-vars-example" file="docs/assets/scss/_buttons.scss" >}}

### SASS variables

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### SASS mixins

CoreUI's button component is built with a base-modifier class approach. This means the bulk of the styling is contained to a base class `.btn` while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$button-variants` map to make customizing the number and name of our modifier classes.

There are three mixins for buttons: button and button outline variant mixins, plus a button size mixin.

{{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-ghost-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}}

### SASS loops

Button variants (for regular and outline buttons) use their respective mixins with our `$theme-colors` map to generate the modifier classes in `scss/_buttons.scss`.

{{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Button" >}}
{{< /markdown >}}