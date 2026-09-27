import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import AdultOrthopedicsPage from '@/views/adult-orthopedics-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['ortopediya-vz']
);

export default function AdultOrthopedics() {
    return <AdultOrthopedicsPage />;
}
