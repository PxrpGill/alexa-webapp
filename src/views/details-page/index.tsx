import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import DetailsSection from "@/widgets/details-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import { DETAILS_SECTION_MOCK } from "./models/details-page.constants";

export default function DetailsPage() {
	return (
		<main className={css.root}>
			<DetailsSection {...DETAILS_SECTION_MOCK} className={css.details} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
