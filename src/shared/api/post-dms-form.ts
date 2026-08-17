import apiInstance from "../config/api-instance";
import type {
	PostRequestResponseType,
	PostRequestType,
} from "../types/post-requests.types";
import { API_URLS } from "./api-urls";

export const postDMSForm = async (
	data: PostRequestType,
): Promise<PostRequestResponseType | unknown> => {
	try {
		const response = await apiInstance.post(API_URLS.postDMS, data);

		return response.data;
	} catch (error) {
		return error;
	}
};
