export const LANDYSHEVAYA_NAVIGATION = {
	landyshevayaBase: "/",
	landyshevayaServices: {
		"konsultaciya-stomatologa": "/landyshevaya/konsultaciya-stomatologa",
		"ortodontiya-vz": "/landyshevaya/ortodontiya-vz",
		"gigiena-i-profilaktika-vz": "/landyshevaya/gigiena-i-profilaktika-vz",
		"lechenie-vo-sne-vz": "/landyshevaya/lechenie-vo-sne-vz",
		"terapiya-vz": "/landyshevaya/terapiya-vz",
		parodontologiya: "/landyshevaya/parodontologiya",
		"hirurgiya-i-implantaciya": "/landyshevaya/hirurgiya-i-implantaciya",
		gnatologiya: "/landyshevaya/gnatologiya",
		"ortopediya-vz": "/landyshevaya/ortopediya-vz",
		"konsultaciya-detskogo-stomatologa":
			"/landyshevaya/konsultaciya-detskogo-stomatologa",
		"detskaya-hirurgiya": "/landyshevaya/detskaya-hirurgiya",
		"gigiena-i-profilaktika": "/landyshevaya/gigiena-i-profilaktika",
		ortodontiya: "/landyshevaya/ortodontiya",
		"detskaya-terapiya": "/landyshevaya/detskaya-terapiya",
		"lechenie-vo-sne": "/landyshevaya/lechenie-vo-sne",
	},
};

export const VOLKOVA_NAVIGATION = {
	volkovaBase: "/volkova",
};

export const INFORMATION_NAVIGATION = {
	price: "/price",
	"nadzornye-organy": "/nadzornye-organy",
	"o-klinike": "/o-klinike",
	rekvizity: "/rekvizity",
	vrachi: "/vrachi",
	vakansii: "/vakansii",
	raspisanievrachej: "/raspisanievrachej",
	akcii: "/akcii",
	"dokumenty-i-licenzii": "/dokumenty-i-licenzii",
	dms: "/dms",
	pacientu: "/pacientu",
	nalogovyjvychet: "/nalogovyjvychet",
	blog: "/blog",
	privacyPolicy: "/privacy",
	userAgreement: "/personal-data",
	letter: "/letter",
	pravilaokazaniyamedicinskihuslug: "/pravilaokazaniyamedicinskihuslug",
	pravilavneseniyaoplatyzamedicinskieuslugi:
		"/pravilavneseniyaoplatyzamedicinskieuslugi",
};

export const SITE_NAVIGATION = {
	...LANDYSHEVAYA_NAVIGATION,
	...VOLKOVA_NAVIGATION,
	...INFORMATION_NAVIGATION,
} as const;
