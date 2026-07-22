/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import Picture from '@/shared/ui/picture';

import type { SlideVariantProps } from '../../types/hero-slider-section.types';

import css from './index.module.css';
import SlideCard from './slide-card';

export default function HeroSlide({
    title,
    legend,
    subtitle,
    card,
    poster,
    className,
    textTheme = 'dark',
}: SlideVariantProps) {
    return (
        <div className={`${css.root} ${className}`}>
            {poster && (
                <div className={css.mobilePoster}>
                    <Picture poster={poster} />
                </div>
            )}
            <div className={`${css.titleBlock} ${css[textTheme]}`}>
                {subtitle && (
                    <p
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                        className={css.subtitle}
                    />
                )}
                {title && (
                    <h1
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}
                {legend && (
                    <p
                        dangerouslySetInnerHTML={{ __html: legend }}
                        className={css.legend}
                    />
                )}
            </div>
            {card && <SlideCard {...card} className={css.card} />}
            {poster && (
                <Picture poster={poster} className={css.desktopPoster} />
            )}
        </div>
    );
}
