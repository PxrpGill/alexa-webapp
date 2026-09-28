import { cache } from 'react';

import { API_URLS } from '@/shared/api/api-urls';
import apiInstance from '@/shared/config/api-instance';

import type { DetailPromotionType } from '../types/detail-promotion.types';

export const getDetailPromotion = cache(
    async (slug: string): Promise<DetailPromotionType | undefined> => {
        try {
            const response = await apiInstance.get(
                API_URLS.getDetailPromotion(slug)
            );

            return response.data;
        } catch (error) {
            console.error(error);

            return;
        }
    }
);
