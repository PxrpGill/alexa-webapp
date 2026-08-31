import BrickworkSection from "@/widgets/brickwork-section";
import DescriptionSection from "@/widgets/description-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	DESCRIPTION_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	MOCK_QUADRO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
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
				className={css.lastSlider}
				textBlockPosition="right"
			/>
		</main>
	);
}
