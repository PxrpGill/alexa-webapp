import { cache } from 'react';

import { API_URLS } from '@/shared/api/api-urls';
import { handleFetchError } from '@/shared/api/handle-fetch-error';
import apiInstance from '@/shared/config/api-instance';

import type { GetStoriesResponseType, StoryGroup } from '../types/story.types';

type RawStoryGroup = Omit<StoryGroup, 'preview'> & {
    preview?: StoryGroup['preview'] | null;
};

export const getStories = cache(
    async (): Promise<GetStoriesResponseType | undefined> => {
        try {
            const response = await apiInstance.get<{
                groups: RawStoryGroup[];
            }>(API_URLS.getStories);

            // Без превью кружок нечем нарисовать, а пустую группу нечем
            // показать — такие отбрасываем, чтобы виджет мог на них не
            // рассчитывать
            const groups = (response.data.groups ?? []).filter(
                (group): group is StoryGroup =>
                    Boolean(group.preview) && group.items?.length > 0
            );

            return { groups };
        } catch (error) {
            return handleFetchError(error);
        }
    }
);
