import PriceSection from "@/widgets/price-section";

import { PRICE_SECTION_MOCK } from "./models/price-page.constants";

export default function PricePage() {
	return (
		<main className="page-offset">
			<PriceSection {...PRICE_SECTION_MOCK} className="section" />
		</main>
	);
}
