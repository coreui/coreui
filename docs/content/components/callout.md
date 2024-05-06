---
layout: docs
title: Callout
description: Callouts provide presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.
group: components
toc: true
bootstrap: true
other_frameworks: callout
---

## Examples

Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required** contextual classes (e.g., `.callout-success`).
{{< example >}}
{{< callout.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="callout callout-{{ .name }}">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</div>{{- end -}}
{{< /callout.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Customizing

### CSS variables

Callouts use local CSS variables on `.callout` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="callout-css-vars" file="scss/_callout.scss" >}}

### SASS variables

{{< scss-docs name="callout-variables" file="scss/_variables.scss" >}}

#### Variants

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to customize these loops and extend CoreUI's base-modifier approach to your own code.

#### Modifiers

CoreUI's callout component is built with a base-modifier class approach. This means the bulk of the styling is contained to a base class `.callout` while style variations are confined to modifier classes (e.g., `.callout-danger`). These modifier classes are built from the `$callout-variants` map to make customizing the number and name of our modifier classes.

{{< scss-docs name="callout-modifiers" file="scss/_callout.scss" >}}

