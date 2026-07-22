/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import Button from '@/shared/ui/button';

import type { CtaBlockProps } from '../../types/stomatology-program.types';

import css from './index.module.css';

export default function CtaBlock({ title, button, className }: CtaBlockProps) {
    if (!title) return null;

    return (
        <div className={`${css.root} ${className}`}>
            {title && (
                <h4
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            {button && (
                <Button
                    href={button.href}
                    target={button.target}
                    className={css.button}
                    rightIcon={<ButtonIconSVG className={css.icon} />}
                >
                    {button.title}
                </Button>
            )}
        </div>
    );
}
