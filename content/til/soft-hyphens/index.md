---
title: Soft hyphens (&shy;)
date: "2019-26-11"
---

Soft hyphens and the CSS `hyphens` property

<!-- end -->

There's a CSS property called `hyphens` which can help the browser break words across multiple lines and insert hyphens as necessary. However you can also suggest 'line break opportunities' to the browser using 'soft hyphens'. In HTML, these are written as `&shy;`.

The `&shy;` character is not rendered visibly.

```css
  .break-word {
    hyphens: auto; /* Lets the browser break words, but prioritises soft hyphens if present */
    hyphens: manual; /* Break only on predetermined hyphens */
    hyphens: none; /* Don't break words */
  }
```

There's also a `<wbr>` HTML element which can be used for suggesting line break opportunities, but this works a bit differently.


[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens)