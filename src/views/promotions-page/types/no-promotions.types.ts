import type { SiteButtonProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type NoPromotionsProps = {
    title?: string;
    description?: string;
    button?: SiteButtonProps;
} & PropsWithClassName;
