"use client";

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { MEDIA_QUERIES } from "./use-media-query.constants";

type LayoutContextType = {
	isMenuOpen: boolean;
	toggleMenuOpen: (arg: boolean) => void;
};

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined,
);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);
	const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

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
			value={{ isMenuOpen, toggleMenuOpen: handleMenuOpen }}
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
