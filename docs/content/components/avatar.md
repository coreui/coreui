---
layout: docs
title: Avatar
description: The Avatar component is used to display circular user profile pictures. Avatars can portray people or objects and support images, icons, or letters.
group: components
toc: true
bootstrap: true
other_frameworks: avatar
---

## Image avatars

Showcase avatars using images. These avatars are typically circular and can display user profile pictures.

{{< example >}}
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
</div>
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/2.jpg" alt="user@email.com">
</div>
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/3.jpg" alt="user@email.com">
</div>
{{< /example >}}

## Letter avatars

Use letters inside avatars to represent users or objects when images are not available. This can be useful for displaying initials.

{{< example >}}
<div class="avatar bg-primary text-white">CUI</div>
<div class="avatar bg-secondary">CUI</div>
<div class="avatar bg-warning text-white">CUI</div>
{{< /example >}}

## Icons avatars

Incorporate icons within avatars, allowing for a visual representation using scalable vector graphics (SVG).

{{< example >}}
<div class="avatar bg-info text-white">
  <svg id="cib-coreui-c" class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
<div class="avatar bg-success text-white">
  <svg id="cib-coreui-c" class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
<div class="avatar bg-danger text-white">
  <svg id="cib-coreui-c" class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
{{< /example >}}

## Rounded avatars

Create avatars with rounded corners by adding the `.rounded` class. This gives a softer, less angular appearance.

{{< example >}}
<div class="avatar rounded bg-primary text-white">CUI</div>
<div class="avatar rounded bg-secondary">CUI</div>
<div class="avatar rounded bg-warning text-white">CUI</div>
{{< /example >}}

## Square avatars

Make avatars square by using the `.rounded-0` class, removing any rounded edges for a sharper look.

{{< example >}}
<div class="avatar rounded-0 bg-primary text-white">CUI</div>
<div class="avatar rounded-0 bg-secondary">CUI</div>
<div class="avatar rounded-0 bg-warning text-white">CUI</div>
{{< /example >}}

## Sizes

Adjust the size of avatars using the `.avatar-sm`, `.avatar-md`, `.avatar-lg`, and `.avatar-xl` classes for larger or smaller versions.
{{< example >}}
<div class="avatar avatar-xl bg-secondary">CUI</div>
<div class="avatar avatar-lg bg-secondary">CUI</div>
<div class="avatar avatar-md bg-secondary">CUI</div>
<div class="avatar bg-secondary">CUI</div>
<div class="avatar avatar-sm bg-secondary">CUI</div>
{{< /example >}}

## Stacked avatars

Display multiple avatars in a stack to represent a group of users or items, with additional count if there are more avatars than can be displayed.

{{< example >}}
<div class="avatars-stack">
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/2.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/3.jpg" alt="user@email.com">
  </div>
  <div class="avatar bg-secondary">
    +2
  </div>
</div>
{{< /example >}}

## Avatars with status

Add a status indicator to avatars using the .avatar-status class to show online or offline status.

{{< example >}}
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
  <span class="avatar-status bg-success"></span>
</div>
<div class="avatar bg-secondary">
  CUI
  <span class="avatar-status bg-danger"></span>
</div>
{{< /example >}}


## Customizing

### CSS variables

Avatars use local CSS variables on `.avatar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="avatar-css-vars" file="scss/_avatar.scss" >}}

### SASS variables

{{< scss-docs name="avatar-variables" file="scss/_variables.scss" >}}
