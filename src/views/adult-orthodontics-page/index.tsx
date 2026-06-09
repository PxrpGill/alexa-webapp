import HealthForFamily from "@/widgets/health-for-family";
import TitleDescriptionSlider from "@/widgets/title-description-slider";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	FIRST_TITLE_DESCRIPTION_SLIDER,
	FOURTH_TITLE_DESCRIPTION_SLIDER,
	HEALTH_FOR_FAMILY_MOCK,
	HERO_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/adult-orthodontics.constants";
import HeroSection from "./ui/hero-section";

export default function AdultOrthodonticsPage() {
	return (
		<main className={css.root}>
			<HeroSection {...HERO_SECTION} className={css.hero} />
			<HealthForFamily {...HEALTH_FOR_FAMILY_MOCK} className={css.family} />
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
			<TitleDescriptionSlider
				{...FOURTH_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
				textBlockPosition="right"
			/>
			<YandexMap />
		</main>
	);
}
