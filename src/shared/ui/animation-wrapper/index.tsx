'use client';

import { createElement } from 'react';

import { useAnimatedEntering } from './hooks/use-animated-entering';
import css from './index.module.css';
import type { AnimatedEnteringProps } from './type/index.types';

export const AnimationWrapper = ({
    children,
    threshold,
    direction,
    distance,
    duration,
    easing,
    delay,
    once,
    opacityOnly = false,
    className,
    style,
    as: Component = 'div',
    animatedStyle,
    id,
}: AnimatedEnteringProps) => {
    const { ref, animatedStyle: computedAnimatedStyle } = useAnimatedEntering({
        threshold,
        direction,
        distance,
        duration,
        easing,
        delay,
        once,
        opacityOnly,
        animatedStyle,
    });

    return createElement(
        Component,
        {
            id,
            ref,
            className: `${css.root} ${className}`,
            style: { ...style, ...computedAnimatedStyle },
        },
        children
    );
};
