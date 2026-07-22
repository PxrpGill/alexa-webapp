/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';
import Picture from '@/shared/ui/picture';

import css from './index.module.css';
import type { ErrorFallbackProps } from './types/error-fallback.types';

export default function ErrorFallback({
    className,
    title,
    descripton,
    poster,
    button,
}: ErrorFallbackProps) {
    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.content}>
                {title && (
                    <h1
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}
                {descripton && (
                    <p
                        dangerouslySetInnerHTML={{ __html: descripton }}
                        className={css.description}
                    />
                )}
                {button && (
                    <Button
                        className={css.button}
                        href={button.href}
                        target={button.target}
                        rightIcon={<ButtonIconSVG className={css.icon} />}
                    >
                        {button.title}
                    </Button>
                )}
            </div>
            <div className={css.posterWrapper}>
                {poster && <Picture poster={poster} />}
            </div>
        </AnimationWrapper>
    );
}
