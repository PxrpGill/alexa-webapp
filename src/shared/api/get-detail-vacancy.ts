import { cache } from 'react';

import type { DetailVacancyType } from '@/entities/vacancies/types/detail-vacancy.types';

import apiInstance from '../config/api-instance';

import { API_URLS } from './api-urls';

type GetDetailVacancyParams = {
    vacancySlug: string;
};

export const getDetailVacancy = cache(
    async ({
        vacancySlug,
    }: GetDetailVacancyParams): Promise<DetailVacancyType | undefined> => {
        try {
            const response = await apiInstance.get(
                API_URLS.getDetailVacancy(vacancySlug)
            );

            return response.data;
        } catch (error) {
            console.error(error);

            return;
        }
    }
);

/**
 * getDetailVacancy принимает объект, а React cache() ключуется по идентичности
 * аргумента: литерал из generateMetadata никогда не попадёт в запись,
 * созданную самой страницей, и бэкенд опрашивается дважды за запрос.
 * Обёртка с ключом-строкой этого избегает.
 */
export const getDetailVacancyBySlug = cache(
    async (vacancySlug: string): Promise<DetailVacancyType | undefined> =>
        getDetailVacancy({ vacancySlug })
);
