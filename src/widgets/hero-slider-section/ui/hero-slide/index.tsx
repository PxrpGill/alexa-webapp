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
    isPriority = false,
    hasPoster = true,
}: SlideVariantProps) {
    const visiblePoster = hasPoster ? poster : undefined;

    return (
        <div className={`${css.root} ${className}`}>
            {visiblePoster && (
                <div className={css.mobilePoster}>
                    <Picture
                        poster={visiblePoster}
                        loading={isPriority ? 'eager' : 'lazy'}
                        fetchPriority={isPriority ? 'high' : 'auto'}
                    />
                </div>
            )}
            <div className={`${css.titleBlock} ${css[textTheme]}`}>
                {subtitle && (
                    <p
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                        className={css.subtitle}
                    />
                )}
                {title &&
                    // h1 должен быть один на страницу: слайдов несколько,
                    // поэтому заголовком первого слайда и ограничиваемся,
                    // остальные — обычные абзацы с теми же стилями.
                    (isPriority ? (
                        <h1
                            dangerouslySetInnerHTML={{ __html: title }}
                            className={css.title}
                        />
                    ) : (
                        <p
                            dangerouslySetInnerHTML={{ __html: title }}
                            className={css.title}
                        />
                    ))}
                {legend && (
                    <p
                        dangerouslySetInnerHTML={{ __html: legend }}
                        className={css.legend}
                    />
                )}
            </div>
            {card && <SlideCard {...card} className={css.card} />}
            {visiblePoster && (
                <Picture
                    poster={visiblePoster}
                    className={css.desktopPoster}
                    loading={isPriority ? 'eager' : 'lazy'}
                    fetchPriority={isPriority ? 'high' : 'auto'}
                />
            )}
        </div>
    );
}
