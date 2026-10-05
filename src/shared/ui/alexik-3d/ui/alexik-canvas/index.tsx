'use client';

import { useEffect, useRef } from 'react';
import {
    Clock,
    MathUtils,
    NeutralToneMapping,
    SRGBColorSpace,
    WebGLRenderer,
} from 'three';

import { createAlexik } from '../../lib/create-alexik';
import type { AlexikCanvasProps } from '../../types';

import css from './index.module.css';

const DEFAULT_ARIA_LABEL =
    'Зубик Алексик, 3D персонаж. Нажмите, чтобы он помахал.';

/** порог в пикселях, после которого жест считается перетаскиванием, а не кликом */
const DRAG_THRESHOLD = 6;

const ease = (a: number, b: number, k: number) => a + (b - a) * k;

export default function AlexikCanvas({
    ariaLabel = DEFAULT_ARIA_LABEL,
    onCheer,
}: AlexikCanvasProps) {
    const hostRef = useRef<HTMLButtonElement>(null);
    // колбэк в ref: эффект монтируется один раз и не должен пересоздавать сцену
    const onCheerRef = useRef(onCheer);

    useEffect(() => {
        onCheerRef.current = onCheer;
    }, [onCheer]);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;

        const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 0
            : 1;

        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = SRGBColorSpace;
        // нейтральный тонмаппинг вместо ACES: тот сжимал светлое и белая
        // эмаль уходила в серый
        renderer.toneMapping = NeutralToneMapping;
        renderer.toneMappingExposure = 1.15;
        host.appendChild(renderer.domElement);

        const alexik = createAlexik();
        const clock = new Clock();

        let lookX = 0;
        let lookY = 0;
        let spin = 0;
        let spinVelocity = 0;
        let dragging = false;
        let lastX = 0;
        let moved = 0;
        // собственный счётчик времени: пауза в фоне не даёт скачка анимации
        let time = 0;
        let cheerAt = -10;
        let frame = 0;

        const resize = () => {
            const w = host.clientWidth;
            const h = host.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            alexik.camera.aspect = w / h;
            alexik.camera.updateProjectionMatrix();
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        resize();

        const cheer = () => {
            cheerAt = time;
            onCheerRef.current?.();
        };

        const onPointerMove = (event: PointerEvent) => {
            const rect = host.getBoundingClientRect();
            lookX = MathUtils.clamp(
                (event.clientX - (rect.left + rect.width / 2)) / rect.width,
                -1,
                1
            );
            lookY = MathUtils.clamp(
                (event.clientY - (rect.top + rect.height / 2)) / rect.height,
                -1,
                1
            );
            if (!dragging) return;
            const dx = event.clientX - lastX;
            lastX = event.clientX;
            moved += Math.abs(dx);
            spin += dx * 0.012;
            spinVelocity = dx * 0.012;
        };

        const onPointerDown = (event: PointerEvent) => {
            dragging = true;
            moved = 0;
            lastX = event.clientX;
            host.setPointerCapture(event.pointerId);
        };

        const onPointerUp = () => {
            dragging = false;
        };

        // клик, а не pointerup: так Enter/Space с клавиатуры работают нативно.
        // После перетаскивания moved велик — радость не срабатывает.
        const onClick = () => {
            if (moved < DRAG_THRESHOLD) cheer();
            moved = 0;
        };

        window.addEventListener('pointermove', onPointerMove);
        host.addEventListener('pointerdown', onPointerDown);
        host.addEventListener('pointerup', onPointerUp);
        host.addEventListener('click', onClick);

        const tick = () => {
            frame = requestAnimationFrame(tick);
            // большие шаги режем: после паузы кадр не должен «телепортировать» позу
            time += Math.min(clock.getDelta(), 0.05);

            // инерция вращения и возврат лицом к зрителю
            if (!dragging) {
                spin += spinVelocity;
                spinVelocity *= 0.93;
                if (Math.abs(spinVelocity) < 0.002) {
                    const target =
                        Math.round(spin / (Math.PI * 2)) * Math.PI * 2;
                    spin = ease(spin, target, 0.04);
                }
            }

            alexik.update({
                time,
                lookX,
                lookY,
                spin,
                sinceCheer: time - cheerAt,
                motion,
            });
            renderer.render(alexik.scene, alexik.camera);
        };

        const stop = () => {
            if (!frame) return;
            cancelAnimationFrame(frame);
            frame = 0;
        };

        const start = () => {
            if (frame) return;
            clock.getDelta(); // поглощаем простой, чтобы следующий шаг был малым
            frame = requestAnimationFrame(tick);
        };

        const onVisibilityChange = () => {
            if (document.hidden) stop();
            else start();
        };

        document.addEventListener('visibilitychange', onVisibilityChange);
        start();

        return () => {
            stop();
            document.removeEventListener(
                'visibilitychange',
                onVisibilityChange
            );
            window.removeEventListener('pointermove', onPointerMove);
            host.removeEventListener('pointerdown', onPointerDown);
            host.removeEventListener('pointerup', onPointerUp);
            host.removeEventListener('click', onClick);
            resizeObserver.disconnect();
            alexik.dispose();
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return (
        <button
            ref={hostRef}
            type="button"
            className={css.root}
            aria-label={ariaLabel}
        />
    );
}
