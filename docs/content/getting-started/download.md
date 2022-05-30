---
layout: docs
title: Download
description: Download CoreUI for Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **CoreUI for Bootstrap v{{< param current_version >}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< docsref "/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins (see [JS files comparison]({{< docsref "/getting-started/contents#js-files" >}}))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a>

## Source files

Compile CoreUI for Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) ([available as an online tool](https://goonlinetools.com/autoprefixer/)) for CSS vendor prefixing

Should you require [build tools]({{< docsref "/getting-started/build-tools#tooling-setup" >}}), they are included for developing CoreUI for Bootstrap and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param "download.source" >}}" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of CoreUI's compiled CSS and JS to your project.

```html
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

If you're using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

## Package managers

Pull in CoreUI's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, CoreUI for Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install CoreUI for Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/@coreui/coreui):

```sh
npm install coreui
```

`const coreui = require('@coreui/coreui')` or `import coreui from '@coreui/coreui'` will load all of CoreUI's plugins onto a `coreui` object.
The `coreui` module itself exports all of our plugins. You can manually load CoreUI's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

CoreUI's `package.json` contains some additional metadata under the following keys:

- `sass` - path to CoreUI's main [Sass](https://sass-lang.com/) source file
- `style` - path to CoreUI's non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install CoreUI in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/@coreui/coreui):

```sh
yarn add @coreui/coreui
```
<!--
### RubyGems

Install CoreUI for Bootstrap in your Ruby apps using [Bundler](https://bundler.io/) (**recommended**) and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html):

```ruby
gem 'bootstrap', '~> {{< param current_ruby_version >}}'
```

Alternatively, if you're not using Bundler, you can install the gem by running this command:

```sh
gem install bootstrap -v {{< param current_ruby_version >}}
```

[See the gem's README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md) for further details. -->

### Composer

You can also install and manage CoreUI's Sass and JavaScript using [Composer](https://getcomposer.org/):

```sh
composer require coreui/coreui:{{< param current_version >}}
```

<!-- ### NuGet

If you develop in .NET, you can also install and manage Bootstrap's [CSS](https://www.nuget.org/packages/bootstrap/) or [Sass](https://www.nuget.org/packages/coreui.sass/) and JavaScript using [NuGet](https://www.nuget.org/):

```powershell
Install-Package bootstrap
```

```powershell
Install-Package coreui.sass
``` -->
