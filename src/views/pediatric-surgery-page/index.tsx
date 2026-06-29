import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	MOCK_QUADRO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/pediatric-surgery.constants";

export default function PediatricSurgeryPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...MOCK_QUADRO_SECTION} className={css.quadro} />
			<BrickworkSection className={css.brickwork} {...BRICKWORK_SECTION_MOCK} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				className={css.slider}
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
			/>
			<TitleDescriptionSlider
				className={css.lastSlider}
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
