import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import { FIRST_TITLE_DESCRIPTION_SLIDER } from "../home-page/models/home-page.constants";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	QUADRO_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION_MOCK,
} from "./models/adult-orthopedics.constants";

export default function AdultOrthopedicsPage() {
	return (
		<main className={css.root}>
			<QuadroSection className={css.quadro} {...QUADRO_MOCK} />
			<TitleStickySection
				className={css.titleSticky}
				{...TITLE_STICKY_SECTION_MOCK}
			/>
			<BrickworkSection className={css.brickwork} {...BRICKWORK_SECTION_MOCK} />
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
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
