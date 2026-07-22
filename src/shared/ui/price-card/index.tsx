/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSvg from '@/public/icons/button-teeth.svg';
import type { PriceCardProps } from '@/shared/types/price-card.types';

import Button from '../button';

import css from './index.module.css';

export default function PriceCard({
    title,
    content,
    buttonText,
    className,
}: PriceCardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            {title && (
                <h6
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {content && (
                <div
                    className={css.content}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            )}
            <Button
                theme="transparent"
                className={css.button}
                rightIcon={<ButtonIconSvg className={css.icon} />}
            >
                {buttonText ?? 'Консультация'}
            </Button>
        </article>
    );
}
