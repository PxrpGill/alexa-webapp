/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/performance/noImgElement: intentional suppression */

import Link from 'next/link';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import type { SupervisoryCardProps } from '../../types/supervisory-authorities-section.types';

import css from './index.module.css';

export default function SupervisoryCard({
    title,
    className,
    phone,
    websiteLink,
    icon,
}: SupervisoryCardProps) {
    return (
        <AnimationWrapper as="article" className={`${css.root} ${className}`}>
            {title && (
                <h5
                    className={css.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <div className={css.body}>
                <div className={css.groups}>
                    {websiteLink && (
                        <div className={css.group}>
                            <p className={css.label}>Сайт</p>
                            <Link
                                href={websiteLink}
                                target="_blank"
                                className={css.link}
                            >
                                {websiteLink}
                            </Link>
                        </div>
                    )}
                    {phone && (
                        <div className={css.group}>
                            <p className={css.label}>Телефон</p>
                            <Link
                                href={`tel:${phone}`}
                                target="_blank"
                                className={css.link}
                            >
                                {phone}
                            </Link>
                        </div>
                    )}
                </div>
                {icon && <img src={icon} className={css.icon} alt="Иконка" />}
            </div>
        </AnimationWrapper>
    );
}
