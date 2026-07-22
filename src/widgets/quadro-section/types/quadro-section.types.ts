import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SectionHeaderCardProps = {
    title?: string;
    description?: string;
    buttonText?: string;
} & PropsWithClassName;

export type QuadroCardProps = {
    title?: string;
    description?: string;
};

export type SectionContentProps = {
    cards?: Array<QuadroCardProps>;
} & PropsWithClassName;

export type SectionHeaderProps = {
    title?: string;
    description?: string;
    underDescription?: string;
    card?: SectionHeaderCardProps;
    poster?: PictureFormatType;
};

export type QuadroSectionProps = {
    sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
    SectionContentProps;
