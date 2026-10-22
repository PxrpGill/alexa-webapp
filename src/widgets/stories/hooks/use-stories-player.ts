'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { StoryGroup } from '@/entities/story/types/story.types';

import { STORY_IMAGE_DURATION } from '../models/stories.constants';

type UseStoriesPlayerParams = {
    groups: StoryGroup[];
    initialGroupIndex: number;
    onClose: () => void;
    onGroupViewed: (group: StoryGroup) => void;
};

/**
 * Машина состояний просмотрщика: какой кадр показываем, сколько он уже идёт
 * и когда пора переключаться.
 *
 * Прогресс намеренно живёт не в state, а пишется прямо в DOM активной
 * полоски через progressRef: иначе каждый кадр анимации (60 раз в секунду)
 * перерисовывал бы и само видео с картинкой.
 */
export function useStoriesPlayer({
    groups,
    initialGroupIndex,
    onClose,
    onGroupViewed,
}: UseStoriesPlayerParams) {
    const [groupIndex, setGroupIndex] = useState(initialGroupIndex);
    const [itemIndex, setItemIndex] = useState(0);
    /**
     * Готовность храним набором id загруженных кадров, а не флагом: эффекты
     * ребёнка срабатывают раньше родительских, поэтому закэшированная
     * картинка успевала сказать «готово» до сброса флага — и показ замирал
     * навсегда. Набор только пополняется, сбрасывать нечего, а предзагруженный
     * соседний кадр оказывается готовым ещё до того, как до него дошли.
     */
    const [readyIds, setReadyIds] = useState<ReadonlySet<number>>(
        () => new Set()
    );
    const [isHolding, setIsHolding] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const group = groups[groupIndex];
    const items = group?.items ?? [];
    const item = items[itemIndex];
    const isReady = item ? readyIds.has(item.id) : false;

    const videoRef = useRef<HTMLVideoElement>(null);
    const barRef = useRef<HTMLElement | null>(null);
    const elapsedRef = useRef(0);

    const isPaused = isHolding || isHidden;

    const setBarProgress = useCallback((progress: number) => {
        if (barRef.current) {
            barRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
        }
    }, []);

    const progressRef = useCallback((node: HTMLElement | null) => {
        barRef.current = node;
    }, []);

    const goTo = useCallback((nextGroup: number, nextItem: number) => {
        setGroupIndex(nextGroup);
        setItemIndex(nextItem);
    }, []);

    const next = useCallback(() => {
        const currentItems = groups[groupIndex]?.items ?? [];

        if (itemIndex < currentItems.length - 1) {
            goTo(groupIndex, itemIndex + 1);

            return;
        }

        if (groupIndex < groups.length - 1) {
            goTo(groupIndex + 1, 0);

            return;
        }

        onClose();
    }, [groups, groupIndex, itemIndex, goTo, onClose]);

    const prev = useCallback(() => {
        if (itemIndex > 0) {
            goTo(groupIndex, itemIndex - 1);

            return;
        }

        if (groupIndex > 0) {
            const prevItems = groups[groupIndex - 1]?.items ?? [];

            goTo(groupIndex - 1, Math.max(prevItems.length - 1, 0));

            return;
        }

        // Первый кадр первой группы — назад идти некуда, просто начинаем заново
        goTo(groupIndex, 0);
        elapsedRef.current = 0;
        setBarProgress(0);
    }, [groups, groupIndex, itemIndex, goTo, setBarProgress]);

    const nextGroup = useCallback(() => {
        if (groupIndex < groups.length - 1) {
            goTo(groupIndex + 1, 0);

            return;
        }

        onClose();
    }, [groups.length, groupIndex, goTo, onClose]);

    const prevGroup = useCallback(() => {
        goTo(Math.max(groupIndex - 1, 0), 0);
    }, [groupIndex, goTo]);

    const goToGroup = useCallback((index: number) => goTo(index, 0), [goTo]);

    const markReady = useCallback(
        (id: number) =>
            setReadyIds((prev) =>
                prev.has(id) ? prev : new Set(prev).add(id)
            ),
        []
    );

    const toggleMuted = useCallback(() => setIsMuted((prev) => !prev), []);

    // Новый кадр — обнуляем счётчик и полоску. Индексы здесь не «лишние»:
    // тело эффекта их не читает, но именно их смена и есть повод сбросить.
    // Видео-кадр остаётся смонтированным, пока он рядом с текущим, поэтому
    // при возврате к нему перематываем в начало.
    // biome-ignore lint/correctness/useExhaustiveDependencies: эффект намеренно завязан на смену кадра
    useEffect(() => {
        elapsedRef.current = 0;
        setBarProgress(0);

        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    }, [groupIndex, itemIndex, setBarProgress]);

    // Вкладку свернули — замораживаем показ, иначе сторис «проиграется» в фоне.
    useEffect(() => {
        const handleVisibility = () =>
            setIsHidden(document.visibilityState === 'hidden');

        handleVisibility();
        document.addEventListener('visibilitychange', handleVisibility);

        return () =>
            document.removeEventListener('visibilitychange', handleVisibility);
    }, []);

    // Видео ведём императивно: пока кадр не готов или стоит пауза — не играем.
    useEffect(() => {
        const video = videoRef.current;

        if (!video || item?.type !== 'video') {
            return;
        }

        if (isReady && !isPaused) {
            video.play().catch(() => {
                // Автоплей может быть заблокирован — кадр просто замрёт
            });
        } else {
            video.pause();
        }

        // Ушли с кадра — он остаётся в DOM скрытым и не должен играть дальше
        return () => video.pause();
    }, [item, isReady, isPaused]);

    // Тикер: крутится только когда кадр готов и не стоит на паузе. Отсюда и
    // требование «не загрузилось — не играем»: прогресс замирает сам собой.
    useEffect(() => {
        if (!item || !isReady || isPaused) {
            return;
        }

        const duration =
            item.type === 'image' ? (item.duration ?? STORY_IMAGE_DURATION) : 0;

        let frame = 0;
        let lastTimestamp = performance.now();

        const tick = (timestamp: number) => {
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            let progress = 0;

            if (item.type === 'video') {
                const video = videoRef.current;

                progress = video?.duration
                    ? video.currentTime / video.duration
                    : 0;
            } else {
                elapsedRef.current += delta;
                progress = elapsedRef.current / duration;
            }

            setBarProgress(progress);

            if (progress >= 1) {
                next();

                return;
            }

            frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, [item, isReady, isPaused, next, setBarProgress]);

    // Группу считаем просмотренной, как только дошли до её последнего кадра.
    useEffect(() => {
        if (group && itemIndex === group.items.length - 1) {
            onGroupViewed(group);
        }
    }, [group, itemIndex, onGroupViewed]);

    return {
        group,
        groupIndex,
        items,
        item,
        itemIndex,
        isReady,
        isPaused,
        isMuted,
        videoRef,
        progressRef,
        markReady,
        toggleMuted,
        setIsHolding,
        next,
        prev,
        nextGroup,
        prevGroup,
        goToGroup,
    };
}
