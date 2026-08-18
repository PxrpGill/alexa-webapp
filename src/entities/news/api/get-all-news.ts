import { cache } from "react";
import { API_URLS } from "@/shared/api/api-urls";
import apiInstance from "@/shared/config/api-instance";
import type { PaginationType } from "@/shared/types/pagination.types";
import type { GetAllNewsResponseType } from "../types/news.types";

export const getAllNews = cache(
	async ({
		page = 1,
		perPage = 6,
	}: Partial<PaginationType> = {}): Promise<
		GetAllNewsResponseType | undefined
	> => {
		try {
			const response = await apiInstance.get(API_URLS.getAllBlogs, {
				params: {
					page,
					perPage,
				},
			});

			return response.data as GetAllNewsResponseType;
		} catch (error) {
			console.error(error);
		}
	},
);
