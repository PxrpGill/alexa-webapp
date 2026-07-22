import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { QuadroCardProps } from '@/widgets/quadro-section/types/quadro-section.types';

export type WhatServiceIncludesCardProps = {
    title?: string;
    description?: string;
};

export type WhatServiceIncludesProps = {
    title?: string;
    cards?: Array<QuadroCardProps>;
} & PropsWithClassName;
