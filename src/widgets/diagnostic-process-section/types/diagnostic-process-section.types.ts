import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type DiagnosticCardProps = {
    title?: string;
    description?: string;
    poster?: PictureFormatType;
} & PropsWithClassName;

export type DiagnosticProcessSectionProps = {
    sectionHeader?: SectionHeaderProps;
    cards?: Array<DiagnosticCardProps>;
} & PropsWithClassName;
