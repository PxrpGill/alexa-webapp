/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import CheckSVG from '@/public/icons/check.svg';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { ArgumentSectionProps } from '../../types/diagnostics-section.types';

import css from './index.module.css';

export default function ArgumentSection({
    title,
    description,
    list,
    legend,
    className,
}: ArgumentSectionProps) {
    return (
        <AnimationWrapper as="article" className={`${css.root} ${className}`}>
            <div className={css.titleBlock}>
                {title && (
                    <h3
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
            {list?.length && (
                <ul className={css.list}>
                    {list.map((item, index) => (
                        <li key={index} className={css.paragraph}>
                            <div className={css.checkWrapper}>
                                <CheckSVG className={css.checkIcon} />
                            </div>
                            <p
                                dangerouslySetInnerHTML={{ __html: item }}
                                className={css.item}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {legend && (
                <p
                    dangerouslySetInnerHTML={{ __html: legend }}
                    className={css.legend}
                />
            )}
        </AnimationWrapper>
    );
}
