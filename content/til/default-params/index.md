---
title: JS default parameters
date: "2019-12-27"
---

You can use functions **and** previous parameters as defaults.

<!-- end -->

Later parameters can access the values of previous parameters in _their_ default.

```js
const doSomeMath = (x, xPlusOne = x + 1) {
  // ...
}
```

Additionally, a default parameter can call an already declared function. Note that a function declared inside the body will not work. I can't really think of a great example of this currently, other than a simple concatenation:

```js
const combineStrings = (s1, s2) => `${s1} ${s2}`;

const printUserDetails(first, last, full = combineStrings(first, last)) => {
  // ...
}
```

These can get surprisingly complex, so I've linked the MDN page below.

[Codepen](https://codepen.io/ajosedev/pen/wvBaVja)
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
