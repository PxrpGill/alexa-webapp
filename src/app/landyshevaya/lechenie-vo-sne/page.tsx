import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import SleepbasedTreatmentPage from '@/views/sleepbased-treatment';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['lechenie-vo-sne']
);

export default function SleepbasedTreatment() {
    return <SleepbasedTreatmentPage />;
}
