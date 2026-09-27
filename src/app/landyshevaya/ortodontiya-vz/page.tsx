import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import AdultOrthodonticsPage from '@/views/adult-orthodontics-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['ortodontiya-vz']
);

export default function AdultOrthodontics() {
    return <AdultOrthodonticsPage />;
}
