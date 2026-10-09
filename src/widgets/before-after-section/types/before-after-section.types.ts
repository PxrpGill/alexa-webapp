import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type DescriptionCardProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type BeforeAfterCardProps = {
    afterPoster?: PictureFormatType;
    beforePoster?: PictureFormatType;
    /** Подписи над слоями: «До» / «После» — рисуются, только если переданы */
    beforeLabel?: string;
    afterLabel?: string;
    beforeAlt?: string;
    afterAlt?: string;
    /** Стартовое положение разделителя в процентах, 0–100 */
    initialPosition?: number;
} & PropsWithClassName;

export type BeforeAfterSectionProps = {
    beforeAfterCard?: BeforeAfterCardProps;
    descriptionCard?: DescriptionCardProps;
} & PropsWithClassName;
