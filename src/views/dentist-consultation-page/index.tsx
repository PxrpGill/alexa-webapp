import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CertificatesSection from "@/widgets/certificates-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";
import WhyChooseUs from "@/widgets/why-choose-us";
import {
	FIRST_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "../home-page/models/home-page.constants";
import {
	CERTIFICATES_SECTION,
	COST_OF_SERVICES,
	DIAGNOSTICS_SECTION_MOCK,
	EMPLOYEES_SECTION,
	FORM_DATA,
	QUADRO_SECTION_MOCK,
	TITLE_STICKY_SECTION,
	WHAT_SERVICE_INCLUDES,
	WHY_CHOOSE_US,
} from "./models/dentist-consultation.constants";

export default function DentistConsultationPage() {
	return (
		<main className="page-offset">
			<QuadroSection {...QUADRO_SECTION_MOCK} className="section" />
			<WhatServiceIncludes
				className="section"
				{...WHAT_SERVICE_INCLUDES}
			/>
			<TitleStickySection className="section" {...TITLE_STICKY_SECTION} />
			<DiagnosticProcessSection
				className="section"
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			<CertificatesSection
				className="section"
				{...CERTIFICATES_SECTION}
			/>
			<WhyChooseUs className="section" {...WHY_CHOOSE_US} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className="section"
				textBlockPosition="right"
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
