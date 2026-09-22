import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { GetAvailableVacanciesResponseType } from "./get-vacancies-request.types";

export type VacanciesMagazineProps = PropsWithClassName &
	GetAvailableVacanciesResponseType & {
		title?: string;
		description?: string;
	};
