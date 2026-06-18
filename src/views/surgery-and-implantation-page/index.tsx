import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import StillQuestions from "@/widgets/still-questions";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	HERO_MOCK,
	IMPLANT_FIRST_SLIDER,
	IMPLANT_SECOND_SLIDER,
	IMPLANT_THIRD_SLIDER,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	STILL_QUESTION_MOCK,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION_MOCK,
} from "./models/surgery-and-implantation.constants";

export default function SurgeryAndImplantationPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...HERO_MOCK} className={css.hero} />
			<TitleStickySection
				{...TITLE_STICKY_SECTION_MOCK}
				className={css.titleSticky}
			/>
			<TitleDescriptionSlider
				className={css.slider}
				{...IMPLANT_FIRST_SLIDER}
			/>
			<TitleDescriptionSlider
				className={css.slider}
				textBlockPosition="right"
				{...IMPLANT_SECOND_SLIDER}
			/>
			<TitleDescriptionSlider
				className={css.lastSlider}
				{...IMPLANT_THIRD_SLIDER}
			/>
			<StillQuestions {...STILL_QUESTION_MOCK} className={css.stillQuestions} />
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
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				textBlockPosition="right"
				className={css.lastSlider}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
