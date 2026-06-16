/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

"use client";

import ArrowSVG from "@/public/icons/slider-arrow.svg";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import { useHeroSlider } from "./hooks/use-hero-slider";
import css from "./index.module.css";
import type { HeroSliderSectionProps } from "./types/hero-slider-section.types";
import HeroSlide from "./ui/hero-slide";

export default function HeroSliderSection({
	className,
	slides,
}: HeroSliderSectionProps) {
	const { current, next, prev, setCurrent } = useHeroSlider(slides);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.sectionWrapper}>
				<div className={css.wrapper}>
					{slides?.map((slide, index) => (
						<HeroSlide
							{...slide}
							key={index}
							className={`${css.slide} ${index === current ? css.active : css.inactive}`}
						/>
					))}
				</div>
				<button
					className={css.leftButton}
					type="button"
					aria-label="Предыдущий слайд"
					onClick={prev}
				>
					<ArrowSVG className={css.icon} />
				</button>
				<button
					className={css.rightButton}
					type="button"
					aria-label="Следующий слайд"
					onClick={next}
				>
					<ArrowSVG className={css.icon} />
				</button>
				<div className={css.pagination}>
					{slides?.map((_, index) => (
						<button
							key={index}
							className={`${css.bullet} ${index === current ? css.bulletActive : ""}`}
							aria-label="Перейти к слайду"
							onClick={() => setCurrent(index)}
						/>
					))}
				</div>
			</div>
		</AnimationWrapper>
	);
}
