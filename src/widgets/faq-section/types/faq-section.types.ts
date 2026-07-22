import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type FaqCardProps = {
    question?: string;
    answer?: string;
} & PropsWithClassName;

export type FaqSectionProps = {
    title?: string;
    cards?: FaqCardProps[];
} & PropsWithClassName;
