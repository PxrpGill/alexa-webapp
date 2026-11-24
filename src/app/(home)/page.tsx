import type { Metadata } from 'next';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { getStories } from '@/entities/story/api/get-stories';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import HomePage from '@/views/home-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaBase
);

export default async function Home() {
    const [initialNewsPageData, initialStoriesData] = await Promise.all([
        getAllNews(),
        getStories(),
    ]);

    return (
        <HomePage
            initialNewsData={initialNewsPageData}
            initialStoriesData={initialStoriesData}
        />
    );
}
