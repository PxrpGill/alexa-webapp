import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import { RULES_FOR_THE_PROVISION } from "./models/rules-for-the-provision.constants";
import RulesForTheProvision from "./ui/rules-for-the-provision";

export default function RulesForTheProvisionOfMedicalServicesPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Правила оказания медицинских услуг</h1>
			</AnimationWrapper>
			<RulesForTheProvision
				{...RULES_FOR_THE_PROVISION}
				className={css.rules}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
