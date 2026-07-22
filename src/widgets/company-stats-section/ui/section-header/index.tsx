/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { SectionHeaderProps } from '../../types/company-stats-section.types';

import css from './index.module.css';

export default function SectionHeader({
    title,
    className,
}: SectionHeaderProps) {
    if (!title) return null;

    return (
        <div className={`${css.root} ${className}`}>
            <h2
                dangerouslySetInnerHTML={{ __html: title }}
                className={css.title}
            />
        </div>
    );
}
