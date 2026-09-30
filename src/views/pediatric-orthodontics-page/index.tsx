import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import HealthForFamily from "@/widgets/health-for-family";
import HeroSlide from "@/widgets/hero-slider-section/ui/hero-slide";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

import css from "./index.module.css";
import {
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	HEALTH_FOR_FAMILY_MOCK,
	HERO_MOCK,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/pediatric-orthodontics.constants";

export default function PediatricOrthodonticsPage() {
	return (
		<main className="page-offset">
			<AnimationWrapper as="section" className={`${css.hero} section container`}>
				<HeroSlide {...HERO_MOCK} className={css.heroContent} />
			</AnimationWrapper>
			<HealthForFamily {...HEALTH_FOR_FAMILY_MOCK} className="section" />
			<TitleDescriptionSlider
				className="section-sm"
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				className="section-sm"
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
			/>
			<TitleDescriptionSlider
				className="section-sm"
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				className="section"
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
			/>
		</main>
	);
}
