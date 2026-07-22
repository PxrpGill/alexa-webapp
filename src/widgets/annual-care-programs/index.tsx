/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import AnnualCareCard from '@/entities/annual-care/ui/annual-care-card';
import { MEDIA_QUERIES } from '@/shared/config/use-media-query.constants';
import { useMediaQuery } from '@/shared/hooks/use-media-query';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { AnnualCareProgramsProps } from './types/annual-care-programs.types';
import SectionHeader from './ui/section-header';

export default function AnnualCarePrograms({
    className,
    sectionHeader,
    programs,
}: AnnualCareProgramsProps) {
    const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

    if (!programs?.length) return null;

    return (
        <AnimationWrapper className={`${css.root} ${className}`}>
            <SectionHeader {...sectionHeader} className={css.sectionHeader} />

            <ul className={`${css.list} container`}>
                {programs.map((program, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                        direction={isMobile ? 'fade' : 'bottom'}
                    >
                        <AnnualCareCard {...program} className={css.card} />
                    </AnimationWrapper>
                ))}
            </ul>
        </AnimationWrapper>
    );
}
