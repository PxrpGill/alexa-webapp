---
name: styling-conventions
description: "PostCSS + CSS modules setup, responsive mixin, breakpoints, and typography mixins for alexa-webapp"
metadata: 
  node_type: memory
  type: project
  originSessionId: 90c5047f-9eca-470a-9225-e7ab3eafc4fe
---

PostCSS with CSS modules (`.module.css`). Plugins: import, mixins, simple-vars, nested, autoprefixer.

**Import global styles in any CSS file:**
```css
@import "shared/styles";
```
This auto-loads all mixins — no separate mixin imports needed.

**Responsive mixin (core tool):**
```css
@mixin responsive <property | --var>, <mobile-px>, <desktop-px>;
/* Examples: */
@mixin responsive font-size, 16, 24;
@mixin responsive --gap, 10, 20;
@mixin responsive height, 390;   /* single arg = same for all breakpoints */
```
Emits `calc(…rem)` at each breakpoint using scale factors: 3.75 (mobile), 14.4 (small-desktop), 14.41 (desktop).

**Breakpoint vars:**
```css
$mobile: 767px          /* ≤ 767px */
$small-desktop: 1441px  /* 768px–1441px */
$desktop: 1920px        /* ≥ 1442px */

/* Usage: */
@media (max-width: $mobile) { … }
```

**Typography mixins:** `h1`–`h6`, `b1`–`b4`, `button` — set font-size responsively + line-height/weight.

**Transition mixins:**
```css
@mixin transition <property>, <duration>;
@mixin transitionOptions <duration>;
```
Uses `--move-in-screen` CSS var as easing.

Full docs: `docs/postcss-mixins.md`

**How to apply:** Always use `@mixin responsive` instead of hard-coded px values for anything that needs to scale across breakpoints. Use `$mobile`/`$small-desktop` vars in media queries — never raw pixel values.
