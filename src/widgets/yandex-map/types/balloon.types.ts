import type { CSSProperties } from "react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { BranchInformationProps } from "../ui/info-card";

export type BalloonProps = {
	style?: CSSProperties;
	isOpen?: boolean;
	onTransitionEnd?: () => void;
	activePlacemark?: BranchInformationProps;
} & PropsWithClassName;
