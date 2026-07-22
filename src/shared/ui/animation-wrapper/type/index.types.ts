import type React from 'react';

export type AnimationDirection = 'top' | 'bottom' | 'left' | 'right' | 'fade';

export type AsTag = keyof React.JSX.IntrinsicElements;

export type AnimatedEnteringConfig = {
    threshold?: number;
    direction?: AnimationDirection;
    distance?: number;
    duration?: string;
    easing?: string;
    delay?: string;
    once?: boolean;
    opacityOnly?: boolean;
    animatedStyle?: React.CSSProperties;
};

export type AnimatedEnteringProps = AnimatedEnteringConfig & {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    as?: AsTag;
    id?: string;
};
