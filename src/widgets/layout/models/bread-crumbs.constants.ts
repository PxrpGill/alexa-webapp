import { SITE_NAVIGATION } from "@/shared/config/site-navigation";

export const BREAD_CRUMBS_SEGMENTS = new Map<string, string>([
	[
		SITE_NAVIGATION.landyshevayaServices["detskaya-hirurgiya"].slice(14),
		"Детская хирургия",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["detskaya-terapiya"].slice(14),
		"Детская терапия",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["gigiena-i-profilaktika"].slice(14),
		"Детская гигиена и&nbsp;профилактика",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["gigiena-i-profilaktika-vz"].slice(14),
		"Взрослая гигиена и&nbsp;профилактика",
	],
	[SITE_NAVIGATION.landyshevayaServices["gnatologiya"].slice(14), "Гнатология"],
	[
		SITE_NAVIGATION.landyshevayaServices["hirurgiya-i-implantaciya"].slice(14),
		"Хирургия и&nbsp;имплантация",
	],
	[
		SITE_NAVIGATION.landyshevayaServices[
			"konsultaciya-detskogo-stomatologa"
		].slice(14),
		"Консультация детского стоматолога",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["konsultaciya-stomatologa"].slice(14),
		"Консультация взрослого стоматолога",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne"].slice(14),
		"Детское лечение во&nbsp;сне",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne-vz"].slice(14),
		"Взрослое лечение во&nbsp;сне",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["ortodontiya"].slice(14),
		"Детская ортодонтия",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["ortodontiya-vz"].slice(14),
		"Взрослая ортодония",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["ortopediya-vz"].slice(14),
		"Ортопедия",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["parodontologiya"].slice(14),
		"Пародонтология",
	],
	[
		SITE_NAVIGATION.landyshevayaServices["terapiya-vz"].slice(14),
		"Взрослая терапия",
	],
	[SITE_NAVIGATION.akcii.slice(1), "Акции"],
	[SITE_NAVIGATION.blog.slice(1), "Блог"],
	[SITE_NAVIGATION.dms.slice(1), "ДМС"],
	[SITE_NAVIGATION["dokumenty-i-licenzii"].slice(1), "Документы и лицензии"],
	[SITE_NAVIGATION["nadzornye-organy"].slice(1), "Надзорные органы"],
	[SITE_NAVIGATION.nalogovyjvychet.slice(1), "Налоговый вычет"],
	[SITE_NAVIGATION["o-klinike"].slice(1), "О&nbsp;клинике"],
	[SITE_NAVIGATION.price.slice(1), "Прейскурант"],
	[
		SITE_NAVIGATION["dokumenty-i-licenzii"].slice(1),
		"Документы и&nbsp;лицензии",
	],
	[SITE_NAVIGATION.rekvizity.slice(1), "Реквизиты"],
	[SITE_NAVIGATION.vrachi.slice(1), "Врачи"],
	[SITE_NAVIGATION.vakansii.slice(1), "Вакансии"],
	[SITE_NAVIGATION.raspisanievrachej.slice(1), "Расписание врачей"],
	[SITE_NAVIGATION.pacientu.slice(1), "Пациенту"],
]);
