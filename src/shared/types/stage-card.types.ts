import type { PictureFormatType } from '../ui/picture';

import type { PropsWithClassName } from './props-with-classname';

export type StageCardProps = {
    poster?: PictureFormatType;
    description?: string;
} & PropsWithClassName;
