import type { MetadataRoute } from 'next';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { getAllVacancyCards } from '@/entities/vacancies/api/get-all-vacancies';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { SITE_URL } from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';

export const revalidate = 3600;

const EXCLUDED_ROUTES: ReadonlyArray<string> = [SITE_NAVIGATION.letter];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();

    const staticEntries = Object.keys(PAGE_META)
        .filter((route) => !EXCLUDED_ROUTES.includes(route))
        .map((route) => ({
            url: `${SITE_URL}${route === '/' ? '' : route}`,
            lastModified,
            priority: route === '/' ? 1 : 0.7,
        }));

    const [news, vacancies] = await Promise.all([
        getAllNews(),
        getAllVacancyCards(),
    ]);

    const newsEntries = (news?.items ?? [])
        .filter((item) => Boolean(item.slug))
        .map((item) => ({
            url: `${SITE_URL}${SITE_NAVIGATION.blog}/${item.slug}`,
            lastModified,
            priority: 0.5,
        }));

    const vacancyEntries = vacancies.map((item) => ({
        url: `${SITE_URL}${SITE_NAVIGATION.vakansii}/${item.slug}`,
        lastModified,
        priority: 0.5,
    }));

    return [...staticEntries, ...newsEntries, ...vacancyEntries];
}
