import type { PropsWithClassName } from './props-with-classname';

export type PriceCardProps = {
    title?: string;
    content?: string;
    buttonText?: string;
} & PropsWithClassName;
