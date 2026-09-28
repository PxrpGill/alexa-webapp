import type { Metadata } from 'next';

import { OG_IMAGE_SIZE } from '@/shared/config/seo/og-image-size';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { OG_LOCALE, SITE_NAME } from '@/shared/config/seo/seo.constants';
import type { PageMeta, SiteRoute } from '@/shared/config/seo/types';

export const buildMetadata = (
    route: SiteRoute,
    overrides?: Partial<PageMeta>
): Metadata => {
    const meta: PageMeta = {
        ...PAGE_META[route],
        ...overrides,
    };

    const title = meta.isAbsoluteTitle ? { absolute: meta.title } : meta.title;

    const ogTitle = meta.isAbsoluteTitle
        ? meta.title
        : `${meta.title} | ${SITE_NAME}`;
    const ogImage = {
        url: `/og?title=${encodeURIComponent(meta.title)}`,
        ...OG_IMAGE_SIZE,
        alt: ogTitle,
    };

    return {
        title,
        description: meta.description,
        alternates: { canonical: route },
        openGraph: {
            type: 'website',
            locale: OG_LOCALE,
            siteName: SITE_NAME,
            url: route,
            title: ogTitle,
            description: meta.description,
            images: [ogImage],
        },
        ...(meta.isNoIndex ? { robots: { index: false, follow: true } } : {}),
    };
};
