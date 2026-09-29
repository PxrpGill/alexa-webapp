import type { PromotionRequestSectionProps } from "@/features/promotion-request-section/types/promotion-request-section.types";

export const PROMOTION_REQUEST_SECTION: Omit<
	PromotionRequestSectionProps,
	"slug"
> = {
	title: "Запишитесь на&nbsp;приём",
	description:
		"Оставьте заявку, и&nbsp;наши администраторы свяжутся с&nbsp;вами, чтобы подобрать удобное время визита",
};
