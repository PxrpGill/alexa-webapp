import type { PriceCardProps } from '@/shared/types/price-card.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type StepperSectionProps = {
    title?: string;
    steps?: Array<string>;
    priceCards?: PriceCardProps[];
} & PropsWithClassName;
