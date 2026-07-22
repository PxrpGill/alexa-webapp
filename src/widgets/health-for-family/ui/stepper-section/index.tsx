/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { StepperSectionProps } from '../../types/stepper-section.types';
import PriceCards from '../price-cards';

import css from './index.module.css';

export default function StepperSection({
    title,
    steps,
    className,
    priceCards,
}: StepperSectionProps) {
    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            {priceCards?.length && (
                <PriceCards
                    className={css.priceCardsMobile}
                    cards={priceCards}
                />
            )}
            <div
                className={`${css.wrapper} ${!priceCards?.length ? css.withoutCards : css.withCards}`}
            >
                <div className={css.titleBlock}>
                    {title && (
                        <h2
                            dangerouslySetInnerHTML={{ __html: title }}
                            className={css.title}
                        />
                    )}
                    {steps?.length && (
                        <ul className={css.steps}>
                            {steps.map((step, index) => (
                                <li
                                    key={`${step}-${index}`}
                                    className={css.stepItem}
                                >
                                    <div className={css.step}>
                                        <span className={css.label}>
                                            {index + 1}
                                        </span>
                                    </div>
                                    {step && (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: step,
                                            }}
                                            className={css.stepText}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {priceCards?.length && (
                    <PriceCards className={css.priceCards} cards={priceCards} />
                )}
            </div>
        </AnimationWrapper>
    );
}
