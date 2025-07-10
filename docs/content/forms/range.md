---
layout: docs
title: Range
description: Use our custom range inputs for consistent cross-browser styling and built-in customization.
group: forms
toc: true
bootstrap: true
other_frameworks: range
---

## Overview

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

{{< example >}}
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
{{< /example >}}

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

{{< example >}}
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
{{< /example >}}

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{{< example >}}
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
{{< /example >}}

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.

{{< example >}}
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
{{< /example >}}

## Output value

The value of the range input can be shown using the `output` element and a bit of JavaScript.

{{< example >}}
<label for="customRange4" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" value="50" id="customRange4">
<output for="customRange4" id="rangeValue" aria-hidden="true"></output>
<script>
  // This is an example script, please modify as needed
  const rangeInput = document.getElementById('customRange4');
  const rangeOutput = document.getElementById('rangeValue');
  // Set initial value
  rangeOutput.textContent = rangeInput.value;
  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
</script>
{{< /example >}}

## Customizing

### SASS variables

{{< scss-docs name="form-range-variables" file="scss/_variables.scss" >}}

{{< markdown >}}
{{< coreui-vs-bootstrap component="Form Range" >}}
{{< /markdown >}}