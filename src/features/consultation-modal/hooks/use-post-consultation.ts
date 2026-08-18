import { useMutation } from "@tanstack/react-query";
import { postConsultationForm } from "@/shared/api/post-consultation-form";
import type { PostRequestType } from "@/shared/types/post-requests.types";
import type { ConsultationFormProps } from "../types/consultation-modal.props";

export const usePostConsultaiton = ({
	toggleSuccess,
}: ConsultationFormProps) => {
	const mutation = useMutation({
		mutationFn: (data: PostRequestType) => postConsultationForm(data),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: () => {},
	});

	return mutation;
};
