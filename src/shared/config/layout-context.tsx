"use client";

import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

import {
	type BranchType,
	useSetBranchInCookies,
} from "../hooks/set-branch-in-cookies";
import { useMediaQuery } from "../hooks/use-media-query";

import { MEDIA_QUERIES } from "./use-media-query.constants";

type LayoutContextType = {
	isMenuOpen: boolean;
	toggleMenuOpen: (arg: boolean) => void;

	isConsultationModalOpen: boolean;
	toggleConsultationModal: Dispatch<SetStateAction<boolean>>;

	isAppointmentModalOpen: boolean;
	toggleAppointmentModal: Dispatch<SetStateAction<boolean>>;

	currentBranch?: BranchType;
};

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined,
);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const [isConsultationModalOpen, toggleConsultationModal] =
		useState<boolean>(false);
	const [isAppointmentModalOpen, toggleAppointmentModal] =
		useState<boolean>(false);
	const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
	const currentBranch = useSetBranchInCookies();

	const toggleMenuClose = useCallback(() => {
		if (!isMobile) toggleMenuOpen(false);
	}, [isMobile]);

	useEffect(() => {
		window.addEventListener("resize", toggleMenuClose);

		return () => {
			window.removeEventListener("resize", toggleMenuClose);
		};
	}, [toggleMenuClose]);

	const handleMenuOpen = useCallback((arg: boolean) => {
		toggleMenuOpen(arg);
	}, []);

	return (
		<LayoutContext.Provider
			value={{
				isMenuOpen,
				toggleMenuOpen: handleMenuOpen,
				isConsultationModalOpen,
				toggleConsultationModal,
				isAppointmentModalOpen,
				toggleAppointmentModal,
				currentBranch,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);

	if (!context) throw new Error("Оберните рабочую область LayoutProvider");

	return context;
};
