import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllPromotions } from '@/entities/promotion/api/get-all-promotions';
import { getDetailPromotion } from '@/entities/promotion/api/get-detail-promotion';
import {
    META_DESCRIPTION_MAX_LENGTH,
    META_TITLE_MAX_LENGTH,
} from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';
import DetailPromotionPage from '@/views/detail-promotion-page';

type DetailPromotionParams = {
    params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export const generateStaticParams = async () => {
    const promotions = await getAllPromotions();

    if (!promotions?.length) return [];

    return promotions
        .filter((promotion) => Boolean(promotion.slug))
        .map((promotion) => ({ slug: promotion.slug as string }));
};

export const generateMetadata = async ({
    params,
}: DetailPromotionParams): Promise<Metadata> => {
    const { slug } = await params;
    const promotion = await getDetailPromotion(slug);

    const title = normalizeMetaText(
        promotion?.hero?.title,
        META_TITLE_MAX_LENGTH
    );
    const description = normalizeMetaText(
        promotion?.hero?.description ?? undefined,
        META_DESCRIPTION_MAX_LENGTH
    );
    const url = `${SITE_NAVIGATION.akcii}/${slug}`;
    const base = buildMetadata(SITE_NAVIGATION.akcii, {
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
    });

    return {
        ...base,
        alternates: { canonical: url },
        openGraph: {
            ...base.openGraph,
            url,
        },
    };
};

export default async function DetailPromotion({
    params,
}: DetailPromotionParams) {
    const { slug } = await params;
    const initialDetailPromotion = await getDetailPromotion(slug);

    if (!initialDetailPromotion) return notFound();

    return <DetailPromotionPage {...initialDetailPromotion} />;
}
