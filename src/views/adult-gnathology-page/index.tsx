import AppointmentSchedulingSection from '@/features/appointment-scheduling-section';
import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import CostOfServices from '@/widgets/cost-of-services';
import DiagnosticProcessSection from '@/widgets/diagnostic-process-section';
import OurPeopleSection from '@/widgets/our-people-section';
import QuadroSection from '@/widgets/quadro-section';
import TitleStickySection from '@/widgets/tilte-sticky-section';
import TitleDescriptionSlider from '@/widgets/title-description-slider';
import WhatServiceIncludes from '@/widgets/what-service-includes';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import {
    COST_OF_SERVICES,
    DIAGNOSTICS_SECTION_MOCK,
    EMPLOYEES_SECTION,
    FIRST_TITLE_DESCRIPTION_SLIDER,
    FORM_DATA,
    QUADRO_SECTION_MOCK,
    SECOND_TITLE_DESCRIPTION_SLIDER,
    THIRD_TITLE_DESCRIPTION_SLIDER,
    TITLE_STICKY_SECTION_MOCK,
    WHAT_INCLUDES,
} from './models/gnathology.constants';

export default function AdultGnathologyPage() {
    return (
        <main className={css.root}>
            <QuadroSection className={css.quadro} {...QUADRO_SECTION_MOCK} />
            <WhatServiceIncludes
                className={css.whatIncludes}
                {...WHAT_INCLUDES}
            />
            <TitleStickySection
                className={css.stickyTitle}
                {...TITLE_STICKY_SECTION_MOCK}
            />
            <DiagnosticProcessSection
                className={css.diagnostics}
                {...DIAGNOSTICS_SECTION_MOCK}
            />
            <TitleDescriptionSlider
                {...FIRST_TITLE_DESCRIPTION_SLIDER}
                className={css.slider}
            />
            <TitleDescriptionSlider
                {...SECOND_TITLE_DESCRIPTION_SLIDER}
                className={css.slider}
                textBlockPosition="right"
            />
            <TitleDescriptionSlider
                {...THIRD_TITLE_DESCRIPTION_SLIDER}
                className={css.lastSlider}
            />
            <OurPeopleSection
                className={css.ourPeoples}
                {...EMPLOYEES_SECTION}
            />
            <CostOfServices className={css.costs} {...COST_OF_SERVICES} />
            <AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
