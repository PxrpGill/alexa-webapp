import type { NoPromotionsProps } from '../types/no-promotions.types';
import type { PromotionHeroProps } from '../types/promotion-hero-types';

export const PROMOTION_HERO_DATA: PromotionHeroProps = {
    title: 'Все акции<br /> в&nbsp;одном месте',
    description:
        'Выбирайте подходящее предложение и&nbsp;узнавайте подробности об&nbsp;актуальных акциях.',
};

export const NO_PROMOTIONS: NoPromotionsProps = {
    title: 'Сейчас активных акций нет',
    description:
        'Новые предложения появляются регулярно&nbsp;&mdash; заглядывайте позже.<br /> А&nbsp;пока запишитесь на&nbsp;консультацию: врач составит план лечения и&nbsp;расскажет о&nbsp;действующих условиях.',
    button: {
        title: 'Записаться на консультацию',
        isOpenConsultationModal: true,
    },
};
