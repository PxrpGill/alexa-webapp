import AppointmentSchedulingSection from '@/features/appointment-scheduling-section';
import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import AnnualCarePrograms from '@/widgets/annual-care-programs';
import OurPeopleSection from '@/widgets/our-people-section';
import PreventionSection from '@/widgets/prevention-section';
import QuadroSection from '@/widgets/quadro-section';
import SolutionsSection from '@/widgets/solutions-section';
import StomatologyProgram from '@/widgets/stomatology-program';
import YandexMap from '@/widgets/yandex-map';

import { EMPLOYEES_SECTION } from '../dentist-consultation-page/models/dentist-consultation.constants';

import css from './index.module.css';
import {
    ANNUAL_CARE_SECTION_MOCK,
    FORM_DATA,
    GREEN_CTA,
    PREVENTION_SECTION,
    QAUDRO_MOCK,
    SOLUTIONS_SECTION_MOCK,
    STOMATOLOGY_PROGRAM,
} from './models/volkovo.constants';
import CtaGreen from './ui/cta-green';
import VolkovoHero from './ui/volkovo-hero';

export default function VolkovoPage() {
    return (
        <main>
            <VolkovoHero className={css.hero} />
            <CtaGreen {...GREEN_CTA} className={css.greenCta} />
            <QuadroSection className={css.quadro} {...QAUDRO_MOCK} />
            <PreventionSection
                {...PREVENTION_SECTION}
                className={css.prevention}
            />
            <StomatologyProgram
                {...STOMATOLOGY_PROGRAM}
                className={css.stomatology}
            />
            <AnnualCarePrograms
                className={css.annualCare}
                {...ANNUAL_CARE_SECTION_MOCK}
            />
            <SolutionsSection
                className={css.solutions}
                {...SOLUTIONS_SECTION_MOCK}
            />
            <OurPeopleSection
                className={css.peoples}
                {...EMPLOYEES_SECTION}
                isSlider
            />
            <AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
