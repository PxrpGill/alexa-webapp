import CtaSection from "@/widgets/cta-section";
import DescriptionSection from "@/widgets/description-section";
import FaqSection from "@/widgets/faq-section";
import HealthForFamily from "@/widgets/health-for-family";
import HeroSliderSection from "@/widgets/hero-slider-section";
import OurWork from "@/widgets/our-work";
import ParentNewsSection from "@/widgets/parent-news-section";
import StillQuestions from "@/widgets/still-questions";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import css from "./index.module.css";
import {
	CTA_MOCK,
	DESCRIPTION_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	HEALTH_FOR_FAMILY,
	HERO_SLIDES,
	MOCK_FAQ_SECTION,
	OUR_WORK,
	PARENT_NEWS_SECTION_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	STILL_QUESTIONS,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/home-page.constants";
import type { HomePageProps } from "./types/home-page.types";

export default function HomePage({ initialNewsData }: HomePageProps) {
	return (
		<main className="page-offset">
			<HeroSliderSection className="section" {...HERO_SLIDES} />
			<CtaSection {...CTA_MOCK} className="section" />
			<DescriptionSection {...DESCRIPTION_SECTION} className="section" />
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
				className="section"
			/>
			<HealthForFamily {...HEALTH_FOR_FAMILY} className="section" />
			<OurWork className="section" {...OUR_WORK} />
			<FaqSection {...MOCK_FAQ_SECTION} className="section" />
			<StillQuestions {...STILL_QUESTIONS} className="section" />
			<ParentNewsSection
				{...{ ...PARENT_NEWS_SECTION_MOCK, news: initialNewsData }}
				className="section"
			/>
		</main>
	);
}
