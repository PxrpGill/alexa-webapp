import VacanciesPage from "@/views/vacancies-page";
import { getAvailableVacancies } from "@/views/vacancies-page/api/get-available-vacancies";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title: "Вакансии",
		description: "Работа в современной стоматологии",
	};
};

type VacanciesParamsType = {
	searchParams: Promise<{
		category?: string;
	}>;
};

export default async function Vacancies({ searchParams }: VacanciesParamsType) {
	const { category } = await searchParams;
	const initialPageData = await getAvailableVacancies({ category });

	return <VacanciesPage initialPageData={initialPageData} />;
}
