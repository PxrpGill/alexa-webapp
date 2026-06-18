import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import FaqSection from "@/widgets/faq-section";
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
	QUADRO_SECTION_MOCK,
	TITLE_STICKY_SECTION_MOCK,
} from "./models/gnathology.constants";

export default function AdultGnathologyPage() {
	return (
		<main className={css.root}>
			<QuadroSection className={css.quadro} {...QUADRO_SECTION_MOCK} />
			<TitleStickySection
				className={css.stickyTitle}
				{...TITLE_STICKY_SECTION_MOCK}
			/>
			<OurWork {...OUR_WORK} className={css.ourWork} />
			<FaqSection {...MOCK_FAQ_SECTION} className={css.faq} />
			<ParentNewsSection {...PARENT_NEWS_SECTION_MOCK} className={css.news} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
