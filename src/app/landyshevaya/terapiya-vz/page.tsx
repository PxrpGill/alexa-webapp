import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import AdultTherapyPage from '@/views/adult-therapy-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['terapiya-vz']
);

export default function AdultTherapy() {
    return <AdultTherapyPage />;
}
