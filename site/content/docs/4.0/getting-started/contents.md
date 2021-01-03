---
layout: docs
title: Contents
description: Discover what's included in Bootstrap, including our precompiled and source code flavors.
group: getting-started
toc: true
---

## Precompiled Bootstrap

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
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

This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`coreui.*`), as well as compiled and minified CSS and JS (`coreui.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`coreui.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`coreui.bundle.js` and minified `coreui.bundle.min.js`) include [Popper](https://popper.js.org/).

## CSS files

Bootstrap includes a handful of options for including some or all of our compiled CSS.

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
        <div><code class="fw-normal text-nowrap">bootstrap-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-grid.rtl.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="{{< docsref "/layout/grid" >}}">Only grid system</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/utilities/flex" >}}">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-utilities.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.min.css</code></div>
        <div><code class="fw-normal text-nowrap">bootstrap-reboot.rtl.min.css</code></div>
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

## Bootstrap source code

The Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── 5.0/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of Bootstrap usage. Beyond that, any other included file provides support for packages, license information, and development.
