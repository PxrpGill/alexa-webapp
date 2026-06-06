import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { SiteLinkProps } from "@/shared/types/button.types";

export const FOOTER_DOCUMENTS_NAVIGATION: SiteLinkProps[] = [
	{
		title: "Политика конфиденциальности",
		href: SITE_NAVIGATION.privacyPolicy,
	},
	{
		title: "Согласие на&nbsp;обработку персональных данных",
		href: SITE_NAVIGATION.userAgreement,
	},
	{
		title:
			"Согласие на&nbsp;получение рассылки рекламно-информационных материалов",
		href: SITE_NAVIGATION.letter,
	},
	{
		title: "Правила оказания медицинских услуг",
		href: SITE_NAVIGATION.pravilaokazaniyamedicinskihuslug,
	},
	{
		title: "Правила внесения оплаты за&nbsp;медицинские услуги",
		href: SITE_NAVIGATION.pravilavneseniyaoplatyzamedicinskieuslugi,
	},
];
