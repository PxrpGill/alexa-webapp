import type { VacanciesByCategoryType } from "@/entities/vacancies/types/vacancies-list.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type VacanciesMagazineProps = PropsWithClassName &
	VacanciesByCategoryType & {
		title?: string;
		description?: string;
	};
