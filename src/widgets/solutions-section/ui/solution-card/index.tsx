/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import Link from 'next/link';

import ArrowSVG from '@/public/icons/arrow.svg';
import Picture from '@/shared/ui/picture';

import type { SolutionCardProps } from '../../types/solutions-section.types';

import css from './index.module.css';

export default function SolutionCard({
    title,
    description,
    poster,
    className,
    href,
}: SolutionCardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            <div className={css.content}>
                {title && (
                    <h5
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
            {poster && <Picture poster={poster} />}
            <ArrowSVG className={css.arrow} />
            {href && (
                <Link
                    href={href}
                    className={css.link}
                    aria-label="Оставить заявку"
                />
            )}
        </article>
    );
}
