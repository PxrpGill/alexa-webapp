import CtaSection from "@/widgets/cta-section";
import DescriptionSection from "@/widgets/description-section";
import HeroSliderSection from "@/widgets/hero-slider-section";
import css from "./index.module.css";
import { CTA_MOCK, DESCRIPTION_SECTION } from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
			<HeroSliderSection />
			<CtaSection {...CTA_MOCK} className={css.cta} />
			<DescriptionSection
				{...DESCRIPTION_SECTION}
				className={css.description}
			/>
		</main>
	);
}
