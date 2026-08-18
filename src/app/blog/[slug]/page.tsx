import { notFound } from "next/navigation";
import { getSingleNews } from "@/entities/news/api/get-single-news";
import SingleBlogPage from "@/views/single-blog-page";

type SingleBlogPageParams = {
	params: Promise<{ slug: string }>;
};

export default async function SingleBlog({ params }: SingleBlogPageParams) {
	const { slug } = await params;
	const initialSingleNewsPage = await getSingleNews(slug);

	if (!initialSingleNewsPage) return notFound();

	return <SingleBlogPage {...initialSingleNewsPage} />;
}
