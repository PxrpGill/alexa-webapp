# PostCSS Mixins

Defined in `src/shared/styles/mixins/`.

## responsive

```
@mixin responsive <property | --var>, <mobile-px>, <desktop-px>;
```

Two usage patterns:

| Pattern | Example | Output |
|---------|---------|--------|
| CSS property | `@mixin responsive width, 20, 30;` | Sets `width` at each breakpoint |
| CSS custom property | `@mixin responsive --gap, 10, 20;` | Sets `--gap` at each breakpoint |

One-arg shorthand: `@mixin responsive height, 390;` uses 390 for all breakpoints.

Both args in px — the mixin divides by the corresponding scale factor (3.75, 14.4, 14.41) and emits `calc(...rem / factor)` at each breakpoint.

## Typography mixins

`h1`–`h6`, `b1`–`b4`, `button` — each sets `font-size` responsively + `line-height` / `font-weight`.

## transition

```
@mixin transition <property>, <duration>;
@mixin transitionOptions <duration>;
```

Uses `--move-in-screen` CSS var as easing function.

## Breakpoint vars (available everywhere)

```
$mobile: 767px
$small-desktop: 1441px
$desktop: 1920px
```

Usage: `@media (max-width: $mobile) { ... }`

## Import

`@import "shared/styles";` for global CSS files. Mixins are auto-loaded by `postcss-mixins` from `shared/styles/mixins/`.

Full docs: `docs/postcss-mixins.md`
