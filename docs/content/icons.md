---
layout: docs
title: CoreUI Icons
description: CoreUI Icons is an open-source icon set with more than 500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app.
group: icons
toc: true
---

<style>
  .cd-example i {
    font-size: 2rem;
  }
</style>

## Installation

### NPM

```sh
npm install @coreui/icons --save
```

### Yarn

```sh
yarn add @coreui/icons
```

Or, you can also clone or [download this repository](https://github.com/coreui/coreui-icons/archive/main.zip) as zip.


## Usage

### Basic Use

You can place CoreUI Icons just about anywhere using a CSS style prefix and the icon’s name. CoreUI Icons are designed to be used with inline elements ex. `<i>` or `<span>`.

Please use `cil-` prefix for linear icons, `cib-` prefix for brand icons, and `cif-` prefix for flag icons.

{{< example >}}
<i class="cil-paperclip icon icon-xxl"></i>
<i class="cil-tag icon icon-xxl"></i>
{{< /example >}}

### SVG Sprites

SVG sprites let you quickly use vector icons in your website. We have prepared all the icon set styles into their own SVG sprites.

Place sprite files with the rest of your static files, like images and styles, in your project. Make sure to add a proper path to the SVG sprite file, and use the fragment identifier specific to the SVG icon or symbol you want to display.

```html
<svg>
  <use xlink:href="path/to/free.svg#cil-airplane-mode"></use>
</svg>
<svg>
  <use xlink:href="path/to/brand.svg#cib-twitter"></use>
</svg>
<svg>
  <use xlink:href="path/to/flag.svg#cif-us"></use>
</svg>
```


### SVG Symbols

When you download your icon set, it comes with a symbols directory that contains SVG icon definitions. These icons can be referenced and used as inline SVGs like so:

```html
<!-- Define the symbols -->
<symbol id="cil-apple" viewBox="0 0 24 24">
<title>apple</title>
<path d="M21.207 9.987c-0.497-1.275-1.29-2.262-2.293-2.863-0.25 0.477-0.524 0.888-0.835 1.267l0.010-0.013c0.002 0.001 0.004 0.002 0.005 0.003 1.494 0.859 2.364 3.054 2.114 5.338-0.414 3.784-1.563 6.377-3.236 7.302-1.087 0.601-2.444 0.516-4.031-0.254l-0.155-0.075h-1.143l-0.155 0.075c-1.588 0.77-2.944 0.856-4.031 0.254-1.673-0.925-2.822-3.518-3.236-7.302-0.25-2.284 0.619-4.479 2.114-5.338 0.445-0.259 0.979-0.411 1.549-0.411 0.011 0 0.023 0 0.034 0l-0.002-0c1.132 0 2.436 0.53 3.853 1.578l0.051 0.037s2.043-0.248 2.852-0.616c2.439-1.107 2.976-2.867 3.072-3.106 0.262-0.632 0.414-1.366 0.414-2.135 0-0.813-0.17-1.587-0.476-2.287l0.014 0.037-0.191-0.477-0.513 0.005c-3.151 0.036-5.692 2.598-5.692 5.755 0 0.255 0.017 0.507 0.049 0.754l-0.003-0.029c-0.886-0.496-1.747-0.813-2.573-0.944-1.169-0.186-2.241-0.005-3.186 0.538-1.038 0.596-1.855 1.601-2.364 2.906-0.463 1.186-0.638 2.57-0.493 3.895 0.475 4.344 1.859 7.267 4.001 8.452 0.655 0.37 1.438 0.588 2.272 0.588 0.010 0 0.021-0 0.031-0h-0.002c0.918-0 1.904-0.244 2.952-0.73h0.461c1.987 0.923 3.754 0.971 5.253 0.142 2.142-1.185 3.526-4.107 4.001-8.452 0.145-1.325-0.030-2.709-0.493-3.895zM15.376 2.851c0.322-0.143 0.697-0.251 1.088-0.305l0.022-0.003c0.106 0.354 0.167 0.761 0.167 1.182 0 2.15-1.593 3.927-3.663 4.215l-0.022 0.003c-0.106-0.354-0.167-0.76-0.167-1.181 0-1.743 1.048-3.242 2.547-3.901l0.027-0.011z"></path>
</symbol>

<!-- Use the defined symbols -->
<svg>
  <use xlink:href="#cil-apple"></use>
</svg>
```

It is also possible to link to an external SVG containing the definitions:

```html
<svg class="c-icon">
  <use xlink:href="path/to/free-symbol-defs.svg#cil-apple"></use>
</svg>
```

Referencing an external SVG has the advantage that your icons get cached, with one HTTP request. But the external SVG and the HTML should be served from the same domain. This approach works fine in modern browsers except for IE 9+. In order to support IE 9+, You should use `/js/svgxuse.js` or `/js/svgxuse.min.js`. This polyfill detects if the icons are loaded properly; if they aren't, it sends one HTTP request to fetch and cache symbol definitions.

## CoreUI Icons PRO

If our free icon set is insufficient you can buy [CoreUI Icons Pro](https://coreui.io/icons/#pricing-new) with more than 4000 icons, and more styles - Solid, Duo-Tone and Linear.
