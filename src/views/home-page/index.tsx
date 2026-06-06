import CtaSection from "@/widgets/cta-section";
import DescriptionSection from "@/widgets/description-section";
import FaqSection from "@/widgets/faq-section";
import HealthForFamily from "@/widgets/health-for-family";
import HeroSliderSection from "@/widgets/hero-slider-section";
import ParentNewsSection from "@/widgets/parent-news-section";
import StillQuestions from "@/widgets/still-questions";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import css from "./index.module.css";
import {
	CTA_MOCK,
	DESCRIPTION_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	HEALTH_FOR_FAMILY,
	MOCK_FAQ_SECTION,
	PARENT_NEWS_SECTION_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	STILL_QUESTIONS,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main className={css.root}>
			<HeroSliderSection />
			<CtaSection {...CTA_MOCK} className={css.cta} />
			<DescriptionSection
				{...DESCRIPTION_SECTION}
				className={css.description}
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
			<HealthForFamily {...HEALTH_FOR_FAMILY} className={css.family} />
			<FaqSection {...MOCK_FAQ_SECTION} className={css.faqs} />
			<StillQuestions {...STILL_QUESTIONS} className={css.questions} />
			<ParentNewsSection
				{...PARENT_NEWS_SECTION_MOCK}
				className={css.parentNews}
			/>
		</main>
	);
}
