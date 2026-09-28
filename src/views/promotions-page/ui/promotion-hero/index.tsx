/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import CertificatesStack from '@/shared/ui/certificates-stack';

import type { PromotionHeroProps } from '../../types/promotion-hero-types';

import css from './index.module.css';

export default function PromotionHero({
    title,
    description,
    className,
}: PromotionHeroProps) {
    if (!(title || description)) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.wrapper}>
                <article className={css.contentPart}>
                    {title && (
                        <h1
                            dangerouslySetInnerHTML={{ __html: title }}
                            className={css.title}
                        />
                    )}
                    {description && (
                        <p
                            dangerouslySetInnerHTML={{ __html: description }}
                            className={css.description}
                        />
                    )}
                </article>
                <CertificatesStack priority className={css.promotionsWrapper} />
            </div>
        </AnimationWrapper>
    );
}
