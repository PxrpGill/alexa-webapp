import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import UserAgreementPage from '@/views/user-agreement-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.userAgreement);

export default function PersonalData() {
    return <UserAgreementPage />;
}
