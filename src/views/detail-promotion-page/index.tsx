import type { DetailPromotionType } from '@/entities/promotion/types/detail-promotion.types';
import PromotionRequestSection from '@/features/promotion-request-section';

import css from './index.module.css';
import { PROMOTION_REQUEST_SECTION } from './models/detail-promotion.constants';
import PromotionDescription from './ui/promotion-description';
import PromotionHero from './ui/promotion-hero';
import RequirementBlock from './ui/requirement-block';

export default function DetailPromotionPage(props: DetailPromotionType) {
    return (
        <main data-slug={props.slug} className={css.root}>
            {props?.hero && (
                <PromotionHero className={css.hero} {...props.hero} />
            )}
            {props.conditions && (
                <RequirementBlock
                    {...props.conditions}
                    className={css.conditionBlock}
                />
            )}
            {props.detail && (
                <PromotionDescription
                    {...props.detail}
                    className={css.detail}
                />
            )}
            <PromotionRequestSection
                {...PROMOTION_REQUEST_SECTION}
                slug={props.slug}
                className={css.request}
            />
        </main>
    );
}
