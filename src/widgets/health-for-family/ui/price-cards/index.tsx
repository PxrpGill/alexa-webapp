/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import PriceCard from '@/shared/ui/price-card';

import type { PriceCardsProps } from '../../types/price-cards.types';

import css from './index.module.css';

export default function PriceCards({ cards, className }: PriceCardsProps) {
    if (!cards?.length) return null;

    return (
        <ul className={`${css.root} ${className} container`}>
            {cards.map((card, index) => (
                <AnimationWrapper as="li" key={index} className={css.paragraph}>
                    <PriceCard {...card} className={css.card} />
                </AnimationWrapper>
            ))}
        </ul>
    );
}
