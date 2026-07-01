import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type AlgorithmStepProps = {
	title?: string;
	content?: string;
} & PropsWithClassName;

export type AlgorithmCTAProps = {
	title?: string;
	buttonText?: string;
} & PropsWithClassName;

export type AlgorithmStepperProps = {
	steps?: AlgorithmStepProps[];
} & PropsWithClassName;

export type AlgorithmOfActionsProps = {
	title?: string;
	cta?: AlgorithmCTAProps;
} & PropsWithClassName &
	AlgorithmStepperProps;
