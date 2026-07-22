/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { SectionHeaderProps } from '../../types/promo-section.types';

import css from './index.module.css';

export default function SectionHeader({
    title,
    description,
    className,
}: SectionHeaderProps) {
    if (!(title || description)) return null;

    return (
        <AnimationWrapper as="div" className={`${css.root} ${className}`}>
            {title && (
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {description && (
                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={css.description}
                />
            )}
        </AnimationWrapper>
    );
}
