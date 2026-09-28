import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type SectionHeaderProps = {
    title?: string;
    description?: string;
} & PropsWithClassName;

export type PromotionRequestSectionProps = {
    /** Слаг акции, на которую оставляется заявка */
    slug: string;
} & PropsWithClassName &
    SectionHeaderProps;

export type PromotionRequestFormProps = {
    slug: string;
    toggleSuccess: () => void;
};

export type SuccessFormProps = {
    isOpen?: boolean;
    toggleClose: () => void;
} & PropsWithClassName;
