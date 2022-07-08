---
layout: docs
title: Contents
description: Discover what's included in CoreUI, including our precompiled and source code flavors.
group: getting-started
toc: true
---

## Precompiled CoreUI

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
coreui/
├── css/
│   ├── coreui-grid.css
│   ├── coreui-grid.css.map
│   ├── coreui-grid.min.css
│   ├── coreui-grid.min.css.map
│   ├── coreui-grid.rtl.css
│   ├── coreui-grid.rtl.css.map
│   ├── coreui-grid.rtl.min.css
│   ├── coreui-grid.rtl.min.css.map
│   ├── coreui-reboot.css
│   ├── coreui-reboot.css.map
│   ├── coreui-reboot.min.css
│   ├── coreui-reboot.min.css.map
│   ├── coreui-reboot.rtl.css
│   ├── coreui-reboot.rtl.css.map
│   ├── coreui-reboot.rtl.min.css
│   ├── coreui-reboot.rtl.min.css.map
│   ├── coreui-utilities.css
│   ├── coreui-utilities.css.map
│   ├── coreui-utilities.min.css
│   ├── coreui-utilities.min.css.map
│   ├── coreui-utilities.rtl.css
│   ├── coreui-utilities.rtl.css.map
│   ├── coreui-utilities.rtl.min.css
│   ├── coreui-utilities.rtl.min.css.map
│   ├── coreui.css
│   ├── coreui.css.map
│   ├── coreui.min.css
│   ├── coreui.min.css.map
│   ├── coreui.rtl.css
│   ├── coreui.rtl.css.map
│   ├── coreui.rtl.min.css
│   └── coreui.rtl.min.css.map
└── js/
    ├── coreui.bundle.js
    ├── coreui.bundle.js.map
    ├── coreui.bundle.min.js
    ├── coreui.bundle.min.js.map
    ├── coreui.esm.js
    ├── coreui.esm.js.map
    ├── coreui.esm.min.js
    ├── coreui.esm.min.js.map
    ├── coreui.js
    ├── coreui.js.map
    ├── coreui.min.js
    └── coreui.min.js.map
```

This is the most basic form of CoreUI: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`coreui.*`), as well as compiled and minified CSS and JS (`coreui.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`coreui.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`coreui.bundle.js` and minified `coreui.bundle.min.js`) include [Popper](https://popper.js.org/).

## CSS files

CoreUI for Bootstrap includes a handful of options for including some or all of our compiled CSS.

<table class="table">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui.min.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui.rtl.min.css</code></div>
      </th>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-grid.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-grid.min.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-grid.rtl.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="{{< docsref "/layout/grid" >}}">Only grid system</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/utilities/flex" >}}">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-utilities.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-utilities.min.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-utilities.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-reboot.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-reboot.min.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-reboot.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/content/reboot" >}}">Only Reboot</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

<table class="table">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.bundle.js</code></div>
        <div><code class="fw-normal text-nowrap">coreui.bundle.min.js</code></div>
      </th>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.js</code></div>
        <div><code class="fw-normal text-nowrap">coreui.min.js</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## CoreUI source code

The CoreUI for Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
coreui/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └──content/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for packages, license information, and development.
