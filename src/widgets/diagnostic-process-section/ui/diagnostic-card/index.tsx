/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import Picture from '@/shared/ui/picture';

import type { DiagnosticCardProps } from '../../types/diagnostic-process-section.types';

import css from './index.module.css';

export default function DiagnosticCard({
    poster,
    title,
    description,
    className,
    contentRef,
    cardRef,
    contentStyle,
}: DiagnosticCardProps) {
    return (
        <article className={`${css.root} ${className}`} ref={cardRef}>
            <div className={css.wrapper}>
                <div
                    className={css.content}
                    ref={contentRef}
                    style={contentStyle}
                >
                    {title && (
                        <h4
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
            </div>
            {poster && <Picture poster={poster} />}
        </article>
    );
}
