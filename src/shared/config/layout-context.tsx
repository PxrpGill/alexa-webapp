"use client";

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from "react";

type LayoutContextType = {
	isMenuOpen: boolean;
	toggleMenuOpen: (arg: boolean) => void;
};

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined,
);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
	const [isMenuOpen, toggleMenuOpen] = useState<boolean>(false);

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
