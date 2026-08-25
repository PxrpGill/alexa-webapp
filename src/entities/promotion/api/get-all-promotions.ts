import { cache } from "react";
import { API_URLS } from "@/shared/api/api-urls";
import apiInstance from "@/shared/config/api-instance";
import type { PromotionCardProps } from "../types/promotion-card.types";

export const getAllPromotions = cache(
	async (): Promise<Array<PromotionCardProps> | undefined> => {
		try {
			const response = await apiInstance.get(API_URLS.getAllPromotions);

			return response.data;
		} catch (error) {
			console.error(error);
		}
	},
);
