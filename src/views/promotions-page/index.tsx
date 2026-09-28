import PromotionModal from "@/features/promotion-modal";
import PromotionsSection from "@/widgets/promotions-section";
import css from "./index.module.css";
import { PROMOTION_HERO_DATA } from "./models/promotions.constants";
import type { PromotionsPageProps } from "./types/promotions-page.types";
import PromotionHero from "./ui/promotion-hero";

export default function PromotionsPage({
	initialPromotions,
}: PromotionsPageProps) {
	return (
		<main className={css.root}>
			<PromotionHero className={css.hero} {...PROMOTION_HERO_DATA} />
			<PromotionsSection className={css.promotions} cards={initialPromotions} />
			<PromotionModal />
		</main>
	);
}
