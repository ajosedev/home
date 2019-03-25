---
title: Conditionally adding key/value to a JS Object
date: "2019-03-25"
---

Using logical operators with short-circuit evaluation

```js
{
  constantProperty: 'always',
  ...(condition && {key: value})
}
```
<!-- end -->

It's also possible to use the `||` operator:
```js
{
  constantProperty: 'always',
  ...(condition || {key: value})
}
```

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
