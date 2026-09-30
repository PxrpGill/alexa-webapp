import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import AnnualCarePrograms from "@/widgets/annual-care-programs";
import OurPeopleSection from "@/widgets/our-people-section";
import PreventionSection from "@/widgets/prevention-section";
import QuadroSection from "@/widgets/quadro-section";
import SolutionsSection from "@/widgets/solutions-section";
import StomatologyProgram from "@/widgets/stomatology-program";

import {
	ANNUAL_CARE_SECTION_MOCK,
	EMPLOYEES_SECTION,
	FORM_DATA,
	GREEN_CTA,
	PREVENTION_SECTION,
	QAUDRO_MOCK,
	SOLUTIONS_SECTION_MOCK,
	STOMATOLOGY_PROGRAM,
} from "./models/volkovo.constants";
import CtaGreen from "./ui/cta-green";
import VolkovoHero from "./ui/volkovo-hero";

export default function VolkovoPage() {
	return (
		<main>
			<VolkovoHero className="section" />
			<CtaGreen {...GREEN_CTA} className="section" />
			<QuadroSection className="section" {...QAUDRO_MOCK} />
			<PreventionSection {...PREVENTION_SECTION} className="section" />
			<StomatologyProgram
				{...STOMATOLOGY_PROGRAM}
				className="section"
			/>
			<AnnualCarePrograms
				className="section"
				{...ANNUAL_CARE_SECTION_MOCK}
			/>
			<SolutionsSection className="section" {...SOLUTIONS_SECTION_MOCK} />
			<OurPeopleSection
				className="section"
				{...EMPLOYEES_SECTION}
				isSlider
			/>
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
