import SaitableVacancySection from "@/features/saitable-vacancy-section";
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
		<main className="page-offset">
			<VacanciesHero className="section-pad" {...VACANCIES_HERO} />
			{initialPageData.total === 0 ? (
				<NotAvailableVacancies
					{...NOT_AVAILABLE_VACANCIES}
					className="section-pad"
				/>
			) : (
				<VacanciesMagazine
					className="section-pad"
					title={VACANCIES_MAGAZINE_HEADER.title}
					description={VACANCIES_MAGAZINE_HEADER.description}
					{...initialPageData}
				/>
			)}
			<SaitableVacancySection className="section-pad" {...SAITABLE_VACANCY} />
		</main>
	);
}
