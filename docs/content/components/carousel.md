---
layout: docs
title: Carousel
description: Bootstrap carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
aliases:
  - "/components/bootstrap/carousel/"
toc: true
bootstrap: true
other_frameworks: carousel
---

## How it works

The bootstrap carousel is a slideshow for cycling within a group of content, built with CSS 3D transforms and JavaScript. It runs with a group of images, text, or html elements. It also incorporates support for previous/next buttons.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

Please be informed that nested carousels are not supported, and carousels are frequently not compliant with accessibility rules.

## Example

Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or custom methods to properly size content. While carousels support previous/next controls and indicators, they're not explicitly expected. Add and customize as you see fit.

**The `.active` class must to be attached to one of the slides** otherwise the carousel will not be visible. Additionally be sure to set a different id on the `.carousel` for optional controls, particularly if you're using many carousels on a page. Control and indicator elements must have a `data-coreui-target` attribute (or `href` for links) that matches the id of the `.carousel` element.

### Slides only

Here's a carousel with slides. Note the appearance of the `.d-block` also, `.w-100` on carousel images to override browser default image alignment.

{{< example >}}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
</div>
{{< /example >}}

### With controls

Adding in the previous and next controls. We recommend using `<button>` elements, but you can also use `<a>` elements with `role="button"`.

{{< example >}}
<div id="carouselExampleControls" class="carousel slide" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleControls" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### With indicators

You can attach the indicators to the carousel, lengthwise the controls, too.

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide" data-coreui-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### With captions

You can add captions to slides with the `.carousel-caption` element within any `.carousel-item`. They can be immediately hidden on smaller viewports, as shown below, with optional [display utilities]({{< docsref "/utilities/display" >}}). We hide them with `.d-none` and draw them back on medium-sized devices with `.d-md-block`.

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide" data-coreui-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add `.bg-body` or some custom CSS to the `.carousel-item`s for proper crossfading.

{{< example >}}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleFade" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleFade" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### Individual `.carousel-item` interval

Add `data-coreui-interval=""` to a `.carousel-item` to change the amount of time to delay between automatically cycling to the next item.

{{< example >}}
<div id="carouselExampleInterval" class="carousel slide" data-coreui-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-coreui-interval="10000">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item" data-coreui-interval="2000">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleInterval" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleInterval" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### Disable touch swiping

Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the `data-coreui-touch` attribute. The example below also does not include the `data-coreui-ride` attribute so it doesn't autoplay.

{{< example >}}
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-coreui-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="docs-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleControlsNoTouching" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleControlsNoTouching" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.0.0" >}}

Add `.carousel-dark` to the `.carousel` for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the `filter` CSS property. Captions and controls have additional Sass variables that customize the `color` and `background-color`.

{{< callout-deprecated-dark-variants "carousel" >}}

{{< example >}}
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-coreui-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-coreui-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleDark" data-coreui-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## Custom transition

The transition duration of `.carousel-item` can be changed with the `$carousel-transition-duration` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (eg. `transition: transform 2s ease, opacity .5s ease-out`).

## Usage

{{< bootstrap-compatibility >}}

### Via data attributes

Utilize data attributes to control the position of the carousel. `data-coreui-slide` allows the keywords `prev` or `next`, which changes the slide position corresponding to its current position. Alternatively, use `data-coreui-slide-to` to pass a raw slide index to the carousel `data-coreui-slide-to="2"`, which moves the slide position to a particular index beginning with `0`.

The `data-coreui-ride="carousel"` attribute is applied to mark a carousel as animating starting at page load. **It cannot be done in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**
### Via JavaScript

Call carousel manually with:

```js
const carousel = new coreui.Carousel('#myCarousel')
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | number | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | boolean | `true` | Whether the carousel should react to keyboard events. |
| `pause` | string, boolean | `"hover"` | If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it. On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior. |
| `ride` | string, boolean | `false` | If set to `true`, autoplays the carousel after the user manually cycles the first item. If set to `"carousel"`, autoplays the carousel on load. |
| `touch` | boolean | `true` | Whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `wrap` | boolean | `true` | Whether the carousel should cycle continuously or have hard stops. |
{{< /bs-table >}}

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:

```js
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new coreui.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `cycle` | Cycles through the carousel items from left to right. |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the carousel instance associated to a DOM element, you can use it like this: `coreui.Carousel.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a carousel instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Carousel.getOrCreateInstance(element)` |
| `next` | Cycles to the next item. **Returns to the caller before the next item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |
| `nextWhenVisible` | Don't cycle carousel to next when the page isn't visible or the carousel or its parent isn't visible. **Returns to the caller before the target item has been shown** |
| `pause` | Stops the carousel from cycling through items. |
| `prev` | Cycles to the previous item. **Returns to the caller before the previous item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |
| `to` | Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (e.g., before the `slid.coreui.carousel` event occurs). |
{{< /bs-table >}}

### Events

CoreUI for Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

- `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
- `relatedTarget`: The DOM element that is being slid into place as the active item.
- `from`: The index of the current item
- `to`: The index of the next item

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `slid.coreui.carousel` | Fired when the carousel has completed its slide transition. |
| `slide.coreui.carousel` | Fires immediately when the `slide` instance method is invoked. |
{{< /bs-table >}}

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.coreui.carousel', event => {
  // do something...
})
```
## Customizing

### SASS variables

Variables for all carousels:

{{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}}

Variables for the [dark carousel](#dark-variant):

{{< scss-docs name="carousel-dark-variables" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Carousel" >}}
{{< /markdown >}}