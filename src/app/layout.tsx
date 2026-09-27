import '@/shared/styles/reset.css';
import '@/shared/styles/colors.css';
import '@/shared/styles/global.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Favicon from '@/shared/config/favicon';
import InvolveFont from '@/shared/config/local-font';
import { ReactQueryCustomProvider } from '@/shared/config/react-query-custom-provider';
import { ORGANIZATION_JSON_LD } from '@/shared/config/seo/organization';
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    OG_LOCALE,
    SITE_NAME,
    SITE_URL,
    TITLE_TEMPLATE,
} from '@/shared/config/seo/seo.constants';
import Layout from '@/widgets/layout';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: TITLE_TEMPLATE,
    },
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: OG_LOCALE,
        siteName: SITE_NAME,
        url: '/',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" className={InvolveFont.className}>
            <Favicon />
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(ORGANIZATION_JSON_LD),
                    }}
                />
                <ReactQueryCustomProvider>
                    <Layout>{children}</Layout>
                </ReactQueryCustomProvider>
            </body>
        </html>
    );
}
