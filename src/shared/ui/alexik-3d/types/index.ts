import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type AlexikCanvasProps = {
    /** описание персонажа для скринридеров */
    ariaLabel?: string;
    /** вызывается на клик по персонажу (но не после перетаскивания) */
    onCheer?: () => void;
};

export type Alexik3DProps = PropsWithClassName &
    AlexikCanvasProps & {
        /** реплика, которая всплывает над персонажем по клику */
        speech?: string;
    };
