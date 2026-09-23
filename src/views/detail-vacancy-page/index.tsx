import type { DetailVacancyType } from "@/entities/vacancies/types/detail-vacancy.types";
import css from "./index.module.css";
import VacancyBanner from "./ui/vacancy-banner";

export default function DetailVacancyPage({
	hero,
	what_you_will_get,
	requirements,
	responsibilities,
}: DetailVacancyType) {
	return (
		<main className={css.root}>
			{hero && <VacancyBanner {...hero} className={css.banner} />}
		</main>
	);
}
