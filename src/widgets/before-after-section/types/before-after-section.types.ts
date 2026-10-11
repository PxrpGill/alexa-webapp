import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type DescriptionCardProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

/** Одна пара снимков: что было до лечения и что стало после */
export type BeforeAfterPairType = {
    beforePoster: PictureFormatType;
    afterPoster: PictureFormatType;
    beforeAlt?: string;
    afterAlt?: string;
};

export type BeforeAfterCardProps = {
    /** Пары снимков. Вторая и дальше переключаются кнопками по краям карточки */
    pairs?: BeforeAfterPairType[];
    /** Подписи над слоями: «До» / «После» — рисуются, только если переданы */
    beforeLabel?: string;
    afterLabel?: string;
    /** Стартовое положение разделителя в процентах, 0–100 */
    initialPosition?: number;
} & PropsWithClassName;

export type BeforeAfterSectionProps = {
    beforeAfterCard?: BeforeAfterCardProps;
    descriptionCard?: DescriptionCardProps;
} & PropsWithClassName;
