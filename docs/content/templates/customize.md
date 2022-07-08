---
layout: docs
title: Customize
description: Learn how to theme, customize, and extend CoreUI Bootstrap Templates with Sass, a boatload of global options.
group: template
toc: true
---

## Overview

There are multiple ways to customize CoreUI for Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of CoreUI for Bootstrap you're using, browser support, and more.

Our two preferred methods are:

1. You can extend our source files.
2. You can override CoreUI’s styles.

## File structure

Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.

Whenever possible, avoid modifying CoreUI's core files. For Sass, that means creating your own stylesheet that imports CoreUI for Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a file structure that looks like this:

```text
your-project/
├── ...
├── node_modules/
│   └── @coreui/coreui
│       ├── js
│       └── scss
├── src
│   └── scss
│       ├── _custom.scss
│       ├── ...
│       ├── _variables.scss
│       └── ...
└── ...
```

## Variable defaults

Every Sass variable in CoreUI for Bootstrap includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying CoreUI's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values in CoreUI.

You will find the complete list of CoreUI's variables in `node_modules/@coreui/coreui/scss/_variables.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration. You can also find a specific component variables list in **Customizing** section ex. [Alerts - Customizing]({{< docsref "/components/alerts#customizing" >}})

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling CoreUI for Bootstrap via npm:

```scss
// _variables.scss

// Default variable overrides
$body-bg: #000;
$body-color: #111;
```

## Custom styles and overrides

In your `custom.scss`, you can put custom code for CoreUI's components or your own styles.

```scss
// _custom.scss

// Additional custom code here
.custom-component {
  border: 2px solid #222;
}
```
