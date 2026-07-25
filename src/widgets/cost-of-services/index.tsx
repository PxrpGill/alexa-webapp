/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
'use client';

import { useState } from 'react';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import css from './index.module.css';
import type { CostOfServicesProps } from './types/cost-of-services.types';
import CostOfServicesCard from './ui/cost-of-services-card';

export default function CostOfServices({
    title,
    cards,
    className,
}: CostOfServicesProps) {
    const [visibleCount, setVisibleCount] = useState(4);

    if (!cards?.length) return null;

    const visibleCards = cards.slice(0, visibleCount);
    const hasMore = visibleCount < cards.length;

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            {title && (
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}

            <ul className={css.list}>
                {visibleCards.map((card, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                    >
                        <CostOfServicesCard {...card} className={css.card} />
                    </AnimationWrapper>
                ))}
            </ul>
            {hasMore && (
                <Button className={css.getMoreButton} onClick={handleShowMore}>
                    Показать еще
                </Button>
            )}
        </AnimationWrapper>
    );
}
