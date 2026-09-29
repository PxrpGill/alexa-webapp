// Единый список маршрутов сайта. Используется и проверкой метаданных,
// и прогоном Lighthouse — чтобы они не разъезжались.

/** Статические маршруты, известные на этапе сборки. */
export const STATIC_ROUTES = [
    '/', '/volkova', '/price', '/vrachi', '/raspisanievrachej', '/o-klinike',
    '/akcii', '/blog', '/vakansii', '/dms', '/pacientu', '/nalogovyjvychet',
    '/rekvizity', '/nadzornye-organy', '/dokumenty-i-licenzii', '/privacy',
    '/personal-data', '/letter', '/pravilaokazaniyamedicinskihuslug',
    '/pravilavneseniyaoplatyzamedicinskieuslugi',
    '/landyshevaya/konsultaciya-stomatologa', '/landyshevaya/terapiya-vz',
    '/landyshevaya/ortodontiya-vz', '/landyshevaya/ortopediya-vz',
    '/landyshevaya/hirurgiya-i-implantaciya', '/landyshevaya/parodontologiya',
    '/landyshevaya/gnatologiya', '/landyshevaya/gigiena-i-profilaktika-vz',
    '/landyshevaya/lechenie-vo-sne-vz',
    '/landyshevaya/konsultaciya-detskogo-stomatologa',
    '/landyshevaya/detskaya-terapiya', '/landyshevaya/detskaya-hirurgiya',
    '/landyshevaya/ortodontiya', '/landyshevaya/gigiena-i-profilaktika',
    '/landyshevaya/lechenie-vo-sne',
];

/**
 * По одному живому представителю каждого динамического раздела.
 * Slug'и берутся из sitemap запущенного сервера: разделы наполняются
 * из бэкенда, поэтому зашивать их в код нельзя.
 */
export async function getDynamicRoutes(base) {
    const sections = ['/blog/', '/akcii/', '/vakansii/'];

    try {
        const response = await fetch(`${base}/sitemap.xml`);

        if (!response.ok) return [];

        const xml = await response.text();
        const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
            new URL(match[1]).pathname
        );

        return sections
            .map((section) =>
                paths.find(
                    (path) =>
                        path.startsWith(section) && path.length > section.length
                )
            )
            .filter(Boolean);
    } catch {
        return [];
    }
}

/**
 * Полный список: статика плюс по одному живому динамическому маршруту.
 * Страницу 404 сюда не включаем: Lighthouse не умеет оценивать ответы
 * с кодом, отличным от 200, и выдаёт по ней нули вместо оценок.
 */
export async function getAllRoutes(base) {
    const dynamic = await getDynamicRoutes(base);

    return [...STATIC_ROUTES, ...dynamic];
}

/** Обратная совместимость с прежним импортом. */
export const ROUTES = STATIC_ROUTES;
