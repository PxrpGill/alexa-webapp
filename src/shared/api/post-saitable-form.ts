import apiInstance from "../config/api-instance";
import type { PostRequestResponseType } from "../types/post-requests.types";
import { API_URLS } from "./api-urls";

export type RequestToSaitableBodyData = {
	name: string;
	phone: string;
	privacy_policy_accepted: boolean;
	resume: File;
};

export type PostSaitableFormParams = RequestToSaitableBodyData & {
	/** Отклик на конкретную вакансию. Без него уходит общий отклик. */
	vacancySlug?: string;
};

export const postSaitableForm = async ({
	vacancySlug,
	name,
	phone,
	privacy_policy_accepted,
	resume,
}: PostSaitableFormParams): Promise<PostRequestResponseType> => {
	const formData = new FormData();

	formData.append("name", name);
	formData.append("phone", phone);
	formData.append(
		"privacy_policy_accepted",
		String(privacy_policy_accepted),
	);
	formData.append("resume", resume);

	const response = await apiInstance.post(
		vacancySlug
			? API_URLS.requestToVacancy(vacancySlug)
			: API_URLS.requestToSaitable,
		formData,
	);

	return response.data;
};
