import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type AppointmentSchedulingProps = {
    poster?: PictureFormatType;
} & PropsWithClassName &
    SectionHeaderProps;
