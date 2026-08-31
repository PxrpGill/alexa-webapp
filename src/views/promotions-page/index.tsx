import PromotionModal from "@/features/promotion-modal";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import PromotionsSection from "@/widgets/promotions-section";
import css from "./index.module.css";
import type { PromotionsPageProps } from "./types/promotions-page.types";

export default function PromotionsPage({
	initialPromotions,
}: PromotionsPageProps) {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Акции</h1>
			</AnimationWrapper>
			<PromotionsSection className={css.promotions} cards={initialPromotions} />
			<PromotionModal />
		</main>
	);
}
