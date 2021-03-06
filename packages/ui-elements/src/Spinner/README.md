---
describes: Spinner
---

### Choose from four sizes and add margin as needed

The `size` prop allows you to select from `x-small`, `small`, `medium` and `large`
-sized spinners. Margin can be added as needed using the `margin` prop.

```js
---
example: true
---
<div>
  <Spinner title="Loading" size="x-small" />
  <Spinner title="Loading" size="small" margin="0 0 0 medium" />
  <Spinner title="Loading" margin="0 0 0 medium" />
  <Spinner title="Loading" size="large" margin="0 0 0 medium" />
</div>
```

### Different color schemes for use with light and dark backgrounds

The Spinner component defaults to `lightBg`. However, there is also an `inverse`
color scheme designed to be more visible on dark backgrounds.

```js
---
example: true
background: 'checkerboard-inverse'
---
<Spinner title="Loading" variant="inverse" />
```

### Internet Explorer

As of mid-2016, Internet Explorer doesn't support animations inside inline SVGs.
IE users will simply see a rotating circle, minus the "morphing" of the spinner.
