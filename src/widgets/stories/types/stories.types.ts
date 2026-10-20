import type { StoryGroup } from '@/entities/story/types/story.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

export type StoriesProps = {
    title?: string;
    groups: StoryGroup[];
} & PropsWithClassName;
