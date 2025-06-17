---
layout: docs
title: Alerts
description: Bootstrap alerts give contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.
group: components
toc: true
bootstrap: true
other_frameworks: alert
---

## Examples

Bootstrap alerts can accommodate text of any length and feature an optional close button. To style an alert, apply one of the required contextual classes (e.g., .alert-success). For inline dismissal, utilize the [alerts JavaScript plugin](#dismissing).

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  Here's a straightforward example of {{ if eq .name "info" }}an{{ else }}a{{ end }} {{ .name }} alert—take a look!
</div>{{- end -}}
{{< /alerts.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

### Live example

Click the button below to show an alert (initially hidden with inline styles), then dismiss (and destroy) it using the built-in close button.

{{< example stackblitz_add_js="true" >}}
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show alert with message</button>
{{< /example >}}

The JavaScript below initiates our live alert demo:
{{< js-docs name="live-alert" file="docs/assets/js/partials/snippets.js" >}}

### Link color

Utilize the `.alert-link` utility class to instantly create matching colored links within any alert.
{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert alert-{{ .name }}" role="alert">
  Here's a straightforward example of {{ if eq .name "info" }}an{{ else }}a{{ end }} {{ .name }} alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>{{ end -}}
{{< /alerts.inline >}}
{{< /example >}}

### Additional content

Bootstrap alerts can also include additional HTML elements such as headings, paragraphs, and dividers.

{{< example >}}
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Great job! </h4>
  <p>Awesome! You've successfully read this crucial alert message. This example text will be slightly longer to demonstrate how spacing in an alert interacts with this type of content.</p>
  <hr>
  <p class="mb-0">Whenever necessary, make sure to use margin utilities to keep everything organized and neat.</p>
</div>
{{< /example >}}

### Icons

In a similar vein, you can utilize [flexbox utilities]({{< docsref "/utilities/flex" >}}) and [CoreUI Icons]({{< param icons >}}) for crafting alerts that include icons. Based on your choice of icons and the content involved, you might consider incorporating additional utilities or custom styling.

{{< example >}}
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
{{< /example >}}

If you require multiple icons for your alerts, think about utilizing additional CoreUI Icons and creating a local SVG sprite. This method allows for easy and repeated reference to the same icons.

{{< example >}}
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="icon-warning" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"/>
  </symbol>
  <symbol id="icon-check" viewBox="0 0 512 512">
    <path fill="var(--ci-primary-color, currentColor)" d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" class="ci-primary"/>
    <polygon fill="var(--ci-primary-color, currentColor)" points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" class="ci-primary"/>
  </symbol>
  <symbol id="icon-info" viewBox="0 0 512 512">
    <rect width="34.924" height="34.924" x="256" y="95.998" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M16,496H496V16H16ZM48,48H464V464H48Z" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z" class="ci-primary"/>
  </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg class="flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#icon-info"/></svg>
  <div>
    A straightforward alert with an icon
  </div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#icon-check"/></svg>
  <div>
    A straightforward success alert with an icon
  </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#icon-warning"/></svg>
  <div>
    A straightforward warning alert with an icon
  </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#icon-warning"/></svg>
  <div>
    A straightforward danger alert with an icon
  </div>
</div>
{{< /example >}}

### Solid

Use solid alerts to create high-contrast notifications by applying background utility classes. This variant removes the default alert styling and relies on the utility classes for full-color backgrounds and text.

To create a solid alert, remove the `alert-*` contextual class (like alert-primary) and apply any of the `bg-*` utility classes (e.g. `bg-primary`, `bg-danger`, `bg-success`, etc.). Make sure to also add the appropriate `text-*` class to ensure good contrast and accessibility.

{{< example >}}
{{< alerts.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="alert bg-{{ .name }} {{ if ne .name "light" }}text-white{{ end }}" role="alert">
  Here's a straightforward example of solid {{ .name }} alert—take a look!
</div>{{- end -}}
{{< /alerts.inline >}}
{{< /example >}}

### Dismissing

Using the JavaScript plugin, you can remove any alert.

- Ensure that you've loaded the Bootstrap alert plugin or the compiled CoreUI JavaScript.
- Add a [close button]({{< docsref "/components/close-button/" >}}) along with the `.alert-dismissible` class, which provides extra padding to the right of the alert component and positions the `.close` button.
- On the close button, include the `data-coreui-dismiss="alert"` attribute, which triggers the JavaScript functionality. You must use the `<button>` element with it for proper behavior across all devices.
- To animate alerts during dismissal, you need to add the `.fade` and `.show` classes.

You can observe this in action with a live demonstration:

{{< example >}}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Wow, you might want to take a look at some of the fields listed below.
  <button type="button" class="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}

{{< callout warning >}}
When the Bootstrap alert is dismissed, it is fully removed from the page structure. If a keyboard user closes the alert using the close button, their focus may be unexpectedly lost, and depending on the browser, it might be reset to the beginning of the page or document. Therefore, we recommend implementing additional JavaScript that listens for the `closed.coreui.alert` event and programmatically sets `focus()` to the most suitable location on the page. If you plan to move focus to a typically non-interactive element, ensure you add `tabindex="-1"` to that element.
{{< /callout >}}

## JavaScript behavior

{{< bootstrap-compatibility >}}

### Initialize

Set up elements as Bootstrap alerts

```js
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new coreui.Alert(element))
```

{{< callout info >}}
To solely dismiss the Bootstrap alert, you do not need to manually initialize the component via the JS API. By using `data-coreui-dismiss="alert"`, the component will initialize automatically and dismiss properly.

See the [triggers](#triggers) section for more details.
{{< /callout >}}

### Triggers

{{% js-dismiss "alert" %}}

**Note that closing an alert will remove it from the DOM.**

### Methods

You can create an alert instance using the alert constructor, for example:

```js
const cAlert = new coreui.Alert('#myAlert')
```

This sets up an alert to listen for click events on descendant elements that have the `data-coreui-dismiss="alert"` attribute. (Not necessary when using the data-api’s auto-initialization.)

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `close` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before being removed. |
| `dispose` | Destroys an element's alert and removes any stored data associated with the DOM element. |
| `getInstance` | A static method that allows you to retrieve the alert instance linked to a DOM element. For example: `coreui.Alert.getInstance(alert)`. |
| `getOrCreateInstance` | A static method that returns the alert instance associated with a DOM element or creates a new one if it hasn't been initialized. You can use it as follows: `coreui.Alert.getOrCreateInstance(element)`. |
{{< /bs-table >}}

Basic usage:

```js
const alert = coreui.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

### Events

CoreUI for Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `close.coreui.alert` | Triggers immediately when the `close` instance method is invoked. |
| `closed.coreui.alert` | Triggered when the alert has been closed and CSS transitions have finished. |
{{< /bs-table >}}

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.coreui.alert', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```

## Customizing

### CSS variables

Our Bootstrap alerts utilize local CSS variables on `.alert` for improved real-time customization. The values for the CSS variables are set using Sass, ensuring that Sass customization remains supported as well.

{{< scss-docs name="alert-css-vars" file="scss/_alert.scss" >}}

### SASS variables

{{< scss-docs name="alert-variables" file="scss/_variables.scss" >}}

### SASS mixin

{{< deprecated-in "4.3.0" >}}

Used alongside `$alert-variants` to create contextual modifier classes for our alerts.

{{< scss-docs name="alert-variant-mixin" file="scss/mixins/_alert.scss" >}}

### SASS loop

Loop that creates the modifier classes with the `alert-variant()` mixin.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Alert" >}}
{{< /markdown >}}