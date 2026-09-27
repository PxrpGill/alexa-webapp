import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import TaxDeducationPage from '@/views/tax-deducation-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.nalogovyjvychet
);

export default function TaxDeducation() {
    return <TaxDeducationPage />;
}
