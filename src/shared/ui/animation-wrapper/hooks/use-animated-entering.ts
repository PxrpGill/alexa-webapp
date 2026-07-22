'use client';

import {
    type CSSProperties,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { subscribe } from '../lib/coordinator';
import type {
    AnimatedEnteringConfig,
    AnimationDirection,
} from '../type/index.types';

const getTransform = (direction: AnimationDirection, px: number): string => {
    if (direction === 'fade' || px === 0) return 'none';
    if (direction === 'top') return `translateY(-${px}px)`;
    if (direction === 'bottom') return `translateY(${px}px)`;
    if (direction === 'left') return `translateX(-${px}px)`;
    if (direction === 'right') return `translateX(${px}px)`;
    return 'none';
};

type UseAnimatedEnteringArgs = Pick<
    AnimatedEnteringConfig,
    | 'threshold'
    | 'direction'
    | 'distance'
    | 'duration'
    | 'easing'
    | 'delay'
    | 'once'
    | 'opacityOnly'
    | 'animatedStyle'
>;

const DEFAULTS = {
    threshold: 0.15,
    direction: 'bottom' as AnimationDirection,
    distance: 70,
    duration: '0.376s',
    easing: 'cubic-bezier(0, 0, 0.51, 1)',
    delay: '0s',
    once: true,
    opacityOnly: false,
};

const PARALLAX_FACTOR = 0.35;

export function useAnimatedEntering({
    threshold = DEFAULTS.threshold,
    direction = DEFAULTS.direction,
    distance = DEFAULTS.distance,
    duration = DEFAULTS.duration,
    easing = DEFAULTS.easing,
    delay = DEFAULTS.delay,
    once = DEFAULTS.once,
    opacityOnly = DEFAULTS.opacityOnly,
    animatedStyle: customStyle,
}: UseAnimatedEnteringArgs) {
    const [revealed, setRevealed] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (once && revealed) return;

        const onProgress = (progress: number) => {
            el.style.transition = 'none';
            el.style.opacity = '0';
            if (!opacityOnly) {
                const remaining = distance * (1 - progress * PARALLAX_FACTOR);
                el.style.transform = getTransform(direction, remaining);
            }
        };

        const onSnap = () => {
            el.style.transition = opacityOnly
                ? `opacity ${duration} ${easing} ${delay}`
                : `opacity ${duration} ${easing} ${delay}, transform ${duration} ${easing} ${delay}`;
            el.style.opacity = '1';
            if (!opacityOnly) el.style.transform = 'none';
            setRevealed(true);
        };

        const onReset = () => {
            el.style.transition = 'none';
            el.style.opacity = '0';
            if (!opacityOnly)
                el.style.transform = getTransform(direction, distance);
            setRevealed(false);
        };

        return subscribe({
            el,
            threshold,
            once,
            onProgress,
            onSnap,
            onReset,
        });
    }, [
        threshold,
        direction,
        distance,
        duration,
        easing,
        delay,
        once,
        opacityOnly,
        revealed,
    ]);

    const animatedStyle = useMemo<CSSProperties>(() => {
        if (revealed) {
            return {
                opacity: 1,
                ...(!opacityOnly && direction !== 'fade'
                    ? { transform: 'none' }
                    : {}),
                willChange: 'auto',
                ...(customStyle ?? {}),
            };
        }
        return {
            opacity: 0,
            ...(!opacityOnly && direction !== 'fade'
                ? { transform: getTransform(direction, distance) }
                : {}),
            willChange: opacityOnly ? 'opacity' : 'opacity, transform',
            ...(customStyle ?? {}),
        };
    }, [revealed, direction, distance, opacityOnly, customStyle]);

    return { ref, animatedStyle, isVisible: revealed } as const;
}
