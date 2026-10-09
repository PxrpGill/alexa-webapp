/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: редакторская верстка в константах */

import type { DescriptionCardProps } from '../../types/before-after-section.types';

import css from './index.module.css';

export default function DescriptionCard({
    title,
    description,
    className,
}: DescriptionCardProps) {
    if (!(title || description)) return null;

    return (
        <div className={`${css.root} ${className}`}>
            {title && (
                <h2
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
    );
}
