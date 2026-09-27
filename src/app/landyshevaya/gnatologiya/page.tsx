import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import AdultGnathologyPage from '@/views/adult-gnathology-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices.gnatologiya
);

export default function Gnathology() {
    return <AdultGnathologyPage />;
}
