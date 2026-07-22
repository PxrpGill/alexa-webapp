/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import { formatPrice } from '@/shared/helpers/format-price';
import Button from '@/shared/ui/button';

import type { CostOfServicesCardProps } from '../../types/cost-of-services.types';

import css from './index.module.css';

export default function CostOfServicesCard({
    title,
    description,
    price,
    button,
    className,
}: CostOfServicesCardProps) {
    return (
        <article className={`${css.root} ${className}`}>
            <div className={css.contentPart}>
                <div className={css.titleBlock}>
                    {title && (
                        <h5
                            dangerouslySetInnerHTML={{ __html: title }}
                            className={css.title}
                        />
                    )}
                    {description && (
                        <div
                            dangerouslySetInnerHTML={{ __html: description }}
                            className={css.description}
                        />
                    )}
                </div>
                {price && (
                    <p className={css.price}>От {formatPrice(price)} ₽</p>
                )}
            </div>
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
        </article>
    );
}
