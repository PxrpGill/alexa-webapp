import type { PropsWithClassName } from './props-with-classname';

export type DocumentCardProps = {
    title?: string;
    href?: string;
    target?: '_blank' | '_self';
} & PropsWithClassName;
