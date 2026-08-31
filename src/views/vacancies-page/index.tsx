import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import { NOT_AVAILABLE_VACANCIES } from "./models/vacancies.constants";
import NotAvailableVacancies from "./ui/not-available-vacancies";

export default function VacanciesPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Вакансии</h1>
			</AnimationWrapper>
			<NotAvailableVacancies
				{...NOT_AVAILABLE_VACANCIES}
				className={css.notAvailable}
			/>
		</main>
	);
}
