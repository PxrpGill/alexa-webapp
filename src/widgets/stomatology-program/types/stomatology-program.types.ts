import type { SiteLinkProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type DescriptionBlockProps = {
    title?: string;
    content?: string;
} & PropsWithClassName;

export type CtaBlockProps = {
    title?: string;
    button?: SiteLinkProps;
} & PropsWithClassName;

export type StomatologyProgramProps = {
    sectionHeader?: SectionHeaderProps;
    descriptionBlock?: DescriptionBlockProps;
    poster?: PictureFormatType;
    ctaBlock?: CtaBlockProps;
} & PropsWithClassName;
