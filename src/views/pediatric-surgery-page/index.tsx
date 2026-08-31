import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

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
		</main>
	);
}
