import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import VacanciesPage from '@/views/vacancies-page';
import { getAvailableVacancies } from '@/views/vacancies-page/api/get-available-vacancies';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.vakansii);

type VacanciesParamsType = {
    searchParams: Promise<{
        category?: string;
    }>;
};

export default async function Vacancies({ searchParams }: VacanciesParamsType) {
    const { category } = await searchParams;
    const initialPageData = await getAvailableVacancies({ category });

    return <VacanciesPage initialPageData={initialPageData} />;
}
