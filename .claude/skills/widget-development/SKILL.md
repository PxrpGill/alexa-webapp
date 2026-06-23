---
name: widget-development
description: "Use this skill WHENEVER you're about to create, build, or develop a new widget, section, or block component. Covers folder structure, TypeScript patterns, styling conventions, and project consistency. Trigger on: 'create a widget', 'make a section', 'build a block', 'new component', 'add a card/slider/form', or any time you're developing a visual feature that will be part of the page layout."
compatibility: "Feature-Sliced Design project structure; Next.js; PostCSS with @mixin responsive; CSS modules"
---

# Widget Development Guide

Use this skill whenever you're developing a new visual component (widget, section, block). It keeps your work aligned with the project's patterns and style.

## Pre-Development Checklist

Before you start coding, answer these three questions:

1. **Widget name** — What's a descriptive kebab-case name? (`hero-slider`, `price-comparison`, `testimonial-card`)
2. **Purpose** — Is it a section that wraps content, a reusable card, a slider? (Affects folder structure)
3. **Complexity** — Does it have state? Sub-components? Context shared across parts? (Affects patterns you'll need)

## Folder Structure (Copy-Paste Ready)

```
widgets/<widget-name>/
├── index.tsx              # Main component (add "use client" if needed)
├── index.module.css       # All styles here, scoped to widget
├── types/
│   └── <widget-name>.types.ts    # Prop interfaces (separate file, not in component)
├── ui/                    # Sub-components (one folder per)
│   └── <sub-component>/
│       ├── index.tsx
│       └── index.module.css
├── models/                # Optional: contexts, constants, hooks
│   └── <widget-name>-context.tsx # If you need shared state
└── hooks/                 # Optional: custom hooks (mark with "use client")
```

## Step 1: Create Types First

**File:** `types/<widget-name>.types.ts`

This file defines ALL the props your widget receives. Keep it separate from the component — never inline types into the component file.

```typescript
export type <WidgetName>Props = {
  title?: string;
  items?: ItemType[];
  onSelect?: (id: string) => void;
  // Add your props here
};

export type ItemType = {
  id: string;
  label: string;
  // Define any child types here
};
```

**Why separate?** Views import your types to create constants in their `models/` folders. This typing-from-the-outside pattern keeps data flow predictable.

## Step 2: Write the Component

**File:** `index.tsx`

```tsx
'use client';  // ONLY if using hooks, state, context, or browser APIs

import css from './index.module.css';
import type { <WidgetName>Props } from './types/<widget-name>.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import SubComponent from './ui/sub-component';

export default function <WidgetName>({
  title,
  items,
  className,
}: <WidgetName>Props & PropsWithClassName) {
  return (
    <AnimationWrapper as="section" className={`${css.root} ${className}`.trim()}>
      <div className="container">
        <h2 className={css.title}>{title}</h2>
        <div className={css.content}>
          {items?.map((item) => (
            <SubComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
}
```

**Key patterns:**
- Import types as `import type { ... }`
- Use `PropsWithClassName` for optional spacing from parent
- Wrap with `AnimationWrapper` (scroll-triggered reveal)
- Use `.container` inside for max-width centering + responsive padding
- Combine class names: `${css.root} ${className}`.trim()` (avoids double spaces)

## Step 3: Style with Responsive Mixin

**File:** `index.module.css`

Always use `@mixin responsive` for spacing. Never hardcode pixel sizes for layout.

```css
@import "shared/styles";  /* Gives you all mixins, breakpoints, variables */

.root {
  @mixin responsive padding-top, 30, 80;    /* mobile: 30px → desktop: 80px */
  @mixin responsive padding-bottom, 40, 100;
}

.title {
  @mixin h3;  /* Use h1–h6 for headers, b1–b4 for body text */
  @mixin responsive margin-bottom, 16, 32;
}

.content {
  @mixin responsive gap, 20, 47;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $small-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.item {
  @mixin transition opacity;  /* Smooth hover effects */
}

.item:hover {
  opacity: 0.8;
}
```

**Styling rules:**
- `@mixin responsive <property>, <mobile>, <desktop>` — always use this, never hardcoded px
- Typography: `@mixin h1;` to `@mixin h6;` for headers, `@mixin b1;` to `@mixin b4;` for body
- Breakpoints: `$mobile: 767px`, `$small-desktop: 1441px`, `$desktop: 1920px`
- Animations: `@mixin transition <prop>;` (default 0.3s), `@mixin transitionOptions;` for timing-function
- Global `.container` class handles centering — use it inside your root

## Step 4: Handle State (If Needed)

### Simple state? Use `useState`

```tsx
'use client';

import { useState } from 'react';

export default function <WidgetName>() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    // ...
  );
}
```

### Complex state across sub-components? Use Context

**File:** `models/<widget-name>-context.tsx`

```tsx
'use client';

import { createContext, useContext, useState } from 'react';

type ContextValue = {
  selectedId: string;
  selectId: (id: string) => void;
};

const <WidgetName>Context = createContext<ContextValue | null>(null);

export function <WidgetName>Provider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <<WidgetName>Context.Provider value={{ selectedId, selectId: setSelectedId }}>
      {children}
    </<WidgetName>Context.Provider>
  );
}

export function use<WidgetName>Context() {
  const ctx = useContext(<WidgetName>Context);
  if (!ctx) throw new Error('use<WidgetName>Context must be used within <WidgetName>Provider');
  return ctx;
}
```

Then wrap your component:
```tsx
export default function <WidgetName>() {
  return (
    <<WidgetName>Provider>
      <div>{/* Sub-components can now use context */}</div>
    </<WidgetName>Provider>
  );
}
```

Sub-components access it with: `const { selectedId, selectId } = use<WidgetName>Context();`

## Step 5: Sub-Components (If Needed)

Each sub-component lives in its own folder under `ui/`:

**File:** `ui/sub-component/index.tsx`

```tsx
import css from './index.module.css';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

type SubComponentProps = {
  label: string;
  value?: string;
} & PropsWithClassName;

export default function SubComponent({ label, value, className }: SubComponentProps) {
  return (
    <div className={`${css.root} ${className}`.trim()}>
      <span>{label}</span>
    </div>
  );
}
```

**File:** `ui/sub-component/index.module.css`

```css
@import "shared/styles";

.root {
  @mixin responsive padding, 12, 24;
  /* ... */
}
```

Sub-components also:
- Have their own `index.module.css`
- Accept `className` prop for spacing from parent
- Are imported from `./ui/<name>/` in main component

## Step 6: SVG Icons (If Needed)

```tsx
import ArrowSVG from '@/public/icons/arrow.svg';

// Use directly
<ArrowSVG className={css.icon} />
```

In CSS:
```css
.icon {
  width: 24px;
  height: 24px;
}

.icon path {
  stroke: var(--color-accent);
}
```

## Development Checklist

As you build, make sure you're hitting these marks:

- [ ] Types are in `types/` folder, NOT in component file
- [ ] Component has `"use client"` if using hooks/state/context
- [ ] Imports: `css from './index.module.css'`, types as `import type`
- [ ] Component wrapped with `AnimationWrapper`
- [ ] `.container` class used for centering + padding
- [ ] Props extend `PropsWithClassName` if applicable
- [ ] All spacing uses `@mixin responsive` (no hardcoded px sizes)
- [ ] Typography uses `@mixin h1–h6` or `@mixin b1–b4` or `@mixin text-*`
- [ ] CSS module: classes combine correctly with `.trim()`
- [ ] Biome checks pass: single quotes, trailing commas, semicolons
- [ ] Array `.map()` has `key={id}`
- [ ] Sub-components in `ui/` folders if needed
- [ ] Context in `models/` if needed
- [ ] No `useImportType` violations (types use `import type`)

## After Development

Once your widget is built:

1. **Run Biome** → `pnpm lint:fix` (fixes formatting)
2. **Type check** → `tsc --noEmit` (catches type errors)
3. **Run `/code-review`** → Verify it follows FSD patterns
4. **Visual check** → View it in the browser at `/pnpm dev` to ensure it looks right

## Common Imports (Copy-Paste Ready)

```tsx
// Always these
import css from './index.module.css';
import type { WidgetNameProps } from './types/widget-name.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

// If using shared UI components
import Button from '@/shared/ui/button';
import Accordion from '@/shared/ui/accordion';
import Picture from '@/shared/ui/picture';

// SVG icons
import ArrowSVG from '@/public/icons/arrow.svg';
import CheckSVG from '@/public/icons/check.svg';
```

## Visual Design System

This is how the app looks and feels. Follow these rules so every new widget feels native to the design.

### Color Palette

```css
/* Backgrounds */
--color-white-0: #fff       /* Card / block backgrounds */
--color-white-1: #f8f6f7    /* Page background (set on html) */
--color-white-2: #eaeaea    /* Subtle borders, dividers */

/* Text */
--color-black-1: #2b2c2c    /* Default body text */
--color-black-2: #242424    /* Slightly darker text */
--color-black-3: #515151    /* Secondary text */
--color-gray-2:  #757575    /* Muted / caption text */
--color-gray-3:  #878787    /* Placeholder / disabled */

/* Brand */
--color-green-1: #45a771    /* PRIMARY — buttons, accents, highlighted cards */
--color-green-4: #183826    /* DARK — card titles, headings on white */

/* Accent */
--color-orange-1: #ff8562   /* Highlight / emphasis (use sparingly) */
```

### Card Pattern (Used Everywhere)

Cards always follow this visual formula:

```css
.card {
  @mixin responsive border-radius, 30, 30;  /* always 30px */
  @mixin responsive padding-inline, 20, 40;
  @mixin responsive padding-block, 20, 40;

  background-color: var(--color-white-0);   /* white by default */

  /* Title on white card: dark green */
  /* Body text: inherits --color-black-1 */
}

/* Accent card variant (green background) */
.card.green {
  background-color: var(--color-green-1);

  /* On green card, all text becomes white */
  .title, .description {
    color: var(--color-white-0);
  }
}
```

**Rules:**
- Cards are **always white** (`--color-white-0`) unless it's an accent card
- Accent cards use **green** (`--color-green-1`) with **white text**
- `border-radius` is always **30px** (use `@mixin responsive border-radius, 30, 30`)
- No `box-shadow` — the design uses flat cards on a light background
- No arbitrary colors — only use CSS variables from the palette

### Typography Colors

```css
/* On white/light background: */
.sectionTitle  { color: var(--color-green-4); }   /* Main headings */
.cardTitle     { color: var(--color-green-4); }   /* Card headings */
.body          { /* inherits --color-black-1 */ }  /* Body text */
.caption       { color: var(--color-gray-2); }    /* Helper text */

/* On green background: */
.title, .description { color: var(--color-white-0); }
```

### Button Variants

Import `Button` from `@/shared/ui/button`. It has 3 variants:

```tsx
<Button variant="green">       {/* Filled green — primary CTA */}
<Button variant="transparent"> {/* Outlined green — secondary action */}
<Button variant="white">       {/* White fill — on dark/green backgrounds */}
```

**Hover states (handled by shared Button):**
- `green` → hover becomes transparent with green border
- `transparent` → hover becomes filled green
- `white` → hover fades to 0.6 opacity

### Hover & Transition Patterns

Text links / interactive items:
```css
.link {
  @mixin transition color;   /* color change on hover, 0.3s */
}

.link:hover {
  color: var(--color-green-1);
}
```

Background transitions:
```css
.item {
  @mixin transition background-color;
}
```

Never use `transition: all` on cards — only on specific properties.

### Section Background Colors

Sections use the **page background** (`--color-white-1`) as their own background (transparent), and **cards inside** get `--color-white-0`. Exceptions:

- A section that IS itself a card-style block uses `--color-white-0`
- One-off accent sections (calls-to-action) use `--color-green-1`

### Easing Curve

```css
/* Use this for all animations that "slide in" */
animation-timing-function: var(--move-in-screen);   /* cubic-bezier(0.4, 0, 0.2, 1) */
```

### Quick Visual Checklist

Before finishing styles, verify:

- [ ] All colors from CSS variables (no hardcoded hex)
- [ ] `border-radius: 30px` on cards — via `@mixin responsive border-radius, 30, 30`
- [ ] No `box-shadow` unless existing design has it
- [ ] Section/card background: `--color-white-0` (card) or transparent (section)
- [ ] Titles: `color: var(--color-green-4)` on white; `color: var(--color-white-0)` on green
- [ ] Body text inherits default (`--color-black-1`)
- [ ] Hover transitions use `@mixin transition <property>`, not `transition: all`
- [ ] Buttons use `<Button variant="green|transparent|white">` from shared/ui

---

## Reference Patterns

When in doubt, look at these real examples in the codebase:
- **BrickworkSection** — White + green accent card variants, `color-green-4` titles
- **TitleDescriptionSlider** — Simple responsive layout, sub-components
- **FaqSection** — List rendering, Accordion integration, AnimationWrapper
- **HeroSliderSection** — State management, pagination, conditionally styled slides
- **HealthForFamily** — Tabs with context state
- **PriceSection** — Complex context state with branch/filter selectors

Copy their folder structure and patterns — consistency is the goal.

## Why These Patterns Matter

- **Separate types** → Views can type their constants against your widget props
- **AnimationWrapper** → Scroll-triggered animations for free
- **Responsive mixin** → Consistent breakpoint handling across the app
- **PropsWithClassName** → Parents can space your widget without breaking it
- **CSS modules** → No style conflicts, scoped classes
- **Context over prop-drilling** → Cleaner sub-component trees when state gets complex

Follow these patterns and your widget will fit seamlessly into the app's design system.
