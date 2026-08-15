import { useMutation } from "@tanstack/react-query";
import { postAppointmentForm } from "@/shared/api/post-apponitment-form";
import type { PostRequestType } from "@/shared/types/post-requests.types";
import type { ConsultationFormProps } from "../types/consultation-modal.props";

export const usePostConsultaiton = ({
	toggleSuccess,
}: ConsultationFormProps) => {
	const mutation = useMutation({
		mutationFn: (data: PostRequestType) => postAppointmentForm(data),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: () => {},
	});

	return mutation;
};
