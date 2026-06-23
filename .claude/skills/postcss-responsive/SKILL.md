---
name: postcss-responsive
description: Use when writing CSS for this project — covers @mixin responsive for px→rem scaling, breakpoint variables, typography mixins (h1–h6, b1–b4), and transition helpers. Trigger: any time you are about to write a px size, font-size, padding, margin, gap, or border-radius in a .module.css file.
---

# PostCSS Responsive Mixins

Reference for `src/shared/styles/mixins/`. All sizing in this project goes through these mixins — not raw px values.

## Import

```css
@import "shared/styles";
```

Required once per CSS file. Mixins are auto-loaded by `postcss-mixins` — no separate mixin imports needed.

---

## @mixin responsive

Converts design px values into responsive `calc(rem)` at three breakpoints.

```
@mixin responsive <property | --var>, <mobile-px>, <desktop-px>;
```

Scale factors applied automatically:

| Range | Factor |
|-------|--------|
| ≥ 1442px (big-desktop) | 14.41 |
| 768–1441px (small-desktop) | 14.4 |
| ≤ 767px (mobile) | 3.75 |

### CSS property variant

```css
.card {
    @mixin responsive padding-block, 20, 40;
    @mixin responsive gap, 12, 24;
    @mixin responsive border-radius, 16, 30;
}
```

### CSS custom property variant

Use when the same value is needed in multiple rules or child selectors:

```css
.pagination {
    @mixin responsive --radius, 8, 8;
    @mixin responsive --border, 1.5, 1.5;

    border: var(--border) solid currentColor;
    border-radius: var(--radius);

    &:hover {
        outline: var(--border) solid transparent;
    }
}
```

### Same value on all breakpoints

Always pass both args explicitly — there is no single-arg shorthand:

```css
/* ✅ correct */
@mixin responsive height, 190, 190;

/* ❌ broken — $desktop-size is undefined */
@mixin responsive height, 190;
```

---

## Breakpoint variables

```css
@media (max-width: $mobile) { … }            /* ≤ 767px */
@media (max-width: $small-desktop) { … }     /* ≤ 1441px */
@media (min-width: $small-desktop-min) { … } /* ≥ 768px */
@media (min-width: $desktop-min) { … }       /* ≥ 1442px */
```

Never use raw px in `@media` — always `$variable`.

---

## Typography mixins

Each sets `font-size` via `@mixin responsive` + `line-height` + `font-weight`. Never set `font-size` manually on text elements.

| Mixin | Typical use | mobile → desktop px |
|-------|-------------|----------------------|
| `@mixin h1` | Hero | 64 → 64 |
| `@mixin h2` | Section headings | 26 → 48 |
| `@mixin h3` | Sub-headings | 20 → 40 |
| `@mixin h4` | Card titles | 22 → 36 |
| `@mixin h5` | Highlighted text | 16 → 24 |
| `@mixin h6` | Smaller headings | 20 → 20 |
| `@mixin b1` | Body copy | 13 → 18 |
| `@mixin b2` | Secondary text | 14 → 16 |
| `@mixin b3` | Small text | 14 → 14 |
| `@mixin b4` | Tiny / bold labels | 12 → 12 |
| `@mixin button` | Button labels | 15 → 15 |

```css
.card__title {
    @mixin h4;
}

.card__body {
    @mixin b1;
    @mixin responsive margin-block-start, 12, 20;
}
```

---

## Transition mixins

```css
/* single property, default 0.3s */
@mixin transition background-color;

/* single property, custom duration */
@mixin transition opacity, 0.5s;

/* set timing-function only, then list properties manually */
@mixin transitionOptions;
transition-property: width, height, opacity;

/* with custom duration */
@mixin transitionOptions 0.5s;
```

Easing: `--move-in-screen` → `cubic-bezier(0.4, 0, 0.2, 1)`.

---

## Common mistakes

| Wrong | Right |
|-------|-------|
| `width: 30px` | `@mixin responsive width, 20, 30` |
| `font-size: 24px` | `@mixin h5` or `@mixin responsive font-size, 16, 24` |
| `@media (max-width: 767px)` | `@media (max-width: $mobile)` |
| `@mixin responsive height, 390` | `@mixin responsive height, 390, 390` |
| `transition: opacity 0.3s var(--move-in-screen)` | `@mixin transition opacity` |
| `@mixin responsive --gap, 10, 20` then `gap: var(--gap)` in parent only | CSS var variant is for multi-use across selectors; use property variant if consumed once |
