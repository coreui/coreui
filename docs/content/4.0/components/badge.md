---
layout: docs
title: Bootstrap badges
description: Bootstrap badge is small count and labeling components.
group: components
aliases:
  - "/components/badge/"
  - "/components/bootstrap/badge/"
toc: true
bootstrap: true
---

## Example

Bootstrap badge scale to suit the size of the parent element by using relative font sizing and `em` units.

{{< example >}}
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
{{< /example >}}

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>
{{< /example >}}

Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies.

Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

{{< example >}}
<button type="button" class="btn btn-primary">
  Profile <span class="badge bg-secondary">9</span>
  <span class="visually-hidden">unread messages</span>
</button>
{{< /example >}}

## Contextual variations

Add any of the below-mentioned classes to modify the presentation of a badge. Please note that when using Bootstrap's default `.bg-light`, you'll likely need a text color utility like `.text-dark` for proper styling. This is because background utilities do not set anything but `background-color`.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Pill badges

Apply the `.rounded-pill` modifier class to make badges rounded.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}{{ with .contrast_color }} text-{{ . }}{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

## Customizing

### SASS

#### Variables

{{< scss-docs name="badge-variables" file="scss/_variables.scss" >}}

### CSS Vars
{{< css-vars-docs file="scss/_badge.scss" >}}
