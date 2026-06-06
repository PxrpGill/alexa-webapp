import CtaSection from "@/widgets/cta-section";
import DescriptionSection from "@/widgets/description-section";
import HealthForFamily from "@/widgets/health-for-family";
import HeroSliderSection from "@/widgets/hero-slider-section";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import css from "./index.module.css";
import {
	CTA_MOCK,
	DESCRIPTION_SECTION,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	HEALTH_FOR_FAMILY,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
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
			<HealthForFamily {...HEALTH_FOR_FAMILY} />
		</main>
	);
}
