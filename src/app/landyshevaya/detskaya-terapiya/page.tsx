import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import ChildTherapyPage from '@/views/child-therapy-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['detskaya-terapiya']
);

export default function ChildTherapy() {
    return <ChildTherapyPage />;
}
