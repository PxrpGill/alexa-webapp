/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

"use client";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MEDIA_QUERIES } from "@/shared/config/use-media-query.constants";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { useOneHeightOfCards } from "@/shared/hooks/use-one-height-of-cards";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import { useDiagnosticsSwiperSlider } from "./hooks/use-diagnostics-swiper-slider";
import css from "./index.module.css";
import type { DiagnosticProcessSectionProps } from "./types/diagnostic-process-section.types";
import DiagnosticCard from "./ui/diagnostic-card";
import SectionHeader from "./ui/section-header";

export default function DiagnosticProcessSection({
	className,
	sectionHeader,
	cards,
}: DiagnosticProcessSectionProps) {
	const { maxContentHeight, contentsRef } = useOneHeightOfCards();
	const { withNavigation } = useDiagnosticsSwiperSlider(
		cards?.length,
	);

	if (!cards?.length) return null;

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			<SectionHeader {...sectionHeader} />

			<Swiper
				className={`${css.cards} container`}
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView='auto'
				centeredSlides
				centeredSlidesBounds
				navigation={withNavigation}
			>
				{cards.map((card, index) => (
					<SwiperSlide key={index} className={css.swiperSlide}>
						<DiagnosticCard
							{...card}
							contentRef={(el) => {
								contentsRef.current[index] = el;
							}}
							contentStyle={{
								minHeight: maxContentHeight
									? `${maxContentHeight}px`
									: undefined,
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</AnimationWrapper>
	);
}
