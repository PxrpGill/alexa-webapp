import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PeriodontologyPage from '@/views/periodontology-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices.parodontologiya
);

export default function Periodontology() {
    return <PeriodontologyPage />;
}
