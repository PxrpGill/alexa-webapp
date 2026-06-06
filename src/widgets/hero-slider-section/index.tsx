/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

import ArrowSVG from "@/public/icons/slider-arrow.svg";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { HeroSliderSectionProps } from "./types/hero-slider-section.types";
import FirstVariant from "./ui/first-variant";

export default function HeroSliderSection({
	className,
	slides,
}: HeroSliderSectionProps) {
	if (!slides?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.sectionWrapper}>
				<div className={css.wrapper}>
					{slides.map((slide, index) => {
						switch (slide.type) {
							case "firstVariant":
								return (
									<FirstVariant
										key={index}
										{...slide}
										className={`${css.slide}`}
									/>
								);

							default:
								return <></>;
						}
					})}
				</div>
				<button
					className={css.leftButton}
					type="button"
					aria-label="Предыдущий слайд"
				>
					<ArrowSVG className={css.icon} />
				</button>
				<button
					className={css.rightButton}
					type="button"
					aria-label="Следующий слайд"
				>
					<ArrowSVG className={css.icon} />
				</button>
				<div className={css.pagination}>
					{slides.map((_, index) => (
						<button
							key={index}
							className={css.bullet}
							aria-label="Перейти к слайду"
						/>
					))}
				</div>
			</div>
		</AnimationWrapper>
	);
}
