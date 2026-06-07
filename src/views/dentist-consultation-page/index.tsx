import {
	YANDEX_MAP_CONTENT,
	YANDEX_MAP_TITLE,
} from "@/shared/config/global-constants.constats";
import FaqSection from "@/widgets/faq-section";
import OurWork from "@/widgets/our-work";
import ParentNewsSection from "@/widgets/parent-news-section";
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

export default function DentistConsultationPage() {
	return (
		<main className={css.root}>
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
			<FaqSection {...MOCK_FAQ_SECTION} className={css.faqs} />
			<ParentNewsSection
				{...PARENT_NEWS_SECTION_MOCK}
				className={css.parentNews}
			/>
			<YandexMap title={YANDEX_MAP_TITLE} content={YANDEX_MAP_CONTENT} />
		</main>
	);
}
