import SupervisoryAuthoritiesSection from "@/widgets/supervisory-authorities-section";

import css from "./index.module.css";
import { SUPERVISORY_SECTION_MOCK } from "./models/supervisory-authorities.constants";

export default function SupervisoryAuthoritiesPage() {
	return (
		<main className={css.root}>
			<SupervisoryAuthoritiesSection
				{...SUPERVISORY_SECTION_MOCK}
				className={css.supervisory}
			/>
		</main>
	);
}
