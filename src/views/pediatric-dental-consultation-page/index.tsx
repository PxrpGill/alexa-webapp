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
		<main className="page-offset">
			<QuadroSection {...MOCK_QUADRO_SECTION} className="section" />
			<DescriptionSection
				{...DESCRIPTION_SECTION}
				className={`${css.description} section section`}
			/>
			<BrickworkSection {...BRICKWORK_SECTION_MOCK} className="section" />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				textBlockPosition="right"
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className="section"
				textBlockPosition="right"
			/>
		</main>
	);
}
