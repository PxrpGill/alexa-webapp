'use client';

import type { RefObject } from 'react';

import type { StoryItem } from '@/entities/story/types/story.types';
import Picture from '@/shared/ui/picture';
import Video from '@/shared/ui/video';

import css from './index.module.css';

type StoryContentProps = {
    item: StoryItem;
    videoRef?: RefObject<HTMLVideoElement | null>;
    isMuted?: boolean;
    onReady?: () => void;
    /**
     * Скрытый кадр — сосед текущего. Он уже в DOM и успевает
     * прогрузиться, но не виден и не участвует в показе.
     */
    isHidden?: boolean;
};

/** Один кадр сториса: картинка или видео */
export default function StoryContent({
    item,
    videoRef,
    isMuted,
    onReady,
    isHidden,
}: StoryContentProps) {
    return (
        <div className={`${css.root} ${isHidden ? css.hidden : ''}`.trim()}>
            {item.type === 'video' ? (
                <Video
                    ref={videoRef}
                    source={item.source}
                    posterSrc={item.posterSrc}
                    muted={isMuted}
                    onReady={onReady}
                />
            ) : (
                <Picture
                    poster={item.poster}
                    loading="eager"
                    fetchPriority={isHidden ? 'auto' : 'high'}
                    onReady={onReady}
                    // Серый скелетон с переливом и проявление по opacity на
                    // смене кадра читаются как мигание: под кадром и так лежит
                    // превью группы, а на долгую загрузку есть лоадер.
                    withoutSkeleton
                />
            )}
        </div>
    );
}
