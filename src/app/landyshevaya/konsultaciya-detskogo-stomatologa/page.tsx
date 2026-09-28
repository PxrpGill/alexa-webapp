import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PediatricDentalConsultationPage from '@/views/pediatric-dental-consultation-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['konsultaciya-detskogo-stomatologa']
);

export default function PediatricDentalConsultation() {
    return <PediatricDentalConsultationPage />;
}
