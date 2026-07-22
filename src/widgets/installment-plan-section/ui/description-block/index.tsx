/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import Button from '@/shared/ui/button';

import type { DescriptionBlockProps } from '../../types/installment-plan-section.types';

import css from './index.module.css';

export default function DescriptionBlock({
    title,
    className,
    content,
    buttonText,
}: DescriptionBlockProps) {
    return (
        <article className={`${css.root} ${className}`}>
            {title && (
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {content && (
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className={css.content}
                />
            )}
            <Button
                className={css.button}
                rightIcon={<ButtonIconSVG className={css.icon} />}
            >
                {buttonText ?? 'Оставить заявку'}
            </Button>
        </article>
    );
}
