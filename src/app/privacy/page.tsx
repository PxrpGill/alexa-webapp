import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PrivacyPolicyPage from '@/views/privacy-policy-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.privacyPolicy);

export default function PrivacyPolicy() {
    return <PrivacyPolicyPage />;
}
