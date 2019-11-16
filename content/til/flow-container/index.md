---
title: Using a flow container to manage vertical rhythm
date: "2019-16-11"
---

```css
  .flow {
    --flow-space: 1em;
  }

  .flow > * + * {
    margin-top: 1em; /* Fallback for browsers without custom property support */
    margin-top: var(--flow-space);
  }
```

<!-- end -->

- This method allows you to set vertical rhythm only when you want it, rather than blindly applying it a `p` element, or similar
- Allows changing the custom property to increase/decrease spacing between elements where applicable

I've used a less specific snippet to this in the past, and I regret it as I often found myself overwriting it:

```css
  p + p {
    margin-top: 1em;
  }
```

By using a parent container to handle the styling, it keeps the code more DRY as it will only be used when wanted.


Inspired by [Andy Bell](https://24ways.org/2018/managing-flow-and-rhythm-with-css-custom-properties/)
