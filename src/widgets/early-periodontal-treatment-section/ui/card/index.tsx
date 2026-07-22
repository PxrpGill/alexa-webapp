/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import Button from '@/shared/ui/button';

import type { CardProps } from '../../types/early-periodontal-treatment-section.types';

import css from './index.module.css';

export default function Card({
    description,
    underDescription,
    className,
    textButton,
}: CardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            {description && (
                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={css.description}
                />
            )}
            {underDescription && (
                <p
                    dangerouslySetInnerHTML={{ __html: underDescription }}
                    className={css.underDescription}
                />
            )}
            <Button
                rightIcon={<ButtonIconSVG className={css.icon} />}
                className={css.button}
            >
                {textButton ?? 'Записаться на прием'}
            </Button>
        </article>
    );
}
