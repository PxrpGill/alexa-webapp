import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { StageCardProps } from '@/shared/types/stage-card.types';

export type TitleBlockProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type CardsProps = {
    cards?: Array<StageCardProps>;
} & PropsWithClassName;

export type StagesSectionProps = {
    titleBlock?: TitleBlockProps;
    cards?: CardsProps;
} & PropsWithClassName;
