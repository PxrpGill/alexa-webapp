"use client";

import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useContext,
	useState,
} from "react";
import type {
	ControlsBlockProps,
	TabProps,
} from "../types/price-section.types";

export type PriceSectionContextType = {
	selectedBranch?: string;
	selectBranch: Dispatch<SetStateAction<string | undefined>>;

	branchFilterTabs?: TabProps[];

	selectedBranchFilter?: string | undefined;
	selectBranchFilter: Dispatch<SetStateAction<string | undefined>>;
};

const PriceSectionContext = createContext<PriceSectionContextType | undefined>(
	undefined,
);

export const PriceSectionContextProvider = ({
	children,
	branchTabs,
	filters,
}: PropsWithChildren & ControlsBlockProps) => {
	const [firstTab] = branchTabs ?? [];

	const [selectedBranch, selectBranch] = useState<string | undefined>(
		firstTab.slug,
	);
	const [selectedBranchFilter, selectBranchFilter] = useState<
		string | undefined
	>("all");

	return (
		<PriceSectionContext.Provider
			value={{
				selectedBranch,
				selectBranch,
				branchFilterTabs: filters ? filters[selectedBranch ?? ""] : undefined,
				selectBranchFilter,
				selectedBranchFilter,
			}}
		>
			{children}
		</PriceSectionContext.Provider>
	);
};

export const usePriceSectionContext = () => {
	const context = useContext(PriceSectionContext);

	if (!context)
		throw new Error(
			"Перед использованием usePriceSectionContext необходимо обернуть PriceSectionContextProvider рабочую область",
		);

	return context;
};
