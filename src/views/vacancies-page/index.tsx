import SaitableVacancySection from "@/features/saitable-vacancy-section";
import css from "./index.module.css";
import {
	NOT_AVAILABLE_VACANCIES,
	SAITABLE_VACANCY,
	VACANCIES_HERO,
	VACANCIES_MAGAZINE_HEADER,
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
					title={VACANCIES_MAGAZINE_HEADER.title}
					description={VACANCIES_MAGAZINE_HEADER.description}
					{...initialPageData}
				/>
			)}
			<SaitableVacancySection className={css.form} {...SAITABLE_VACANCY} />
		</main>
	);
}
