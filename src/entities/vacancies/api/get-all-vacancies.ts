import { cache } from 'react';

import type { VacanciesByCategoryType } from '../types/vacancies-list.types';
import type { VacancyCardProps } from '../types/vacancy-card.types';

import { getVacanciesByCategory } from './get-vacancies-by-category';

/**
 * Собирает все опубликованные вакансии по категориям: один запрос за списком
 * категорий плюс по запросу на категорию. Вызывается только на сервере при
 * пререндере, поэтому N+1 отрабатывает раз в окно ревалидации.
 */
export const getAllVacancies = cache(
    async (): Promise<VacanciesByCategoryType> => {
        const root = await getVacanciesByCategory();

        const categories = root.categories ?? [];
        const total = root.total ?? 0;

        if (!categories.length) {
            return { categories: [], vacanciesByCategory: {}, total };
        }

        const responses = await Promise.all(
            categories.map((category) => getVacanciesByCategory(category.slug))
        );

        const vacanciesByCategory = Object.fromEntries(
            categories.map((category, index) => [
                category.slug,
                responses[index]?.results ?? [],
            ])
        );

        return { categories, vacanciesByCategory, total };
    }
);

/**
 * Плоский список всех вакансий без дублей — для generateStaticParams,
 * sitemap и allowlist OG-картинок. Одна вакансия может попадать
 * в несколько категорий, поэтому дедуп по slug обязателен.
 */
export const getAllVacancyCards = cache(
    async (): Promise<Array<VacancyCardProps>> => {
        const { categories, vacanciesByCategory } = await getAllVacancies();

        const seenSlugs = new Set<string>();
        const cards: Array<VacancyCardProps> = [];

        for (const category of categories) {
            for (const vacancy of vacanciesByCategory[category.slug] ?? []) {
                if (!vacancy.slug || seenSlugs.has(vacancy.slug)) continue;

                seenSlugs.add(vacancy.slug);
                cards.push(vacancy);
            }
        }

        return cards;
    }
);
