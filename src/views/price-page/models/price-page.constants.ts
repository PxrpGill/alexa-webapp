import type { PriceSectionProps } from "@/widgets/price-section/types/price-section.types";

export const PRICE_SECTION_MOCK: PriceSectionProps = {
	sectionHeader: {
		title: "Прейскурант",
	},
	controls: {
		title: "Филиал клиники",
		branchTabs: [
			{
				title: "Поселок Янтарный, Ландышевая 104",
				slug: "landyshevaya-104",
			},
			{
				title: "Ростов-на-Дону, Волкова 22",
				slug: "volkova-22",
			},
		],
		filters: {
			"landyshevaya-104": [
				{ title: "Все", slug: "all" },
				{ title: "Анестезиология", slug: "anesteziologiya" },
				{ title: "Детская стоматология", slug: "detskaya-stomatologiya" },
				{ title: "Имплантация", slug: "implantatsiya" },
				{ title: "Лечение под микроскопом", slug: "lechenie-pod-mikroskopom" },
				{ title: "Ортодонтия", slug: "ortodontiya" },
				{ title: "Ортопедия", slug: "ortopediya" },
				{ title: "Хирургия", slug: "khirurgiya" },
				{ title: "Терапия", slug: "terapiya" },
				{
					title: "Пародонтологическая помощь",
					slug: "parodontologicheskaya-pomoshch",
				},
				{
					title: "Профессиональная гигиена полости рта",
					slug: "professionalnaya-gigiena-polosti-rta",
				},

				{ title: "Рентгенология", slug: "rentgenologiya" },

				{ title: "Продукция", slug: "produktsiya" },
			],
			"volkova-22": [
				{ title: "Все", slug: "all" },
				{ title: "Терапия", slug: "terapiya" },
				{
					title: "Профессиональная гигиена полости рта",
					slug: "professionalnaya-gigiena-polosti-rta",
				},
				{ title: "Пародонтология", slug: "parodontologia" },
			],
		},
	},
};
