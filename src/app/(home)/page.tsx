import { getAllNews } from "@/entities/news/api/get-all-news";
import HomePage from "@/views/home-page";

export const revalidate = 60;

export default async function Home() {
	const initialNewsPageData = await getAllNews();

	return <HomePage initialNewsData={initialNewsPageData} />;
}
