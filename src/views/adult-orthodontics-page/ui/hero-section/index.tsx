import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { SlideVariantProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import HeroSlide from "@/widgets/hero-slider-section/ui/hero-slide";
import css from "./index.module.css";

export default function HeroSection({
	className,
	...slide
}: SlideVariantProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				<HeroSlide {...slide} />
			</div>
		</AnimationWrapper>
	);
}
