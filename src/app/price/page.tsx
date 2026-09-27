import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PricePage from '@/views/price-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.price);

export default function Price() {
    return <PricePage />;
}
