'use client';

import { type CSSProperties, useState } from 'react';

import ArrowSVG from '@/public/icons/slider-arrow.svg';
import Picture from '@/shared/ui/picture';

import type { BeforeAfterCardProps } from '../../types/before-after-section.types';

import css from './index.module.css';

const DEFAULT_POSITION = 50;

export default function BeforeAfterCard({
    beforePoster,
    afterPoster,
    beforeLabel,
    afterLabel,
    beforeAlt,
    afterAlt,
    initialPosition = DEFAULT_POSITION,
    className,
}: BeforeAfterCardProps) {
    const [position, setPosition] = useState(initialPosition);

    if (!(beforePoster && afterPoster)) return null;

    return (
        <div
            className={`${css.root} ${className ?? ''}`.trim()}
            style={{ '--pos': `${position}%` } as CSSProperties}
        >
            <Picture poster={afterPoster} alt={afterAlt} className={css.poster} />
            <Picture
                poster={beforePoster}
                alt={beforeAlt}
                className={`${css.poster} ${css.beforePoster}`}
            />

            {beforeLabel && (
                <span className={`${css.label} ${css.beforeLabel}`}>
                    {beforeLabel}
                </span>
            )}
            {afterLabel && (
                <span className={`${css.label} ${css.afterLabel}`}>
                    {afterLabel}
                </span>
            )}

            <div aria-hidden="true" className={css.divider}>
                <span className={css.grip}>
                    <ArrowSVG className={`${css.arrow} ${css.arrowPrev}`} />
                    <ArrowSVG className={css.arrow} />
                </span>
            </div>

            {/* Ползунок растянут на всю карточку: тянется мышью, пальцем
                и стрелками с клавиатуры — отдельных обработчиков drag не нужно */}
            <input
                aria-label="Сравнение фото до и после лечения"
                aria-valuetext={`${Math.round(position)}%`}
                className={css.slider}
                max={100}
                min={0}
                onChange={(event) => setPosition(Number(event.target.value))}
                step={0.1}
                type="range"
                value={position}
            />
        </div>
    );
}
