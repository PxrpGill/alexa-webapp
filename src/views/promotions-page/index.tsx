import PromotionModal from '@/features/promotion-modal';
import PromotionsSection from '@/widgets/promotions-section';

import {
    NO_PROMOTIONS,
    PROMOTION_HERO_DATA,
} from './models/promotions.constants';
import type { PromotionsPageProps } from './types/promotions-page.types';
import NoPromotions from './ui/no-promotions';
import PromotionHero from './ui/promotion-hero';

export default function PromotionsPage({
    initialPromotions,
}: PromotionsPageProps) {
    return (
        <main className="page-offset">
            <PromotionHero className="section" {...PROMOTION_HERO_DATA} />
            {initialPromotions?.length ? (
                <PromotionsSection
                    className="section"
                    cards={initialPromotions}
                />
            ) : (
                <NoPromotions className="section" {...NO_PROMOTIONS} />
            )}
            <PromotionModal />
        </main>
    );
}
