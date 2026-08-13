import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import ErrorFallback from "@/widgets/error-fallback";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import { ERROR_FALLBACK_CONFIG } from "./models/error-page.types";
import type { ErrorPageProps } from "./types/error-page.types";

export default function ErrorPage({ status }: ErrorPageProps) {
	return (
		<main className={css.root}>
			<ErrorFallback {...ERROR_FALLBACK_CONFIG[status]} className={css.error} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
