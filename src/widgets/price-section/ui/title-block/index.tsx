/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { TitleBlockProps } from '../../types/price-section.types';

import css from './index.module.css';

export default function TitleBlock({ title, className }: TitleBlockProps) {
    if (!title) return null;

    return (
        <AnimationWrapper className={`${css.root} ${className}`}>
            <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className={css.title}
            />
        </AnimationWrapper>
    );
}
