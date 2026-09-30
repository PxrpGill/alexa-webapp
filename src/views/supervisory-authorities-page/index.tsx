import SupervisoryAuthoritiesSection from "@/widgets/supervisory-authorities-section";

import { SUPERVISORY_SECTION_MOCK } from "./models/supervisory-authorities.constants";

export default function SupervisoryAuthoritiesPage() {
	return (
		<main className="page-offset">
			<SupervisoryAuthoritiesSection
				{...SUPERVISORY_SECTION_MOCK}
				className="section"
			/>
		</main>
	);
}
