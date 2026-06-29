import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import DescriptionSection from "@/widgets/description-section";
import QuadroSection from "@/widgets/quadro-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	DESCRIPTION_SECTION,
	MOCK_QUADRO_SECTION,
} from "./models/pediatric-dental-consultation.constants";

export default function PediatricDentalConsultationPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...MOCK_QUADRO_SECTION} className={css.quadro} />
			<DescriptionSection
				{...DESCRIPTION_SECTION}
				className={css.description}
			/>
			<BrickworkSection {...BRICKWORK_SECTION_MOCK} className={css.brickwork} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
