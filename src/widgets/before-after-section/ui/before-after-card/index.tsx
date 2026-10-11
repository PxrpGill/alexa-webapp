/** biome-ignore-all lint/suspicious/noArrayIndexKey: порядок пар задан константой и не меняется */

'use client';

import { type CSSProperties, useState } from 'react';

import ArrowSVG from '@/public/icons/slider-arrow.svg';
import Picture from '@/shared/ui/picture';

import type { BeforeAfterCardProps } from '../../types/before-after-section.types';

import css from './index.module.css';

const DEFAULT_POSITION = 50;

export default function BeforeAfterCard({
    pairs,
    beforeLabel,
    afterLabel,
    initialPosition = DEFAULT_POSITION,
    className,
}: BeforeAfterCardProps) {
    const [position, setPosition] = useState(initialPosition);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!pairs?.length) return null;

    const total = pairs.length;
    /** Одна пара — переключать нечего, кнопки не рисуем */
    const isSwitchable = total > 1;

    const switchPair = (step: number) =>
        setActiveIndex((prev) => (prev + step + total) % total);

    return (
        <div className={`${css.root} ${className ?? ''}`.trim()}>
            <div
                className={css.viewport}
                style={{ '--pos': `${position}%` } as CSSProperties}
            >
                {/* Все пары лежат слоями друг на друге: активный проявляется
                    по opacity, положение разделителя при переключении не теряется */}
                {pairs.map((pair, index) => (
                    <div
                        aria-hidden={index !== activeIndex}
                        className={`${css.layer} ${
                            index === activeIndex ? css.layerActive : ''
                        }`.trim()}
                        key={index}
                    >
                        <Picture
                            alt={pair.afterAlt}
                            className={css.poster}
                            poster={pair.afterPoster}
                        />
                        <Picture
                            alt={pair.beforeAlt}
                            className={`${css.poster} ${css.beforePoster}`}
                            poster={pair.beforePoster}
                        />
                    </div>
                ))}

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
                    onChange={(event) =>
                        setPosition(Number(event.target.value))
                    }
                    step={0.1}
                    type="range"
                    value={position}
                />
            </div>

            {isSwitchable && (
                <>
                    <button
                        aria-label="Предыдущая пара фото"
                        className={`${css.nav} ${css.navPrev}`}
                        onClick={() => switchPair(-1)}
                        type="button"
                    >
                        <ArrowSVG className={css.navArrow} />
                    </button>
                    <button
                        aria-label="Следующая пара фото"
                        className={`${css.nav} ${css.navNext}`}
                        onClick={() => switchPair(1)}
                        type="button"
                    >
                        <ArrowSVG className={css.navArrow} />
                    </button>
                </>
            )}
        </div>
    );
}
