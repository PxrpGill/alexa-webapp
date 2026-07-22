/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { TitleBlockProps } from '../../types/title-sticky-section.types';
import ImageCard from '../image-card';

import css from './index.module.css';

export default function TitleBlock({
    title,
    imageCard,
    className,
}: TitleBlockProps) {
    return (
        <AnimationWrapper className={`${css.root} ${className}`}>
            {title && (
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {imageCard && <ImageCard {...imageCard} />}
        </AnimationWrapper>
    );
}
