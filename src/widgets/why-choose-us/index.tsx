import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { WhyChooseUsProps } from './types/why-choose-us.types';
import SectionHeader from './ui/section-header';
import WhyChooseUsCards from './ui/why-choose-us-cards';
import WhyChooseUsMainSection from './ui/why-choose-us-main-section';

export default function WhyChooseUs({
    sectionHeader,
    cards,
    className,
    mainSection,
}: WhyChooseUsProps) {
    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <SectionHeader {...sectionHeader} className={css.header} />
            <WhyChooseUsCards cards={cards} className={css.cards} />
            <WhyChooseUsMainSection {...mainSection} />
        </AnimationWrapper>
    );
}
