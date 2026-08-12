import { useCallback, useEffect, useState } from 'react';

import { useLayoutContext } from '@/shared/config/layout-context';

import type { HeroSliderSectionProps } from '../types/hero-slider-section.types';

const AUTOPLAY_INTERVAL = 4_500;

export const useHeroSlider = (slides: HeroSliderSectionProps['slides']) => {
    const { isAppointmentModalOpen } = useLayoutContext();
    const [current, setCurrentState] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const total = slides?.length ?? 0;

    const resetTimer = useCallback(() => setResetKey((k) => k + 1), []);

    const setCurrent = useCallback(
        (index: number) => {
            setCurrentState(index);
            resetTimer();
        },
        [resetTimer]
    );

    const prev = useCallback(() => {
        setCurrentState((c) => (c - 1 + total) % total);
        resetTimer();
    }, [total, resetTimer]);

    const next = useCallback(() => {
        setCurrentState((c) => (c + 1) % total);
        resetTimer();
    }, [total, resetTimer]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: намеренный рестарт таймера по ручной навигации и состоянию модалки
    useEffect(() => {
        if (total <= 1) return;

        const id = setInterval(() => {
            setCurrentState((c) => (c + 1) % total);
        }, AUTOPLAY_INTERVAL);

        return () => clearInterval(id);
    }, [total, resetKey, isAppointmentModalOpen]);

    return {
        current,
        next,
        prev,
        setCurrent,
    };
};
