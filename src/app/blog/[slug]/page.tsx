import { notFound } from "next/navigation";
import { getAllNews } from "@/entities/news/api/get-all-news";
import { getSingleNews } from "@/entities/news/api/get-single-news";
import SingleBlogPage from "@/views/single-blog-page";

type SingleBlogPageParams = {
	params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export const generateStaticParams = async () => {
	const response = await getAllNews();

	if (!response?.items?.length) return [];

	return response.items.map((news) => ({ slug: news.slug }));
};

export default async function SingleBlog({ params }: SingleBlogPageParams) {
	const { slug } = await params;
	const initialSingleNewsPage = await getSingleNews(slug);

	if (!initialSingleNewsPage) return notFound();

	return <SingleBlogPage {...initialSingleNewsPage} />;
}
