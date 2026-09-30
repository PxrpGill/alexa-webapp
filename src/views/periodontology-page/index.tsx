import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";
// import WhyChooseUs from "@/widgets/why-choose-us";

import {
	COST_OF_SERVICES,
	DIAGNOSTICS_SECTION_MOCK,
	EMPLOYEES_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	QUADRO_SECTION_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION,
	WHAT_SERVICE_INCLUDES,
	// WHY_CHOOSE_US,
} from "./models/periodontology.constants";

export default function PeriodontologyPage() {
	return (
		<main className="page-offset">
			<QuadroSection {...QUADRO_SECTION_MOCK} className="section" />
			<WhatServiceIncludes
				className="section"
				{...WHAT_SERVICE_INCLUDES}
			/>
			<TitleStickySection
				{...TITLE_STICKY_SECTION}
				className="section"
			/>
			<DiagnosticProcessSection
				className="section"
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			{/* <WhyChooseUs className="section" {...WHY_CHOOSE_US} /> */}
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
			<OurPeopleSection
				className="section"
				{...EMPLOYEES_SECTION}
				isSlider
			/>
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
