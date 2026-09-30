import PromotionModal from "@/features/promotion-modal";
import PromotionsSection from "@/widgets/promotions-section";
import { PROMOTION_HERO_DATA } from "./models/promotions.constants";
import type { PromotionsPageProps } from "./types/promotions-page.types";
import PromotionHero from "./ui/promotion-hero";

export default function PromotionsPage({
	initialPromotions,
}: PromotionsPageProps) {
	return (
		<main className="page-offset">
			<PromotionHero className="section" {...PROMOTION_HERO_DATA} />
			<PromotionsSection className="section" cards={initialPromotions} />
			<PromotionModal />
		</main>
	);
}
