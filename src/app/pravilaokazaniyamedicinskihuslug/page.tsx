import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import RulesForTheProvisionOfMedicalServicesPage from '@/views/rules-for-the-provision-of-medical-services-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.pravilaokazaniyamedicinskihuslug
);

export default function RulesForTheProvisionOfMedicalServices() {
    return <RulesForTheProvisionOfMedicalServicesPage />;
}
