'use client';

import { type Ref, useEffect, useRef } from 'react';

import { MEDIA_QUERIES } from '@/shared/config/use-media-query.constants';
import { useMediaQuery } from '@/shared/hooks/use-media-query';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

import css from './index.module.css';

export type VideoSourceType = {
    src: string;
    /** Отдельный файл для мобильных — лёгкий и в вертикальном кадре */
    mobile?: string;
};

export type VideoProps = {
    source: VideoSourceType;
    /** Кадр-заглушка, пока видео не прогрузилось */
    posterSrc?: string;
    ref?: Ref<HTMLVideoElement>;
    muted?: boolean;
    loop?: boolean;
    autoPlay?: boolean;
    /** Видео готово играть (canplay или уже было готово к монтированию) */
    onReady?: () => void;
    onEnded?: () => void;
} & PropsWithClassName;

/**
 * Минимальный примитив видео: без своих контролов и без внутренней логики
 * воспроизведения — play/pause вызывает владелец через ref. Мобильный файл
 * выбирается в JS: атрибут media у <source> внутри <video> браузерами не
 * поддерживается, поэтому рендерим ровно один src.
 */
export default function Video({
    source,
    posterSrc,
    ref,
    className,
    muted = true,
    loop,
    autoPlay,
    onReady,
    onEnded,
}: VideoProps) {
    const innerRef = useRef<HTMLVideoElement>(null);

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_QUERIES.mobile})`);
    const src = (isMobile && source.mobile) || source.src;

    const onReadyRef = useRef(onReady);

    useEffect(() => {
        onReadyRef.current = onReady;
    });

    // Файл мог прогрузиться до того, как мы повесили обработчик, — тогда
    // canplay уже не придёт и владелец ждал бы готовности вечно. Проверку
    // повторяем на каждую смену файла, поэтому src в зависимостях.
    // biome-ignore lint/correctness/useExhaustiveDependencies: проверка намеренно завязана на смену src
    useEffect(() => {
        const video = innerRef.current;

        if (video && video.readyState >= video.HAVE_FUTURE_DATA) {
            onReadyRef.current?.();
        }
    }, [src]);

    return (
        <video
            ref={(node) => {
                innerRef.current = node;

                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            className={`${css.root} ${className ?? ''}`.trim()}
            src={src}
            poster={posterSrc}
            muted={muted}
            loop={loop}
            autoPlay={autoPlay}
            playsInline
            preload="auto"
            onCanPlay={() => onReadyRef.current?.()}
            onEnded={onEnded}
        />
    );
}
