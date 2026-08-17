import type { MouseEvent, PropsWithChildren, ReactNode } from "react";

import type { PropsWithClassName } from "./props-with-classname";

export type SiteLinkProps = {
	href: string;
	title?: string;
	target?: "_self" | "_blank";
};

export type CustomLinkProps = {
	href?: string;
	target?: "_self" | "_blank";
} & PropsWithChildren &
	PropsWithClassName;

export type CustomButtonProps = {
	onClick?: (event: MouseEvent<HTMLElement>) => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	isLoading?: boolean;
} & PropsWithChildren &
	PropsWithClassName;

export type ButtonComponentVariantsType = "default" | "blank";

export type ButtonComponentThemeType = "transparent" | "green" | "white";

export type ButtonComponentProps = {
	theme?: ButtonComponentThemeType;
	variant?: ButtonComponentVariantsType;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	ariaLabel?: string;
} & PropsWithClassName &
	PropsWithChildren &
	Omit<CustomButtonProps, "children" | "className"> &
	Omit<CustomLinkProps, "children" | "className">;

export type SiteButtonProps = Partial<SiteLinkProps> & {
	isOpenFeedbackModal?: boolean;
	isOpenConsultationModal?: boolean;
};
