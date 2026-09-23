import apiInstance from "../config/api-instance";
import { API_URLS } from "./api-urls";

export type RequestToSaitableBodyData = {
	name: string;
	phone: string;
	privacy_policy_accepted: boolean;
};

export const postSaitableForm = async (
	data: RequestToSaitableBodyData,
): Promise<RequestToSaitableBodyData | unknown> => {
	try {
		const response = await apiInstance.post(API_URLS.requestToSaitable, data);

		return response.data;
	} catch (error) {
		return error;
	}
};
