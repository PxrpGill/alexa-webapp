import { cache } from 'react';

import { API_URLS } from '@/shared/api/api-urls';
import apiInstance from '@/shared/config/api-instance';

import type { VacanciesListResponseType } from '../types/vacancies-list.types';

/**
 * Базовый запрос списка вакансий. Бэкенд всегда отдаёт срез по одной категории:
 * без параметра category берётся первая категория с публикациями, а в самих
 * элементах results категории нет. Поэтому «все вакансии» собираются
 * в getAllVacancies отдельными запросами по каждой категории.
 *
 * Аргумент — строка, а не объект: React cache() ключуется по идентичности
 * аргументов, и объектный литерал давал бы промах кеша на каждом вызове.
 */
export const getVacanciesByCategory = cache(
    async (category?: string): Promise<VacanciesListResponseType> => {
        try {
            const response = await apiInstance.get(
                API_URLS.getAvailableVacancies,
                { params: category ? { category } : undefined }
            );

            return response.data as VacanciesListResponseType;
        } catch (error) {
            console.error(error);

            return { total: 0, results: [], categories: [] };
        }
    }
);
