/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import DocumentBlock from "@/shared/ui/document-block";
import DocumentHero from "@/widgets/document-hero";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	DOCUMENT_BLOCKS,
	DOCUMENT_HERO_MOCK,
} from "./models/user-agreement";

export default function UserAgreementPage() {
	return (
		<main className={css.root}>
			<DocumentHero {...DOCUMENT_HERO_MOCK} />
			<div className={`${css.content} container`}>
				{DOCUMENT_BLOCKS.map((documentBlock, index) => (
					<DocumentBlock {...documentBlock} key={index} />
				))}
			</div>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
