/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import { useOneHeightOfCards } from '@/shared/hooks/use-one-height-of-cards';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DiagnosticProcessSectionProps } from './types/diagnostic-process-section.types';
import DiagnosticCard from './ui/diagnostic-card';
import SectionHeader from './ui/section-header';

export default function DiagnosticProcessSection({
    className,
    sectionHeader,
    cards,
}: DiagnosticProcessSectionProps) {
    const { maxContentHeight, contentsRef } = useOneHeightOfCards();

    if (!cards?.length) return null;

    return (
        <AnimationWrapper as="section" className={`${css.root} ${className}`}>
            <SectionHeader {...sectionHeader} />

            <ul className={`${css.cards} container`}>
                {cards.map((card, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                        direction="fade"
                    >
                        <DiagnosticCard
                            {...card}
                            contentRef={(el) => {
                                contentsRef.current[index] = el;
                            }}
                            contentStyle={{
                                minHeight: maxContentHeight
                                    ? `${maxContentHeight}px`
                                    : undefined,
                            }}
                        />
                    </AnimationWrapper>
                ))}
            </ul>
        </AnimationWrapper>
    );
}
