/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/a11y/useButtonType: intentional suppression */

'use client';

import { useEffect, useState } from 'react';

import ArrowSVG from '@/public/icons/slider-arrow.svg';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import { useHeroSlider } from './hooks/use-hero-slider';
import css from './index.module.css';
import type { HeroSliderSectionProps } from './types/hero-slider-section.types';
import HeroSlide from './ui/hero-slide';

export default function HeroSliderSection({
    className,
    slides,
}: HeroSliderSectionProps) {
    const { current, next, prev, setCurrent } = useHeroSlider(slides);

    const total = slides?.length ?? 0;

    // Слайды лежат друг на друге и все попадают во вьюпорт, поэтому
    // loading="lazy" их не сдерживает: браузер тянул постеры всех шести
    // слайдов сразу — на главной это больше 600 КБ. Держим в разметке
    // только показанные и следующий за текущим, остальные подгружаются
    // по мере перелистывания.
    const [shownSlides, setShownSlides] = useState<ReadonlySet<number>>(
        () => new Set([0, 1])
    );

    useEffect(() => {
        setShownSlides((previous) => {
            const nextIndex = total ? (current + 1) % total : 0;

            if (previous.has(current) && previous.has(nextIndex)) {
                return previous;
            }

            const updated = new Set(previous);

            updated.add(current);
            updated.add(nextIndex);

            return updated;
        });
    }, [current, total]);

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`.trim()}
        >
            <div className={css.sectionWrapper}>
                <div className={css.wrapper}>
                    {slides?.map((slide, index) => (
                        <HeroSlide
                            {...slide}
                            key={index}
                            isPriority={index === 0}
                            hasPoster={shownSlides.has(index)}
                            className={`${css.slide} ${index === current ? css.active : css.inactive}`}
                        />
                    ))}
                </div>
                <button
                    className={css.leftButton}
                    type="button"
                    aria-label="Предыдущий слайд"
                    onClick={prev}
                >
                    <ArrowSVG className={css.icon} />
                </button>
                <button
                    className={css.rightButton}
                    type="button"
                    aria-label="Следующий слайд"
                    onClick={next}
                >
                    <ArrowSVG className={css.icon} />
                </button>
                <div className={css.pagination}>
                    {slides?.map((_, index) => (
                        <button
                            key={index}
                            className={`${css.bullet} ${index === current ? css.bulletActive : ''}`}
                            aria-label="Перейти к слайду"
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </AnimationWrapper>
    );
}
