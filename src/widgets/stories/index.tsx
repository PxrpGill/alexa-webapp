'use client';

import { useState } from 'react';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import { useViewedStories } from './hooks/use-viewed-stories';
import css from './index.module.css';
import type { StoriesProps } from './types/stories.types';
import StoriesViewer from './ui/stories-viewer';
import StoryPreview from './ui/story-preview';

export default function Stories({ title, groups, className }: StoriesProps) {
    const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(
        null
    );
    const { isViewed, markViewed } = useViewedStories();

    if (!groups?.length) {
        return null;
    }

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} container ${className ?? ''}`.trim()}
        >
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.list}>
                {groups.map((group, index) => (
                    <StoryPreview
                        key={group.id}
                        group={group}
                        isViewed={isViewed(group)}
                        onClick={() => setActiveGroupIndex(index)}
                    />
                ))}
            </ul>
            <StoriesViewer
                groups={groups}
                activeGroupIndex={activeGroupIndex}
                onClose={() => setActiveGroupIndex(null)}
                onGroupViewed={markViewed}
            />
        </AnimationWrapper>
    );
}
