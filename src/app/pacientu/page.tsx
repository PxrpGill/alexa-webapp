import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import ToThePatientPage from '@/views/to-the-patient-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.pacientu);

export default function ToThePatient() {
    return <ToThePatientPage />;
}
