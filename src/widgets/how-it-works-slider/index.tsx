/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { useCallback, useState } from "react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { HowItWorksSliderProps } from "./types/how-it-works-slider.types";
import HowItWorksSlide from "./ui/how-it-works-slide";

export default function HowItWorksSlider({
	title,
	className,
	slides,
}: HowItWorksSliderProps) {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

	const handleNextSlide = useCallback(() => {
		if (!slides?.length) return;

		if (activeSlideIndex === slides.length - 1) {
			setActiveSlideIndex(0);

			return;
		}

		setActiveSlideIndex((prev) => prev + 1);
	}, [activeSlideIndex, slides]);

	const handlePrevSlide = useCallback(() => {
		if (!slides?.length) return;

		if (activeSlideIndex === 0) {
			setActiveSlideIndex(slides.length - 1);

			return;
		}

		setActiveSlideIndex((prev) => prev - 1);
	}, [activeSlideIndex, slides]);

	if (!slides?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<div className={css.slider}>
				{slides.map((slide, index) => (
					<HowItWorksSlide
						key={index}
						{...slide}
						className={`${css.slide} ${activeSlideIndex === index ? css.activeSlide : ""}`}
						sequenceNumber={index + 1}
						handleNextSlide={handleNextSlide}
						handlePrevSlide={handlePrevSlide}
					/>
				))}
			</div>
		</AnimationWrapper>
	);
}
