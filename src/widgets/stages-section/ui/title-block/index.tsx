/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { TitleBlockProps } from '../../types/stages-section.types';

import css from './index.module.css';

export default function TitleBlock({
    title,
    description,
    className,
}: TitleBlockProps) {
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
                <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
        </div>
    );
}
