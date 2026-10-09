"use client";

import { createContext, useContext, useState } from "react";
import type {
	PageFilterContentProviderType,
	PageFilterContextType,
} from "../types/page-content-filter.types";

const PageFilterContentContext = createContext<
	PageFilterContextType | undefined
>(undefined);

export const PageFilterContentProvider = ({
	children,
	categories,
}: PageFilterContentProviderType) => {
	const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
		categories[0].slug,
	);
	const [isChangePanelVisible, toggleChangePanelVisible] =
		useState<boolean>(false);

	return (
		<PageFilterContentContext.Provider
			value={{
				activeCategorySlug,
				categories,
				isChangePanelVisible,
				toggleChangePanelVisible,
				setActiveCategorySlug,
			}}
		>
			{children}
		</PageFilterContentContext.Provider>
	);
};

export const usePageFilterContentContext = () => {
	const context = useContext(PageFilterContentContext);

	if (!context)
		throw new Error(
			"Перед использованием usePageFilterContentContext оберните React компонент PageFilterContentProvider",
		);

	return context;
};
