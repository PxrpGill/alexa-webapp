import { Alexik3D } from "@/shared/ui/alexik-3d";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

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
		<main className="page-offset">
			<QuadroSection className="section" {...QUADRO_MOCK_SECTION} />
			<BrickworkSection className="section" {...BRICKWORK_SECTION_MOCK} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className="section"
			/>
			<Alexik3D />
		</main>
	);
}
