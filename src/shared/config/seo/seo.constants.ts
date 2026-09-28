const FALLBACK_SITE_URL = 'https://aleksa-dent.ru';

const normalizeSiteUrl = (rawUrl: string | undefined): string => {
    if (!rawUrl) return FALLBACK_SITE_URL;

    const trimmedUrl = rawUrl.trim().replace(/\/+$/, '');

    if (!/^https?:\/\//.test(trimmedUrl)) {
        console.warn(
            `NEXT_PUBLIC_SITE_URL="${rawUrl}" без протокола, используем ${FALLBACK_SITE_URL}`
        );

        return FALLBACK_SITE_URL;
    }

    // Проверка протокола не гарантирует парсимость: "https://a b.ru" её
    // проходит, а new URL() в metadataBase бросает на вычислении модуля
    // корневого layout и роняет всё приложение, а не одну страницу.
    try {
        new URL(trimmedUrl);
    } catch {
        console.warn(
            `NEXT_PUBLIC_SITE_URL="${rawUrl}" не парсится как URL, используем ${FALLBACK_SITE_URL}`
        );

        return FALLBACK_SITE_URL;
    }

    return trimmedUrl;
};

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_NAME = 'Стоматология «Алекса»';
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const DEFAULT_TITLE = 'Семейная стоматология «Алекса» в Ростове-на-Дону';
export const DEFAULT_DESCRIPTION =
    'Семейная стоматология в Ростове-на-Дону: терапия под микроскопом, имплантация, ортодонтия, детский приём, лечение во сне. Два филиала. Запишитесь на консультацию.';
export const OG_LOCALE = 'ru_RU';

// Содержательная часть title: суффикс шаблона занимает 24 символа
// из ~60 видимых в выдаче.
export const META_TITLE_MAX_LENGTH = 36;
export const META_DESCRIPTION_MAX_LENGTH = 160;
