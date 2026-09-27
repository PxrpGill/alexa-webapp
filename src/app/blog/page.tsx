import type { Metadata } from 'next';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import BlogPage from '@/views/blog-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.blog);

export default async function Blog() {
    const initialNewsData = await getAllNews();

    return <BlogPage initialNewsData={initialNewsData} />;
}
