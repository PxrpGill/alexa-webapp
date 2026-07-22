import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SlideCardProps = {
    title?: string;
    content?: string;
    buttonText?: string;
} & PropsWithClassName;

export type SlideVariantProps = {
    title?: string;
    subtitle?: string;
    card?: SlideCardProps;
    legend?: string;
    poster?: PictureFormatType;
    textTheme?: 'light' | 'dark';
} & PropsWithClassName;

export type HeroSliderSectionProps = {
    slides?: Array<SlideVariantProps>;
} & PropsWithClassName;
