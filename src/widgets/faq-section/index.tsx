/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import AccordionIconSVG from '@/public/icons/accordion-plus.svg';
import { Accordion } from '@/shared/ui/accordion';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { FaqSectionProps } from './types/faq-section.types';

export default function FaqSection({
    title,
    cards,
    className,
}: FaqSectionProps) {
    if (!cards?.length) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`.trim()}
        >
            {title && (
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <ul className={css.list}>
                {cards.map((card, index) => (
                    <AnimationWrapper
                        as="li"
                        key={index}
                        className={css.paragraph}
                    >
                        <Accordion
                            title={card.question ?? ''}
                            className={css.accordion}
                            rightIcon={
                                <div className={css.accordionIcon}>
                                    <AccordionIconSVG className={css.icon} />
                                </div>
                            }
                        >
                            <div
                                className={css.description}
                                dangerouslySetInnerHTML={{
                                    __html: card.answer ?? '',
                                }}
                            />
                        </Accordion>
                    </AnimationWrapper>
                ))}
            </ul>
        </AnimationWrapper>
    );
}
