import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PediatricOrthodonticsPage from '@/views/pediatric-orthodontics-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices.ortodontiya
);

export default function PediatricOrthodontics() {
    return <PediatricOrthodonticsPage />;
}
