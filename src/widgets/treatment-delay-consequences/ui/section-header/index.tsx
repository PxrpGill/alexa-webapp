/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { SectionHeaderProps } from '../../types/treatment-delay-consequences.types';

import css from './index.module.css';

export default function SectionHeader({
    title,
    description,
    className,
}: SectionHeaderProps) {
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
