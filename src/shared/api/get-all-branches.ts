import { cache } from "react";
import apiInstance from "../config/api-instance";
import type { BranchType } from "../types/branches-request.types";
import { API_URLS } from "./api-urls";

export const getAllBranches = cache(
	async (): Promise<Array<BranchType> | unknown> => {
		try {
			const response = await apiInstance.get(API_URLS.getAllBranches);

			return response.data as Array<BranchType>;
		} catch (error) {
			return error;
		}
	},
);
