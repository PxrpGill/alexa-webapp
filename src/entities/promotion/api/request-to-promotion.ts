import { cache } from "react";
import { API_URLS } from "@/shared/api/api-urls";
import apiInstance from "@/shared/config/api-instance";
import type { PostRequestResponseType } from "@/shared/types/post-requests.types";
import type { RequestToPromotionType } from "../types/request-to-promotion.types";

export const requestToPromotion = cache(
	async (
		requestData: RequestToPromotionType,
	): Promise<PostRequestResponseType | undefined> => {
		try {
			const response = await apiInstance.post(
				API_URLS.requestToPromotion,
				requestData,
			);

			return response.data;
		} catch (error) {
			console.error(error);
			return;
		}
	},
);
