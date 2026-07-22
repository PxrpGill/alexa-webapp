import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type DetailDocumentCardProps = {
    title?: string;
    preview?: PictureFormatType;
    detailPosters?: PictureFormatType[];
} & PropsWithClassName;

export type DetailDocumentsSectionProps = {
    cards?: DetailDocumentCardProps[];
} & PropsWithClassName;
