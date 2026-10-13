'use client';

import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from '@/shared/hooks/use-isomorphic-layout-effect';

import css from './index.module.css';

type StoryProgressProps = {
    count: number;
    current: number;
    /** Ссылка на активную полоску — в неё тикер пишет заполнение */
    progressRef: (node: HTMLSpanElement | null) => void;
};

/** Полоски-таймлайны: по одной на каждый кадр группы */
export default function StoryProgress({
    count,
    current,
    progressRef,
}: StoryProgressProps) {
    const fillsRef = useRef<(HTMLSpanElement | null)[]>([]);

    /**
     * Заполнение полосок — инлайновый transform, который пишет тикер, а React
     * про него не знает и сам не снимает. Поэтому на каждом переключении
     * расставляем его явно: пройденные кадры — на максимум, будущие — в ноль.
     * Без этого кадр, с которого ушли вперёд, оставался залитым наполовину, а
     * возврат назад показывал чужое заполнение.
     */
    useIsomorphicLayoutEffect(() => {
        fillsRef.current.forEach((node, index) => {
            if (node) {
                node.style.transform = `scaleX(${index < current ? 1 : 0})`;
            }
        });

        // Активную полоску отдаём тикеру здесь, а не ref'ом в разметке: там
        // порядок отвязки и привязки зависит от направления переключения, и
        // при шаге назад свежая ссылка тут же затиралась бы null.
        progressRef(fillsRef.current[current] ?? null);
    }, [current, count, progressRef]);

    return (
        <div className={css.root}>
            {Array.from({ length: count }, (_, index) => (
                <span
                    // Кадры различаются только позицией — индекс здесь и есть
                    // идентификатор полоски
                    // biome-ignore lint/suspicious/noArrayIndexKey: позиция полоски и есть её идентификатор
                    key={index}
                    className={css.track}
                >
                    <span
                        ref={(node) => {
                            fillsRef.current[index] = node;
                        }}
                        className={`${css.fill} ${index < current ? css.filled : ''}`.trim()}
                    />
                </span>
            ))}
        </div>
    );
}
