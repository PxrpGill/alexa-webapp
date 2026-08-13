import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import DocumentsList from "@/widgets/documents-list";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import { DOCUMENTS_MOCK } from "./models/to-the-patient.constants";

export default function ToThePatientPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Пациенту</h1>
			</AnimationWrapper>
			<DocumentsList {...DOCUMENTS_MOCK} className={css.documents} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
