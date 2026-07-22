import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type StillQuestionProps = {
    poster?: PictureFormatType;
    title?: string;
    description?: string;
    buttonText?: string;
} & PropsWithClassName;
