import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type HeroSectionProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type ArgumentSectionProps = {
	title?: string;
	description?: string;
	list?: string[];
	legend?: string;
} & PropsWithClassName;

export type CtaSectionProps = {
	title?: string;
	description?: string;
	buttonText?: string;
} & PropsWithClassName;

export type DiagnosticsSectionProps = {
	heroSection?: HeroSectionProps;
	argumentSection?: ArgumentSectionProps;
	ctaSection?: CtaSectionProps;
} & PropsWithClassName;
