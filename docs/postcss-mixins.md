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

Миксины в `typography.css`:

| Миксин | Где использовать |
|--------|-----------------|
| `@mixin h1` | Герой, первый экран |
| `@mixin h2` | Заголовки секций |
| `@mixin h3` | Подзаголовки |
| `@mixin h4` | Заголовки карточек |
| `@mixin h5` | Выделенный текст |
| `@mixin h6` | Заголовки поменьше |
| `@mixin b1` | Основной текст |
| `@mixin b2` | Второстепенный текст |
| `@mixin b3` | Мелкий текст |
| `@mixin b4` | Самый мелкий (жирный) |
| `@mixin button` | Кнопки |

```css
.card {
    @mixin h3;
    @mixin responsive padding, 20, 30;
}
```

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
