import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type OrthoHowItWorksProps = {
	leftLabel?: string;
	rightLabel?: string;
	description?: string;
	chips?: Array<string>;
	sectionTitle?: string;
} & PropsWithClassName;
