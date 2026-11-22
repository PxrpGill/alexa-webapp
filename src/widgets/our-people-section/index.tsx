/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

"use client";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EmployeeCard from "@/entities/employee/ui/employee-card";
import ButtonIconsSVG from "@/public/icons/button-teeth.svg";
import { useOneHeightOfCards } from "@/shared/hooks/use-one-height-of-cards";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { OurPeopleSectionProps } from "./types/our-people-section.types";
import SectionHeader from "./ui/section-header";

export default function OurPeopleSection({
	className,
	title,
	employees,
	button,
	isSlider,
}: OurPeopleSectionProps) {
	const { contentsRef, maxContentHeight } = useOneHeightOfCards();

	if (!employees?.length) return null;

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			<SectionHeader title={title} button={button} />
			{isSlider ? (
				<Swiper
					spaceBetween={20}
					breakpoints={{ 0: { slidesPerView: 1 }, 767: { slidesPerView: 4.1 } }}
					modules={[Navigation]}
					setWrapperSize
					navigation
					className={`${css.slider} container`}
				>
					{employees.map((employee, employeeIndex) => (
						<SwiperSlide
							key={`${employee.fullname}-${employeeIndex}`}
							className={css.swiperSlide}
						>
							<EmployeeCard
								{...employee}
								className={css.employee}
								contentsRef={(el) => {
									contentsRef.current[employeeIndex] = el;
								}}
								contentsStyle={{
									minHeight: maxContentHeight
										? `${maxContentHeight}px`
										: "auto",
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<ul className={`${css.list} container`}>
					{employees.map((employee, index) => (
						<AnimationWrapper
							as="li"
							direction="fade"
							className={css.paragraph}
							key={`${employee.fullname}-${index}`}
						>
							<EmployeeCard
								{...employee}
								className={css.employee}
								contentsRef={(el) => {
									contentsRef.current[index] = el;
								}}
								contentsStyle={{
									minHeight: maxContentHeight
										? `${maxContentHeight}px`
										: "auto",
								}}
							/>
						</AnimationWrapper>
					))}
				</ul>
			)}
			{button && (
				<Button
					className={css.button}
					href={button.href}
					rightIcon={<ButtonIconsSVG className={css.icon} />}
				>
					{button.title}
				</Button>
			)}
		</AnimationWrapper>
	);
}
