import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DoctorSchedulesSectionProps } from './types/doctor-schedules-section.types';
import DoctorSchedulesTable from './ui/doctor-schedules-table';

export default function DoctorSchedulesSection({
  rows,
  className,
}: DoctorSchedulesSectionProps) {
  if (!rows?.length) return null;

  return (
    <AnimationWrapper as="section" className={`${css.root} ${className}`}>
      <div className="container">
        <DoctorSchedulesTable rows={rows} />
      </div>
    </AnimationWrapper>
  );
}
