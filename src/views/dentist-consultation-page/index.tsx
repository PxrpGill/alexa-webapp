import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import FaqSection from "@/widgets/faq-section";
import OurPeopleSection from "@/widgets/our-people-section";
import OurWork from "@/widgets/our-work";
import ParentNewsSection from "@/widgets/parent-news-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import {
	FIRST_TITLE_DESCRIPTION_SLIDER,
	MOCK_FAQ_SECTION,
	OUR_WORK,
	PARENT_NEWS_SECTION_MOCK,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "../home-page/models/home-page.constants";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION,
	EMPLOYEES_SECTION,
	QUADRO_SECTION_MOCK,
	TITLE_STICKY_SECTION,
} from "./models/dentist-consultation.constants";

export default function DentistConsultationPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
			<TitleStickySection className={css.sticky} {...TITLE_STICKY_SECTION} />
			<BrickworkSection {...BRICKWORK_SECTION} className={css.brick} />
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
				textBlockPosition="right"
			/>
			<OurWork className={css.ourWork} {...OUR_WORK} />
			<OurPeopleSection className={css.peoples} {...EMPLOYEES_SECTION} />
			<FaqSection {...MOCK_FAQ_SECTION} className={css.faqs} />
			<ParentNewsSection
				{...PARENT_NEWS_SECTION_MOCK}
				className={css.parentNews}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
