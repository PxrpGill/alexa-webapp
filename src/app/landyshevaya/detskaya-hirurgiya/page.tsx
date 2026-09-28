import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PediatricSurgeryPage from '@/views/pediatric-surgery-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['detskaya-hirurgiya']
);

export default function PediatricSurgery() {
    return <PediatricSurgeryPage />;
}
