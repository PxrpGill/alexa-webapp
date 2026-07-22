/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DetailDocumentsSectionProps } from './types/detail-documents-section.types';
import DetailDocumentCard from './ui/detail-document-card';

export default function DetailDocumentsSection({
    cards,
    className,
}: DetailDocumentsSectionProps) {
    if (!cards?.length) return null;

    return (
        <ul className={`${css.root} ${className} container`}>
            {cards.map((card, index) => (
                <AnimationWrapper as="li" key={index}>
                    <DetailDocumentCard {...card} className={css.card} />
                </AnimationWrapper>
            ))}
        </ul>
    );
}
