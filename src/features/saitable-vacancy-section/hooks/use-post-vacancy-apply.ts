import { useMutation } from "@tanstack/react-query";
import {
	postSaitableForm,
	type RequestToSaitableBodyData,
} from "@/shared/api/post-saitable-form";
import { parseApplyError } from "../models/parse-apply-error";
import type { UsePostVacancyApplyParams } from "../types/saitable-vacancy.types";

export const usePostVacancyApply = ({
	vacancySlug,
	toggleSuccess,
	setFieldError,
}: UsePostVacancyApplyParams) => {
	const { mutate, isPending, error } = useMutation({
		mutationFn: (data: RequestToSaitableBodyData) =>
			postSaitableForm({ ...data, vacancySlug }),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: (mutationError) => {
			const { fieldErrors } = parseApplyError(mutationError);

			for (const [field, message] of Object.entries(fieldErrors)) {
				setFieldError(field as keyof RequestToSaitableBodyData, message);
			}
		},
	});

	return {
		mutate,
		isPending,
		generalError: error ? parseApplyError(error).message : undefined,
	};
};
