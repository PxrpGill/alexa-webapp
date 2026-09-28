import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import AdultHygieneAndPreventionPage from '@/views/adult-hygiene-and-prevention-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['gigiena-i-profilaktika-vz']
);

export default function AdultHygieneAndPrevention() {
    return <AdultHygieneAndPreventionPage />;
}
