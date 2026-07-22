/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/performance/noImgElement: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Picture from '@/shared/ui/picture';

import css from './index.module.css';
import type { CtaSectionProps } from './types/cta-section.types';

export default function CtaSection({
    title,
    description,
    className,
    poster,
    content,
}: CtaSectionProps) {
    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`.trim()}
        >
            <div className={css.posterWrapper}>
                {poster && <Picture poster={poster} />}
            </div>
            <article className={css.content}>
                {title && (
                    <h2
                        className={css.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {content && (
                    <div
                        className={css.innerContent}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
                {description && (
                    <div className={css.descriptionBlock}>
                        {description.text && (
                            <p
                                className={css.descriptionText}
                                dangerouslySetInnerHTML={{
                                    __html: description.text,
                                }}
                            />
                        )}
                        {description.icon && (
                            <img
                                className={css.icon}
                                src={description.icon}
                                alt="Иконка описания "
                            />
                        )}
                    </div>
                )}
            </article>
        </AnimationWrapper>
    );
}
