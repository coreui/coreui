---
layout: docs
title: Placeholders
description: Use loading placeholders for your components or pages to indicate something may still be loading.
group: components
toc: true
added: "5.1"
bootstrap: true
other_frameworks: placeholder
---

## About

Bootstrap placeholders can enhance your application's user experience. They're built exclusively with HTML and CSS, so you don't need any JavaScript to create them. However, you'll require some custom JavaScript to toggle their visibility. Their appearance, color, and size can be easily customized using our utility classes.

## Example

In the example below, we use the Bootstrap card component and modify it with placeholders to form a "loading card." The size and proportions remain consistent between the two.
<div class="docs-example docs-example-placeholder-cards d-flex justify-content-around">
<div class="card">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" background="#20c997" >}}
  <div class="card-body">
    <h5 class="card-title">Bootstrap card title</h5>
    <p class="card-text">Some brief example text to expand on the card title and form most of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  {{< placeholder width="100%" height="180" class="card-img-top" text="false" >}}
  <div class="card-body">
    <div class="h5 card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </div>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
</div>

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Bootstrap card title</h5>
    <p class="card-text">Some brief example text to expand on the card title and form most of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
```

## How it works

Create placeholders using the `.placeholder` class along with a grid column class (e.g., `.col-6`) to define the `width`. These placeholders can either replace text inside an element or be added as a modifier class to an existing component.

To ensure the `height` is maintained, we style `.btn`s with `::before`. This pattern can be expanded for other cases or a `&nbsp;` can be added inside the element to match the height when actual text appears.


{{< example >}}
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
{{< /example >}}

{{< callout info >}}
Using `aria-hidden="true"` simply tells screen readers to ignore the element. The actual *loading* behavior of the placeholder depends on how authors implement and style the placeholder, as well as how they update it. Some JavaScript may be necessary to *toggle* the placeholder's state and notify AT users of the change.
{{< /callout >}}

### Width

You can adjust the `width` using grid column classes, width utilities, or inline styles.

{{< example >}}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
{{< /example >}}

### Color

By default, the `placeholder` uses `currentColor`, but this can be replaced with a custom color or utility class.

{{< example >}}
<span class="placeholder col-12"></span>
{{< placeholders.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="placeholder col-12 bg-{{ .name }}"></span>
{{- end -}}
{{< /placeholders.inline >}}
{{< /example >}}

### Sizing

The size of `.placeholder`s depends on the typographic style of the parent element. Customize them with size modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

{{< example >}}
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
{{< /example >}}

### Animation

Animate Bootstrap placeholders using `.placeholder-glow` or `.placeholder-wave` to visually suggest that content is _actively_ loading.

{{< example >}}
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>
{{< /example >}}

## Customization

### SASS variables

{{< scss-docs name="placeholders" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Placeholder" >}}
{{< /markdown >}}