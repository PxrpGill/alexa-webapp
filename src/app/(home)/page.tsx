import type { Metadata } from 'next';

import { getAllNews } from '@/entities/news/api/get-all-news';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import HomePage from '@/views/home-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaBase
);

export default async function Home() {
    const initialNewsPageData = await getAllNews();

    return <HomePage initialNewsData={initialNewsPageData} />;
}
