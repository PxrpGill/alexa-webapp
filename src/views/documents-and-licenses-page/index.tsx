import { YANDEX_MAP_INFO_CARD } from '@/shared/config/global-constants.constats';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import DetailDocumentsSection from '@/widgets/detail-documents-section';
import YandexMap from '@/widgets/yandex-map';

import css from './index.module.css';
import { DOCUMENTS_AND_LICENSES } from './models/documents-and-licenses.constants';

export default function DocumentsAndLicensesPage() {
    return (
        <main className={css.root}>
            <AnimationWrapper className={`${css.titleBlock} container`}>
                <h1 className={css.title}>Документы и&nbsp;лицензии</h1>
            </AnimationWrapper>
            <DetailDocumentsSection
                className={css.documents}
                {...DOCUMENTS_AND_LICENSES}
            />
            <YandexMap
                infoCard={YANDEX_MAP_INFO_CARD}
                className={css.yandexMap}
            />
        </main>
    );
}
