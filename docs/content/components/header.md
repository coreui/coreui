---
layout: docs
title: Header
description: Documentation and examples for CoreUI's powerful, responsive header. Includes support for branding, navigation, and more.
group: components
toc: true
bootstrap: true
other_frameworks: header
---

<style>
.cd-example .header:not(:last-child) {
  margin-bottom: 20px;
}
</style>

## How it works

Here's what you need to know before getting started with the header component:

- Headers and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Use our [spacing]({{< docsref "/utilities/spacing" >}}) and [flex]({{< docsref "/utilities/flex" >}}) utility classes for controlling spacing and alignment within headers.
- Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Headers are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.header`. See the [display]({{< docsref "/utilities/display" >}}) utility class.
- Ensure accessibility by using a `<header>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every header to explicitly identify it as a landmark region for users of assistive technologies.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

Read on for an example and list of supported sub-components.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.header-brand` for your company, product, or project name.
- `.header-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.header-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- `.header-text` for adding vertically centered strings of text.

Here's an example of all the sub-components included in a responsive header.

{{< example >}}
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24" class="d-inline-block align-top" alt="CoreUI Logo">
    CoreUI
  </a>
  <button class="header-toggler" type="button">
    <span class="header-toggler-icon"></span>
  </button>
  <ul class="header-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="headerDropdown" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="headerDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
{{< /example >}}

This example uses [color]({{< docsref "/utilities/colors" >}}) (`bg-light`) and [spacing]({{< docsref "/utilities/spacing" >}}) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) utility classes.

### Brand

The `.header-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.

{{< example >}}
<!-- As a link -->
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
</header>

<!-- As a heading -->
<header class="header">
  <span class="header-brand mb-0 h1">Header</span>
</header>
{{< /example >}}

Adding images to the `.header-brand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

{{< example >}}
<!-- Just an image -->
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24" alt="CoreUI Logo">
  </a>
</header>
{{< /example >}}

{{< example >}}
<!-- Image and text -->
<header class="header">
  <a class="header-brand" href="#">
    <img src="/assets/brand/coreui-signet.svg" alt="" width="22" height="24" class="d-inline-block align-top" alt="CoreUI Logo">
    CoreUI
  </a>
</header>
{{< /example >}}

### Nav

Header navigation links build on our `.header-nav`.

Active states—with `.active`—to indicate the current page can be applied directly to `.nav-link`s or their immediate parent `.nav-item`s.

{{< example >}}
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <ul class="header-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
</header>
{{< /example >}}

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

{{< example >}}
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <div class="header-nav">
    <a class="nav-item nav-link active" href="#">Home <span class="visually-hidden">(current)</span></a>
    <a class="nav-item nav-link" href="#">Features</a>
    <a class="nav-item nav-link" href="#">Pricing</a>
    <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </div>
</header>
{{< /example >}}

You may also utilize dropdowns in your header nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

{{< example >}}
<header class="header">
  <a class="header-brand" href="#">CoreUI</a>
  <ul class="header-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="headerDropdownMenuLink" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
        Dropdown link
      </a>
      <div class="dropdown-menu" aria-labelledby="headerDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  </ul>
</header>
{{< /example >}}

### Forms

Place various form controls and components within a header with `.d-flex`.

{{< example >}}
<header class="header">
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
{{< /example >}}

Immediate children elements in `.header` use flex layout and will default to `justify-content: between`. Use additional [flex utilities]({{< docsref "/utilities/flex" >}}) as needed to adjust this behavior.

{{< example >}}
<header class="header">
  <a class="header-brand">Header</a>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>
{{< /example >}}

Input groups work, too:

{{< example >}}
<header class="header">
  <form class="d-flex">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</header>
{{< /example >}}

Various buttons are supported as part of these header forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

{{< example >}}
<header class="header">
  <form class="d-flex">
    <button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</header>
{{< /example >}}

### Text

Headers may contain bits of text with the help of `.header-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

{{< example >}}
<header class="header">
  <span class="header-text">
    Header text with an inline element
  </span>
</header>
{{< /example >}}

## Containers

Although it's not required, you can wrap a header in a `.container` to center it on a page or add one within to only center the contents of a [fixed or static top header](#placement).

{{< example >}}
<div class="container">
  <header class="header">
    <a class="header-brand" href="#">CoreUI</a>
  </header>
</div>
{{< /example >}}

When the container is within your header, its horizontal padding is removed at breakpoints lower than your specified `.header-expand{-sm|-md|-lg|-xl}` class. This ensures we're not doubling up on padding unnecessarily on lower viewports when your header is collapsed.

{{< example >}}
<header class="header">
  <div class="container">
    <a class="header-brand" href="#">CoreUI</a>
  </div>
</header>
{{< /example >}}

## Customizing

### CSS variables

Headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="header-css-vars" file="scss/_header.scss" >}}

### SASS variables

{{< scss-docs name="header-variables" file="scss/_variables.scss" >}}
