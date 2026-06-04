import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { HeroSliderSectionProps } from "./types/hero-slider-section.types";

export default function HeroSliderSection({
	className,
}: HeroSliderSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		></AnimationWrapper>
	);
}
