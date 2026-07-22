import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { MockTabsSectionProps } from './types/mock-tabs-section.types';
import MockTabs from './ui/mock-tabs';
import SectionContent from './ui/section-content';
import SectionHeader from './ui/section-header';

export default function MockTabsSection({
    mockTabs,
    sectionContent,
    sectionHeader,
    className,
}: MockTabsSectionProps) {
    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <SectionHeader {...sectionHeader} />
            <MockTabs {...mockTabs} />
            <SectionContent {...sectionContent} />
        </AnimationWrapper>
    );
}
