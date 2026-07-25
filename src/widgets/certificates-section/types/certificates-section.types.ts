import type { SiteLinkProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SectionHeaderProps = {
    title?: string;
    card?: {
        title?: string;
        button?: SiteLinkProps;
    };
} & PropsWithClassName;

export type CertificatesSectionProps = {
    sectionHeader?: SectionHeaderProps;
    certificateCards?: PictureFormatType[];
} & PropsWithClassName;
