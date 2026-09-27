/**
 * Сериализует данные для инлайнового <script type="application/ld+json">.
 * Экранирует `<`, чтобы текст из CMS не мог закрыть тег скрипта.
 */
export const toJsonLd = (data: unknown): string =>
    JSON.stringify(data).replace(/</g, '\\u003c');
