import type { Metadata } from 'next';

import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import RulesforPaymentforMedicalServicesPage from '@/views/rules-for-payment-for-medical-services';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.pravilavneseniyaoplatyzamedicinskieuslugi
);

export default function RulesforPaymentforMedicalServices() {
    return <RulesforPaymentforMedicalServicesPage />;
}
