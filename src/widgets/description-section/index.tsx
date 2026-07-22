/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DescriptionSectionProps } from './types/description-section.types';

export default function DescriptionSection({
    title,
    description,
    className,
}: DescriptionSectionProps) {
    if (!(title || description)) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`.trim()}
        >
            <div className={css.wrapper}>
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
            </div>
        </AnimationWrapper>
    );
}
