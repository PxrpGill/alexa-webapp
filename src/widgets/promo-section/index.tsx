/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { PromoSectionProps } from './types/promo-section.types';
import PromoCard from './ui/promo-card';
import SectionHeader from './ui/section-header';

export default function PromoSection({
    sectionHeader,
    cards,
    className,
}: PromoSectionProps) {
    if (!cards?.length) return null;

    return (
        <section className={`${css.root} container ${className}`}>
            <SectionHeader {...sectionHeader} />
            <ul className={css.list}>
                {cards.map((card, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                    >
                        <PromoCard {...card} className={css.card} />
                    </AnimationWrapper>
                ))}
            </ul>
        </section>
    );
}
