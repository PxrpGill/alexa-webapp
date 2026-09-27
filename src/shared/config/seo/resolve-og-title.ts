import { DEFAULT_TITLE } from './seo.constants';

/**
 * Картинка Open Graph несёт название и домен клиники, поэтому текст на ней
 * не может быть произвольным: иначе любой желающий получает брендовый PNG
 * с собственной подписью, отданный с домена клиники. Пропускаем только
 * заголовки, которые сайт действительно где-то использует.
 */
export const resolveOgTitle = (
    requestedTitle: string | null | undefined,
    allowedTitles: ReadonlySet<string>
): string => {
    const title = requestedTitle?.trim();

    if (!title) return DEFAULT_TITLE;

    return allowedTitles.has(title) ? title : DEFAULT_TITLE;
};
