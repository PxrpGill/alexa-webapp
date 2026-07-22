/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DetailsSectionProps } from './types/details-section.types';
import DetailsBrickwork from './ui/details-brickwork';

export default function DetailsSection({
    className,
    title,
    cards,
}: DetailsSectionProps) {
    if (!cards?.length) return null;

    return (
        <section className={`${css.root} ${className} container`}>
            {title && (
                <AnimationWrapper className={css.titleBlock}>
                    <h1
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                </AnimationWrapper>
            )}
            <DetailsBrickwork cards={cards} />
        </section>
    );
}
