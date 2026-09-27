import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import DoctorSchedulesPage from '@/views/doctor-schedules-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.raspisanievrachej
);

export default function DoctorSchedules() {
    return <DoctorSchedulesPage />;
}
