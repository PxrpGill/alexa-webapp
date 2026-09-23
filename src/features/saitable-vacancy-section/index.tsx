"use client";

import { useCallback, useState } from "react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { SaitableVacanciesSectionProps } from "./types/saitable-vacancy.types";
import SectionHeader from "./ui/section-header";
import SaitableVacancyForm from "./ui/situable-vacancy-form";
import SuccessForm from "./ui/success-form";

export default function SaitableVacancySection({
	title,
	description,
	className,
	poster,
}: SaitableVacanciesSectionProps) {
	const [isSuccess, toggleSuccess] = useState<boolean>(false);

	const toggleSuccessFromClose = useCallback(() => {
		toggleSuccess(false);
	}, []);

	const toggleSuccessFromOpen = useCallback(() => {
		toggleSuccess(true);
	}, []);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper} id="saitable">
				<SuccessForm isOpen={isSuccess} toggleClose={toggleSuccessFromClose} />
				<div className={css.leftPart}>
					<SectionHeader
						title={title}
						description={description}
						className={css.header}
					/>
					<SaitableVacancyForm toggleSuccess={toggleSuccessFromOpen} />
				</div>
				{poster && (
					<div className={css.posterWrapper}>
						<Picture poster={poster} />
					</div>
				)}
			</div>
		</AnimationWrapper>
	);
}
