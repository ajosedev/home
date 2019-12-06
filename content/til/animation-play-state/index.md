---
title: animation-play-state
date: "2019-12-06"
---

How to use `animation-play-state` to start and stop animations.

<!-- end -->

Applying an animation conditionally to an element results in it jumping to its pre-animation state when the animation is not applied. By utilising `animation-play-state`, we can deal with the animation by **playing** and **pausing** it, rather than adding and removing it. This affords more control over animations while keeping their internal state.

I've demonstrated using `:hover` to start a animation without losing it's state on mouse leave in a [Codepen](https://codepen.io/ajosedev/pen/wvBaVja).

```css
  animation-play-state: running;
  animation-play-state: paused;
```

[Codepen](https://codepen.io/ajosedev/pen/wvBaVja)
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
