import apiInstance from "../config/api-instance";
import type {
	PostRequestResponseType,
	PostRequestType,
} from "../types/post-requests.types";
import { API_URLS } from "./api-urls";

export const postAppointmentForm = async (
	data: PostRequestType,
): Promise<PostRequestResponseType | unknown> => {
	try {
		const response = await apiInstance.post(API_URLS.postAppointments, data);

		return response.data;
	} catch (error) {
		return error;
	}
};
