# CoreUI [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%20Bootstrap%204%20Admin%20Template%20&url=https://coreui.io&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)

Please help us on [Product Hunt](https://www.producthunt.com/posts/coreui-open-source-bootstrap-4-admin-template-with-angular-2-react-js-vue-js-support) and [Designer News](https://www.designernews.co/stories/81127). Thanks in advance!

Curious why I decided to create CoreUI? Please read this article: [Jack of all trades, master of none. Why Bootstrap Admin Templates suck.](https://medium.com/@lukaszholeczek/jack-of-all-trades-master-of-none-5ea53ef8a1f#.7eqx1bcd8)

CoreUI is an Open Source UI Kit built on top of Bootstrap 4. CoreUI is the fastest way to build modern dashboard for any platforms, browser or device. A complete Dashboard and WebApp UI Kit that allows you to quickly build eye-catching, high-quality, high-performance responsive applications using your framework of choice.

## Table of Contents

* [Templates](#templates)
* [Installation](#installation)
* [Usage](#usage)
* [What's included](#whats-included)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [Versioning](#versioning)
* [Creators](#creators)
* [Community](#community)
* [License](#license)
* [Support CoreUI Development](#support-coreui-development)

## Templates

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/free-bootstrap-admin-template)
* 💪  [CoreUI Pro Bootstrap Admin Template](https://coreui.io/pro/)

## Installation

Several options are available:

### Clone repo

``` bash
$ git clone https://github.com/coreui/coreui.git
```

### NPM

``` bash
$ npm install @coreui/core --save
```

### Yarn

``` bash
$ yarn add @coreui/core@2.0.0
```

### Composer

``` bash
$ composer require coreui/coreui:2.0.0
```

## Usage

``` bash
# serve with hot reload at localhost:3000.
$ npm run watch

# build for production with minification
$ npm run build
```

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

``` html
<link rel="stylesheet" href="node_modules/@coreui/core/dist/css/coreui.min.css">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require [jQuery](https://jquery.com), [Popper.js](https://popper.js.org/), and our own JavaScript plugins. Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.

We use [jQuery's slim build](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/), but the full version is also supported.

``` html
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="node_modules/@coreui/core/dist/js/coreui.min.js"></script>
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
coreui/
├── build/
├── dist/
├── js/
└── scss/
```

## Documentation

The documentation for the CoreUI Free Bootstrap Admin Template is hosted at our website [CoreUI](https://coreui.io/)

## Contributing

Please read through our [contributing guidelines](https://github.com/coreui/coreui/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/coreui/coreui/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility,CoreUI Free Admin Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@coreuikit on Twitter](https://twitter.com/coreuikit).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).

## Copyright and license

copyright 2018 creativeLabs Łukasz Holeczek. Code released under [the MIT license](https://github.com/coreui/coreui/blob/master/LICENSE).
There is only one limitation you can't can’t re-distribute the CoreUI as stock. You can’t do this if you modify the CoreUI. In past we faced some problems with persons who tried to sell CoreUI based templates.

## Support CoreUI Development

CoreUI is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by donating on [PayPal](https://www.paypal.me/holeczek), buying [CoreUI Pro Version](https://coreui.io/pro) or buying one of our [premium admin templates](https://genesisui.com/?support=1).

As of now I am exploring the possibility of working on CoreUI fulltime - if you are a business that is building core products using CoreUI, I am also open to conversations regarding custom sponsorship / consulting arrangements. Get in touch on [Twitter](https://twitter.com/lukaszholeczek).
