import type { DetailVacancyType } from "@/entities/vacancies/types/detail-vacancy.types";
import SaitableVacancySection from "@/features/saitable-vacancy-section";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import { SAITABLE_VACANCY } from "./models/details-vacancy-page.constants";
import VacancyBanner from "./ui/vacancy-banner";
import VacancyRequirements from "./ui/vacancy-requirements";
import VacancyResponsibilities from "./ui/vacancy-responsibilites";
import WhatYouWillGetSection from "./ui/what-you-will-get";

export default function DetailVacancyPage({
	hero,
	what_you_will_get,
	requirements,
	responsibilities,
}: DetailVacancyType) {
	return (
		<main className={css.root}>
			{hero && <VacancyBanner {...hero} className={css.banner} />}
			{what_you_will_get && (
				<WhatYouWillGetSection
					{...what_you_will_get}
					title="Что вы получите, работая у нас"
					className={css.whatYouWillGet}
				/>
			)}
			{requirements && (
				<>
					<AnimationWrapper className={`${css.titleBlock} container`}>
						<h2 className={css.title}>
							Что мы&nbsp;ждём от&nbsp;будущего коллеги
						</h2>
					</AnimationWrapper>
					<VacancyRequirements {...requirements} className={css.requirements} />
				</>
			)}
			{responsibilities && (
				<VacancyResponsibilities
					{...responsibilities}
					className={css.responsibilities}
				/>
			)}
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h2 className={css.title}>
					Здесь важны не&nbsp;только пациенты,
					<br /> но&nbsp;и&nbsp;команда
				</h2>
			</AnimationWrapper>
			<SaitableVacancySection className={css.form} {...SAITABLE_VACANCY} />
		</main>
	);
}
