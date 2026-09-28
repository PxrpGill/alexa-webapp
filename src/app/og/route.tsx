import type { NextRequest } from 'next/server';
import { cache } from 'react';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { getAllVacancyCards } from '@/entities/vacancies/api/get-all-vacancies';
import { renderOgImage } from '@/shared/config/seo/og-image';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { resolveOgTitle } from '@/shared/config/seo/resolve-og-title';
import { META_TITLE_MAX_LENGTH } from '@/shared/config/seo/seo.constants';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';

export const revalidate = 3600;

const collectAllowedTitles = cache(async (): Promise<ReadonlySet<string>> => {
    const titles = new Set(
        Object.values(PAGE_META).map((pageMeta) => pageMeta.title)
    );

    const [news, vacancies] = await Promise.all([
        getAllNews(),
        getAllVacancyCards(),
    ]);

    for (const item of news?.items ?? []) {
        const title = normalizeMetaText(item.title, META_TITLE_MAX_LENGTH);

        if (title) titles.add(title);
    }

    for (const item of vacancies) {
        const title = normalizeMetaText(
            item.vacancy_name,
            META_TITLE_MAX_LENGTH
        );

        if (title) titles.add(title);
    }

    return titles;
});

export async function GET(request: NextRequest) {
    const allowedTitles = await collectAllowedTitles();
    const title = resolveOgTitle(
        request.nextUrl.searchParams.get('title'),
        allowedTitles
    );

    const response = await renderOgImage(title);

    response.headers.set(
        'Cache-Control',
        'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
    );

    return response;
}
