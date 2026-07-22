import { useCallback, useEffect, useState } from 'react';

import type { HeroSliderSectionProps } from '../types/hero-slider-section.types';

const AUTOPLAY_INTERVAL = 5_000_000;

export const useHeroSlider = (slides: HeroSliderSectionProps['slides']) => {
    const [current, setCurrent] = useState(0);

    const total = slides?.length ?? 0;

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + total) % total);
    }, [total]);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % total);
    }, [total]);

    useEffect(() => {
        if (total <= 1) return;
        const id = setInterval(next, AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [total, next]);

    return {
        current,
        next,
        prev,
        setCurrent,
    };
};
