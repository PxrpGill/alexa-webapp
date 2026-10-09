import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { BeforeAfterSectionProps } from './types/before-after-section.types';
import BeforeAfterCard from './ui/before-after-card';
import DescriptionCard from './ui/description-card';

export default function BeforeAfterSection({
    className,
    descriptionCard,
    beforeAfterCard,
}: BeforeAfterSectionProps) {
    if (!(descriptionCard || beforeAfterCard)) return null;

    return (
        <AnimationWrapper className={`${css.root} container ${className}`}>
            {descriptionCard && <DescriptionCard {...descriptionCard} />}
            {beforeAfterCard && <BeforeAfterCard {...beforeAfterCard} />}
        </AnimationWrapper>
    );
}
