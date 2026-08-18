import { useMutation } from "@tanstack/react-query";
import { postDMSForm } from "@/shared/api/post-dms-form";
import type { PostRequestType } from "@/shared/types/post-requests.types";
import type { DMSFormProps } from "../types/dms-modal.types";

export const usePostDMSModal = ({ toggleSuccess }: DMSFormProps) => {
	const mutation = useMutation({
		mutationFn: async (data: PostRequestType) => postDMSForm(data),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: () => {},
	});

	return mutation;
};
