import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import DetailDocumentsSection from "@/widgets/detail-documents-section";

import css from "./index.module.css";
import { DOCUMENTS_AND_LICENSES } from "./models/documents-and-licenses.constants";

export default function DocumentsAndLicensesPage() {
	return (
		<main className="page-offset">
			<AnimationWrapper className={`${css.titleBlock} section-md container`}>
				<h1 className={css.title}>Документы и&nbsp;лицензии</h1>
			</AnimationWrapper>
			<DetailDocumentsSection
				className="section"
				{...DOCUMENTS_AND_LICENSES}
			/>
		</main>
	);
}
