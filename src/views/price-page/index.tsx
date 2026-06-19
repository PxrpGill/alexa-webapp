import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import PriceSection from "@/widgets/price-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import { PRICE_SECTION_MOCK } from "./models/price-page.constants";

export default function PricePage() {
	return (
		<main className={css.root}>
			<PriceSection {...PRICE_SECTION_MOCK} className={css.priceSection} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
