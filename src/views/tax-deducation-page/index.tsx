import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import AlgorithmOfActions from "@/widgets/algorithm-of-actions";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import {
	ALGORITHM_OF_ACTIONS_MOCK,
	DESCRIPTION_SECTION_MOCK,
} from "./models/tax-deducation.constants";
import DescriptionCard from "./ui/description-card";

export default function TaxDeducationPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Налоговый вычет</h1>
			</AnimationWrapper>
			<DescriptionCard
				{...DESCRIPTION_SECTION_MOCK}
				className={css.description}
			/>
			<AlgorithmOfActions
				className={css.algorithm}
				{...ALGORITHM_OF_ACTIONS_MOCK}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
