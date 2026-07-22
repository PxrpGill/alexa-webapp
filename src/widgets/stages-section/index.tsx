import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { StagesSectionProps } from './types/stages-section.types';
import StagesCards from './ui/stages-cards';
import TitleBlock from './ui/title-block';

export default function StagesSection({
    titleBlock,
    cards,
    className,
}: StagesSectionProps) {
    return (
        <AnimationWrapper className={`${css.root} ${className} container`}>
            <TitleBlock {...titleBlock} />
            <StagesCards {...cards} />
        </AnimationWrapper>
    );
}
