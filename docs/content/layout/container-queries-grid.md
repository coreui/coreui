---
layout: docs
title: Grid system (Container Query version)
description: Build responsive layouts using our container query–based flexbox grid. With a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes, you can create flexible layouts that respond to the size of their container.
group: layout
toc: true
bootstrap: true
---

## Example

CoreUI’s container query grid system uses a series of containers, rows, and columns to align and layout your content. In this approach the responsive behavior is based on the **container**’s width (instead of the viewport). As before, our grid is built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive.

{{< callout warning >}}
**Heads up—our container query system is experimental and opt-in as of v5.3.0!** We included it in our documentation's CSS to demonstrate it for you, but it's disabled by default. Keep reading to learn how to enable it in your projects.
{{< /callout >}}

{{< callout info >}}
**New to or unfamiliar with container queries?** Read up on [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) for an introduction.
{{< /callout >}}

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col">
      Column
    </div>
    <div class="cq-col">
      Column
    </div>
    <div class="cq-col">
      Column
    </div>
  </div>
</div>
{{< /example >}}

In the above example a container (which must declare `container-type: inline-size`) holds a row (`.cq-row`) of equal-width columns (`.cq-col`). Because the breakpoints are now determined by the container’s size, you can design components that respond to their own layout context, rather than to the viewport.

## How it works

Breaking it down, here’s how our container query grid system comes together:

- **Container query CSS Grid is opt-in.**  
  Enable the container query CSS Grid by setting `$enable-container-queries: true`. Then, recompile your Sass.

- **Replace instances of `.row` with `.cq-row`.**  
  The `.cq-row` class sets `container-type: inline-size` and allows to use `@container` queries inside.

- **Responsive breakpoints are still supported.**  
  Our grid supports six default breakpoints. Instead of media queries targeting the viewport, we use container queries so that styles adjust when a container reaches a specified minimum width. This means a grid component can be responsive regardless of its location on the page.

- **Rows are wrappers for columns.**  
  Our grid rows (now named `.cq-row`) wrap a set of columns. Each column has horizontal padding (the gutter) to space elements apart, and the row uses negative margins to ensure proper alignment.

- **Columns are incredibly flexible.**  
  With 12 columns available per row, you can create different combinations using the classes (e.g. `.cq-col-4` spans four columns). Column widths are percentage-based, ensuring the layout scales as the container grows.

- **Gutters are responsive and customizable.**  
  Gutter classes (such as `.cq-gx-*`, `.cq-gy-*`, and `.cq-g-*`) work across all breakpoints, so you can adjust spacing as needed.

- **Sass variables, maps, and mixins power the grid.**  
  You can customize the grid by modifying Sass variables and mixins. The same variables that once generated media query–based classes are now used with container query mixins like `container-breakpoint-up()` to create responsive components.

## Grid options

The container query grid system adapts to six responsive tiers by default:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

Each breakpoint is defined by a minimum container width (instead of a viewport width), and each breakpoint has its own class prefix. For example, while your default columns use `.cq-col-`, the small breakpoint uses `.cq-col-sm-`, medium uses `.cq-col-md-`, and so on.

<div class="table-responsive">
  <table class="table mb-4">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          xs<br>
          <span class="fw-normal">&lt;576px</span>
        </th>
        <th scope="col">
          sm<br>
          <span class="fw-normal">&ge;576px</span>
        </th>
        <th scope="col">
          md<br>
          <span class="fw-normal">&ge;768px</span>
        </th>
        <th scope="col">
          lg<br>
          <span class="fw-normal">&ge;992px</span>
        </th>
        <th scope="col">
          xl<br>
          <span class="fw-normal">&ge;1200px</span>
        </th>
        <th scope="col">
          xxl<br>
          <span class="fw-normal">&ge;1400px</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th>
        <td>None (auto)</td>
        <td>576px</td>
        <td>768px</td>
        <td>992px</td>
        <td>1200px</td>
        <td>1400px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.cq-col-</code></td>
        <td><code>.cq-col-sm-</code></td>
        <td><code>.cq-col-md-</code></td>
        <td><code>.cq-col-lg-</code></td>
        <td><code>.cq-col-xl-</code></td>
        <td><code>.cq-col-xxl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="6">1.5rem (.75rem on left and right)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Custom gutters</th>
        <td colspan="6"><a href="{{< docsref "/layout/gutters" >}}">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="6"><a href="#nesting">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="6"><a href="{{< docsref "/layout/columns#reordering" >}}">Yes</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Auto-layout columns

Just as with our media query grid, you can use breakpoint-specific column classes for easy column sizing without specifying a column count. The auto-layout columns will adjust based on the container’s width.

### Equal-width

For example, here are two grid layouts that apply to every container size, from the smallest up:

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col">
      1 of 2
    </div>
    <div class="cq-col">
      2 of 2
    </div>
  </div>
  <div class="cq-row">
    <div class="cq-col">
      1 of 3
    </div>
    <div class="cq-col">
      2 of 3
    </div>
    <div class="cq-col">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### Setting one column width

Auto-layout in a flexbox grid means you can set the width of one column and have the other columns automatically resize around it. You can do this with predefined classes, Sass mixins, or inline styles. The sibling columns will always adjust around the explicitly sized column.

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col">
      1 of 3
    </div>
    <div class="cq-col-6">
      2 of 3 (wider)
    </div>
    <div class="cq-col">
      3 of 3
    </div>
  </div>
  <div class="cq-row">
    <div class="cq-col">
      1 of 3
    </div>
    <div class="cq-col-5">
      2 of 3 (wider)
    </div>
    <div class="cq-col">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### Variable width content

Use the `.cq-col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row justify-content-md-center">
    <div class="cq-col cq-col-lg-2">
      1 of 3
    </div>
    <div class="cq-col-md-auto">
      Variable width content
    </div>
    <div class="cq-col cq-col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="cq-row">
    <div class="cq-col">
      1 of 3
    </div>
    <div class="cq-col-md-auto">
      Variable width content
    </div>
    <div class="cq-col cq-col-lg-2">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

## Responsive classes

Our container query grid includes six tiers of predefined classes for building complex, responsive layouts. You can customize the width of your columns at different container widths with the corresponding classes.

### All breakpoints

For grids that are identical across all container sizes, use the `.cq-col` and `.cq-col-*` classes. Specify a numbered class when you need a particular sized column; otherwise, stick with `.cq-col`.

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col">col</div>
    <div class="cq-col">col</div>
    <div class="cq-col">col</div>
    <div class="cq-col">col</div>
  </div>
  <div class="cq-row">
    <div class="cq-col-8">cq-col-8</div>
    <div class="cq-col-4">cq-col-4</div>
  </div>
</div>
{{< /example >}}

### Stacked to horizontal

Using a single set of `.cq-col-sm-*` classes, you can create a grid that starts stacked (for smaller container sizes) and becomes horizontal when the container’s width reaches the small breakpoint.

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col-sm-8">cq-col-sm-8</div>
    <div class="cq-col-sm-4">cq-col-sm-4</div>
  </div>
  <div class="cq-row">
    <div class="cq-col-sm">cq-col-sm</div>
    <div class="cq-col-sm">cq-col-sm</div>
    <div class="cq-col-sm">cq-col-sm</div>
  </div>
</div>
{{< /example >}}

### Mix and match

Combine classes from different breakpoints to achieve a layout that adjusts at various container widths.

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <!-- Stack columns on narrow containers: one full-width, one half-width -->
  <div class="cq-row">
    <div class="cq-col-md-8">.cq-col-md-8</div>
    <div class="cq-col-6 cq-col-md-4">.cq-col-6 .cq-col-md-4</div>
  </div>

  <!-- Columns start at 50% width on narrow containers and become 33.3% wide on wider containers -->
  <div class="cq-row">
    <div class="cq-col-6 cq-col-md-4">.cq-col-6 .cq-col-md-4</div>
    <div class="cq-col-6 cq-col-md-4">.cq-col-6 .cq-col-md-4</div>
    <div class="cq-col-6 cq-col-md-4">.cq-col-6 .cq-col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, regardless of container size -->
  <div class="cq-row">
    <div class="cq-col-6">.cq-col-6</div>
    <div class="cq-col-6">.cq-col-6</div>
  </div>
</div>
{{< /example >}}

### Row columns

Just as with our original grid, you can use responsive `.row-cols-*`–style classes on the row (here, `.cq-row-cols-*`) to quickly set the number of columns per row. This lets you define a quick grid layout without having to set individual column widths.

For example:

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row cq-row-cols-3">
    <div class="cq-col">Column</div>
    <div class="cq-col">Column</div>
    <div class="cq-col">Column</div>
    <div class="cq-col">Column</div>
  </div>
</div>
{{< /example >}}

You can also use the accompanying Sass mixin, `row-cols()`, with container query mixins to adjust the number of columns based on the container’s width:

```scss
.element {
  // Three columns by default
  @include row-cols(3);

  // Five columns when the container is at least the medium breakpoint wide
  @include container-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```

## Nesting

To nest content, simply add a new `.cq-row` and set of `.cq-col-*` columns inside an existing column. When nesting, the inner row inherits the gutter spacing from the outer grid, and the nested columns should add up to 12 (or fewer).

{{< example class="docs-example-row" >}}
<div class="container text-center">
  <div class="cq-row">
    <div class="cq-col-sm-3">
      Level 1: .cq-col-sm-3
    </div>
    <div class="cq-col-sm-9">
      <div class="cq-row">
        <div class="cq-col-8 cq-col-sm-6">
          Level 2: .cq-col-8 .cq-col-sm-6
        </div>
        <div class="cq-col-4 cq-col-sm-6">
          Level 2: .cq-col-4 .cq-col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Sass

When using CoreUI’s source Sass files, you can create custom, semantic, and responsive layouts using Sass variables and mixins—just as before, but now with container query–based mixins. Our predefined grid classes are generated with these mixins and Sass maps, so you have full control over your grid.

### Variables

Variables and maps determine the number of columns, gutter widths, and the container query breakpoints. For example:

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
```

{{< scss-docs name="cq-grid-breakpoints" file="scss/_variables.scss" >}}
