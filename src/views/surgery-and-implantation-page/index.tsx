import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CertificatesSection from "@/widgets/certificates-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import ImplantTable from "@/widgets/implant-table";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";
// import WhyChooseUs from "@/widgets/why-choose-us";
import css from "./index.module.css";
import {
	CERTIFICATES_SECTION,
	COST_OF_SERVICES,
	DIAGNOSTICS_SECTION_MOCK,
	EMPLOYEES_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	HERO_MOCK,
	IMPLANT_TABLE,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION_MOCK,
	WHAT_SERVICE_INCLUDES,
	// WHY_CHOOSE_US,
} from "./models/surgery-and-implantation.constants";

export default function SurgeryAndImplantationPage() {
	return (
		<main className="page-offset">
			<QuadroSection {...HERO_MOCK} className="section" />
			<WhatServiceIncludes
				className="section"
				{...WHAT_SERVICE_INCLUDES}
			/>
			<TitleStickySection
				{...TITLE_STICKY_SECTION_MOCK}
				className="section"
			/>
			<DiagnosticProcessSection
				className="section"
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			<CertificatesSection
				className="section"
				{...CERTIFICATES_SECTION}
			/>
			{/* <WhyChooseUs {...WHY_CHOOSE_US} className="section" /> */}
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				textBlockPosition="right"
				className={css.slider}
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
			<ImplantTable className="section" {...IMPLANT_TABLE} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
