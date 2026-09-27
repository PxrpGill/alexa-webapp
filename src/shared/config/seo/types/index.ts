import type { SITE_NAVIGATION } from '@/shared/config/site-navigation';

type FlatRoute = (typeof SITE_NAVIGATION)[keyof typeof SITE_NAVIGATION];

type ServiceRoute =
    (typeof SITE_NAVIGATION.landyshevayaServices)[keyof typeof SITE_NAVIGATION.landyshevayaServices];

export type SiteRoute = Extract<FlatRoute, string> | ServiceRoute;

export type PageMeta = {
    title: string;
    description: string;
    isAbsoluteTitle?: boolean;
    isNoIndex?: boolean;
};
