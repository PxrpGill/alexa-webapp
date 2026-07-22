import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import BrickworkSection from '@/widgets/brickwork-section';
import FaqSection from '@/widgets/faq-section';
import PromoSection from '@/widgets/promo-section';
import QuadroSection from '@/widgets/quadro-section';
import StagesSection from '@/widgets/stages-section';
import StillQuestions from '@/widgets/still-questions';
import TitleStickySection from '@/widgets/tilte-sticky-section';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import {
    BRICKWORK_MOCK_SECTION,
    FAQ_SECTION_MOCK,
    PROMO_SECTION_MOCK,
    QUADRO_MOCK,
    STAGES_SECTION_MOCK,
    STICKY_TITLE_MOCK,
    STILL_QUESTIONS_LAST_MOCK,
    STILL_QUESTIONS_MOCK,
} from './models/sleepbased-treatment.constants';

export default function SleepbasedTreatmentPage() {
    return (
        <main className={css.root}>
            <QuadroSection {...QUADRO_MOCK} className={css.quadro} />
            <BrickworkSection
                className={css.brickwork}
                {...BRICKWORK_MOCK_SECTION}
            />
            <TitleStickySection
                className={css.stickyTitle}
                {...STICKY_TITLE_MOCK}
            />
            <StillQuestions
                {...STILL_QUESTIONS_MOCK}
                className={css.questions}
            />
            <PromoSection className={css.promo} {...PROMO_SECTION_MOCK} />
            <StagesSection className={css.stages} {...STAGES_SECTION_MOCK} />
            <FaqSection className={css.faq} {...FAQ_SECTION_MOCK} />
            <StillQuestions
                {...STILL_QUESTIONS_LAST_MOCK}
                className={css.questions}
            />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
