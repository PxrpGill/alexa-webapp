import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

import {
	BRICKWORK_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	MOCK_QUADRO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/pediatric-surgery.constants";

export default function PediatricSurgeryPage() {
	return (
		<main className="page-offset">
			<QuadroSection {...MOCK_QUADRO_SECTION} className="section" />
			<BrickworkSection className="section" {...BRICKWORK_SECTION_MOCK} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				className="section-sm"
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
			/>
			<TitleDescriptionSlider
				className="section"
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
			/>
		</main>
	);
}
