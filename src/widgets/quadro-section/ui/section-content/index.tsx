/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import IconSVG from '@/public/icons/mini-logo.svg';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { SectionContentProps } from '../../types/quadro-section.types';

import css from './index.module.css';

export default function SectionContent({
    cards,
    className,
}: SectionContentProps) {
    if (!cards?.length) return null;

    return (
        <ul className={`${css.root} ${className}`}>
            {cards.map((card, index) => (
                <AnimationWrapper as="li" className={css.card} key={index}>
                    <div className={css.cardHeader}>
                        <IconSVG className={css.icon} />
                        {card.title && (
                            <p
                                dangerouslySetInnerHTML={{ __html: card.title }}
                                className={css.title}
                            />
                        )}
                    </div>
                    {card.description && (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: card.description,
                            }}
                            className={css.description}
                        />
                    )}
                </AnimationWrapper>
            ))}
        </ul>
    );
}
