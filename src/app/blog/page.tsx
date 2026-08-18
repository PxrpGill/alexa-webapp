import { getAllNews } from "@/entities/news/api/get-all-news";
import BlogPage from "@/views/blog-page";

export const revalidate = 60;

export default async function Blog() {
	const initialNewsData = await getAllNews();

	return <BlogPage initialNewsData={initialNewsData} />;
}
