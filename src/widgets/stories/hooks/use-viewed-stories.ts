'use client';

import { useCallback, useEffect, useState } from 'react';

import { VIEWED_STORIES_KEY } from '../models/stories.constants';

/**
 * Список просмотренных групп в localStorage. Читаем в эффекте, а не в
 * инициализаторе state: на сервере хранилища нет, и первый рендер обязан
 * совпасть с серверным, иначе будет рассинхрон гидратации.
 */
export function useViewedStories() {
    const [viewedIds, setViewedIds] = useState<string[]>([]);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(VIEWED_STORIES_KEY);

            if (stored) {
                const parsed: unknown = JSON.parse(stored);

                if (Array.isArray(parsed)) {
                    setViewedIds(parsed.filter((id) => typeof id === 'string'));
                }
            }
        } catch {
            // Приватный режим или битое значение — просто считаем, что ничего
            // не просмотрено
        }
    }, []);

    const markViewed = useCallback((groupId: string) => {
        setViewedIds((prev) => {
            if (prev.includes(groupId)) {
                return prev;
            }

            const next = [...prev, groupId];

            try {
                localStorage.setItem(VIEWED_STORIES_KEY, JSON.stringify(next));
            } catch {
                // Запись могла не пройти — на показе это не сказывается
            }

            return next;
        });
    }, []);

    return { viewedIds, markViewed };
}
