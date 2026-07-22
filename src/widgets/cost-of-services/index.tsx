/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { CostOfServicesProps } from './types/cost-of-services.types';
import CostOfServicesCard from './ui/cost-of-services-card';

export default function CostOfServices({
    title,
    cards,
    className,
}: CostOfServicesProps) {
    if (!cards?.length) return null;

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
                {cards.map((card, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                    >
                        <CostOfServicesCard {...card} className={css.card} />
                    </AnimationWrapper>
                ))}
            </ul>
        </AnimationWrapper>
    );
}
