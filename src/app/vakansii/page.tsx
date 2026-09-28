import type { Metadata } from 'next';

import { getAllVacancies } from '@/entities/vacancies/api/get-all-vacancies';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import VacanciesPage from '@/views/vacancies-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.vakansii);

export default async function Vacancies() {
    const initialPageData = await getAllVacancies();

    return <VacanciesPage initialPageData={initialPageData} />;
}
