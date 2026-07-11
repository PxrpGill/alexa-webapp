# Дизайн: таблица расписания врачей (doctors-schedules-section)

## Контекст

`widgets/doctors-schedules-section/` — существующий стаб-виджет (пустой `index.tsx`, недописанные типы в `types/doctor-schedules-section.types.ts`). Референс визуального стиля — таблица с полосатой заливкой строк и скруглёнными углами, где напротив каждого врача выводились дни недели, в которые он принимает.

Требуемое изменение: вместо списка дней напротив врача — общая строка-шапка с днями недели, а в ячейках под каждым днём — время приёма конкретного врача в этот день (или пусто, если не принимает).

## Решения по данным

- **Время приёма** — объект `{ start, end }`, а не готовая строка. Даёт типизированный доступ к границам интервала для будущей логики (сортировка, подсветка «сейчас приём» и т.п.) ценой чуть большего кода при рендере.
- **Пустой день** — явный `null` для каждого из 6 ключей (`Record<DayOfWeek, TimeSlot | null>`), а не отсутствие ключа в объекте. Компилятор требует все 6 полей у каждого врача — опечатка в названии дня или пропуск дня ловится на этапе тайпчека, а не рантайма.
- **Дни недели** — 6 фиксированных значений, Пн–Сб. Воскресенье не включено: клиника по воскресеньям закрыта (см. `YANDEX_MAP_CONTENT`, `YANDEX_MAP_INFO_CARD` в `shared/config/global-constants.constats.ts`).

## Типы

`types/doctor-schedules-section.types.ts`:

```ts
export type DayOfWeek =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday';

export type TimeSlot = {
	start: string; // "09:00"
	end: string;   // "18:00"
};

export type DoctorScheduleTableRow = {
	fullname: string;
	schedule: Record<DayOfWeek, TimeSlot | null>;
};

export type DoctorSchedulesTableProps = {
	rows: DoctorScheduleTableRow[];
};

export type DoctorSchedulesSectionProps = {
	title?: string;
	rows: DoctorScheduleTableRow[];
} & PropsWithClassName;
```

## Константа подписей дней

`models/doctor-schedules-section.constants.ts`:

```ts
export const DAYS_OF_WEEK: { key: DayOfWeek; label: string }[] = [
	{ key: 'monday', label: 'Понедельник' },
	{ key: 'tuesday', label: 'Вторник' },
	{ key: 'wednesday', label: 'Среда' },
	{ key: 'thursday', label: 'Четверг' },
	{ key: 'friday', label: 'Пятница' },
	{ key: 'saturday', label: 'Суббота' },
];
```

Массив (а не просто union-тип) задаёт порядок колонок в одном месте — и строка-шапка, и рендер ячеек каждого врача идут по нему, так что порядок колонок не может разъехаться между местами рендера.

## Структура компонента

```
widgets/doctors-schedules-section/
├── index.tsx                                  # AnimationWrapper + DoctorSchedulesTable
├── index.module.css
├── types/doctor-schedules-section.types.ts
├── models/doctor-schedules-section.constants.ts   # DAYS_OF_WEEK
└── ui/
    └── doctor-schedules-table/
        ├── index.tsx
        └── index.module.css
```

`DoctorSchedulesTable`:
- Строка-шапка: первая ячейка пустая (под колонку ФИО), затем 6 ячеек с `DAYS_OF_WEEK[].label`.
- Одна строка на врача: первая ячейка — `fullname`, затем 6 ячеек — `schedule[day.key]`, отрендеренная как `${start}–${end}` либо пусто при `null`.

## Разметка и стили

CSS Grid, 7 колонок (1 под ФИО + 6 под дни), одинаковый `grid-template-columns` у шапки и у каждой строки врача. Полосатая заливка (alternating background) и скруглённые углы у первой/последней строки — как в исходном референсе; применяются только к строкам врачей, шапка — отдельный ряд без полосатости.

## Вне скопа

- Реальные данные о расписании (API) — сейчас всё моками, как и во всём проекте (см. CLAUDE.md).
- Логика «сейчас идёт приём» / подсветка текущего дня — не запрошена, но структура типов (`start`/`end` как отдельные поля) её не блокирует.
