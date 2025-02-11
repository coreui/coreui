---
layout: docs
title: RTL
description: Learn how to enable support for right-to-left text in CoreUI for Bootstrap across our layout, components, and utilities.
group: getting-started
toc: true
---

## Get familiar

We recommend getting familiar with CoreUI for Bootstrap first by reading through our [Getting Started Introduction page]({{< docsref "/getting-started/introduction" >}}). Once you've run through it, continue reading here for how to enable RTL.

## Required HTML

There are two strict requirements for enabling RTL in Bootstrap-powered pages.

1. Set `dir="rtl"` on the `<html>` element.
2. Add an appropriate `lang` attribute, like `lang="ar"`, on the `<html>` element.

From there, you'll need to include an RTL version of our CSS. For example, here's the stylesheet for our compiled and minified CSS with RTL enabled:

```html
<link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">
```

### Starter template

You can see the above requirements reflected in this modified RTL starter template.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI for Bootstrap CSS -->
    <link rel="stylesheet" href="{{< param "cdn.css_rtl" >}}" integrity="{{< param "cdn.css_rtl_hash" >}}" crossorigin="anonymous">

    <title>مرحبا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: CoreUI for Bootstrap Bundle with Popper -->
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and CoreUI for Bootstrap JS -->
    <!--
    <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

## Approach

Our approach to building RTL support into CoreUI comes with two important decisions that impact how we write and use our CSS:

1. **First, as in CoreUI 3 we decided to build it with our own mixins** This gives us full control and allows us to generate LTR and RTL separately, or if needed one stylesheet with both versions without any style's duplicates.

2. **Second, in CoreUI 3 we introduced a handful of directional classes ex. `mfs-auto`,  but in CoreUI 4 we've simplified them ex. `ms-auto`, and renamed all directional classes to adopt a logical properties approach.** Most of you have already interacted with logical properties thanks to our flex utilities—they replace direction properties like `left` and `right` in favor `start` and `end`. That makes the class names and values appropriate for LTR and RTL without any overhead.

  For example, instead of `.ml-3` for `margin-left`, use `.ms-3`.

Working with RTL, through our source Sass or compiled CSS, shouldn't be much different from our default LTR though.

## Customize from source

When it comes to [customization]({{< docsref "/customize/sass" >}}), the preferred way is to take advantage of variables, maps, and mixins.
<!-- TODO: find solution ### Alternative font stack

In the case you're using a custom font, be aware that not all fonts support the non-Latin alphabet. To switch from Pan-European to Arabic family, you may need to use `/*rtl:insert: {value}*/` in your font stack to modify the names of font families.

For example, to switch from `Helvetica Neue Webfont` for LTR to `Helvetica Neue Arabic` for RTL, your Sass code look like this:

```scss
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
``` -->

### LTR and RTL at the same time

Need both LTR and RTL on the same page? All you have to do is set following variables:

{{< callout-dart-sass-modules >}}

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: true,
  $enable-rtl: true
);
```

{{< callout-dart-sass-deprecations >}}

```scss
$enable-ltr: true;
$enable-rtl: true;

@import "../node_modules/@coreui/coreui/scss/coreui";
```


After running Sass, each selector in your CSS files will be prepended by `html:not([dir=rtl])`, and `*[dir=rtl]` for RTL files. Now you're able to use both files on the same page.

### RTL only

By default LTR is enable and RTL is disable, but you can easily change it and use only RTL.

{{< callout-dart-sass-modules >}}

```scss
@use "@coreui/coreui/scss/coreui" with (
  $enable-ltr: false,
  $enable-rtl: true
);
```

{{< callout-dart-sass-deprecations >}}

```scss
$enable-ltr: false;
$enable-rtl: true;

@import "../node_modules/@coreui/coreui/scss/coreui";
```

## Additional resources

- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
