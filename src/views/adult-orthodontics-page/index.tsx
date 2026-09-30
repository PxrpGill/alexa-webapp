import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import CertificatesSection from "@/widgets/certificates-section";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import {
	CERTIFICATES_SECTION,
	DIAGNOSTICS_SECTION_MOCK,
	FIFTH_TITLE_DESCRIPTION_SLIDER,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	HERO_SECTION,
	INFO_TABS,
	OUR_PEOPLE,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/adult-orthodontics.constants";
import HeroSection from "./ui/hero-section";
import InfoTabs from "./ui/info-tabs";

export default function AdultOrthodonticsPage() {
	return (
		<main className="page-offset">
			<HeroSection {...HERO_SECTION} className="section" />
			<InfoTabs className="section" {...INFO_TABS} />
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
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
		</main>
	);
}
