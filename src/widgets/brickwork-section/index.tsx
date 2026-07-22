import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { BrickworkSectionProps } from './types/brickwork-section.types';
import SectionCards from './ui/section-cards';
import SectionHeader from './ui/section-header';

export default function BrickworkSection({
    sectionHeader,
    className,
    cards,
}: BrickworkSectionProps) {
    if (!cards?.length) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <SectionHeader {...sectionHeader} className={css.header} />
            <SectionCards cards={cards} className={css.cards} />
        </AnimationWrapper>
    );
}
