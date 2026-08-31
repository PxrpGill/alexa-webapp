import DetailsSection from "@/widgets/details-section";

import css from "./index.module.css";
import { DETAILS_SECTION_MOCK } from "./models/details-page.constants";

export default function DetailsPage() {
	return (
		<main className={css.root}>
			<DetailsSection {...DETAILS_SECTION_MOCK} className={css.details} />
		</main>
	);
}
