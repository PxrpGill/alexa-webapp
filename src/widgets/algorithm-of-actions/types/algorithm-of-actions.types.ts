import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type AlgorithmStepProps = {
	title?: string;
	content?: string;
} & PropsWithClassName;

export type AlgorithmCTAProps = {
	title?: string;
	button?: SiteLinkProps;
} & PropsWithClassName;

export type AlgorithmStepperProps = {
	steps?: AlgorithmStepProps[];
} & PropsWithClassName;

export type AlgorithmOfActionsProps = {
	title?: string;
	cta?: AlgorithmCTAProps;
} & PropsWithClassName &
	AlgorithmStepperProps;
