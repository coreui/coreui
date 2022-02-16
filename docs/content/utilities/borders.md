---
layout: docs
title: Borders
description: Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
group: utilities
toc: true
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

{{< example class="docs-example-border-utils docs-example-border-utils-0" >}}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>
{{< /example >}}

## Border color

Change the border color using utilities built on our theme colors.

{{< example class="docs-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="border border-{{ .name }}"></span>
{{- end -}}
{{< /border.inline >}}
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

## Border-radius

Add classes to an element to easily round its corners.

{{< example class="docs-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /example >}}

### Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `3`, and can be configured by modifying the utilities API.

{{< example class="docs-example-rounded-utils" >}}
{{< placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" >}}
{{< placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" >}}
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

### Mixins

{{< scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### Utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}
