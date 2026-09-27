import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import VolkovoPage from '@/views/volkovo-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.volkovaBase);

export default function Volkovo() {
    return <VolkovoPage />;
}
