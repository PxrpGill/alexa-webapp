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
