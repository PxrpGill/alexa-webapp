import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getDetailVacancyBySlug } from '@/shared/api/get-detail-vacancy';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';
import DetailVacancyPage from '@/views/detail-vacancy-page';

type DetailVacancyParams = {
    params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
    params,
}: DetailVacancyParams): Promise<Metadata> => {
    const { slug } = await params;
    const vacancy = await getDetailVacancyBySlug(slug);

    const title = normalizeMetaText(vacancy?.hero?.vacancy_name, 60);
    const description = normalizeMetaText(vacancy?.hero?.description, 160);

    return {
        ...buildMetadata(SITE_NAVIGATION.vakansii, {
            ...(title ? { title } : {}),
            ...(description ? { description } : {}),
        }),
        alternates: { canonical: `${SITE_NAVIGATION.vakansii}/${slug}` },
    };
};

export default async function DetailVacancy({ params }: DetailVacancyParams) {
    const { slug } = await params;
    const initialDetailVacancyPageData = await getDetailVacancyBySlug(slug);

    if (!initialDetailVacancyPageData) {
        return notFound();
    }

    return <DetailVacancyPage {...initialDetailVacancyPageData} slug={slug} />;
}
