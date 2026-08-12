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

export const CHILD_STOM_NAV: SiteLinkProps[] = [
	{
		title: "Консультация детского стоматолога",
		href: SITE_NAVIGATION.landyshevayaServices[
			"konsultaciya-detskogo-stomatologa"
		],
	},
	{
		title: "Гигиена и&nbsp;Профилактика",
		href: SITE_NAVIGATION.landyshevayaServices["gigiena-i-profilaktika"],
	},
	{
		title: "Терапия",
		href: SITE_NAVIGATION.landyshevayaServices["detskaya-terapiya"],
	},
	{
		title: "Хирургия",
		href: SITE_NAVIGATION.landyshevayaServices["detskaya-hirurgiya"],
	},
	{
		title: "Ортодонтия",
		href: SITE_NAVIGATION.landyshevayaServices.ortodontiya,
	},
	{
		title: "Лечение &laquo;во&nbsp;сне&raquo;",
		href: SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne"],
	},
];

export const ADULT_STOM_NAV: SiteLinkProps[] = [
	{
		title: "Консультация стоматолога",
		href: SITE_NAVIGATION.landyshevayaServices["konsultaciya-stomatologa"],
	},
	{
		title: "Гигиена и&nbsp;профилактика",
		href: SITE_NAVIGATION.landyshevayaServices["gigiena-i-profilaktika-vz"],
	},
	{
		title: "Хирургия и&nbsp;имплантация",
		href: SITE_NAVIGATION.landyshevayaServices["hirurgiya-i-implantaciya"],
	},
	{
		title: "Терапия",
		href: SITE_NAVIGATION.landyshevayaServices["terapiya-vz"],
	},
	{
		title: "Ортодонтия",
		href: SITE_NAVIGATION.landyshevayaServices["ortodontiya-vz"],
	},
	{
		title: "Ортопедия",
		href: SITE_NAVIGATION.landyshevayaServices["ortopediya-vz"],
	},
	{
		title: "Лечение &laquo;во&nbsp;сне&raquo;",
		href: SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne-vz"],
	},
	{
		title: "Пародонтология",
		href: SITE_NAVIGATION.landyshevayaServices.parodontologiya,
	},
	{
		title: "Гнатология",
		href: SITE_NAVIGATION.landyshevayaServices.gnatologiya,
	},
];

export const STOM_INFO: SiteLinkProps[] = [
	{
		title: "О&nbsp;клинике",
		href: SITE_NAVIGATION["o-klinike"],
	},
	{
		title: "Прейскурант",
		href: SITE_NAVIGATION.price,
	},
	{
		title: "Врачи",
		href: SITE_NAVIGATION.vrachi,
	},
	{
		title: "Документы и&nbsp;лицензии",
		href: SITE_NAVIGATION["dokumenty-i-licenzii"],
	},
	{
		title: "Пациенту",
		href: SITE_NAVIGATION.pacientu,
	},
	{
		title: "Надзорные органы",
		href: SITE_NAVIGATION["nadzornye-organy"],
	},
	{
		title: "Реквизиты",
		href: SITE_NAVIGATION.rekvizity,
	},
	{
		title: "Вакансии",
		href: SITE_NAVIGATION.vakansii,
	},
	{
		title: "Акции",
		href: SITE_NAVIGATION.akcii,
	},
];
