import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import HygieneAndPreventionPage from '@/views/hygiene-and-preventation-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['gigiena-i-profilaktika']
);

export default function HygieneAndPrevention() {
    return <HygieneAndPreventionPage />;
}
