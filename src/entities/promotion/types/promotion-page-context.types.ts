import type { Dispatch, SetStateAction } from "react";

export type SelectedPromotionType = {
	title?: string;
	slug?: string
}

export type PromotionPageContextProps = {
	selectedPromotion?: SelectedPromotionType;
	selectPromotion: Dispatch<SetStateAction<SelectedPromotionType | undefined>>;

	isPromotionModalOpen: boolean;
	togglePromotionModal: Dispatch<SetStateAction<boolean>>;
};
