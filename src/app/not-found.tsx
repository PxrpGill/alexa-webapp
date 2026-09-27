import type { Metadata } from 'next';

import ErrorPage from '@/views/error-page';

export const metadata: Metadata = {
    title: 'Страница не найдена',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return <ErrorPage status={404} />;
}
