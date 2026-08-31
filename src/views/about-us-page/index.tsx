import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import CompanyStatsSection from "@/widgets/company-stats-section";
import DescriptionSection from "@/widgets/description-section";
import OurWork from "@/widgets/our-work";
import StillQuestions from "@/widgets/still-questions";
import TitleDescriptionSlider from "@/widgets/title-description-slider";

import { OUR_WORK } from "../home-page/models/home-page.constants";

import css from "./index.module.css";
import {
	COMPANY_STATS_MOCK,
	FIRST_TITLE_DESCRIPTION_SLIDER,
	MOCK_DESCRIPTION_SECTION,
	SECOND_TITLE_DESCRIPTION_SLIDER,
	STILL_QUESTIONS_MOCK,
	THIRD_TITLE_DESCRIPTION_SLIDER,
} from "./models/about-us.constants";

export default function AboutUsPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>О&nbsp;клинике</h1>
			</AnimationWrapper>
			<DescriptionSection
				className={css.description}
				{...MOCK_DESCRIPTION_SECTION}
			/>
			<TitleDescriptionSlider
				{...FIRST_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				textBlockPosition="right"
				{...SECOND_TITLE_DESCRIPTION_SLIDER}
				className={css.slider}
			/>
			<TitleDescriptionSlider
				{...THIRD_TITLE_DESCRIPTION_SLIDER}
				className={css.lastSlider}
			/>
			<OurWork className={css.ourWork} {...OUR_WORK} />
			<CompanyStatsSection
				className={css.companyStats}
				{...COMPANY_STATS_MOCK}
			/>
			<StillQuestions
				{...STILL_QUESTIONS_MOCK}
				className={css.stillQuestions}
			/>
		</main>
	);
}
