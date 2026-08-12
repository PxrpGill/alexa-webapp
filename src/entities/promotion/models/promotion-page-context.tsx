"use client";

import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";
import type { PromotionCardProps } from "../types/promotion-card.types";
import type { PromotionPageContextProps } from "../types/promotion-page-context.types";

const PromotionPageContext = createContext<
	PromotionPageContextProps | undefined
>(undefined);

export const PromotionPageProvider = ({ children }: PropsWithChildren) => {
	const [selectedPromotion, selectPromotion] = useState<
		PromotionCardProps | undefined
	>(undefined);
	const [isPromotionModalOpen, togglePromotionModal] = useState<boolean>(false);

	return (
		<PromotionPageContext.Provider
			value={{
				selectPromotion,
				selectedPromotion,
				togglePromotionModal,
				isPromotionModalOpen,
			}}
		>
			{children}
		</PromotionPageContext.Provider>
	);
};

export const usePromotionPageContext = () => {
	const context = useContext(PromotionPageContext);

	if (!context)
		throw new Error(
			"Оберните рабочую область PromotionProvider перед использованием usePromotionPageContext",
		);

	return context;
};
