import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = {
    title?: string;
} & PropsWithClassName;

export type CompanyStatsCardProps = {
    icon?: string;
    title?: string;
    description?: string;
} & PropsWithClassName;

export type CompanyStatsSectionProps = {
    sectionHeader?: SectionHeaderProps;
    cards?: Array<CompanyStatsCardProps>;
} & PropsWithClassName;
