import {
	YANDEX_MAP_CONTENT,
	YANDEX_MAP_TITLE,
} from "@/shared/config/global-constants.constats";
import FaqSection from "@/widgets/faq-section";
import MockTabsSection from "@/widgets/mock-tabs-section";
import OurWork from "@/widgets/our-work";
import ParentNewsSection from "@/widgets/parent-news-section";
import QuadroSection from "@/widgets/quadro-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import YandexMap from "@/widgets/yandex-map";
import {
	MOCK_FAQ_SECTION,
	OUR_WORK,
	PARENT_NEWS_SECTION_MOCK,
} from "../home-page/models/home-page.constants";
import css from "./index.module.css";
import {
	MOCK_TABS_SECTION,
	QUADRO_SECTION_MOCK,
	TITLE_STICKY_SECTION,
} from "./models/periodontology.constants";

export default function PeriodontologyPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
			<TitleStickySection
				{...TITLE_STICKY_SECTION}
				className={css.titleSticky}
			/>
			<MockTabsSection {...MOCK_TABS_SECTION} className={css.mockTabs} />
			<OurWork {...OUR_WORK} className={css.ourWork} />
			<FaqSection {...MOCK_FAQ_SECTION} className={css.faqs} />
			<ParentNewsSection {...PARENT_NEWS_SECTION_MOCK} className={css.news} />
			<YandexMap title={YANDEX_MAP_TITLE} content={YANDEX_MAP_CONTENT} />
		</main>
	);
}
