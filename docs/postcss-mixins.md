# PostCSS-миксины

Миксины определены в `src/shared/styles/mixins/`. Подключаются через `postcss-mixins` и `postcss-import` (загрузка из `shared/styles/`).

## responsive

Адаптивное значение свойства: пересчитывает `px → rem` под каждый брейкпоинт.

```
@mixin responsive <свойство | --css-переменная>, <mobile-px>, <desktop-px>;
```

### Use case 1: CSS-свойство

```css
.foo {
    @mixin responsive width, 20, 30;
    @mixin responsive gap, 10, 15;
    @mixin responsive padding-inline, 30, 60;
}
```

Генерирует:
```css
.foo {
    width: calc(30rem / 14.41);   /* big-desktop (1442px+)   */
    width: calc(30rem / 14.4);    /* small-desktop (768–1441) */
    width: calc(20rem / 3.75);    /* mobile (≤767px)          */
}
```

### Use case 2: CSS-переменная

```css
.foo {
    @mixin responsive --gap, 10, 20;
    @mixin responsive --shadow, 15, 30;
}
```

Генерирует:
```css
.foo {
    --gap: calc(20rem / 14.41);   /* big-desktop */
    --gap: calc(20rem / 14.4);    /* small-desktop */
    --gap: calc(10rem / 3.75);    /* mobile */
}
```

Используется когда одно и то же значение нужно в нескольких свойствах или вложенных селекторах.

### Только мобильное значение

Можно передать один аргумент — `desktop-px` будет равен `mobile-px`:

```css
.foo {
    @mixin responsive height, 390;  /* 390 на все экраны */
}
```

## Шпаргалка: миксины типографики

Все миксины в `typography.css`. Каждый задаёт `font-size`, `line-height` и `font-weight` — не нужно прописывать их вручную.

### text-* шкала (основная)

| Миксин | Mobile → Desktop | Weight | Line-height | Использование |
|--------|-----------------|--------|-------------|---------------|
| `@mixin text-xs` | 12 → 12 | 600 | 1.50 | Бейджи, лейблы |
| `@mixin text-sm` | 14 → 14 | 400 | 1.40 | Подписи, вторичный текст |
| `@mixin text-base` | 14 → 16 | 400 | 1.56 | Основной текст (самый частый) |
| `@mixin text-md` | 13 → 18 | 400 | 1.55 | Крупный основной текст |
| `@mixin text-lg` | 16 → 22 | 400 | 1.40 | Навигация, UI-элементы |
| `@mixin text-xl` | 16 → 24 | 400 | 1.35 | Заголовки карточек |
| `@mixin text-2xl` | 20 → 26 | 600 | 1.25 | Подзаголовки секций |
| `@mixin text-3xl` | 24 → 32 | 600 | 1.20 | Заголовки секций |
| `@mixin text-4xl` | 22 → 36 | 600 | 1.20 | Заголовки страниц |
| `@mixin text-5xl` | 20 → 40 | 600 | 1.10 | Крупные заголовки |
| `@mixin text-6xl` | 26 → 48 | 600 | 1.00 | Героические заголовки |
| `@mixin text-7xl` | 64 → 64 | 600 | 0.96 | Дисплейный текст |
| `@mixin button` | 15 → 15 | 600 | 1.50 | Кнопки |

```css
.card__title {
    @mixin text-2xl;
}

.card__body {
    @mixin text-base;
    @mixin responsive margin-block-start, 12, 20;
}
```

### h1–h6 / b1–b4 (алиасы, обратная совместимость)

Старые миксины продолжают работать — они ссылаются на `text-*`:

| Алиас | → text-* | Алиас | → text-* |
|-------|---------|-------|---------|
| `@mixin h1` | `text-7xl` | `@mixin b1` | `text-md` |
| `@mixin h2` | `text-6xl` | `@mixin b2` | `text-base` |
| `@mixin h3` | `text-5xl` | `@mixin b3` | `text-sm` |
| `@mixin h4` | `text-4xl` | `@mixin b4` | `text-xs` |
| `@mixin h5` | `text-xl` | | |
| `@mixin h6` | `text-2xl` | | |

В новом коде использовать `text-*`. Алиасы `h/b` — только для уже написанного кода.

## transition, transitionOptions

```css
.button {
    @mixin transition background-color;
    @mixin transition opacity, 0.5s;
    @mixin transitionOptions;           /* кастомная кривая из --move-in-screen */
    @mixin transitionOptions 0.5s;
}
```

Используют CSS-переменную `--move-in-screen` как функцию плавности.

## Переменные брейкпоинтов (доступны везде)

| Переменная | Значение |
|-----------|---------|
| `$mobile-min` | 375px |
| `$mobile` | 767px |
| `$small-desktop-min` | 768px |
| `$small-desktop` | 1441px |
| `$desktop-min` | 1442px |
| `$desktop` | 1920px |

Можно использовать напрямую в `@media`:

```css
@media (max-width: $mobile) { ... }
@media (min-width: $small-desktop-min) { ... }
```

## Scale-факторы (только внутри `responsive`)

| Переменная | Для какого брейкпоинта |
|-----------|----------------------|
| `$mobile-scale-factor` | 3.75 (mobile) |
| `$standard-desktop-scale-factor` | 14.4 (small-desktop) |
| `$big-desktop-scale-factor` | 14.41 (big-desktop) |

## Подключение

```css
/* импорт из shared/styles/ работает благодаря postcss-import */
@import "shared/styles";

.my-block {
    @mixin responsive padding, 20, 30;
}
```

Все миксины и переменные глобальны — импорт нужен только для `reset.css`, `colors.css`, `global.css`. Миксины подхватываются `postcss-mixins` автоматически.
