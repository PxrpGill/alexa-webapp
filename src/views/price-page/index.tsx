import PriceSection from "@/widgets/price-section";

import css from "./index.module.css";
import { PRICE_SECTION_MOCK } from "./models/price-page.constants";

export default function PricePage() {
	return (
		<main className={css.root}>
			<PriceSection {...PRICE_SECTION_MOCK} className={css.priceSection} />
		</main>
	);
}
