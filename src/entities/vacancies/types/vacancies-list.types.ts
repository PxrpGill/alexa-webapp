import type { VacancyCardProps } from './vacancy-card.types';

export type VacancyCategoryType = {
    slug: string;
    name: string;
};

/**
 * Ответ /api/v1/vacancies — всегда срез по одной категории, а не весь список.
 */
export type VacanciesListResponseType = {
    categories?: Array<VacancyCategoryType>;
    results?: Array<VacancyCardProps>;
    total?: number;
};

/**
 * Все вакансии, разложенные по категориям: то, на чём работает клиентская
 * фильтрация на странице вакансий.
 */
export type VacanciesByCategoryType = {
    categories: Array<VacancyCategoryType>;
    vacanciesByCategory: Record<string, Array<VacancyCardProps>>;
    total: number;
};
