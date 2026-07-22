/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { DescriptionBlockProps } from '../../types/stomatology-program.types';

import css from './index.module.css';

export default function DescriptionBlock({
    title,
    className,
    content,
}: DescriptionBlockProps) {
    if (!(title || content)) return null;

    return (
        <article className={`${css.root} ${className}`}>
            {title && (
                <h3
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {content && (
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className={css.content}
                />
            )}
        </article>
    );
}
