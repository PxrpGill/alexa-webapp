import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import CertificatesSection from "@/widgets/certificates-section";
import CostOfServices from "@/widgets/cost-of-services";
import DiagnosticProcessSection from "@/widgets/diagnostic-process-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import WhatServiceIncludes from "@/widgets/what-service-includes";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
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
		<main className={css.root}>
			<QuadroSection className={css.quadro} {...QUADRO_MOCK} />
			<WhatServiceIncludes
				className={css.whatServiceIncludes}
				{...WHAT_INCLUDES_SECTION}
			/>
			<TitleStickySection
				className={css.titleSticky}
				{...TITLE_STICKY_SECTION_MOCK}
			/>
			<DiagnosticProcessSection
				className={css.diagnostics}
				{...DIAGNOSTICS_SECTION_MOCK}
			/>
			<CertificatesSection
				className={css.certificates}
				{...CERTIFICATES_SECTION}
			/>
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
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
				textBlockPosition="right"
			/>
			<TitleDescriptionSlider
				{...FIFTH_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
			/>
			<OurPeopleSection className={css.ourPeople} {...OUR_PEOPLE} />
			<CostOfServices className={css.costsOfServices} {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
