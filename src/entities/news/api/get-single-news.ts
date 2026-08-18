import { cache } from "react";
import { API_URLS } from "@/shared/api/api-urls";
import apiInstance from "@/shared/config/api-instance";
import type { SingleNewsProps } from "../types/news-card.types";

export const getSingleNews = cache(
	async (slug: string): Promise<SingleNewsProps | undefined> => {
		try {
			const response = await apiInstance.get(API_URLS.getSingleBlog(slug));

			return response.data as SingleNewsProps;
		} catch (error) {
			console.error(error);
		}
	},
);
