import type { PictureFormatType } from '@/shared/ui/picture';
import type { VideoSourceType } from '@/shared/ui/video';

export type StoryImageItem = {
    id: number;
    type: 'image';
    poster: PictureFormatType;
    /** Сколько миллисекунд держать кадр; по умолчанию STORY_IMAGE_DURATION */
    duration?: number;
};

export type StoryVideoItem = {
    id: number;
    type: 'video';
    source: VideoSourceType;
    /** Кадр-заглушка, пока видео грузится */
    posterSrc?: string;
};

export type StoryItem = StoryImageItem | StoryVideoItem;

export type StoryGroup = {
    id: number;
    /** Подпись под кружком и в шапке просмотрщика */
    title?: string;
    /**
     * Меняется при любой правке группы или её кадров — по нему группа снова
     * становится непросмотренной
     */
    updatedAt: string;
    /** Превью — то, что уходит в кружок */
    preview: PictureFormatType;
    /** Контент группы; количество не ограничено */
    items: StoryItem[];
};

export type GetStoriesResponseType = {
    groups: StoryGroup[];
};
