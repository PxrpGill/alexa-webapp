import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type WorkPictureSizeType = 'big' | 'standart';

export type OurWorkProps = {
    title?: string;
    posters?: Array<
        { poster: PictureFormatType; size: WorkPictureSizeType } | undefined
    >;
} & PropsWithClassName;
