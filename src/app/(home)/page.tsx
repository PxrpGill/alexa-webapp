import { getAllNews } from "@/entities/news/api/get-all-news";
import HomePage from "@/views/home-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Семейная стоматология Алекса | Качественное лечение зубов для детей и взрослых",
		description:
			"Все виды лечения: имплантация, ортодонтия, лечение под микроскопом, гигиена, ортопедия, процедуры «во сне» без боли и страха.",
	};
};

export default async function Home() {
	const initialNewsPageData = await getAllNews();

	return <HomePage initialNewsData={initialNewsPageData} />;
}
