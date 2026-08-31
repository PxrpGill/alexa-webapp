import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	QUADRO_MOCK_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/child-therapy.constants";

export default function ChildTherapyPage() {
	return (
		<main className={css.root}>
			<QuadroSection className={css.quadro} {...QUADRO_MOCK_SECTION} />
			<BrickworkSection className={css.brickwork} {...BRICKWORK_SECTION_MOCK} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
			/>
		</main>
	);
}
