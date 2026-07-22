/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { StageCardProps } from '@/shared/types/stage-card.types';

import Picture from '../picture';

import css from './index.module.css';

export default function StageCard({
    poster,
    description,
    className,
}: StageCardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            {poster && (
                <div className={css.posterWrapper}>
                    <Picture poster={poster} />
                </div>
            )}
            {description && (
                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={css.description}
                />
            )}
        </article>
    );
}
