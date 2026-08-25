import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import CertificatesSection from "@/widgets/certificates-section";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import InfoTabs from "../adult-orthodontics-page/ui/info-tabs";
import css from "./index.module.css";
import {
	CERTIFICATES_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FORM_DATA,
	INFO_TABS_MOCK,
	OUR_PEOPLE_SECTION,
	QUADRO_SECTION_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/treatment-in-dream.constants";

export default function TreatmentInDreamPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
			<InfoTabs className={css.infoTabs} {...INFO_TABS_MOCK} />
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
				className={css.lastSlider}
			/>
			<OurPeopleSection className={css.ourPeople} {...OUR_PEOPLE_SECTION} />
			<AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
