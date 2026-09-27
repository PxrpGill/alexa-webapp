const FALLBACK_SITE_URL = 'https://aleksa-dent.ru';

const normalizeSiteUrl = (rawUrl: string | undefined): string => {
    if (!rawUrl) return FALLBACK_SITE_URL;

    const trimmedUrl = rawUrl.trim().replace(/\/+$/, '');

    if (!/^https?:\/\//.test(trimmedUrl)) return FALLBACK_SITE_URL;

    return trimmedUrl;
};

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_NAME = 'Стоматология «Алекса»';
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const DEFAULT_TITLE = 'Семейная стоматология «Алекса» в Ростове-на-Дону';
export const DEFAULT_DESCRIPTION =
    'Семейная стоматология в Ростове-на-Дону: терапия под микроскопом, имплантация, ортодонтия, детский приём, лечение во сне. Два филиала. Запишитесь на консультацию.';
export const OG_LOCALE = 'ru_RU';
