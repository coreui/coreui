---
layout: docs
title: Introduction
description: CoreUI is the fastest way to build a modern dashboard for any platforms, browser, or device. A complete UI Kit that allows you to quickly build eye-catching, high-quality, high-performance responsive applications.
group: getting-started
aliases:
  - "/4.1/getting-started/"
  - "/getting-started/"
  - "/getting-started/"
toc: true
---

## CoreUI vs Bootstrap

CoreUI is fully compatible with Bootstrap, but it’s more than just a theme or UI extension — it’s a professionally developed and maintained system that addresses many of the limitations developers face with Bootstrap alone.

**Key differences between CoreUI and Bootstrap:**

* ✅ **Framework-native versions** – CoreUI offers official libraries for [React.js](https://coreui.io/react/), [Vue.js](https://coreui.io/vue/), and [Angular](https://coreui.io/angular/), while Bootstrap depends on third-party community plugins for framework integration.
* 👨‍💻 **Full-time maintained project** – CoreUI is not a community-only initiative. It’s developed by a dedicated, full-time team focused on long-term evolution and support.
* 📦 **More built-in components** – CoreUI includes many components not present in Bootstrap by default, such as range sliders, multi-selects, and step-based form wizards.
* 🛠️ **Sass Modules support today** – CoreUI already supports Sass Modules out of the box, a feature that Bootstrap plans to introduce in version 6.
* 🌍 **Modern RTL/LTR support** – CoreUI uses CSS logical properties to provide seamless RTL and LTR layout support for multilingual and internationalized apps.
* 🔒 **Long-Term Support (LTS)** – While Bootstrap 3 & 4 LTS is now a paid service via [HeroDevs](https://www.herodevs.com/support/nes-bootstrap?utm_source=Bootstrap_site&utm_medium=Banner&utm_campaign=v3and4_eol), CoreUI continues to offer long-term support without additional cost.

Whether you're starting a new project or migrating from Bootstrap, CoreUI gives you a powerful upgrade path with more features, framework bindings, and peace of mind for long-term maintainability.

## Quick start

Looking to quickly add CoreUI for Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the downloads page]({{< docsref "/getting-started/download" >}}).

CoreUI was created as an extension to Bootstrap, allowing it to be used both as a standalone library and as a replacement for the currently utilized Bootstrap in your project.

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every CoreUI for Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `coreui.bundle.js` and `coreui.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers. For more information about what's included in CoreUI, please see our [contents]({{< docsref "/getting-started/contents#precompiled-coreui" >}}) section.

```html
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

#### Modules

If you use `<script type="module">`, please refer to our [using CoreUI for Bootstrap as a module]({{< docsref "/getting-started/javascript#using-coreui-as-a-module" >}}) section.

#### Components

Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

<details>
<summary class="text-primary mb-3">Show components requiring JavaScript</summary>
{{< markdown >}}
- Accordions for extending our Collapse plugin
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Offcanvases for displaying, positioning, and scroll behavior
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Scrollspy for scroll behavior and navigation updates
{{< /markdown >}}
</details>

## Bootstrap Replacement

{{< added-in "5.0.0" >}}

If you're currently using Bootstrap in your project or want to maintain full compatibility with Bootstrap, check out how you can add CoreUI for Bootstrap to your project. CoreUI enhances Bootstrap projects by adding advanced components and features, offering a smooth upgrade with minimal adjustments. It retains Bootstrap's familiar structure while introducing new possibilities for UI development.

{{< bootstrap-compatibility >}}

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

```html
<link href="{{< param "cdn_themes.css_bs" >}}" rel="stylesheet" integrity="{{< param "cdn_themes.css_bs_hash" >}}" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every CoreUI for Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers.

```html
<script src="{{< param "cdn_themes.js_bs_bundle" >}}" integrity="{{< param "cdn_themes.js_bs_bundle_hash" >}}" crossorigin="anonymous"></script>
```

##### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn_themes.js_bs" >}}" integrity="{{< param "cdn_themes.js_bs_hash" >}}" crossorigin="anonymous"></script>
```

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI for Bootstrap CSS -->
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

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

For next steps, visit the [Layout docs]({{< docsref "/layout/grid" >}}) to start laying out your site's content and components.

## Important globals

CoreUI for Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

CoreUI for Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

CoreUI for Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog]({{< param blog >}}).
- Join [the official Community]({{< param community >}}).

You can also follow [@core_ui on Twitter](https://twitter.com/{{< param twitter >}}).
