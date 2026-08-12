import { PromotionPageProvider } from "@/entities/promotion/models/promotion-page-context";
import PromotionsPage from "@/views/promotions-page";

export const revalidate = 60;

export default function Promotions() {
	return (
		<PromotionPageProvider>
			<PromotionsPage />
		</PromotionPageProvider>
	);
}
