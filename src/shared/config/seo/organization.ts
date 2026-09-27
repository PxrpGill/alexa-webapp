import {
    MOBILE_PHONE,
    YANDEX_MAP_INFO_CARD,
} from '@/shared/config/global-constants.constants';

import { SITE_NAME, SITE_URL } from './seo.constants';

const stripEntities = (value: string): string =>
    value
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const OPENING_HOURS = [
    {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
    },
];

const BRANCH_LOCALITY: Record<string, string> = {
    'Поселок Янтарный': 'посёлок Янтарный',
    'Ростов-на-Дону': 'Ростов-на-Дону',
};

const departments = (YANDEX_MAP_INFO_CARD.branches ?? [])
    .filter((branch) => Boolean(branch.title))
    .map((branch) => {
        const streetAddress = stripEntities(branch.title ?? '');
        const locality = branch.locality ?? '';

        return {
            '@type': 'LocalBusiness',
            name: `${SITE_NAME} — ${streetAddress}`,
            ...(branch.phone ? { telephone: branch.phone } : {}),
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'RU',
                addressRegion: 'Ростовская область',
                addressLocality: BRANCH_LOCALITY[locality] ?? locality,
                streetAddress,
            },
            ...(branch.cords
                ? {
                      geo: {
                          '@type': 'GeoCoordinates',
                          latitude: branch.cords[0],
                          longitude: branch.cords[1],
                      },
                  }
                : {}),
            openingHoursSpecification: OPENING_HOURS,
        };
    });

export const ORGANIZATION_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: SITE_NAME,
    legalName: 'Общество с ограниченной ответственностью «Алекса»',
    url: SITE_URL,
    email: 'oooalexa@bk.ru',
    telephone: MOBILE_PHONE.landyshevaya,
    taxID: '6161055650',
    identifier: {
        '@type': 'PropertyValue',
        name: 'ОГРН',
        value: '1096193002597',
    },
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'RU',
        addressRegion: 'Ростовская область',
        addressLocality: 'Ростов-на-Дону',
        streetAddress: 'ул. Волкова, д. 22',
        postalCode: '344092',
    },
    department: departments,
};

type ArticleJsonLdParams = {
    title: string;
    description?: string;
    slug: string;
    publishDate?: string;
};

export const buildArticleJsonLd = ({
    title,
    description,
    slug,
    publishDate,
}: ArticleJsonLdParams) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    ...(description ? { description } : {}),
    ...(publishDate ? { datePublished: publishDate } : {}),
    url: `${SITE_URL}/blog/${slug}`,
    publisher: {
        '@type': 'Dentist',
        name: SITE_NAME,
        url: SITE_URL,
    },
});
