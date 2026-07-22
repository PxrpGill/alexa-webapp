import type { SiteLinkProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type ErrorFallbackProps = {
    title?: string;
    descripton?: string;
    button?: SiteLinkProps;
    poster?: PictureFormatType;
} & PropsWithClassName;
