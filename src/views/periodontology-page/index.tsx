import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import DiagnosticsSection from '@/widgets/diagnostics-section';
import EarlyPeriodontalTreatmentSection from '@/widgets/early-periodontal-treatment-section';
import FaqSection from '@/widgets/faq-section';
import MockTabsSection from '@/widgets/mock-tabs-section';
import OurWork from '@/widgets/our-work';
import ParentNewsSection from '@/widgets/parent-news-section';
import QuadroSection from '@/widgets/quadro-section';
import TitleStickySection from '@/widgets/tilte-sticky-section';
import TreatmentDelayConsequences from '@/widgets/treatment-delay-consequences';
import YandexMap from '@/widgets/yandex-map';

import {
    MOCK_FAQ_SECTION,
    OUR_WORK,
    PARENT_NEWS_SECTION_MOCK,
} from '../home-page/models/home-page.constants';

import css from './index.module.css';
import {
    DIAGNOSTICS_SECTION_MOCK,
    EARLY_PERIODONTAL_TREATMENT_MOCK,
    MOCK_TABS_SECTION,
    QUADRO_SECTION_MOCK,
    TITLE_STICKY_SECTION,
    TREATMENT_DELAY_CONSEQUENCES_MOCK,
} from './models/periodontology.constants';

export default function PeriodontologyPage() {
    return (
        <main className={css.root}>
            <QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
            <TitleStickySection
                {...TITLE_STICKY_SECTION}
                className={css.titleSticky}
            />
            <MockTabsSection {...MOCK_TABS_SECTION} className={css.mockTabs} />
            <TreatmentDelayConsequences
                {...TREATMENT_DELAY_CONSEQUENCES_MOCK}
                className={css.treatment}
            />
            <EarlyPeriodontalTreatmentSection
                {...EARLY_PERIODONTAL_TREATMENT_MOCK}
                className={css.earlyPeriodontal}
            />
            <DiagnosticsSection
                {...DIAGNOSTICS_SECTION_MOCK}
                className={css.diagnostics}
            />
            <OurWork {...OUR_WORK} className={css.ourWork} />
            <FaqSection {...MOCK_FAQ_SECTION} className={css.faqs} />
            <ParentNewsSection
                {...PARENT_NEWS_SECTION_MOCK}
                className={css.news}
            />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
