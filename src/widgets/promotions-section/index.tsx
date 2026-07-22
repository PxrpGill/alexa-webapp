/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import PromotionCard from '@/entities/promotion/ui/promotion-card';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { PromotionsSectionProps } from './types/promotions-section.types';

export default function PromotionsSection({
    cards,
    className,
}: PromotionsSectionProps) {
    if (!cards?.length) return null;

    return (
        <ul className={`${className} ${css.root} container`}>
            {cards.map((card, index) => (
                <AnimationWrapper as="li" key={index}>
                    <PromotionCard {...card} className={css.card} />
                </AnimationWrapper>
            ))}
        </ul>
    );
}
