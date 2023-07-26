---
layout: docs
title: Migrating to v4
description: Track and review changes to the CoreUI for Bootstrap source files, documentation, and components to help you migrate from v3 to v4.
group: migration
aliases: "/migration/"
toc: true
---

## v5.0.0-alpha.1

### CSS variables

- Restores CSS variables for breakpoints, though we don't use them in our media queries as they're not supported. However, these can be useful in JS-specific contexts.

- Per the color modes update, we've added new utilities for new Sass CSS variables `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps) with the express goal of making it easier to customize across multiple colors modes like light and dark.

- Adds additional variables for alerts, `.btn-close`, and `.offcanvas`.

- The `--cui-heading-color` variable is back with an update and dark mode support. First, we now check for a `null` value on the associated Sass variable, `$headings-color`, before trying to output the CSS variable, so by default it's not present in our compiled CSS. Second, we use the CSS variable with a fallback value, `inherit`, allowing the original behavior to persist, but also allowing for overrides.

- Converts links to use CSS variables for styling `color`, but not `text-decoration`. Colors are now set with `--cui-link-color-rgb` and `--cui-link-opacity` as `rgba()` color, allowing you to customize the translucency with ease. The `a:hover` pseudo-class now overrides `--cui-link-color-rgb` instead of explicitly setting the `color` property.

- `--cui-border-width` is now being used in more components for greater control over default global styling.

- Adds new root CSS variables for our `box-shadow`s, including `--cui-box-shadow`, `--cui-box-shadow-sm`, `--cui-box-shadow-lg`, and `--cui-box-shadow-inset`.

- Removed several duplicate and unused root CSS variables.

### Color modes

Learn more by reading the new [color modes documentation]({{< docsref "/customize/color-modes" >}}).

- **Global support for light (default) and dark color modes.** Set color mode globally on the `:root` element, on groups of elements and components with a wrapper class, or directly on components, with `data-coreui-theme="light|dark"`. Also included is a new `color-mode()` mixin that can output a ruleset with the `data-coreui-theme` selector or a media query, depending on your preference.

  <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> Color modes replace dark variants for components, so  `.btn-close-white`, `.carousel-dark`, `.dropdown-menu-dark`, and `.navbar-dark` are deprecated.

- **New extended color system.** We've added new theme colors (but not in `$theme-colors`) for a more nuanced, system-wide color palette with new secondary, tertiary, and emphasis colors for `color` and `background-color`. These new colors are available as Sass variables, CSS variables, and utilities.

- We've also expanded our theme color Sass variables, CSS variables, and utilities to include text emphasis, subtle background colors, and subtle border colors. These are available as Sass variables, CSS variables, and utilities.

- Adds new `_variables-dark.scss` stylesheet to house dark-mode specific overrides. This stylesheet should be imported immediately after the existing `_variables.scss` file in your import stack.

  ```diff
   // Configuration
   @import "functions";
   @import "variables";
  +@import "variables-dark";
   @import "maps";
   @import "mixins";
   @import "utilities";
  ```

- Dark mode colors are now derived from our theme colors (e.g., `$primary`) in Sass, rather than color specific tints or shades (e.g., `$blue-300`). This allows for a more automated dark mode when customizing the default theme colors.

- Added Sass maps for generating theme colors for dark mode text, subtle background, and subtle border.


- Added `color-scheme: dark` to dark mode CSS to change OS level controls like scrollbars

- Form validation `border-color` and text `color` states now respond to dark mode, thanks to new Sass and CSS variables.

- Dropped recently added form control background CSS variables and reassigned the Sass variables to use CSS variables instead. This simplifies the styling across color modes and avoids an issue where form controls in dark mode wouldn't update properly.

- Our `box-shadow`s will once again always stay dark instead of inverting to white when in dark mode.

- Improved HTML and JavaScript for our color mode toggle script. The selector for changing the active SVG has been improved, and the markup made more accessible with ARIA attributes.

- Improved docs code syntax colors and more across light and dark modes.

### Typography

- We no longer set a color for `$headings-color-dark` or `--cui-heading-color` for dark mode. To avoid several problems of headings within components appearing the wrong color, we've set the Sass variable to `null` and added a `null` check like we use on the default light mode.

### Components

#### Alert

- Alert variants are now styled via CSS variables.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.alert-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/alerts#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.


#### Card

- Cards now have a `color` set on them to improve rendering across color modes.

#### Close button

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.btn-close-white` class has been deprecated and replaced with `data-coreui-theme="dark"` on the close button or any parent element. [See the docs for an example.]({{< docsref "/components/close-button#dark-variant" >}})

#### Dropdowns

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.dropdown-menu-dark` class has been deprecated and replaced with `data-coreui-theme="dark"` on the dropdown or any parent element. [See the docs for an example.]({{< docsref "/components/dropdowns#dark-dropdowns" >}})

#### List group

- List group item variants are now styled via CSS variables.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.list-group-variant()` mixin is now deprecated. We now [use a Sass loop]({{< docsref "/components/list-group#sass-loops" >}}) directly to modify the component's default CSS variables for each variant.

#### Navbar

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> The `.navbar-dark` class has been deprecated and replaced with `data-coreui-theme="dark"` on the navbar or any parent element. [See the docs for updated examples.]({{< docsref "/components/navbar#color-schemes" >}})

#### Navs


- Added new `.nav-underline` variant for our navigation with a simpler bottom border under the active nav link. [See the docs for an example.]({{< docsref "/components/navs-tabs#underline" >}})

- Navs now have new `:focus-visible` styles that better match our custom button focus styles.

### Progress bars

The markup for [progress bars]({{< docsref "/components/progress" >}}) has been updated in v5.0.0. Due to the placement of `role` and various `aria-` attributes on the inner `.progress-bar` element, **some screen readers were not announcing zero value progress bars**. Now, `role="progressbar"` and the relevant `aria-*` attributes are on the outer `.progress` element, leaving the `.progress-bar` purely for the visual presentation of the bar and optional label.

While we recommend adopting the new markup for improved compatibility with all screen readers, note that the legacy progress bar structure will continue to work as before.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
```

We've also introduced a new `.progress-stacked` class to more logically wrap [multiple progress bars]({{< docsref "/components/progress#multiple-bars" >}}) into a single stacked progress bar.

```html
<!-- Previous markup -->
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<!-- New markup -->
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
```

### Forms

- `.form-control` is now styled with CSS variables to support color modes. This includes the addition of two new root CSS variables for the default and disabled form control backgrounds.

- `.form-check` and `.form-switch` components are now built with CSS variables for setting the `background-image`. The usage here differs from other components in that the various focus, active, etc states for each component aren't set on the base class. Instead, the states override one variable (e.g., `--cui-form-switch-bg`).

- Floating form labels now have a `background-color` to fix support for `<textarea>` elements. Additional changes have been made to also support disabled states and more.

- Fixed display of date and time inputs in WebKit based browsers.

### Helpers

- Added new `.icon-link` helper to quickly place and align Bootstrap Icons alongside a textual link. Icon links support our new link utilities, too.

- Added new focus ring helper for removing the default `outline` and setting a custom `box-shadow` focus ring.

- [Colored links]({{< docsref "/helpers/colored-links" >}}) once again have `!important` so they work better with our newly added link utilities.

### Utilities

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> `.text-muted` will be replaced by `.text-body-secondary` in v6.

  With the addition of the expanded theme colors and variables, the `.text-muted` variables and utility have been deprecated with v5.0.0. Its default value has also been reassigned to the new `--cui-secondary-color` CSS variable to better support color modes. It will be removed in v6.0.0.

- Adds new `.overflow-x`, `.overflow-y`, and several `.object-fit-*` utilities. _The object-fit property is used to specify how an `<img>` or `<video>` should be resized to fit its container, giving us a responsive alternative to using `background-image` for a resizable fill/fit image._

- Adds new `.fw-medium` utility.

- Added new [`.z-*` utilities]({{< docsref "/utilities/z-index" >}}) for `z-index`.

- [Box shadow utilities]({{< docsref "/utilities/shadows" >}}) (and Sass variables) have been updated for dark mode. They now use `--cui-body-color-rgb` to generate the `rgba()` color values, allowing them to easily adapt to color modes based on the specified foreground color.

- Renamed Sass and CSS variables `${color}-text` to `${color}-text-emphasis` to match their associated utilities.

- Added new `.link-body-emphasis` helper alongside our [colored links]({{< docsref "/helpers/colored-links" >}}). This creates a colored link using our color mode responsive emphasis color.

- Added new link utilities for link color opacity, underline offset, underline color, and underline opacity. [Explore the new links utilities.]({{< docsref "/utilities/link" >}})

- CSS variable based `border-width` utilities have been reverted to set their property directly (as was done prior to v5.2.0). This avoids inheritance issues across nested elements, including tables.

- Added new `.border-black` utility to match our `.text-black` and `.bg-black` utilities.

- <span class="badge text-warning-emphasis bg-warning-subtle">Deprecated</span> Deprecated the `.text-muted` utility and `$text-muted` Sass variable. It's been replaced by `.text-body-secondary` and `$body-secondary-color`.


- Added new `.d-inline-grid` [display utility]({{< docsref "/utilities/display" >}}).

## v4.0.0

### Dependencies

- Upgraded from Popper v1.x to Popper v2.x.
- Replaced Libsass with Dart Sass as our Sass compiler given Libsass was deprecated.
### Browser support

- Dropped Internet Explorer 10 and 11
- Dropped Microsoft Edge < 16 (Legacy Edge)
- Dropped Firefox < 60
- Dropped Safari < 12
- Dropped iOS Safari < 12
- Dropped Chrome < 60

<hr class="my-5">

### Documentation changes

- Redesigned homepage, docs layout, and footer.
- Added [new Parcel guide](https://coreui.io/docs/getting-started/parcel/).
- Added [new Customize section](https://coreui.io/docs/customize/overview/).
- Reorganized all form documentation into [new Forms section](https://coreui.io/docs/forms/overview/), breaking apart the content into more focused pages.
- Similarly, updated [the Layout section](https://coreui.io/docs/layout/breakpoints/), to flesh out grid content more clearly.
- Renamed "Navs" component page to "Navs & Tabs".
- Renamed "Checks" page to "Checks & radios".
- Redesigned the navbar and added a new subnav to make it easier to get around our sites and docs versions.
- Added new keyboard shortcut for the search field: <kbd>Ctrl + /</kbd>.

### Sass

- We've ditched the default Sass map merges to make it easier to remove redundant values. Keep in mind you now have to define all values in the Sass maps like `$theme-colors`. Check out how to deal with [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `color-yiq()` function and related variables to `color-contrast()` as it's no longer related to YIQ colorspace.
  - `$yiq-contrasted-threshold` is renamed to `$min-contrast-ratio`.
  - `$yiq-text-dark` and `$yiq-text-light` are respectively renamed to `$color-contrast-dark` and `$color-contrast-light`.

- <span class="badge bg-danger">Breaking</span> Removed print styles and `$enable-print-styles` variable. Print display classes are still around.

- <span class="badge bg-danger">Breaking</span> Dropped `color()`, `theme-color()`, and `gray()` functions in favor of variables.

- <span class="badge bg-danger">Breaking</span> Renamed `theme-color-level()` function to `color-level()` .

- <span class="badge bg-danger">Breaking</span> Renamed `$enable-prefers-reduced-motion-media-query` and `$enable-pointer-cursor-for-buttons` to `$enable-reduced-motion` and `$enable-button-pointers` for brevity.

- <span class="badge bg-danger">Breaking</span> Removed the `bg-gradient-variant()` mixin. Use the `.bg-gradient` class to add gradients to elements instead of the generated `.bg-gradient-*` classes.

- <span class="badge bg-danger">Breaking</span> **Removed previously deprecated mixins:**
  - `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (also dropped the associated utility class, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge bg-danger">Breaking</span> Renamed `scale-color()` function to `shift-color()` to avoid collision with Sass's own color scaling function.

- `box-shadow` mixins now allow `null` values and drop `none` from multiple arguments.

- The `border-radius()` mixin now has a default value.

### Color system

- The color system which worked with `color-level()` and `$theme-color-interval` was removed in favor of a new color system. All `lighten()` and `darken()` functions in our codebase are replaced by `tint-color()` and `shade-color()`. These functions will mix the color with either white or black instead of changing its lightness by a fixed amount. The `shift-color()` will either tint or shade a color depending on whether its weight parameter is positive or negative. for more details.

- Added new tints and shades for every color, providing nine separate colors for each base color, as new Sass variables.

- Improved color contrast. Bumped color contrast ratio from 3:1 to 4.5:1 and updated blue, green, cyan, and pink colors to ensure WCAG 2.1 AA contrast. Also changed our color contrast color from `$gray-900` to `$black`.

- To support our color system, we've added new custom `tint-color()` and `shade-color()` functions to mix our colors appropriately.

### Grid updates

- **New breakpoint!** Added new `xxl` breakpoint for `1400px` and up. No changes to all other breakpoints.

- **Improved gutters.** Gutters are now set in rems, and are narrower than v4 (`1.5rem`, or about `24px`, down from `30px`). This aligns our grid system's gutters with our spacing utilities.
  - Added new [gutter class](https://coreui.io/docs/layout/gutters/) (`.g-*`, `.gx-*`, and `.gy-*`) to control horizontal/vertical gutters, horizontal gutters, and vertical gutters.
  - <span class="badge bg-danger">Breaking</span> Renamed `.no-gutters` to `.g-0` to match new gutter utilities.

- Columns no longer have `position: relative` applied, so you may have to add `.position-relative` to some elements to restore that behavior.

- <span class="badge bg-danger">Breaking</span> Dropped several `.order-*` classes that often went unused. We now only provide `.order-1` to `.order-5` out of the box.

- <span class="badge bg-danger">Breaking</span> Dropped the `.media` component as it can be easily replicated with utilities.

- <span class="badge bg-danger">Breaking</span> `bootstrap-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way, our grid styles can be used in more places without interference.

- `$enable-grid-classes` no longer disables the generation of container classes anymore.

- Updated the `make-col` mixin to default to equal columns without a specified size.

### Content, Reboot, etc

- **[RFS]({{< docsref "/getting-started/rfs" >}}) is now enabled by default.** Headings using the `font-size()` mixin will automatically adjust their `font-size` to scale with the viewport. _This feature was previously opt-in with v4._

- <span class="badge bg-danger">Breaking</span> Overhauled our display typography to replace our `$display-*` variables and with a `$display-font-sizes` Sass map. Also removed the individual `$display-*-weight` variables for a single `$display-font-weight` and adjusted `font-size`s.

- Added two new `.display-*` heading sizes, `.display-5` and `.display-6`.

- **Links are underlined by default** (not just on hover), unless they're part of specific components.

- **Redesigned tables** to refresh their styles and rebuild them with CSS variables for more control over styling.

- <span class="badge bg-danger">Breaking</span> Nested tables do not inherit styles anymore.

- <span class="badge bg-danger">Breaking</span> `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).

- <span class="badge bg-danger">Breaking</span> The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (color name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.

- Split table cell padding variables into `-y` and `-x`.

- <span class="badge bg-danger">Breaking</span> Dropped `.pre-scrollable` class.

- <span class="badge bg-danger">Breaking</span> `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead.

- <span class="badge bg-danger">Breaking</span> Dropped `.text-justify` class.

- <span class="badge bg-danger">Breaking</span> `<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).

- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.

- Added `$enable-smooth-scroll`, which applies `scroll-behavior: smooth` globally—except for users asking for reduced motion through `prefers-reduced-motion` media query.

### RTL

- Horizontal direction specific variables, utilities, and mixins have all been renamed to use logical properties like those found in flexbox layouts—e.g., `start` and `end` in lieu of `left` and `right`.

### Forms

- **Added new floating forms!** We've promoted the Floating labels example to fully supported form components.

- <span class="badge bg-danger">Breaking</span> **Consolidated native and custom form elements.** Checkboxes, radios, selects, and other inputs that had native and custom classes in v4 have been consolidated. Now nearly all our form elements are entirely custom, most without the need for custom HTML.
  - `.custom-control.custom-checkbox` is now `.form-check`.
  - `.custom-control.custom-radio` is now `.form-check`.
  - `.custom-control.custom-switch` is now `.form-check.form-switch`.
  - `.custom-select` is now `.form-select`.
  - `.custom-file` and `.form-control-file` have been replaced by custom styles on top of `.form-control`.
  - `.custom-range` is now `.form-range`.
  - Dropped native `.form-control-file` and `.form-control-range`.

- <span class="badge bg-danger">Breaking</span> Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

- The longstanding "Missing border radius on input group with validation feedback bug" is finally fixed by adding an additional `.has-validation` class to input groups with validation.

- <span class="badge bg-danger">Breaking</span> **Dropped form-specific layout classes for our grid system.** Use our grid and utilities instead of `.form-group`, `.form-row`, or `.form-inline`.

- <span class="badge bg-danger">Breaking</span> Form labels now require `.form-label`.

- <span class="badge bg-danger">Breaking</span> `.form-text` no longer sets `display`, allowing you to create inline or block help text as you wish just by changing the HTML element.

- Validation icons are no longer applied to `<select>`s with `multiple`.

- Rearranged source Sass files under `scss/forms/`, including input group styles.

<hr class="my-5">

### Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable.

#### Accordion

- Added [new accordion component]({{< docsref "/components/accordion" >}}).

#### Alerts

- Alerts now have [examples with icons]({{< docsref "/components/alerts#icons" >}}).

- Removed custom styles for `<hr>`s in each alert since they already use `currentColor`.

#### Badges

- <span class="badge bg-danger">Breaking</span> Dropped all `.badge-*` color classes for background utilities (e.g., use `.bg-primary` instead of `.badge-primary`).

- <span class="badge bg-danger">Breaking</span> Dropped `.badge-pill`—use the `.rounded-pill` utility instead.

- <span class="badge bg-danger">Breaking</span> Removed hover and focus styles for `<a>` and `<button>` elements.

- Increased default padding for badges from `.25em`/`.5em` to `.35em`/`.65em`.

#### Breadcrumbs

- Simplified the default appearance of breadcrumbs by removing `padding`, `background-color`, and `border-radius`.

- Added new CSS custom property `--cui-breadcrumb-divider` for easy customization without needing to recompile CSS.

#### Buttons

- <span class="badge bg-danger">Breaking</span> **[Toggle buttons](https://coreui.io/docs/forms/checks-radios/#toggle-buttons), with checkboxes or radios, no longer require JavaScript and have new markup.** We no long require a wrapping element, add `.btn-check` to the `<input>`, and pair it with any `.btn` classes on the `<label>`. _The docs for this has moved from our Buttons page to the new Forms section._

- <span class="badge bg-danger">Breaking</span> **Dropped `.btn-block` for utilities.** Instead of using `.btn-block` on the `.btn`, wrap your buttons with `.d-grid` and a `.gap-*` utility to space them as needed. Switch to responsive classes for even more control over them. [Read the docs for some examples.](https://coreui.io/docs/components/buttons/#block-buttons)

- Updated our `button-variant()` and `button-outline-variant()` mixins to support additional parameters.

- Updated buttons to ensure increased contrast on hover and active states.

- Disabled buttons now have `pointer-events: none;`.

#### Card

- <span class="badge bg-danger">Breaking</span> Dropped `.card-deck` in favor of our grid. Wrap your cards in column classes and add a parent `.row-cols-*` container to recreate card decks (but with more control over responsive alignment).

- <span class="badge bg-danger">Breaking</span> Dropped `.card-columns` in favor of Masonry.

- <span class="badge bg-danger">Breaking</span> Replaced the `.card` based accordion with a [new Accordion component]({{< docsref "/components/accordion" >}}).

#### Carousel

- Added new [`.carousel-dark` variant]({{< docsref "/components/carousel#dark-variant" >}}) for dark text, controls, and indicators (great for lighter backgrounds).

- Replaced chevron icons for carousel controls with new SVGs from [Bootstrap Icons]({{< param "icons" >}}).

#### Close button

- <span class="badge bg-danger">Breaking</span> Renamed `.close` to `.btn-close` for a less generic name.

- Close buttons now use a `background-image` (embedded SVG) instead of a `&times;` in the HTML, allowing for easier customization without the need to touch your markup.

- Added new `.btn-close-white` variant that uses `filter: invert(1)` to enable higher contrast dismiss icons against darker backgrounds.

#### Collapse

- Removed scroll anchoring for accordions.

#### Dropdowns

- Added new `.dropdown-menu-dark` variant and associated variables for on-demand dark dropdowns.

- Added new variable for `$dropdown-padding-x`.

- Darkened the dropdown divider for improved contrast.

- <span class="badge bg-danger">Breaking</span> All the events for the dropdown are now triggered on the dropdown toggle button and then bubbled up to the parent element.

- Dropdown menus now have a `data-coreui-popper="static"` attribute set when the positioning of the dropdown is static and `data-coreui-popper="none"` when dropdown is in the navbar. This is added by our JavaScript and helps us use custom position styles without interfering with Popper's positioning.

- <span class="badge bg-danger">Breaking</span> Dropped `flip` option for dropdown plugin in favor of native Popper configuration. You can now disable the flipping behavior by passing an empty array for [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) option in [flip](https://popper.js.org/docs/v2/modifiers/flip/) modifier.

- Dropdown menus can now be clickable with a new `autoClose` option to handle the [auto close behavior]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). You can use this option to accept the click inside or outside the dropdown menu to make it interactive.

- Dropdowns now support `.dropdown-item`s wrapped in `<li>`s.

#### Footer

- <span class="badge bg-danger">Breaking</span> Renamed `.c-footer` to `.footer`.

#### Header

- <span class="badge bg-danger">Breaking</span> Renamed `.c-header` to `.header`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-header-brand` to `.header-brand`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-header-nav` to `.header-nav`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-header-toggler` to `.header-toggler`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-header-text` to `.header-text`.
- <span class="badge bg-danger">Breaking</span> Dropped the `.c-header-nav-item` — use the `.nav-item` instead.
- <span class="badge bg-danger">Breaking</span> Dropped the `.c-header-nav-link` — use the `.nav-link` instead.


#### Jumbotron

- <span class="badge bg-danger">Breaking</span> Dropped the jumbotron component as it can be replicated with utilities.

#### List group

- Added new [`.list-group-numbered` modifier]({{< docsref "/components/list-group#numbered" >}}) to list groups.

#### Navs and tabs

- Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.
git 
#### Navbars

- <span class="badge bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).

#### Offcanvas

- Added the new [offcanvas component]({{< docsref "/components/offcanvas" >}}).

#### Pagination

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

- Added `transition`s to pagination links.

#### Popovers

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.popover-arrow` in our default popover template.

- Renamed `whiteList` option to `allowList`.

#### Sidebar

- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar` to `.sidebar`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar-brand` to `.sidebar-brand`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar-footer` to `.sidebar-footer`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar-header` to `.sidebar-header`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar-nav` to `.sidebar-nav`.
- <span class="badge bg-danger">Breaking</span> Renamed `.c-sidebar-toggler` to `.sidebar-toggler`.
- <span class="badge bg-danger">Breaking</span> Dropped the `.c-sidebar-nav-item` — use the `.nav-item` instead.
- <span class="badge bg-danger">Breaking</span> Dropped the `.c-sidebar-nav-link` — use the `.nav-link` instead.

#### Spinners

- Spinners now honor `prefers-reduced-motion: reduce` by slowing down animations.

- Improved spinner vertical alignment.

#### Toasts

- Toasts can now be [positioned]({{< docsref "/components/toasts#placement" >}}) in a `.toast-container` with the help of [positioning utilities]({{< docsref "/utilities/position" >}}).

- Changed default toast duration to 5 seconds.

- Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.

#### Tooltips

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.tooltip-arrow` in our default tooltip template.

- <span class="badge bg-danger">Breaking</span> The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of popper elements.

- <span class="badge bg-danger">Breaking</span> Renamed `whiteList` option to `allowList`.

### Utilities

- <span class="badge bg-danger">Breaking</span> Renamed several utilities to use logical property names instead of directional names with the addition of RTL support:
  - Renamed `.left-*` and `.right-*` to `.start-*` and `.end-*`.
  - Renamed `.float-left` and `.float-right` to `.float-start` and `.float-end`.
  - Renamed `.border-left` and `.border-right` to `.border-start` and `.border-end`.
  - Renamed `.rounded-left` and `.rounded-right` to `.rounded-start` and `.rounded-end`.
  - Renamed `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`.
  - Renamed `.mfs-*` and `.mfe-*` to `.ms-*` and `.me-*`.
  - Renamed `.pl-*` and `.pr-*` to `.ps-*` and `.pe-*`.
  - Renamed `.text-left` and `.text-right` to `.text-start` and `.text-end`.

- <span class="badge bg-danger">Breaking</span> Disabled negative margins by default.

- Added new `.bg-body` class for quickly setting the `<body>`'s background to additional elements.

- Added new [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) for `top`, `right`, `bottom`, and `left`. Values include `0`, `50%`, and `100%` for each property.

- Added new `.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

- Added new [`border-width` utilities]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `.text-monospace` to `.font-monospace`.

- <span class="badge bg-danger">Breaking</span> Removed `.text-hide` as it's an antiquated method for hiding text that shouldn't be used anymore.

- Added `.fs-*` utilities for `font-size` utilities (with RFS enabled). These use the same scale as HTML's default headings (1-6, large to small), and can be modified via Sass map.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-weight-*` utilities as `.fw-*` for brevity and consistency.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-style-*` utilities as `.fst-*` for brevity and consistency.

- Added `.d-grid` to display utilities and new `gap` utilities (`.gap`) for CSS Grid and flexbox layouts.

- <span class="badge bg-danger">Breaking</span> Removed `.rounded-sm` and `rounded-lg`, and introduced a new scale of classes, `.rounded-0` to `.rounded-3`.

- Added new `line-height` utilities: `.lh-1`, `.lh-sm`, `.lh-base` and `.lh-lg`. See [here]({{< docsref "/utilities/text#line-height" >}}).

- Moved the `.d-none` utility in our CSS to give it more weight over other display utilities.

- Extended the `.visually-hidden-focusable` helper to also work on containers, using `:focus-within`.

### Helpers

- <span class="badge bg-danger">Breaking</span> **Responsive embed helpers have been renamed to [ratio helpers]({{< docsref "/helpers/ratio" >}})** with new class names and improved behaviors, as well as a helpful CSS variable.
  - Classes have been renamed to change `by` to `x` in the aspect ratio. For example, `.ratio-16by9` is now `.ratio-16x9`.
  - We've dropped the `.embed-responsive-item` and element group selector in favor of a simpler `.ratio > *` selector. No more class is needed, and the ratio helper now works with any HTML element.
  - The `$embed-responsive-aspect-ratios` Sass map has been renamed to `$aspect-ratios` and its values have been simplified to include the class name and the percentage as the `key: value` pair.
  - CSS variables are now generated and included for each value in the Sass map. Modify the `--cui-aspect-ratio` variable on the `.ratio` to create any [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge bg-danger">Breaking</span> **"Screen reader" classes are now ["visually hidden" classes]({{< docsref "/helpers/visually-hidden" >}}).**
  - Changed the Sass file from `scss/helpers/_screenreaders.scss` to `scss/helpers/_visually-hidden.scss`
  - Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`
  - Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

- `bootstrap-utilities.css` now also includes our helpers. Helpers don't need to be imported in custom builds anymore.

### JavaScript

- <span class="badge bg-danger">Breaking</span> Data attributes for all JavaScript plugins are now namespaced to help distinguish Bootstrap functionality from third parties and your own code. For example, we use `data-coreui-toggle` instead of `data-toggle`.

- **All plugins can now accept a CSS selector as the first argument.** You can either pass a DOM element or any valid CSS selector to create a new instance of the plugin:

  ```js
  const modal = new coreui.Modal('#myModal')
  const dropdown = new coreui.Dropdown('[data-coreui-toggle="dropdown"]')
  ```

- `popperConfig` can be passed as a function that accepts the CoreUI for Bootstrap's default Popper config as an argument, so that you can merge this default configuration in your way. **Applies to dropdowns, popovers, and tooltips.**

- The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of Popper elements. **Applies to dropdowns, popovers, and tooltips.**

- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.
