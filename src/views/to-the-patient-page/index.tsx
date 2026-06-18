import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";

export default function ToThePatientPage() {
	return (
		<main className={css.root}>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
