import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import QuadroSection from "@/widgets/quadro-section";
import StillQuestions from "@/widgets/still-questions";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICKWORK_SECTION_MOCK,
	HERO_MOCK,
	STILL_QUESTION_MOCK,
	TITLE_STICKY_SECTION_MOCK,
} from "./models/surgery-and-implantation.constants";

export default function SurgeryAndImplantationPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...HERO_MOCK} className={css.hero} />
			<TitleStickySection
				{...TITLE_STICKY_SECTION_MOCK}
				className={css.titleSticky}
			/>
			<StillQuestions {...STILL_QUESTION_MOCK} className={css.stillQuestions} />
			<BrickworkSection className={css.brickwork} {...BRICKWORK_SECTION_MOCK} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
