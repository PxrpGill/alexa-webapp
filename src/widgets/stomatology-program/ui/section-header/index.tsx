/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import LogoSVG from '@/public/icons/mini-logo.svg';

import type { SectionHeaderProps } from '../../types/stomatology-program.types';

import css from './index.module.css';

export default function SectionHeader({
    title,
    description,
    className,
}: SectionHeaderProps) {
    return (
        <div className={`${css.root} ${className}`}>
            <div className={css.titleBlock}>
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
            <LogoSVG className={css.logo} />
        </div>
    );
}
