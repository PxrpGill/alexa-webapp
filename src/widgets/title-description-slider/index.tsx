/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
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
	title,
}: TitleDescriptionSliderProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className} ${css[textBlockPosition]}`.trim()}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<div className={`${css.wrapper} ${css[textBlockPosition]}`}>
				<TextBlock {...textBlock} className={css.text} />
				<Slider posters={posters} className={css.slider} />
			</div>
		</AnimationWrapper>
	);
}
