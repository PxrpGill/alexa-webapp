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
