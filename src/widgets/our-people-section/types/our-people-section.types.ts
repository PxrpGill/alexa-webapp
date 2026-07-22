import type { EmployeeCardProps } from '@/entities/employee/types/employee-card.types';
import type { SiteLinkProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = {
    title?: string;
    button?: SiteLinkProps;
} & PropsWithClassName;

export type OurPeopleSectionProps = SectionHeaderProps & {
    employees?: Array<EmployeeCardProps>;
    isSlider?: boolean;
} & PropsWithClassName;
