import type { Dispatch, SetStateAction } from "react";
import type { PromotionCardProps } from "./promotion-card.types";

export type PromotionPageContextProps = {
	selectedPromotion?: PromotionCardProps;
	selectPromotion: Dispatch<SetStateAction<PromotionCardProps | undefined>>;

	isPromotionModalOpen: boolean;
	togglePromotionModal: Dispatch<SetStateAction<boolean>>;
};
