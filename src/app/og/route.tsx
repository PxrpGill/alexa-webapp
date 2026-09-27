import type { NextRequest } from 'next/server';

import { renderOgImage } from '@/shared/config/seo/og-image';
import { DEFAULT_TITLE } from '@/shared/config/seo/seo.constants';

const MAX_TITLE_LENGTH = 90;

export async function GET(request: NextRequest) {
    const rawTitle = request.nextUrl.searchParams.get('title');
    const title = rawTitle?.trim().slice(0, MAX_TITLE_LENGTH) || DEFAULT_TITLE;

    return renderOgImage(title);
}
