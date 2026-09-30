import ErrorFallback from "@/widgets/error-fallback";

import { ERROR_FALLBACK_CONFIG } from "./models/error-page.types";
import type { ErrorPageProps } from "./types/error-page.types";

export default function ErrorPage({ status }: ErrorPageProps) {
	return (
		<main className="page-offset">
			<ErrorFallback {...ERROR_FALLBACK_CONFIG[status]} className="section" />
		</main>
	);
}
