import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import DentistConsultationPage from '@/views/dentist-consultation-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['konsultaciya-stomatologa']
);

export default function DentistConsultation() {
    return <DentistConsultationPage />;
}
