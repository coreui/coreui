---
layout: docs
title: Bootstrap Footer
description: Bootstrap Footer is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.
group: components
aliases:
  - "/components/footer/"
toc: true
---

<style>
.cd-example {
  display:flex;
  flex-direction: column;
}
</style>

## How it works

Here's what you need to know before getting started with the aside menu:

- Bootstrap footer requires a wrapping `.footer`.

## Examples

{{< example >}}
<footer class="footer">
  <div>
    <a href="https://coreui.io">CoreUI</a>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <a href="https://coreui.io">CoreUI</a>
  </div>
</footer>
{{< /example >}}

## Customizing

### SASS

#### Variables
{{< scss-docs name="footer-variables" file="scss/_variables.scss" >}}

### CSS Vars
{{< css-vars-docs file="scss/_footer.scss" >}}
