'use client';

import { useCallback, useEffect, useState } from 'react';

import type { StoryGroup } from '@/entities/story/types/story.types';

import { VIEWED_STORIES_KEY } from '../models/stories.constants';

/**
 * Ключ просмотра включает updatedAt: если в админке поменяли группу или
 * добавили в неё кадр, ключ меняется и группа снова считается непросмотренной
 */
function getViewKey(group: StoryGroup) {
    return `${group.id}:${group.updatedAt}`;
}

/**
 * Список просмотренных групп в localStorage. Читаем в эффекте, а не в
 * инициализаторе state: на сервере хранилища нет, и первый рендер обязан
 * совпасть с серверным, иначе будет рассинхрон гидратации.
 */
export function useViewedStories() {
    const [viewedKeys, setViewedKeys] = useState<string[]>([]);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(VIEWED_STORIES_KEY);

            if (stored) {
                const parsed: unknown = JSON.parse(stored);

                if (Array.isArray(parsed)) {
                    setViewedKeys(
                        parsed.filter((key) => typeof key === 'string')
                    );
                }
            }
        } catch {
            // Приватный режим или битое значение — просто считаем, что ничего
            // не просмотрено
        }
    }, []);

    const isViewed = useCallback(
        (group: StoryGroup) => viewedKeys.includes(getViewKey(group)),
        [viewedKeys]
    );

    const markViewed = useCallback((group: StoryGroup) => {
        const key = getViewKey(group);

        setViewedKeys((prev) => {
            if (prev.includes(key)) {
                return prev;
            }

            // Старые ключи той же группы больше не нужны — без чистки список
            // рос бы с каждой правкой в админке
            const next = [
                ...prev.filter((k) => !k.startsWith(`${group.id}:`)),
                key,
            ];

            try {
                localStorage.setItem(VIEWED_STORIES_KEY, JSON.stringify(next));
            } catch {
                // Запись могла не пройти — на показе это не сказывается
            }

            return next;
        });
    }, []);

    return { isViewed, markViewed };
}
