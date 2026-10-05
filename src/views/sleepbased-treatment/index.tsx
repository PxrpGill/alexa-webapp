import { Alexik3D } from "@/shared/ui/alexik-3d";
import BrickworkSection from "@/widgets/brickwork-section";
import FaqSection from "@/widgets/faq-section";
import PromoSection from "@/widgets/promo-section";
import QuadroSection from "@/widgets/quadro-section";
import StagesSection from "@/widgets/stages-section";
import StillQuestions from "@/widgets/still-questions";
import TitleStickySection from "@/widgets/tilte-sticky-section";

import {
	BRICKWORK_MOCK_SECTION,
	FAQ_SECTION_MOCK,
	PROMO_SECTION_MOCK,
	QUADRO_MOCK,
	STAGES_SECTION_MOCK,
	STICKY_TITLE_MOCK,
	STILL_QUESTIONS_LAST_MOCK,
	STILL_QUESTIONS_MOCK,
} from "./models/sleepbased-treatment.constants";

export default function SleepbasedTreatmentPage() {
	return (
		<main className="page-offset">
			<QuadroSection {...QUADRO_MOCK} className="section" />
			<BrickworkSection className="section" {...BRICKWORK_MOCK_SECTION} />
			<TitleStickySection className="section" {...STICKY_TITLE_MOCK} />
			<StillQuestions {...STILL_QUESTIONS_MOCK} className="section" />
			<PromoSection className="section" {...PROMO_SECTION_MOCK} />
			<StagesSection className="section" {...STAGES_SECTION_MOCK} />
			<FaqSection className="section" {...FAQ_SECTION_MOCK} />
			<StillQuestions
				{...STILL_QUESTIONS_LAST_MOCK}
				className="section"
			/>
			<Alexik3D />
		</main>
	);
}
