import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type ImageCardProps = {
    poster?: PictureFormatType;
    buttonText?: string;
} & PropsWithClassName;

export type TitleBlockProps = {
    title?: string;
    imageCard?: ImageCardProps;
} & PropsWithClassName;

export type TitleStickySectionProps = {
    title?: string;
    cards?: Array<{
        title?: string;
        description?: string;
        theme?: 'white' | 'green';
        buttonText?: string;
    }>;
    lastCard?: ImageCardProps;
} & PropsWithClassName;
