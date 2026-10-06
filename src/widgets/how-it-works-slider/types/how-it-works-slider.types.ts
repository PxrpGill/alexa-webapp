import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type HowItWorksSliderProps = {
	title?: string;
	slides?: Array<HowItWorksSlideProps>;
} & PropsWithClassName;

export type HowItWorksSlideProps = {
	poster?: PictureFormatType;
	title?: string;
	description?: string;
	sequenceNumber?: number;
	handleNextSlide?: () => void;
	handlePrevSlide?: () => void;
} & PropsWithClassName;
