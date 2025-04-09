---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
toc: true
bootstrap: true
---

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

{{< example class="docs-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /example >}}

### Subtractive

Or remove borders:

{{< example class="docs-example-border-utils" >}}
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
{{< /example >}}

## Color

Change the border color using utilities built on our theme colors.

{{< example class="docs-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
<span class="border border-{{ .name }}-subtle"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-black"></span>
<span class="border border-white"></span>
{{< /example >}}

Using utilities you can change the border on one side only, or you can change all borders to make them different colors.

{{< example class="docs-example-border-utils" >}}
<span class="border-top border-top-primary"></span>
<span class="border-end border-end-primary"></span>
<span class="border-bottom border-bottom-primary"></span>
<span class="border-start border-start-primary"></span>
<span class="border-start border-start-primary border-end border-end-danger"></span>
<span class="border-top border-top-primary border-end border-end-danger border-bottom border-bottom-success"></span>
<span class="border border-top-primary border-end-danger border-bottom-success border-start-info"></span>
{{< /example >}}

## Border-width
Or modify the default `border-color` of a component:

{{< example >}}
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
{{< /example >}}

## Opacity

{{< added-in "4.2.6" >}}

Bootstrap `border-{color}` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.border-success` utility.

```css
.border-success {
  --cui-border-opacity: 1;
  border-color: rgba(var(--cui-success-rgb), var(--cui-border-opacity)) !important;
}
```

We use an RGB version of our `--cui-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--cui-border-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.border-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.border-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--cui-border-opacity` via custom styles or inline styles.

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="--cui-border-opacity: .5;">This is 50% opacity success border</div>
{{< /example >}}

Or, choose from any of the `.border-opacity` utilities:

{{< example >}}
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
{{< /example >}}

## Width

{{< example class="docs-example-border-utils" >}}
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>

<span class="border border-1 border-info"></span>
<span class="border border-2 border-info"></span>
<span class="border border-3 border-info"></span>
<span class="border border-4 border-info"></span>
<span class="border border-5 border-info"></span>

<span class="border-start border-start-1"></span>
<span class="border-start border-start-2"></span>
<span class="border-start border-start-3"></span>
<span class="border-start border-start-4"></span>
<span class="border-start border-start-5"></span>

<span class="border-start border-start-1 border-start-info"></span>
<span class="border-start border-start-2 border-start-info"></span>
<span class="border-start border-start-3 border-start-info"></span>
<span class="border-start border-start-4 border-start-info"></span>
<span class="border-start border-start-5 border-start-info"></span>
{{< /example >}}

## Radius

Add classes to an element to easily round its corners.

{{< example class="docs-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< /example >}}

{{< example class="docs-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-bottom-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start-2" title="Example default left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" >}}
{{< placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" >}}
{{< placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="Example extra large bottom rounded image" >}}
{{< /example >}}

### Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `5` including `circle` and `pill`, and can be configured by modifying the utilities API.

{{< example class="docs-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-4" title="Example larger rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-5" title="Example extra large rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}

{{< /example >}}

## Customizing

### CSS variables

{{< scss-docs name="root-border-var" file="scss/_root.scss" >}}

### Sass variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

### Sass mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}
