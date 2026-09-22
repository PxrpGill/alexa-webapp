import css from "./index.module.css";
import {
	NOT_AVAILABLE_VACANCIES,
	VACANCIES_HERO,
} from "./models/vacancies.constants";
import type { VacanciesPageProps } from "./types/vacancies-page.types";
import NotAvailableVacancies from "./ui/not-available-vacancies";
import VacanciesHero from "./ui/vacancies-hero";
import VacanciesMagazine from "./ui/vacancies-magazine";

export default function VacanciesPage({ initialPageData }: VacanciesPageProps) {
	return (
		<main className={css.root}>
			<VacanciesHero className={css.hero} {...VACANCIES_HERO} />
			{!initialPageData.total && initialPageData?.total === 0 ? (
				<NotAvailableVacancies
					{...NOT_AVAILABLE_VACANCIES}
					className={css.notAvailable}
				/>
			) : (
				<VacanciesMagazine
					className={css.vacanciesMagazine}
					title="Открытые вакансии"
					description="Присоединяйтесь к&nbsp;команде, которая заботится о&nbsp;пациентах каждый день&nbsp;&mdash; от&nbsp;первого приёма до&nbsp;последнего визита."
					{...initialPageData}
				/>
			)}
		</main>
	);
}
