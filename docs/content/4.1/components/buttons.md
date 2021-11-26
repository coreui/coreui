---
layout: docs
title: Bootstrap buttons
description: Bootstrap button component for actions in tables, forms, cards, and more. CoreUI 4 for Bootstrap provides various styles, states, and size. Ready to use and easy to customize.
group: components
aliases:
  - "/components/button/"
  - "/components/buttons/"
  - "/components/bootstrap/button/"
toc: true
bootstrap: true
---

## Examples

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
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### With icons

You can combine button with our [CoreUI Icons](https://icons.coreui.io/).

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}"><span class="cil-contrast btn-icon mr-2"></span> {{ .name | title }}</button>
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

If you need a button, but without the strong background colors. Replace the default modifier classes with the `.btn-outline-*` ones to remove all background colors on any element with `.btn` class.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

## Ghost buttons

Use `.btn-ghost-*` class for ghost buttons.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-ghost-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
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

{{< callout warning >}}

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
<button type="button" class="btn btn-primary" data-coreui-toggle="button" autocomplete="off">Toggle button</button>
<button type="button" class="btn btn-primary active" data-coreui-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
<button type="button" class="btn btn-primary" disabled data-coreui-toggle="button" autocomplete="off">Disabled toggle button</button>
{{< /example >}}

{{< example >}}
<a href="#" class="btn btn-primary" role="button" data-coreui-toggle="button">Toggle link</a>
<a href="#" class="btn btn-primary active" role="button" data-coreui-toggle="button" aria-pressed="true">Active toggle link</a>
<a href="#" class="btn btn-primary disabled" tabindex="-1" aria-disabled="true" role="button" data-coreui-toggle="button">Disabled toggle link</a>
{{< /example >}}

### Methods

You can create a button instance with the button constructor, for example:

```js
var button = document.getElementById('myButton')
var cuiButton = new coreui.Button(button)
```

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>toggle</code>
      </td>
      <td>
        Toggles push state. Gives the button the appearance that it has been activated.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        Destroys an element's button. (Removes stored data on the DOM element)
      </td>
    </tr>
  </tbody>
</table>

For example, to toggle all buttons

```js
var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new coreui.Button(button)
  button.toggle()
})
```

## Customizing

### SASS

#### Variables

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

#### Variants

CoreUI allows defining variant colors in two ways.

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to customize these loops and extend CoreUI's base-modifier approach to your own code.

##### Manual

You can define each color manually and keep full control of the component appearance.

{{< highlight scss >}}
$button-variants: (
  "primary": (
    "background": $your-bg-color,
    "border": $your-border-color,
    "color": $your-color,
    "hover-background": $your-bg-hover-color,
    "hover-border": $your-hover-border-color,
    "hover-color": $your-hover-color,
    "active-background": $your-bg-active-color,
    "active-border": $your-active-border-color,
    "active-color": $your-active-color,
    "disabled-background": $your-bg-disabled-color,,
    "disabled-border": $your-disabled-border-color,
    "disabled-color": $your-disabled-color,
    "shadow": $your-shadow
  )
  ...
);
{{< /highlight >}}

##### Color function

The color set can be generated automatically thanks to our `button-color-map` function.

{{< scss-docs name="button-color-functions" file="scss/_functions.scss" >}}

{{< highlight scss >}}
$button-variants: (
  "primary": btn-color-map($primary),
  ...
);
{{< /highlight >}}

#### Modifiers

CoreUI's button component is built with a base-modifier class approach. This means the bulk of the styling is contained to a base class `.btn` while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$button-variants` map to make customizing the number and name of our modifier classes.
##### Default button
{{< scss-docs name="button-modifiers" file="scss/_buttons.scss" >}}
##### Outline button
{{< scss-docs name="button-outline-modifiers" file="scss/_buttons.scss" >}}

##### Ghost button
{{< scss-docs name="button-ghost-modifiers" file="scss/_buttons.scss" >}}

### CSS Vars
{{< css-vars-docs file="scss/_buttons.scss" >}}
