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
	description,
}: TitleDescriptionSliderProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className} ${css[textBlockPosition]}`.trim()}
		>
			{(title || description) && (
				<div className={css.titleSection}>
					{title && (
						<h2
							className={css.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</div>
			)}
			<div className={`${css.wrapper} ${css[textBlockPosition]}`}>
				<TextBlock {...textBlock} className={css.text} />
				<Slider posters={posters} className={css.slider} />
			</div>
		</AnimationWrapper>
	);
}
