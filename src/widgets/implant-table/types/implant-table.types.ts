import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type ImplantProps = {
    name?: string;
    manufacturer?: string;
    guarantee?: string;
    rateOfEngraftment?: string;
    immediateImplantation?: string;
    boneGrafting?: string;
    aesthetics?: string;
    optionFullProstheticRestoration?: string;
    uniqueFeatures?: string;
};

export type TableProps = {
    implants?: Array<ImplantProps>;
} & PropsWithClassName;

export type ImplantTableProps = {
    sectionHeader?: SectionHeaderProps;
    implants?: Array<ImplantProps>;
} & PropsWithClassName;
