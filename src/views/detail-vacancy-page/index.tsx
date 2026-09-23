import type { DetailVacancyType } from "@/entities/vacancies/types/detail-vacancy.types";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import VacancyBanner from "./ui/vacancy-banner";
import VacancyRequirements from "./ui/vacancy-requirements";
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
		</main>
	);
}
