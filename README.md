<p align="center">
  <a href="https://coreui.io/">
    <img src="https://coreui.io/images/brand/coreui-signet.svg" alt="CoreUI logo" width="200">
  </a>
</p>

<h3 align="center">CoreUI</h3>

<p align="center">
  Open Source UI Components Library built on top of Bootstrap 5.
  <br>
  <a href="https://coreui.io/docs/"><strong>Explore CoreUI docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/coreui/coreui/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://blog.coreui.io/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coreui/coreui/archive/v4.1.5.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui.git`
- Install with [npm](https://www.npmjs.com/): `npm install @coreui/coreui`
- Install with [yarn](https://yarnpkg.com/): `yarn add @coreui/coreui`
- Install with [Composer](https://getcomposer.org/): `composer require coreui/coreui:4.0.5`

Read the [Getting started page](https://coreui.io/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.


## Status

[![Build Status](https://github.com/coreui/coreui/workflows/JS%20Tests/badge.svg?branch=main)](https://github.com/coreui/coreui/actions?query=workflow%3AJS+Tests+branch%3Amain)
[![npm version](https://img.shields.io/npm/v/@coreui/coreui)](https://www.npmjs.com/package/@coreui/coreui)
[![Packagist Prerelease](https://img.shields.io/packagist/vpre/coreui/coreui)](https://packagist.org/packages/coreui/coreui)
[![peerDependencies Status](https://img.shields.io/david/peer/coreui/coreui)](https://david-dm.org/coreui/coreui?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/coreui/coreui)](https://david-dm.org/coreui/coreui?type=dev)
[![Coverage Status](https://img.shields.io/coveralls/github/coreui/coreui/main)](https://coveralls.io/github/coreui/coreui?branch=main)
[![CSS gzip size](https://img.badgesize.io/coreui/coreui/main/dist/css/coreui.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/coreui/coreui/blob/main/dist/css/coreui.min.css)
[![CSS Brotli size](https://img.badgesize.io/coreui/coreui/main/dist/css/coreui.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/coreui/coreui/blob/main/dist/css/coreui.min.css)
[![JS gzip size](https://img.badgesize.io/coreui/coreui/main/dist/js/coreui.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/coreui/coreui/blob/main/dist/js/coreui.min.js)
[![JS Brotli size](https://img.badgesize.io/coreui/coreui/main/dist/js/coreui.min.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/coreui/coreui/blob/main/dist/js/coreui.min.js)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

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

We provide compiled CSS and JS (`coreui.*`), as well as compiled and minified CSS and JS (`coreui.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`coreui.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`coreui.bundle.js` and minified `coreui.bundle.min.js`) include [Popper](https://popper.js.org/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/coreui/coreui/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/coreui/coreui/issues/new).

## Documentation

The documentation for the CoreUI & CoreUI PRO is hosted at our website [CoreUI](https://coreui.io/)

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/coreui` directory, run `npm run docs-serve` in the command line.
4. Open `http://localhost:9001/` in your browser, and voilà.

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

### Documentation for previous releases

## Contributing

Please read through our [contributing guidelines](https://github.com/coreui/coreui/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/coreui/coreui/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://blog.coreui.io/).

You can also follow [@core_ui on Twitter](https://twitter.com/core_ui).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui/releases) for changelogs for each release version.


## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>


## Thanks
CoreUI is designed as the extension of [Bootstrap](https://getbootstrap.com). Special thanks for [Bootstrap team](https://getbootstrap.com/docs/5.0/about/team/) and [Bootstrap's contributors](https://github.com/twbs/bootstrap/graphs/contributors).

## Copyright and license

Copyright 2021 creativeLabs Łukasz Holeczek. Code released under the [MIT License](https://github.com/coreui/coreui/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
