---
title: Choosing a random issue on Github using 'hub'
date: "2019-10-09"
---

How to get a random issue from Github when you're just not sure what to work on next:

```
hub issue | sort -R | head -n 1
```
<!-- end -->

This requires the [hub](https://github.com/github/hub) CLI.

Unfortunately, I'm still not sure on how to make it automatically assign to you.
