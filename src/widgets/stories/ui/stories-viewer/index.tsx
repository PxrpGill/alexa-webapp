'use client';

import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import LoaderSVG from '@/public/icons/loader.svg';
import Modal from '@/shared/ui/modal';
import Picture from '@/shared/ui/picture';

import { useStoriesPlayer } from '../../hooks/use-stories-player';
import {
    HOLD_THRESHOLD_MS,
    SWIPE_CLOSE_THRESHOLD_PX,
    SWIPE_THRESHOLD_PX,
} from '../../models/stories.constants';
import type { StoryGroup } from '../../types/stories.types';
import StoryContent from '../story-content';
import StoryNavButton from '../story-nav-button';
import StoryProgress from '../story-progress';
import StorySidePanel from '../story-side-panel';

import css from './index.module.css';

/** Сколько групп по каждую сторону держим смонтированными ради анимации */
const MAX_VISIBLE_DELTA = 3;

type StoriesViewerProps = {
    groups: StoryGroup[];
    /** null — просмотрщик закрыт */
    activeGroupIndex: number | null;
    onClose: () => void;
    onGroupViewed: (groupId: string) => void;
};

export default function StoriesViewer({
    groups,
    activeGroupIndex,
    onClose,
    onGroupViewed,
}: StoriesViewerProps) {
    const isOpen = activeGroupIndex !== null;

    return (
        <Modal
            isOpen={isOpen}
            toggleClose={onClose}
            className={css.modal}
            contentClassName={css.content}
            closeButtonClassName={css.closeButton}
        >
            {isOpen && (
                <ViewerPlayer
                    groups={groups}
                    initialGroupIndex={activeGroupIndex}
                    onClose={onClose}
                    onGroupViewed={onGroupViewed}
                />
            )}
        </Modal>
    );
}

type ViewerPlayerProps = {
    groups: StoryGroup[];
    initialGroupIndex: number;
    onClose: () => void;
    onGroupViewed: (groupId: string) => void;
};

/**
 * Сам плеер вынесен отдельным компонентом: Modal размонтирует содержимое
 * после закрытия, поэтому состояние просмотра сбрасывается само.
 */
function ViewerPlayer({
    groups,
    initialGroupIndex,
    onClose,
    onGroupViewed,
}: ViewerPlayerProps) {
    const {
        group,
        groupIndex,
        items,
        item,
        itemIndex,
        isReady,
        isMuted,
        videoRef,
        progressRef,
        handleReady,
        toggleMuted,
        setIsHolding,
        next,
        prev,
        nextGroup,
        prevGroup,
        goToGroup,
    } = useStoriesPlayer({
        groups,
        initialGroupIndex,
        onClose,
        onGroupViewed,
    });

    const [isKeyPaused, setIsKeyPaused] = useState(false);

    const pointerRef = useRef({ x: 0, y: 0, time: 0 });
    const isPointerDownRef = useRef(false);
    const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const suppressClickRef = useRef(false);

    useEffect(() => setIsHolding(isKeyPaused), [isKeyPaused, setIsHolding]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prev();
            }

            if (event.key === 'ArrowRight') {
                next();
            }

            if (event.code === 'Space') {
                event.preventDefault();
                setIsKeyPaused((paused) => !paused);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [next, prev]);

    const stopHold = useCallback(() => {
        if (holdTimerRef.current) {
            clearTimeout(holdTimerRef.current);
            holdTimerRef.current = null;
        }

        setIsHolding(isKeyPaused);
    }, [isKeyPaused, setIsHolding]);

    const handlePointerDown = (event: React.PointerEvent) => {
        isPointerDownRef.current = true;
        pointerRef.current = {
            x: event.clientX,
            y: event.clientY,
            time: Date.now(),
        };

        holdTimerRef.current = setTimeout(
            () => setIsHolding(true),
            HOLD_THRESHOLD_MS
        );
    };

    const handlePointerUp = (event: React.PointerEvent) => {
        isPointerDownRef.current = false;

        const { x, y, time } = pointerRef.current;
        const deltaX = event.clientX - x;
        const deltaY = event.clientY - y;
        const isHeld = Date.now() - time >= HOLD_THRESHOLD_MS;

        stopHold();

        if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX) {
            suppressClickRef.current = true;

            if (deltaX < 0) {
                nextGroup();
            } else {
                prevGroup();
            }

            return;
        }

        if (deltaY > SWIPE_CLOSE_THRESHOLD_PX) {
            suppressClickRef.current = true;
            onClose();

            return;
        }

        // После удержания отпускание — это не клик по зоне переключения
        suppressClickRef.current = isHeld;
    };

    const handlePointerCancel = () => {
        /*
         * На тач-устройствах указатель «удаляется» сразу после pointerup, и
         * браузер шлёт pointerleave ещё до click. Без этой проверки каждый тап
         * по зоне переключения считался прерванным жестом и гасился.
         */
        if (!isPointerDownRef.current) {
            stopHold();

            return;
        }

        isPointerDownRef.current = false;
        suppressClickRef.current = true;
        stopHold();
    };

    // Свайп и пауза не должны превращаться в переключение кадра: гасим клик
    // до того, как он дойдёт до боковых кнопок.
    const handleClickCapture = (event: React.MouseEvent) => {
        if (suppressClickRef.current) {
            event.stopPropagation();
            suppressClickRef.current = false;
        }
    };

    if (!item || !group) {
        return null;
    }

    const nextItem =
        items[itemIndex + 1] ?? groups[groupIndex + 1]?.items[0] ?? null;

    return (
        <div className={css.stage}>
            {groups.map((storyGroup, index) => {
                const delta = index - groupIndex;

                // Дальние группы в DOM не держим: они всё равно за экраном,
                // а каждая тянет своё превью.
                if (Math.abs(delta) > MAX_VISIBLE_DELTA) {
                    return null;
                }

                const isActive = delta === 0;

                /*
                 * Ячейка под каждую группу — всегда один и тот же div с тем же
                 * ключом. Благодаря этому при переключении React не пересоздаёт
                 * узлы, а только меняет им --story-delta: прошлый кадр
                 * ужимается и уезжает в сторону, следующий вырастает в центр.
                 */
                return (
                    <div
                        key={storyGroup.id}
                        className={`${css.cell} ${isActive ? css.frame : ''}`.trim()}
                        style={
                            {
                                '--story-delta': delta,
                                '--story-sign': Math.sign(delta),
                            } as CSSProperties
                        }
                        onPointerDown={isActive ? handlePointerDown : undefined}
                        onPointerUp={isActive ? handlePointerUp : undefined}
                        onPointerCancel={
                            isActive ? handlePointerCancel : undefined
                        }
                        onPointerLeave={
                            isActive ? handlePointerCancel : undefined
                        }
                        onClickCapture={
                            isActive ? handleClickCapture : undefined
                        }
                    >
                        {isActive ? (
                            <>
                                <Picture
                                    poster={storyGroup.preview}
                                    className={css.backdrop}
                                    withoutSkeleton
                                />
                                <StoryContent
                                    key={item.id}
                                    item={item}
                                    videoRef={videoRef}
                                    isMuted={isMuted}
                                    onReady={handleReady}
                                />
                                {nextItem && (
                                    <StoryContent
                                        key={`preload-${nextItem.id}`}
                                        item={nextItem}
                                        isHidden
                                    />
                                )}

                                <StoryProgress
                                    count={items.length}
                                    current={itemIndex}
                                    progressRef={progressRef}
                                />

                                {storyGroup.title && (
                                    <p className={css.title}>
                                        {storyGroup.title}
                                    </p>
                                )}

                                {item.type === 'video' && (
                                    <button
                                        type="button"
                                        className={css.sound}
                                        onClick={toggleMuted}
                                        aria-label={
                                            isMuted
                                                ? 'Включить звук'
                                                : 'Выключить звук'
                                        }
                                    >
                                        {isMuted ? 'Звук выкл.' : 'Звук вкл.'}
                                    </button>
                                )}

                                {!isReady && (
                                    <span className={css.loader}>
                                        <LoaderSVG />
                                    </span>
                                )}

                                <StoryNavButton
                                    direction="prev"
                                    onClick={prev}
                                />
                                <StoryNavButton
                                    direction="next"
                                    onClick={next}
                                />
                            </>
                        ) : (
                            <StorySidePanel
                                group={storyGroup}
                                onClick={() => goToGroup(index)}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
