---
title: Code snippets w/ Gatsby
date: "2019-03-20"
---

How to use code snippets in excerpts of blog posts, using `gatsby-starter-blog`.

```html
<code>
  Samples
</code>
```
<!-- end -->

Add an `excerpt_separator` to `gatsby-config.js` plugins
```js
{
  resolve: `gatsby-transformer-remark`,
  options: {
    excerpt_separator: `<!-- end -->`,
  },
}
```

Add your chosen separator to the markdown file after the excerpt and your code sample
```md
Code snippet goes here
<!-- end -->
```

Retrieve the excerpt in `HTML` format with the GraphQL query
```
excerpt(format: HTML)
```
