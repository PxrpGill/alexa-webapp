import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { getSingleNews } from '@/entities/news/api/get-single-news';
import { buildArticleJsonLd } from '@/shared/config/seo/organization';
import {
    META_DESCRIPTION_MAX_LENGTH,
    META_TITLE_MAX_LENGTH,
} from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';
import { toJsonLd } from '@/shared/helpers/to-json-ld';
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

    const title = normalizeMetaText(news?.title, META_TITLE_MAX_LENGTH);
    const description = normalizeMetaText(
        news?.description,
        META_DESCRIPTION_MAX_LENGTH
    );
    const url = `${SITE_NAVIGATION.blog}/${slug}`;
    const base = buildMetadata(SITE_NAVIGATION.blog, {
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
    });

    return {
        ...base,
        alternates: { canonical: url },
        openGraph: {
            ...base.openGraph,
            type: 'article',
            url,
        },
    };
};

export default async function SingleBlog({ params }: SingleBlogPageParams) {
    const { slug } = await params;
    const initialSingleNewsPage = await getSingleNews(slug);

    if (!initialSingleNewsPage) return notFound();

    const articleJsonLd = buildArticleJsonLd({
        title: normalizeMetaText(initialSingleNewsPage.title, 200) ?? '',
        description: normalizeMetaText(initialSingleNewsPage.description, 300),
        slug,
        publishDate: initialSingleNewsPage.publishDate,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: toJsonLd(articleJsonLd),
                }}
            />
            <SingleBlogPage {...initialSingleNewsPage} />
        </>
    );
}
