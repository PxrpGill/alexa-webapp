import { useMutation } from "@tanstack/react-query";
import { requestToPromotion } from "@/entities/promotion/api/request-to-promotion";
import type { RequestToPromotionType } from "@/entities/promotion/types/request-to-promotion.types";
import type { PromotionsFormProps } from "../types/promotions-modal.types";

export const usePostPromotionModal = ({
	toggleSuccess,
}: PromotionsFormProps) => {
	const mutation = useMutation({
		mutationFn: async (data: RequestToPromotionType) =>
			requestToPromotion(data),
		onSuccess: () => {
			toggleSuccess();
		},
		onError: () => {},
	});

	return mutation;
};
