import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import SurgeryAndImplantationPage from '@/views/surgery-and-implantation-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices['hirurgiya-i-implantaciya']
);

export default function SurgeryAndImplantation() {
    return <SurgeryAndImplantationPage />;
}
