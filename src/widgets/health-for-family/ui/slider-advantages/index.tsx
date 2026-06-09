import TitleDescriptionSlider from "@/widgets/title-description-slider";
import type { SliderAdvantagesVariantType } from "../../types/health-for-family.types";
import AdvantagesSection from "../advantages-section";
import PriceCards from "../price-cards";
import StepperSection from "../stepper-section";
import css from "./index.module.css";

export default function SliderAdvantages({
	advantagesSection,
	slider,
	priceCards,
	stepper,
}: Omit<SliderAdvantagesVariantType, "type">) {
	return (
		<div className={css.root}>
			<TitleDescriptionSlider {...slider} className={css.slider} />
			<AdvantagesSection {...advantagesSection} className={css.advantages} />
			<PriceCards {...priceCards} className={css.priceCards} />
			<StepperSection {...stepper} className={css.stepper} />
		</div>
	);
}
