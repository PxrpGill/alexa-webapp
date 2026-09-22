import type { VacancyCardProps } from "@/entities/vacancies/types/vacancy-card.types";

export type GetAvailableVacanciesRequestType = {
	category?: string;
};

export type VacancyCategoryType = {
	slug: string;
	name: string;
};

export type GetAvailableVacanciesResponseType = {
	categories?: Array<VacancyCategoryType>;
	results?: Array<VacancyCardProps>;
	total?: number;
};
