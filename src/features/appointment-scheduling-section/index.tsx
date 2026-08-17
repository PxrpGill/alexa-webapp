"use client";

import { useCallback, useState } from "react";
import { APPOINTMENT_ID } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { AppointmentSchedulingProps } from "./types/appointment-scheduling.types";
import AppointmentForm from "./ui/appointment-form";
import SectionHeader from "./ui/section-header";
import SuccessForm from "./ui/success-form";

export default function AppointmentSchedulingSection({
	title,
	description,
	className,
	poster,
}: AppointmentSchedulingProps) {
	const [isSuccess, toggleSucces] = useState<boolean>(false);

	const toggleSuccesFromClose = useCallback(() => {
		toggleSucces(false);
	}, []);

	const toggleSuccessFromOpen = useCallback(() => {
		toggleSucces(true);
	}, []);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper} id={APPOINTMENT_ID.source}>
				<SuccessForm isOpen={isSuccess} toggleClose={toggleSuccesFromClose} />
				<div className={css.leftPart}>
					<SectionHeader
						title={title}
						description={description}
						className={css.header}
					/>
					<AppointmentForm toggleSucces={toggleSuccessFromOpen} />
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
