import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import DocumentsList from "@/widgets/documents-list";

import css from "./index.module.css";
import { DOCUMENTS_MOCK } from "./models/to-the-patient.constants";

export default function ToThePatientPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Пациенту</h1>
			</AnimationWrapper>
			<DocumentsList {...DOCUMENTS_MOCK} className={css.documents} />
		</main>
	);
}
