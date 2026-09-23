import { useMutation } from "@tanstack/react-query";
import {
	postSaitableForm,
	type RequestToSaitableBodyData,
} from "@/shared/api/post-saitable-form";
import type { AppointmentFormProps } from "../types/saitable-vacancy.types";

export const usePostAppointmentScheduling = ({
	toggleSuccess,
}: AppointmentFormProps) => {
	const mutation = useMutation({
		mutationFn: (data: RequestToSaitableBodyData) => postSaitableForm(data),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: () => {},
	});

	return mutation;
};
