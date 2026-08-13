import { useMutation } from "@tanstack/react-query";
import { postAppointmentForm } from "@/shared/api/post-apponitment-form";
import type { PostRequestType } from "@/shared/types/post-requests.types";
import type { AppointmentFormProps } from "../types/appointment-scheduling.types";

export const usePostAppointmentScheduling = ({
	toggleSucces,
}: AppointmentFormProps) => {
	const mutation = useMutation({
		mutationFn: (data: PostRequestType) => postAppointmentForm(data),
		onSuccess: () => {
			toggleSucces();
		},
		onError: () => {},
	});

	return mutation;
};
