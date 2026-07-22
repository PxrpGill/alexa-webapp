import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import SupervisoryAuthoritiesSection from '@/widgets/supervisory-authorities-section';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import { SUPERVISORY_SECTION_MOCK } from './models/supervisory-authorities.constants';

export default function SupervisoryAuthoritiesPage() {
    return (
        <main className={css.root}>
            <SupervisoryAuthoritiesSection
                {...SUPERVISORY_SECTION_MOCK}
                className={css.supervisory}
            />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
