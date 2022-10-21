---
layout: docs
title: Sidebar
description: Bootstrap Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.
group: components
aliases:
  - "/components/sidebar/"
toc: true
other_frameworks: sidebar
---

## How it works

Here's what you need to know before getting started with the sidebar:

- Sidebar requires a wrapping `.sidebar`.
- Sidebar is hidden by default on mobile devices. Force it to be shown by adding `.show` to the `.sidebar`.
- Sidebar is shown by default on desktop devices. Force it to be hidden by adding `.hide` to the `.sidebar`.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to `.sidebar-nav` to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components.

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.sidebar-header` for optional header.
- `.sidebar-brand` for your company, product, or project name.
- `.sidebar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.sidebar-footer` for optional footer.
- `.sidebar-toggler` for use with our minimizer plugin.

## Example

{{< example >}}
{{< sidebar.inline >}}
<div class="sidebar sidebar-show">
  <ul class="sidebar-nav">
    <li class="nav-title">Nav Title</li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="nav-icon cil-speedometer"></i> With badge
        <span class="badge bg-primary">NEW</span>
      </a>
    </li>
    <li class="nav-item nav-group">
      <a class="nav-link nav-group-toggle" href="#">
        <i class="nav-icon cil-puzzle"></i> Nav dropdown
      </a>
      <ul class="nav-group-items">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="nav-icon cil-puzzle"></i> Nav dropdown item
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="nav-icon cil-puzzle"></i> Nav dropdown item
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item mt-auto">
      <a class="nav-link nav-link-success" href="https://coreui.io">
        <i class="nav-icon cil-cloud-download"></i> Download CoreUI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-link-danger" href="https://coreui.io/pro/">
        <i class="nav-icon cil-layers"></i> Try CoreUI
        <strong>PRO</strong>
      </a>
    </li>
  </ul>
  <button class="sidebar-toggler" type="button"></button>
</div>
{{< /sidebar.inline >}}
{{< /example >}}

## JavaScript behavior

### Methods

You can create a sidebar instance with the sidebar constructor, for example:

{{< highlight js >}}
var mySidebar = document.querySelector('#mySidebar')
var sidebar = new coreui.Sidebar(mySidebar)
{{< /highlight >}}


{{< bs-table >}}
| Method | Description |
| --- | --- |
| `show` | Shows the sidebar. |
| `hide` | Hides the sidebar. |
| `toggle` | Toggles the sidebar to opened or closed. |
| `getInstance` | Static method which allows you to get the sidebar instance associated with a DOM element. |
{{< /bs-table >}}

{{< highlight js >}}
var sidebarNode = document.querySelector('#mySidebar')
var sidebar = coreui.Sidebar.getInstance(sidebarNode)
sidebar.close()
{{< /highlight >}}

### Events

CoreUI for Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `hidden.coreui.sidebar` | This event is fired immediately when the `hide` instance method has been called. |
| `hide.coreui.sidebar` | This event is fired when the sidebar has finished being closed from the user (will wait for CSS transitions to complete). |
| `shown.coreui.sidebar` | This event fires immediately when the `show` instance method is called. |
| `show.coreui.sidebar` | This event is fired when the sidebar has been made visible to the user (will wait for CSS transitions to complete) |
{{< /bs-table >}}

{{< highlight js >}}
var mySidebar = document.getElementById('mySidebar')
mySidebar.addEventListener('closed.coreui.sidebar', function () {
  // do something…
})
{{< /highlight >}}

## Customizing

### CSS variables

Sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="sidebar-css-vars" file="scss/sidebar/_sidebar.scss" >}}

{{< scss-docs name="sidebar-backdrop-css-vars" file="scss/sidebar/_sidebar.scss" >}}

### SASS variables

{{< scss-docs name="sidebar-variables" file="scss/_variables.scss" >}}

