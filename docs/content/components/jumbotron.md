---
layout: docs
title: Jumbotron
description: Bootstrap jumbotron component indicates a big grey box for showcasing hero unit style content.
group: components
toc: true
bootstrap: true
---

## Basic example

The jumbotron component is dropped in version v4 as it can be replicated with utilities. Please check examples of how to create a lightweight, flexible element that can optionally reach the entire viewport to showcase essential marketing information on your site.

{{< example >}}
<div class="p-5 mb-4 bg-body-tertiary rounded-3">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
{{< /example >}}


## Full-width Bootstrap jumbotron

{{< example >}}
<div class="p-5 text-center bg-body-tertiary">
  <div class="container py-5">
    <h1 class="text-body-emphasis">Full-width jumbotron</h1>
    <p class="col-lg-8 mx-auto lead">
      This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
    </p>
  </div>
</div>
{{< /example >}}

## Custom Bootstrap jumbotrons

{{< example >}}
<div class="row align-items-md-stretch">
  <div class="col-md-6">
    <div class="h-100 p-5 text-bg-dark rounded-3">
      <h2>Change the background</h2>
      <p>Swap the background-color utility and add a <code>.text-*</code> color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
      <button class="btn btn-outline-light" type="button">Example button</button>
    </div>
  </div>
  <div class="col-md-6">
    <div class="h-100 p-5 bg-body-tertiary border rounded-3">
      <h2>Add borders</h2>
      <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
      <button class="btn btn-outline-secondary" type="button">Example button</button>
    </div>
  </div>
</div>
{{< /example >}}
