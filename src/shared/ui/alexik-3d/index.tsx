/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: реплика — доверенный HTML из констант */

'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';

import css from './index.module.css';
import type { Alexik3DProps } from './types';

// three тянет ~120 КБ gzip — отдельный чанк, который грузится только
// после того, как страница уже отрисовалась.
const AlexikCanvas = dynamic(() => import('./ui/alexik-canvas'), {
    ssr: false,
});

const DEFAULT_SPEECH = 'Запишите ребёнка на&nbsp;приём';

/** сколько реплика висит на экране после клика */
const SPEECH_DURATION = 4000;

/**
 * Плавающий 3D-маскот в правом нижнем углу. Монтируется только когда
 * браузер освободится, чтобы не мешать первой отрисовке.
 */
export function Alexik3D({
    className,
    ariaLabel,
    speech = DEFAULT_SPEECH,
    onCheer,
}: Alexik3DProps) {
    const [isReady, setIsReady] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speechTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        if (typeof window.requestIdleCallback !== 'function') {
            const timer = window.setTimeout(() => setIsReady(true), 1200);
            return () => window.clearTimeout(timer);
        }

        const handle = window.requestIdleCallback(() => setIsReady(true), {
            timeout: 3000,
        });
        return () => window.cancelIdleCallback(handle);
    }, []);

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

    if (!isReady) return null;

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
