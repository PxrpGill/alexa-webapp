/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

'use client';

import { useCallback, useState } from 'react';

import SearchSVG from '@/public/icons/search.svg';
import SliderArrowSVG from '@/public/icons/slider-arrow.svg';
import Modal from '@/shared/ui/modal';
import Picture from '@/shared/ui/picture';

import type { DetailDocumentCardProps } from '../../types/detail-documents-section.types';

import css from './index.module.css';

export default function DetailDocumentCard({
    preview,
    title,
    className,
    detailPosters,
}: DetailDocumentCardProps) {
    const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleModalClose = useCallback(() => {
        toggleModalOpen(false);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === 0 ? (detailPosters?.length ?? 1) - 1 : prev - 1
        );
    }, [detailPosters?.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === (detailPosters?.length ?? 1) - 1 ? 0 : prev + 1
        );
    }, [detailPosters?.length]);

    if (!preview) return null;

    const hasMultiple = detailPosters && detailPosters.length > 1;

    return (
        <div className={`${css.root} ${className}`}>
            <button
                type="button"
                className={css.card}
                onClick={() => toggleModalOpen(true)}
            >
                {title && (
                    <p
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}
                <div className={css.wrapper}>
                    <Picture poster={preview} className={css.poster} />
                    <div className={css.hoverWrapper}>
                        <SearchSVG className={css.icon} />
                    </div>
                </div>
            </button>
            {detailPosters && (
                <Modal
                    isOpen={isModalOpen}
                    toggleClose={toggleModalClose}
                    contentClassName={css.content}
                >
                    <div className={css.slider}>
                        {detailPosters.map((poster, index) => (
                            <div
                                key={poster.desktop?.src ?? index}
                                className={`${css.slide} ${index === currentIndex ? css.slideActive : ''}`}
                            >
                                <Picture
                                    poster={poster}
                                    className={css.detailPoster}
                                />
                            </div>
                        ))}
                    </div>
                    {hasMultiple && (
                        <div className={css.controls}>
                            <button
                                type="button"
                                className={`${css.arrow} ${css.arrowPrev}`}
                                onClick={handlePrev}
                                aria-label="Предыдущий слайд"
                            >
                                <SliderArrowSVG className={css.arrowIcon} />
                            </button>
                            <span className={css.counter}>
                                {currentIndex + 1} / {detailPosters.length}
                            </span>
                            <button
                                type="button"
                                className={`${css.arrow} ${css.arrowNext}`}
                                onClick={handleNext}
                                aria-label="Следующий слайд"
                            >
                                <SliderArrowSVG className={css.arrowIcon} />
                            </button>
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
}
