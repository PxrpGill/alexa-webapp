'use client';

import { useRef } from 'react';

import type { PropsWithClassName } from '@/shared/types/props-with-classname';

import { useZupCanvas } from './hooks/use-zup-canvas';
import css from './index.module.css';
import { WORDS } from './models/zup.constants';

export default function ZupBlock({ className }: PropsWithClassName) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useZupCanvas(canvasRef);

    return (
        <div className={`${css.root} ${className}`}>
            <canvas
                ref={canvasRef}
                className={css.canvas}
                role="img"
                aria-label={`Зуб. ${WORDS.map((word) => word.text).join(', ')}`}
            />
        </div>
    );
}
