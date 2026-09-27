import type { Metadata } from 'next';

import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    OG_LOCALE,
    SITE_NAME,
} from '@/shared/config/seo/seo.constants';
import type { PageMeta, SiteRoute } from '@/shared/config/seo/types';

export const buildMetadata = (
    route: SiteRoute,
    overrides?: Partial<PageMeta>
): Metadata => {
    const registryMeta = PAGE_META[route];

    const meta: PageMeta = {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        ...registryMeta,
        ...overrides,
    };

    const title = meta.isAbsoluteTitle ? { absolute: meta.title } : meta.title;

    return {
        title,
        description: meta.description,
        alternates: { canonical: route },
        openGraph: {
            type: 'website',
            locale: OG_LOCALE,
            siteName: SITE_NAME,
            url: route,
            title: meta.isAbsoluteTitle
                ? meta.title
                : `${meta.title} | ${SITE_NAME}`,
            description: meta.description,
        },
        ...(meta.isNoIndex ? { robots: { index: false, follow: true } } : {}),
    };
};
