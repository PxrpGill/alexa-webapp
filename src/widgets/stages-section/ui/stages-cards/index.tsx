/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import StageCard from '@/shared/ui/stage-card';

import type { CardsProps } from '../../types/stages-section.types';

import css from './index.module.css';

export default function StagesCards({ cards, className }: CardsProps) {
    if (!cards?.length) return null;

    return (
        <ul className={`${css.root} ${className}`}>
            {cards.map((card, index) => (
                <AnimationWrapper as="li" key={index}>
                    <StageCard {...card} className={css.card} />
                </AnimationWrapper>
            ))}
        </ul>
    );
}
