import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
    legend?: string;
} & PropsWithClassName;

export type CardProps = {
    description?: string;
    underDescription?: string;
    textButton?: string;
} & PropsWithClassName;

export type EarlyPeriodontalTreatmentSectionProps = {
    sectionHeader?: SectionHeaderProps;
    card?: CardProps;
} & PropsWithClassName;
