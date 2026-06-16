import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { FourthVariantProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import HeroSlide from "@/widgets/hero-slider-section/ui/hero-slide";

import css from "./index.module.css";

export default function HeroSection({
	className,
	...slide
}: Omit<FourthVariantProps, "type"> & PropsWithClassName) {
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
