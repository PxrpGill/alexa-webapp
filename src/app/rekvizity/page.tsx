import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import DetailsPage from '@/views/details-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.rekvizity);

export default function Details() {
    return <DetailsPage />;
}
