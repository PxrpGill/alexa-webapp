import PromotionModal from "@/features/promotion-modal";
import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import PromotionsSection from "@/widgets/promotions-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import { PROMOTIONS_SECTION_MOCK } from "./models/promotions.constants";

export default function PromotionsPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Акции</h1>
			</AnimationWrapper>
			<PromotionsSection
				className={css.promotions}
				{...PROMOTIONS_SECTION_MOCK}
			/>
			<PromotionModal />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
