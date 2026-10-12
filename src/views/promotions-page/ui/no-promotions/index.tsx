/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

'use client';

import { defineButtonProps } from '@/shared/helpers/define-site-button-props';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import type { NoPromotionsProps } from '../../types/no-promotions.types';

import css from './index.module.css';

export default function NoPromotions({
    title,
    description,
    button,
    className,
}: NoPromotionsProps) {
    if (!title) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.wrapper}>
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
                {description && (
                    <p
                        dangerouslySetInnerHTML={{ __html: description }}
                        className={css.description}
                    />
                )}
                {button && (
                    <Button
                        className={css.button}
                        {...defineButtonProps(button)}
                    >
                        {button.title ?? 'Записаться на консультацию'}
                    </Button>
                )}
            </div>
        </AnimationWrapper>
    );
}
