import { useMutation } from "@tanstack/react-query";
import { postAppointmentForm } from "@/shared/api/post-apponitment-form";
import type { PostRequestType } from "@/shared/types/post-requests.types";

export const usePostAppointmentScheduling = () => {
	const mutation = useMutation({
		mutationFn: (data: PostRequestType) => postAppointmentForm(data),
		onSuccess: () => {},
		onError: () => {},
	});

	return mutation;
};
