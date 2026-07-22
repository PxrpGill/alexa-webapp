'use client';

import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Picture from '@/shared/ui/picture';

import css from './index.module.css';
import type { StomatologyProgramProps } from './types/stomatology-program.types';
import CtaBlock from './ui/cta-block';
import DescriptionBlock from './ui/description-block';
import SectionHeader from './ui/section-header';

export default function StomatologyProgram({
    sectionHeader,
    className,
    descriptionBlock,
    poster,
    ctaBlock,
}: StomatologyProgramProps) {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.3,
        freezeOnceVisible: true,
    });

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <SectionHeader {...sectionHeader} />
            <div className={css.content}>
                <DescriptionBlock {...descriptionBlock} />
                <div className={css.rightPart} ref={ref}>
                    {poster && (
                        <div className={css.posterBlock}>
                            <Picture
                                poster={poster}
                                className={`${css.picture} ${isIntersecting ? css.animate : ''}`}
                            />
                        </div>
                    )}
                    <CtaBlock {...ctaBlock} />
                </div>
            </div>
        </AnimationWrapper>
    );
}
