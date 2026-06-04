import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { TitleDescriptionSliderProps } from "./types/title-description-slider.types";
import Slider from "./ui/slider";
import TextBlock from "./ui/text-block";

export default function TitleDescriptionSlider({
	textBlockPosition = "left",
	textBlock,
	className,
	posters,
}: TitleDescriptionSliderProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className} ${css[textBlockPosition]}`.trim()}
		>
			<TextBlock {...textBlock} className={css.text} />
			<Slider posters={posters} className={css.slider} />
		</AnimationWrapper>
	);
}
