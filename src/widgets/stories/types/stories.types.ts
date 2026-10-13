import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';
import type { VideoSourceType } from '@/shared/ui/video';

export type StoryImageItem = {
    id: string;
    type: 'image';
    poster: PictureFormatType;
    /** Сколько миллисекунд держать кадр; по умолчанию STORY_IMAGE_DURATION */
    duration?: number;
};

export type StoryVideoItem = {
    id: string;
    type: 'video';
    source: VideoSourceType;
    /** Кадр-заглушка, пока видео грузится */
    posterSrc?: string;
};

export type StoryItem = StoryImageItem | StoryVideoItem;

export type StoryGroup = {
    id: string;
    /** Подпись под кружком и в шапке просмотрщика */
    title?: string;
    /** Превью — то, что уходит в кружок */
    preview: PictureFormatType;
    /** Контент группы; количество не ограничено */
    items: StoryItem[];
};

export type StoriesProps = {
    title?: string;
    groups: StoryGroup[];
} & PropsWithClassName;
