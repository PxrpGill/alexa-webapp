/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

            <Swiper
                className={`${css.cards} container`}
                modules={[Navigation]}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    767: { slidesPerView: 4.1 },
                }}
                setWrapperSize
                navigation
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className={css.swiperSlide}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </AnimationWrapper>
    );
}
