import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import SupervisoryAuthoritiesPage from '@/views/supervisory-authorities-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION['nadzornye-organy']
);

export default function SupervisoryAuthorities() {
    return <SupervisoryAuthoritiesPage />;
}
