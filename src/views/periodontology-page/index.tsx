import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";
// import WhyChooseUs from "@/widgets/why-choose-us";

import css from "./index.module.css";
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
		<main className={css.root}>
			<QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
			<WhatServiceIncludes
				className={css.whatServiceIncludes}
				{...WHAT_SERVICE_INCLUDES}
			/>
			<TitleStickySection
				{...TITLE_STICKY_SECTION}
				className={css.titleSticky}
			/>
			<DiagnosticProcessSection
				className={css.diagnostics}
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			{/* <WhyChooseUs className={css.whyChooseUs} {...WHY_CHOOSE_US} /> */}
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
				textBlockPosition="right"
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
			/>
			<OurPeopleSection
				className={css.peoples}
				{...EMPLOYEES_SECTION}
				isSlider
			/>
			<CostOfServices className={css.costOfServices} {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
		</main>
	);
}
