import type { PromotionCardProps } from '@/entities/promotion/types/promotion-card.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type PromotionsSectionProps = {
    cards?: PromotionCardProps[];
} & PropsWithClassName;
