import AppointmentSchedulingSection from '@/features/appointment-scheduling-section';
import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import DiagnosticProcessSection from '@/widgets/diagnostic-process-section';
import OurPeopleSection from '@/widgets/our-people-section';
import TitleDescriptionSlider from '@/widgets/title-description-slider';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import {
    DIAGNOSTICS_SECTION_MOCK,
    FIRST_TITLE_DESCRIPTION_SLIDER,
    FORM_DATA,
    FOURTH_TITLE_DESCRIPTION_SLIDER,
    HERO_SECTION,
    INFO_TABS,
    OUR_PEOPLE,
    SECOND_TITLE_DESCRIPTION_SLIDER,
    THIRD_TITLE_DESCRIPTION_SLIDER,
} from './models/adult-orthodontics.constants';
import HeroSection from './ui/hero-section';
import InfoTabs from './ui/info-tabs';

export default function AdultOrthodonticsPage() {
    return (
        <main className={css.root}>
            <HeroSection {...HERO_SECTION} className={css.hero} />
            <InfoTabs className={css.infoTabs} {...INFO_TABS} />
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
                className={css.slider}
            />
            <TitleDescriptionSlider
                {...FOURTH_TITLE_DESCRIPTION_SLIDER}
                className={css.lastSlider}
                textBlockPosition="right"
            />
            <OurPeopleSection className={css.ourPeople} {...OUR_PEOPLE} />
            <AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
