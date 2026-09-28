import { useMutation } from '@tanstack/react-query';

import { requestToPromotion } from '@/entities/promotion/api/request-to-promotion';
import type { RequestToPromotionType } from '@/entities/promotion/types/request-to-promotion.types';

export const usePostPromotionRequest = ({
    toggleSuccess,
}: {
    toggleSuccess: () => void;
}) => {
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
