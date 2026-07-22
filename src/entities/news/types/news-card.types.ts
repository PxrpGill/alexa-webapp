import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type NewsCardProps = {
    title?: string;
    description?: string;
    publishDate?: string;
    poster?: PictureFormatType;
} & PropsWithClassName;
