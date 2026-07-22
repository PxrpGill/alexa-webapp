import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type DetailsCard = {
    title?: string;
    content?: string;
} & PropsWithClassName;

export type DetailsSectionProps = {
    title?: string;
    cards?: Array<DetailsCard>;
} & PropsWithClassName;
