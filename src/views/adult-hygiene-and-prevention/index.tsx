import {
	YANDEX_MAP_CONTENT,
	YANDEX_MAP_INFO_CARD,
	YANDEX_MAP_TITLE,
} from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_DESCRIPTION_SLIDER,
	MOCK_QUADRO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION,
} from "./models/adult-hygiene-and-prevention.constants";

export default function AdultHygieneAndPreventionPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...MOCK_QUADRO_SECTION} className={css.quadro} />
			<TitleStickySection
				{...TITLE_STICKY_SECTION}
				className={css.titleSticky}
			/>
			<BrickworkSection className={css.brickwork} {...BRICKWORK_SECTION_MOCK} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				textBlockPosition="right"
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
			/>
			<TitleDescriptionSlider
				className={css.beforeAfter}
				{...FOURTH_DESCRIPTION_SLIDER}
				textBlockPosition="right"
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} />
		</main>
	);
}
