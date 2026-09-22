import { cache } from "react";
import { API_URLS } from "@/shared/api/api-urls";
import apiInstance from "@/shared/config/api-instance";
import type {
	GetAvailableVacanciesRequestType,
	GetAvailableVacanciesResponseType,
} from "../types/get-vacancies-request.types";

export const getAvailableVacancies = cache(
	async ({
		category,
	}: GetAvailableVacanciesRequestType = {}): Promise<GetAvailableVacanciesResponseType> => {
		try {
			const response = await apiInstance.get(API_URLS.getAvailableVacancies, {
				params: { category },
			});

			return response.data;
		} catch (error) {
			console.error(error);

			return { total: 0, results: [] };
		}
	},
);
