/** biome-ignore-all lint/performance/noImgElement: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { CompanyStatsCardProps } from '../../types/company-stats-section.types';

import css from './index.module.css';

export default function CompanyStatsCard({
    icon,
    title,
    description,
    className,
}: CompanyStatsCardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            {title && (
                <header className={css.titleBlock}>
                    {icon && (
                        <img src={icon} alt="Иконка" className={css.icon} />
                    )}
                    <h6
                        className={css.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </header>
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
