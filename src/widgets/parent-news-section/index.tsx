/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
'use client';

import { useState } from 'react';

import NewsCard from '@/entities/news/ui/news-card';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import css from './index.module.css';
import type { ParentNewsSectionProps } from './types/parent-news-section.types';

const INITIAL_COUNT = 3;
const STEP = 3;

export default function ParentNewsSection({
    title,
    className,
    news,
}: ParentNewsSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    if (!news?.length) return null;

    const visibleNews = news.slice(0, visibleCount);
    const hasMore = visibleCount < news.length;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            {title && (
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <ul className={css.list}>
                {visibleNews.map((newsCard, index) => (
                    <AnimationWrapper as="li" key={index}>
                        <NewsCard {...newsCard} className={css.card} />
                    </AnimationWrapper>
                ))}
            </ul>
            {hasMore && (
                <Button
                    className={css.button}
                    onClick={() => setVisibleCount((prev) => prev + STEP)}
                >
                    Загрузить еще
                </Button>
            )}
        </AnimationWrapper>
    );
}
