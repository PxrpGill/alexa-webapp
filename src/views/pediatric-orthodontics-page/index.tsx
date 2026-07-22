import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import HealthForFamily from '@/widgets/health-for-family';
import HeroSlide from '@/widgets/hero-slider-section/ui/hero-slide';
import TitleDescriptionSlider from '@/widgets/title-description-slider';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import {
    FIRST_TITLE_DESCRIPTION_SLIDER,
    FOURTH_TITLE_DESCRIPTION_SLIDER,
    HEALTH_FOR_FAMILY_MOCK,
    HERO_MOCK,
    SECOND_TITLE_DESCRIPTION_SLIDER,
    THIRD_TITLE_DESCRIPTION_SLIDER,
} from './models/pediatric-orthodontics.constants';

export default function PediatricOrthodonticsPage() {
    return (
        <main className={css.root}>
            <AnimationWrapper as="section" className={`${css.hero} container`}>
                <HeroSlide {...HERO_MOCK} className={css.heroContent} />
            </AnimationWrapper>
            <HealthForFamily
                {...HEALTH_FOR_FAMILY_MOCK}
                className={css.family}
            />
            <TitleDescriptionSlider
                className={css.slider}
                {...FIRST_TITLE_DESCRIPTION_SLIDER}
            />
            <TitleDescriptionSlider
                textBlockPosition="right"
                className={css.slider}
                {...SECOND_TITLE_DESCRIPTION_SLIDER}
            />
            <TitleDescriptionSlider
                className={css.slider}
                {...THIRD_TITLE_DESCRIPTION_SLIDER}
            />
            <TitleDescriptionSlider
                textBlockPosition="right"
                className={css.lastSlider}
                {...FOURTH_TITLE_DESCRIPTION_SLIDER}
            />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
