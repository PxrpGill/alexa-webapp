/** biome-ignore-all lint/a11y/useKeyWithClickEvents: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import {
    type PropsWithChildren,
    type ReactNode,
    useCallback,
    useRef,
} from 'react';

import css from './index.module.css';

type AccordionProps = PropsWithChildren & {
    title: string;
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};

export const Accordion = ({
    title,
    children,
    className,
    leftIcon,
    rightIcon,
}: AccordionProps) => {
    const rootRef = useRef<HTMLElement | null>(null);

    const handleRootClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const root = rootRef.current;
        if (!root) return;

        const target = e.target as HTMLElement;

        if (target.closest('summary')) return;

        const details = root.querySelector('details');
        if (!details) return;

        details.open = !details.open;
    }, []);

    return (
        <article
            ref={rootRef}
            className={`${css.root} ${className}`}
            onClick={handleRootClick}
        >
            <details className={css.details}>
                <summary className={css.summary}>
                    {leftIcon}
                    <h4
                        className={css.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {rightIcon}
                </summary>
            </details>

            <div className={css.accordionContent} role="definition">
                <div className={css.accordionContentBody}>
                    <div className={css.accordionInnerContent}>{children}</div>
                </div>
            </div>
        </article>
    );
};
