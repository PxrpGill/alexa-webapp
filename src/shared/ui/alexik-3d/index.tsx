'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@/shared/hooks/use-media-query';

import css from './index.module.css';
import type { Alexik3DProps } from './types';

// three тянет ~120 КБ gzip — отдельный чанк, который грузится только
// после того, как страница уже отрисовалась, и только на десктопе.
const AlexikCanvas = dynamic(() => import('./ui/alexik-canvas'), {
    ssr: false,
});

const DESKTOP_QUERY = '(min-width: 768px)';

const DEFAULT_SPEECH = 'Запишите ребёнка на&nbsp;приём';

/** сколько реплика висит на экране после клика */
const SPEECH_DURATION = 4000;

/**
 * Плавающий 3D-маскот в правом нижнем углу. На мобильных не монтируется
 * вовсе — значит и three там не скачивается.
 */
export function Alexik3D({
    className,
    ariaLabel,
    speech = DEFAULT_SPEECH,
    onCheer,
}: Alexik3DProps) {
    const isDesktop = useMediaQuery(DESKTOP_QUERY);
    const [isReady, setIsReady] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speechTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        if (!isDesktop) return;

        if (typeof window.requestIdleCallback !== 'function') {
            const timer = window.setTimeout(() => setIsReady(true), 1200);
            return () => window.clearTimeout(timer);
        }

        const handle = window.requestIdleCallback(() => setIsReady(true), {
            timeout: 3000,
        });
        return () => window.cancelIdleCallback(handle);
    }, [isDesktop]);

    useEffect(() => () => clearTimeout(speechTimer.current), []);

    const handleCheer = useCallback(() => {
        onCheer?.();
        if (!speech) return;

        setIsSpeaking(true);
        clearTimeout(speechTimer.current);
        speechTimer.current = setTimeout(
            () => setIsSpeaking(false),
            SPEECH_DURATION
        );
    }, [onCheer, speech]);

    if (!isDesktop || !isReady) return null;

    return (
        <div className={`${css.root} ${className ?? ''}`}>
            {speech && (
                <p
                    className={`${css.bubble} ${isSpeaking ? css.bubbleVisible : ''}`}
                    aria-hidden={!isSpeaking}
                    dangerouslySetInnerHTML={{ __html: speech }}
                />
            )}
            <AlexikCanvas ariaLabel={ariaLabel} onCheer={handleCheer} />
        </div>
    );
}
