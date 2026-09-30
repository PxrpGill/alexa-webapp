import '@/shared/styles/reset.css';
import '@/shared/styles/colors.css';
import '@/shared/styles/global.css';
import '@/shared/styles/sections.css';

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
import { COOKIES_PANEL_KEY } from '@/features/cookies-panel/models/cookies-panel.constants';
import { toJsonLd } from '@/shared/helpers/to-json-ld';
import Layout from '@/widgets/layout';

// Панель cookie приходит в разметке видимой, иначе она проявляется уже после
// гидрации и становится LCP-элементом на всех страницах без крупного героя.
// Этот скрипт выполняется до первой отрисовки и прячет её тем, кто уже
// согласился, — мигания не будет.
const HIDE_ACCEPTED_COOKIES_PANEL = `if(document.cookie.indexOf('${COOKIES_PANEL_KEY}=')>-1)document.documentElement.dataset.cookiesAccepted='';`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: TITLE_TEMPLATE,
    },
    description: DEFAULT_DESCRIPTION,
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
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: инлайн-скрипт обязан выполниться до первой отрисовки
                    dangerouslySetInnerHTML={{
                        __html: HIDE_ACCEPTED_COOKIES_PANEL,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: toJsonLd(ORGANIZATION_JSON_LD),
                    }}
                />
                <ReactQueryCustomProvider>
                    <Layout>{children}</Layout>
                </ReactQueryCustomProvider>
            </body>
        </html>
    );
}
