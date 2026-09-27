import type { Metadata } from 'next';

import { getAllPromotions } from '@/entities/promotion/api/get-all-promotions';
import { PromotionPageProvider } from '@/entities/promotion/models/promotion-page-context';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PromotionsPage from '@/views/promotions-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.akcii);

export default async function Promotions() {
    const initialPromotions = await getAllPromotions();

    return (
        <PromotionPageProvider>
            <PromotionsPage initialPromotions={initialPromotions} />
        </PromotionPageProvider>
    );
}
