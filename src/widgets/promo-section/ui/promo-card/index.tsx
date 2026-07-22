/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import Button from '@/shared/ui/button';

import type { PromoCardProps } from '../../types/promo-section.types';

import css from './index.module.css';

export default function PromoCard({
    className,
    title,
    content,
    buttonText,
    theme = 'light',
}: PromoCardProps) {
    return (
        <article className={`${css.root} ${className} ${css[theme]}`}>
            {title && (
                <h5
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
            {buttonText && (
                <Button
                    className={css.button}
                    rightIcon={<ButtonIconSVG className={css.icon} />}
                >
                    {buttonText}
                </Button>
            )}
        </article>
    );
}
