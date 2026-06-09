import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { FourthVariantProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import FourthVariant from "@/widgets/hero-slider-section/ui/fourth-variant";

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
				<FourthVariant {...slide} />
			</div>
		</AnimationWrapper>
	);
}
