import type { MetadataRoute } from 'next';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { SITE_URL } from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { getAvailableVacancies } from '@/views/vacancies-page/api/get-available-vacancies';

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
        getAvailableVacancies(),
    ]);

    const newsEntries = (news?.items ?? [])
        .filter((item) => Boolean(item.slug))
        .map((item) => ({
            url: `${SITE_URL}${SITE_NAVIGATION.blog}/${item.slug}`,
            lastModified,
            priority: 0.5,
        }));

    const vacancyEntries = (vacancies?.results ?? []).map((item) => ({
        url: `${SITE_URL}${SITE_NAVIGATION.vakansii}/${item.slug}`,
        lastModified,
        priority: 0.5,
    }));

    return [...staticEntries, ...newsEntries, ...vacancyEntries];
}
