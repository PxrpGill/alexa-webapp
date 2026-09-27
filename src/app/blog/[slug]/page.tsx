import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { getSingleNews } from '@/entities/news/api/get-single-news';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { OG_LOCALE, SITE_NAME } from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';
import SingleBlogPage from '@/views/single-blog-page';

type SingleBlogPageParams = {
    params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export const generateStaticParams = async () => {
    const response = await getAllNews();

    if (!response?.items?.length) return [];

    return response.items.map((news) => ({ slug: news.slug }));
};

export const generateMetadata = async ({
    params,
}: SingleBlogPageParams): Promise<Metadata> => {
    const { slug } = await params;
    const news = await getSingleNews(slug);

    const title = normalizeMetaText(news?.title, 60);
    const description = normalizeMetaText(news?.description, 160);
    const url = `${SITE_NAVIGATION.blog}/${slug}`;

    return {
        ...buildMetadata(SITE_NAVIGATION.blog, {
            ...(title ? { title } : {}),
            ...(description ? { description } : {}),
        }),
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            locale: OG_LOCALE,
            siteName: SITE_NAME,
            url,
            title: title ?? PAGE_META[SITE_NAVIGATION.blog].title,
            description:
                description ?? PAGE_META[SITE_NAVIGATION.blog].description,
        },
    };
};

export default async function SingleBlog({ params }: SingleBlogPageParams) {
    const { slug } = await params;
    const initialSingleNewsPage = await getSingleNews(slug);

    if (!initialSingleNewsPage) return notFound();

    return <SingleBlogPage {...initialSingleNewsPage} />;
}
