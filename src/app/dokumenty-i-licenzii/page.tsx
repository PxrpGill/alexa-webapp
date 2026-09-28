import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import DocumentsAndLicensesPage from '@/views/documents-and-licenses-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION['dokumenty-i-licenzii']
);

export default function DocumentsAndLicenses() {
    return <DocumentsAndLicensesPage />;
}
