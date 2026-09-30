import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";

import {
	COST_OF_SERVICES,
	DIAGNOSTICS_SECTION_MOCK,
	EMPLOYEES_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	QUADRO_SECTION_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION_MOCK,
	WHAT_INCLUDES,
} from "./models/gnathology.constants";

export default function AdultGnathologyPage() {
	return (
		<main className="page-offset">
			<QuadroSection className="section" {...QUADRO_SECTION_MOCK} />
			<WhatServiceIncludes className="section" {...WHAT_INCLUDES} />
			<TitleStickySection
				className="section"
				{...TITLE_STICKY_SECTION_MOCK}
			/>
			<DiagnosticProcessSection
				className="section"
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
				textBlockPosition="right"
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className="section"
			/>
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} />
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
