# Doctor Schedules Table Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `doctors-schedules-section` widget — a table with a weekday header row and, per doctor, a time range in each day's cell (or an empty cell if the doctor doesn't work that day) — and wire it into the existing `/raspisanievrachej` page.

**Architecture:** Two new type-safe data shapes (`DayOfWeek`, `TimeSlot`) drive a `DAYS_OF_WEEK` ordering constant and a `DoctorSchedulesTable` sub-component built with CSS Grid (7 columns: name + 6 weekdays). Rows alternate a dark-green / light-mint background inside a rounded, overflow-hidden card; the header row of weekday labels sits above that card. Mock data lives in the view's `models/` folder per this repo's data-flow convention.

**Tech Stack:** Next.js (App Router), TypeScript, CSS Modules + PostCSS `@mixin responsive`, Biome.

## Global Constraints

- All commands run from `src/` (per `CLAUDE.md`).
- Package manager: **pnpm** only.
- FSD dependency direction: `app → views → widgets → features → entities → shared`. This widget imports only from `shared`.
- CSS: always `import css from "./index.module.css"`; every px value goes through `@mixin responsive <property>, <mobile>, <desktop>` (see `postcss-responsive` skill) — no raw px in layout/spacing rules.
- No arbitrary hex colors — only the CSS variables in `shared/styles/colors.css` (`--color-green-1`, `--color-white-0`, `--color-black-1`, `--color-gray-2`, etc.), or a `color-mix()` derived from one of them.
- `PropsWithClassName` from `shared/types/props-with-classname.ts` for the section's `className` prop.
- No `"use client"` needed anywhere in this feature — no hooks, state, or browser APIs are used directly (matches `our-people-section`, which wraps the client-only `AnimationWrapper` without itself being a client component).
- **No test framework exists in this repo** (confirmed in `CLAUDE.md` and by inspection — no test script, no test files). Verification per task is: `pnpm exec tsc --noEmit` (repo-wide typecheck; currently clean, must stay clean) + `pnpm exec biome check <the files this task touched>` (scoped — a full `pnpm lint` currently reports ~1800 pre-existing errors across the repo unrelated to this feature; do not attempt to fix those, and do not use whole-repo lint as a gate). The final task adds a manual visual check in the browser.
- Quote style actually enforced by `biome.json`: single quotes for JS/TS strings, double quotes for JSX attributes, 2-space indentation, trailing commas, semicolons. Write new files in this style directly (verified: config-conformant new files pass `biome check` with zero errors).

---

### Task 1: Schedule types

**Files:**
- Modify: `src/widgets/doctors-schedules-section/types/doctor-schedules-section.types.ts`

**Interfaces:**
- Produces: `DayOfWeek`, `TimeSlot`, `DoctorScheduleTableRow`, `DoctorSchedulesTableProps`, `DoctorSchedulesSectionProps` — consumed by every later task.

- [ ] **Step 1: Replace the stub types file**

```ts
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export type TimeSlot = {
  start: string;
  end: string;
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

- [ ] **Step 2: Verify**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0 (this file has no consumers yet, so it can only fail on a syntax error in the file itself).

Run: `pnpm exec biome check src/widgets/doctors-schedules-section/types/doctor-schedules-section.types.ts`
Expected: `Checked 1 file... ` with 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/widgets/doctors-schedules-section/types/doctor-schedules-section.types.ts
git commit -m "feat: добавить типы расписания врачей"
```

---

### Task 2: Weekday order constant

**Files:**
- Create: `src/widgets/doctors-schedules-section/models/doctor-schedules-section.constants.ts`

**Interfaces:**
- Consumes: `DayOfWeek` (Task 1).
- Produces: `DAYS_OF_WEEK: { key: DayOfWeek; label: string }[]` — consumed by `DoctorSchedulesTable` (Task 3) to render both the header row and each doctor row in the same column order.

- [ ] **Step 1: Create the constants file**

```ts
import type { DayOfWeek } from '../types/doctor-schedules-section.types';

export const DAYS_OF_WEEK: { key: DayOfWeek; label: string }[] = [
  { key: 'monday', label: 'Понедельник' },
  { key: 'tuesday', label: 'Вторник' },
  { key: 'wednesday', label: 'Среда' },
  { key: 'thursday', label: 'Четверг' },
  { key: 'friday', label: 'Пятница' },
  { key: 'saturday', label: 'Суббота' },
];
```

- [ ] **Step 2: Verify**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0.

Run: `pnpm exec biome check src/widgets/doctors-schedules-section/models/doctor-schedules-section.constants.ts`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/widgets/doctors-schedules-section/models/doctor-schedules-section.constants.ts
git commit -m "feat: добавить константу порядка дней недели"
```

---

### Task 3: DoctorSchedulesTable sub-component

**Files:**
- Create: `src/widgets/doctors-schedules-section/ui/doctor-schedules-table/index.tsx`
- Create: `src/widgets/doctors-schedules-section/ui/doctor-schedules-table/index.module.css`

**Interfaces:**
- Consumes: `DoctorSchedulesTableProps`, `DoctorScheduleTableRow` (Task 1); `DAYS_OF_WEEK` (Task 2).
- Produces: `DoctorSchedulesTable` default export, `{ rows }: DoctorSchedulesTableProps` — consumed by the widget root (Task 4).

- [ ] **Step 1: Create the component**

```tsx
import { DAYS_OF_WEEK } from '../../models/doctor-schedules-section.constants';
import type { DoctorSchedulesTableProps } from '../../types/doctor-schedules-section.types';
import css from './index.module.css';

export default function DoctorSchedulesTable({
  rows,
}: DoctorSchedulesTableProps) {
  return (
    <div className={css.wrapper}>
      <div className={`${css.row} ${css.headerRow}`}>
        <div className={css.cell} />
        {DAYS_OF_WEEK.map((day) => (
          <div className={`${css.cell} ${css.headerCell}`} key={day.key}>
            {day.label}
          </div>
        ))}
      </div>
      <div className={css.root}>
        {rows.map((row, index) => (
          <div
            className={`${css.row} ${index % 2 === 0 ? css.rowDark : css.rowLight}`}
            key={`${row.fullname}-${index}`}
          >
            <div className={`${css.cell} ${css.fullname}`}>{row.fullname}</div>
            {DAYS_OF_WEEK.map((day) => {
              const slot = row.schedule[day.key];
              return (
                <div className={css.cell} key={day.key}>
                  {slot ? `${slot.start}–${slot.end}` : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create the styles**

```css
@import "shared/styles";

.wrapper {
  @mixin responsive min-width, 760, 760;

  overflow-x: auto;
}

.row {
  grid-template-columns: 1.8fr repeat(6, 1fr);

  display: grid;
}

.headerRow {
  @mixin responsive margin-block-end, 12, 16;
}

.root {
  @mixin responsive border-radius, 30, 30;

  overflow: hidden;
}

.cell {
  @mixin responsive padding-block, 16, 20;
  @mixin responsive padding-inline, 12, 20;
  @mixin b2;

  display: flex;
  align-items: center;
}

.headerCell {
  @mixin b4;

  color: var(--color-gray-2);
  text-transform: uppercase;
}

.fullname {
  @mixin h6;
}

.rowDark {
  background-color: var(--color-green-1);
  color: var(--color-white-0);
}

.rowLight {
  background-color: color-mix(in srgb, var(--color-green-1) 12%, var(--color-white-0));
  color: var(--color-black-1);
}
```

**Note on color:** the palette only defines one green (`--color-green-1`). The light/dark row alternation on the reference screenshot needs a lighter tint, so `.rowLight` derives one from `--color-green-1` via `color-mix()` instead of a hardcoded hex — stays on-palette while getting close to the reference. Adjust the `12%` mix ratio during the visual check in Task 6 if it reads too dark/light next to the screenshot.

- [ ] **Step 3: Verify**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0.

Run: `pnpm exec biome check src/widgets/doctors-schedules-section/ui/doctor-schedules-table/`
Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/widgets/doctors-schedules-section/ui/doctor-schedules-table/
git commit -m "feat: добавить компонент таблицы расписания врачей"
```

---

### Task 4: Wire the widget root

**Files:**
- Modify: `src/widgets/doctors-schedules-section/index.tsx`
- Create: `src/widgets/doctors-schedules-section/index.module.css`

**Interfaces:**
- Consumes: `DoctorSchedulesSectionProps` (Task 1); `DoctorSchedulesTable` (Task 3).
- Produces: `DoctorSchedulesSection` default export, `{ title, rows, className }: DoctorSchedulesSectionProps` — consumed by the view (Task 6).

- [ ] **Step 1: Replace the widget root**

```tsx
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import css from './index.module.css';
import type { DoctorSchedulesSectionProps } from './types/doctor-schedules-section.types';
import DoctorSchedulesTable from './ui/doctor-schedules-table';

export default function DoctorSchedulesSection({
  title,
  rows,
  className,
}: DoctorSchedulesSectionProps) {
  if (!rows?.length) return null;

  return (
    <AnimationWrapper as="section" className={`${css.root} ${className}`}>
      <div className="container">
        {title && <h2 className={css.title}>{title}</h2>}
        <DoctorSchedulesTable rows={rows} />
      </div>
    </AnimationWrapper>
  );
}
```

- [ ] **Step 2: Create the widget styles**

```css
@import "shared/styles";

.root {
  @mixin responsive padding-block, 40, 80;
}

.title {
  @mixin h2;
  @mixin responsive margin-block-end, 20, 40;

  color: var(--color-green-4);
  text-align: center;
}
```

- [ ] **Step 3: Verify**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0.

Run: `pnpm exec biome check src/widgets/doctors-schedules-section/`
Expected: 0 errors (this now covers every file created/modified in Tasks 1–4).

- [ ] **Step 4: Commit**

```bash
git add src/widgets/doctors-schedules-section/index.tsx src/widgets/doctors-schedules-section/index.module.css
git commit -m "feat: собрать секцию расписания врачей из шапки и таблицы"
```

---

### Task 5: Mock schedule data for the view

**Files:**
- Create: `src/views/doctor-schedules-page/models/doctor-schedules.constants.ts`

**Interfaces:**
- Consumes: `DoctorSchedulesSectionProps`, `TimeSlot` (Task 1).
- Produces: `DOCTOR_SCHEDULES_SECTION: DoctorSchedulesSectionProps` — consumed by the view (Task 6).

Data below reuses the doctors and per-day working pattern from the reference screenshot (day presence per doctor), converted to a uniform 09:00–18:00 slot on each working day — the mock has no time-of-day granularity to work from, and CLAUDE.md confirms all data in this repo is mock/no API.

- [ ] **Step 1: Create the mock data file**

```ts
import type {
  DoctorSchedulesSectionProps,
  TimeSlot,
} from '@/widgets/doctors-schedules-section/types/doctor-schedules-section.types';

const WORK_HOURS: TimeSlot = { start: '09:00', end: '18:00' };

export const DOCTOR_SCHEDULES_SECTION: DoctorSchedulesSectionProps = {
  title: 'Расписание врачей',
  rows: [
    {
      fullname: 'Кравченко Павел Сергеевич',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Никогосян Анна Микаеловна',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Каплин Ефим Валерьевич',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: null,
        friday: WORK_HOURS,
        saturday: null,
      },
    },
    {
      fullname: 'Магомедгаджиева Ашрафиль Руслановна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Никитин Андрей Максимович',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Корамагомедов Рамазан Корамагомедович',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: WORK_HOURS,
      },
    },
    {
      fullname: 'Золотовская Анастасия Витальевна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: null,
        friday: null,
        saturday: null,
      },
    },
    {
      fullname: 'Маркарян Кнарик Робертовна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: WORK_HOURS,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: null,
        saturday: null,
      },
    },
    {
      fullname: 'Давыдова Александра Викторовна',
      schedule: {
        monday: WORK_HOURS,
        tuesday: null,
        wednesday: WORK_HOURS,
        thursday: WORK_HOURS,
        friday: WORK_HOURS,
        saturday: null,
      },
    },
    {
      fullname: 'Шахназарян Эрик Каренович',
      schedule: {
        monday: null,
        tuesday: WORK_HOURS,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: WORK_HOURS,
      },
    },
  ],
};
```

- [ ] **Step 2: Verify**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0. (This is the step that actually exercises the `Record<DayOfWeek, TimeSlot | null>` shape from Task 1 — if any `schedule` object here is missing a day key or misspells one, this is where it surfaces.)

Run: `pnpm exec biome check src/views/doctor-schedules-page/models/doctor-schedules.constants.ts`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/views/doctor-schedules-page/models/doctor-schedules.constants.ts
git commit -m "feat: добавить мок-данные расписания врачей"
```

---

### Task 6: Wire the widget into the page, verify visually

**Files:**
- Modify: `src/views/doctor-schedules-page/index.tsx`

**Interfaces:**
- Consumes: `DoctorSchedulesSection` (Task 4), `DOCTOR_SCHEDULES_SECTION` (Task 5).

- [ ] **Step 1: Insert the section between the title and the map**

Current content of `src/views/doctor-schedules-page/index.tsx`:

```tsx
import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";

export default function DoctorSchedulesPage() {
  return (
    <main className={css.root}>
      <AnimationWrapper className={`${css.titleBlock} container`}>
        <h1 className={css.title}>Расписание врачей</h1>
      </AnimationWrapper>
      <YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
    </main>
  );
}
```

Replace it with:

```tsx
import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import DoctorSchedulesSection from '@/widgets/doctors-schedules-section';
import YandexMap from '@/widgets/yandex-map';
import css from './index.module.css';
import { DOCTOR_SCHEDULES_SECTION } from './models/doctor-schedules.constants';

export default function DoctorSchedulesPage() {
  return (
    <main className={css.root}>
      <AnimationWrapper className={`${css.titleBlock} container`}>
        <h1 className={css.title}>Расписание врачей</h1>
      </AnimationWrapper>
      <DoctorSchedulesSection {...DOCTOR_SCHEDULES_SECTION} />
      <YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
    </main>
  );
}
```

(Only the import block and the JSX between `titleBlock` and `YandexMap` change — leave the rest of the file, including `index.module.css`, untouched.)

- [ ] **Step 2: Verify types and lint**

Run: `pnpm exec tsc --noEmit`
Expected: no output, exit code 0.

Run: `pnpm exec biome check src/views/doctor-schedules-page/`
Expected: 0 errors.

- [ ] **Step 3: Visual check in the browser**

Run: `pnpm dev` (from `src/`)
Open: `http://localhost:3000/raspisanievrachej`

Confirm:
- A weekday header row (Понедельник … Суббота) appears above the table.
- Below it, one rounded, striped card lists all 10 doctors; alternating rows are dark green / light mint.
- Each doctor's working days show `09:00–18:00` in the matching weekday column; non-working days are blank.
- On a narrow viewport (~375px), the table scrolls horizontally instead of squishing the columns.

If the light/dark contrast looks off versus the reference screenshot, adjust the `color-mix()` percentage in `ui/doctor-schedules-table/index.module.css` (`.rowLight`) and re-check.

- [ ] **Step 4: Commit**

```bash
git add src/views/doctor-schedules-page/index.tsx
git commit -m "feat: подключить секцию расписания врачей на страницу"
```

---

## Self-Review Notes

- **Spec coverage:** every type/constant/behavior from `docs/superpowers/specs/2026-07-11-doctor-schedules-table-design.md` has a task — types (Task 1), `DAYS_OF_WEEK` ordering (Task 2), grid table + striping (Task 3), section wrapper (Task 4), mock data respecting the `Record<DayOfWeek, TimeSlot | null>` shape (Task 5), page wiring (Task 6).
- **Placeholder scan:** no TBD/TODO; every step has literal code.
- **Type consistency:** `DoctorSchedulesTableProps`/`DoctorScheduleTableRow`/`DayOfWeek`/`TimeSlot` names and shapes are identical across Tasks 1, 3, 4, 5.
- **Deviation from spec doc:** the design doc didn't address mobile or the header row's exact placement relative to the rounded card. This plan adds: (a) horizontal scroll on narrow viewports via a `min-width` + `overflow-x: auto` wrapper, consistent with the project's general "adaptive" requirement, and (b) puts the header row *outside* the rounded/`overflow: hidden` card so the first doctor row — not the header — gets the rounded top corners, matching the reference screenshot's silhouette. Both are called out here since they weren't explicit approval points earlier.
