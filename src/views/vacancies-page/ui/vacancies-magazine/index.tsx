import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { VacanciesMagazineProps } from "../../types/vacancies-magazine.types";
import css from "./index.module.css";
import SectionHeader from "./section-header";
import VacanciesList from "./vacancies-list";
import VacancyCategories from "./vacancy-categories";

export default function VacanciesMagazine({
	className,
	title,
	description,
	total,
	categories,
	results,
}: VacanciesMagazineProps) {
	return (
		<AnimationWrapper
			as="section"
			id="vacancies"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				<SectionHeader
					className={css.header}
					title={title}
					description={description}
					total={total}
				/>
				<VacancyCategories categories={categories} className={css.categories} />
				<VacanciesList vacancies={results} />
			</div>
		</AnimationWrapper>
	);
}
