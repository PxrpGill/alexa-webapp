import AppointmentSchedulingSection from '@/features/appointment-scheduling-section';
import { Alexik3D } from '@/shared/ui/alexik-3d';
import CertificatesSection from '@/widgets/certificates-section';
import ChildWhatIncludesServices from '@/widgets/child-what-includes-services';
import CostOfServices from '@/widgets/cost-of-services';
import CtaHelpSection from '@/widgets/cta-help-section';
import FirstVisitSection from '@/widgets/first-visit-section';
import Hero from '@/widgets/hero';
import HowItWorksSlider from '@/widgets/how-it-works-slider';
import OurPeopleSection from '@/widgets/our-people-section';
import RecommendsForChildren from '@/widgets/recommends-for-children';

import {
    CERTIFICATES_SECTION,
    CHILD_WHAT_INCLUDES_SERVICES,
    COST_OF_SERVICES,
    CTA_HELP_SECTION,
    EMPLOYEES_SECTION,
    FIRST_VISIT_SECTION_DATA,
    FORM_DATA,
    HERO_DATA,
    HOW_IT_WORKS_SLIDER,
    RECOMMENDS_FOR_CHILDREN_DATA,
} from './models/sleepbased-treatment.constants';

export default function SleepbasedTreatmentPage() {
    return (
        <main className="page-offset">
            <Hero {...HERO_DATA} className="section" />
            <ChildWhatIncludesServices
                className="section"
                {...CHILD_WHAT_INCLUDES_SERVICES}
            />
            <RecommendsForChildren
                className="section"
                {...RECOMMENDS_FOR_CHILDREN_DATA}
            />
            <HowItWorksSlider className="section" {...HOW_IT_WORKS_SLIDER} />
            <FirstVisitSection
                className="section"
                {...FIRST_VISIT_SECTION_DATA}
            />
            <OurPeopleSection
                className="section"
                {...EMPLOYEES_SECTION}
                isSlider
            />
            <CostOfServices className="section" {...COST_OF_SERVICES} />
            <CtaHelpSection className="section" {...CTA_HELP_SECTION} />
            <CertificatesSection
                className="section"
                {...CERTIFICATES_SECTION}
            />
            <AppointmentSchedulingSection {...FORM_DATA} className="section" />
            <Alexik3D />
        </main>
    );
}
