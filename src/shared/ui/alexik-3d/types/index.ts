import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type AlexikCanvasProps = {
    /** описание персонажа для скринридеров */
    ariaLabel?: string;
};

export type Alexik3DProps = PropsWithClassName & AlexikCanvasProps;
