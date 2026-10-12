import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CertificatesSection from "@/widgets/certificates-section";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import {
	CERTIFICATES_SECTION,
	DIAGNOSTICS_SECTION_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	INFO_TABS,
	OUR_PEOPLE,
	QUADRO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
	TITLE_STICKY_SECTION,
} from "./models/adult-orthodontics.constants";
import InfoTabs from "./ui/info-tabs";

export default function AdultOrthodonticsPage() {
	return (
		<main className="page-offset">
			<QuadroSection className="section" {...QUADRO_SECTION} />
			<TitleStickySection className="section" {...TITLE_STICKY_SECTION} />
			<InfoTabs className="section" {...INFO_TABS} />
			<CertificatesSection className="section" {...CERTIFICATES_SECTION} />
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
				className="section-sm"
			/>
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className="section"
				textBlockPosition="right"
			/>
			<OurPeopleSection className="section" {...OUR_PEOPLE} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
