/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import DocumentBlock from "@/shared/ui/document-block";
import DocumentHero from "@/widgets/document-hero";
import css from "./index.module.css";
import {
	DOCUMENT_BLOCKS,
	DOCUMENT_HERO_MOCK,
} from "./models/rules-for-payment-for-medical-services.constants";

export default function RulesforPaymentforMedicalServicesPage() {
	return (
		<main className={css.root}>
			<DocumentHero {...DOCUMENT_HERO_MOCK} />
			<div className={`${css.content} container`}>
				{DOCUMENT_BLOCKS.map((documentBlock, index) => (
					<DocumentBlock {...documentBlock} key={index} />
				))}
			</div>
		</main>
	);
}
