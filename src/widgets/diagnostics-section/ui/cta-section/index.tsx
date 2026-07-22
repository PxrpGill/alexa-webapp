/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import type { CtaSectionProps } from '../../types/diagnostics-section.types';

import css from './index.module.css';

export default function CTASection({
    title,
    description,
    buttonText,
    className,
}: CtaSectionProps) {
    return (
        <AnimationWrapper as="article" className={`${css.root} ${className}`}>
            <div className={css.titleBlock}>
                {title && (
                    <h2
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}
                {description && (
                    <p
                        className={css.description}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </div>
            <div className={css.buttonWrapper}>
                <Button
                    rightIcon={<ButtonIconSVG className={css.icon} />}
                    className={css.button}
                >
                    {buttonText ?? 'Записаться на прием'}
                </Button>
            </div>
        </AnimationWrapper>
    );
}
