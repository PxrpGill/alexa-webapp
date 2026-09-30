import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CertificatesSection from "@/widgets/certificates-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";

import {
	CERTIFICATES_SECTION,
	COST_OF_SERVICES,
	DIAGNOSTICS_SECTION_MOCK,
	FIFTH_TITLE_DESCRIPTION_SLIDER,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	OUR_PEOPLE,
	QUADRO_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION_MOCK,
	WHAT_INCLUDES_SECTION,
} from "./models/adult-orthopedics.constants";

export default function AdultOrthopedicsPage() {
	return (
		<main className="page-offset">
			<QuadroSection className="section" {...QUADRO_MOCK} />
			<WhatServiceIncludes
				className="section"
				{...WHAT_INCLUDES_SECTION}
			/>
			<TitleStickySection
				className="section"
				{...TITLE_STICKY_SECTION_MOCK}
			/>
			<DiagnosticProcessSection
				className="section"
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			<CertificatesSection
				className="section"
				{...CERTIFICATES_SECTION}
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
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
				textBlockPosition="right"
			/>
			<TitleDescriptionSlider
				{...FIFTH_TITLE_DESCRIPTION_SLIDER}
				className="section"
			/>
			<OurPeopleSection className="section" {...OUR_PEOPLE} />
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
