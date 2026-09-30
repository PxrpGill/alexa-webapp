import DetailsSection from "@/widgets/details-section";

import { DETAILS_SECTION_MOCK } from "./models/details-page.constants";

export default function DetailsPage() {
	return (
		<main className="page-offset">
			<DetailsSection {...DETAILS_SECTION_MOCK} className="section" />
		</main>
	);
}
