import { getAllPromotions } from "@/entities/promotion/api/get-all-promotions";
import { PromotionPageProvider } from "@/entities/promotion/models/promotion-page-context";
import PromotionsPage from "@/views/promotions-page";

export const revalidate = 60;

export default async function Promotions() {
	const initialPromotions = await getAllPromotions();

	return (
		<PromotionPageProvider>
			<PromotionsPage initialPromotions={initialPromotions} />
		</PromotionPageProvider>
	);
}
