/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { VacancyCardProps } from "@/entities/vacancies/types/vacancy-card.types";
import VacancyCard from "@/entities/vacancies/ui/vacancy-card";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type VacanciesListProps = {
	vacancies?: Array<VacancyCardProps>;
} & PropsWithClassName;

export default function VacanciesList({
	vacancies,
	className,
}: VacanciesListProps) {
	if (!vacancies?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{vacancies.map((vacancy, index) => (
				<li key={`${vacancy.slug}-${index}`}>
					<VacancyCard
						{...vacancy}
						className={css.vacancy}
						delay={`${(index % 2 === 0 ? 0 : 0.2).toString()}s`}
					/>
				</li>
			))}
		</ul>
	);
}
