import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		title: "Передовые решения в&nbsp;стоматологии",
		description: "Здоровье ваших зубов&nbsp;&mdash; наша миссия",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/adult-therapy/quadro.jpg",
			},
		},
	},
	cards: [
		"Избавиться от&nbsp;боли и&nbsp;дискомфорта.",
		"Сохранить зубы на&nbsp;долгие годы.",
	],
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;терапии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		"Хотите восстановить форму и&nbsp;функцию поврежденных зубов с&nbsp;помощью пломбирования или реставрации.",
		"Боитесь стоматологических процедур и&nbsp;желаете провести лечение под общим наркозом или седацией.",
		"Заметили потемнение эмали, дырку в&nbsp;зубе или чувствительность к&nbsp;холодному/горячему.",
		"Страдаете от&nbsp;боли в&nbsp;зубах, пульпит, периодонтит.",
	],
	lastCard: {
		poster: {
			original: {
				src: "/mock/sticky-title/title-sticky.jpg",
			},
		},
		buttonText: "Записаться на прием",
	},
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			icon: "/mock/adult-therapy/1-icon.svg",
			title: "Протезирование вкладками:",
			description:
				"Мы&nbsp;предлагаем различные варианты протезирования вкладками, чтобы восстановить форму и&nbsp;функцию ваших зубов.",
		},
		{
			icon: "/mock/adult-therapy/2-icon.svg",
			title: "Коффердам:",
			description:
				"Мы&nbsp;используем специальные латексные листы, которые предотвращают попадание слюны и&nbsp;других жидкостей в&nbsp;полость рта и&nbsp;обеспечивают высокое качество лечения.",
		},
		{
			icon: "/mock/adult-therapy/3-icon.svg",
			title: "Лечение кариеса, пульпита и&nbsp;периодонтита:",
			description:
				"Наши врачи проведут комплексное лечение с&nbsp;использованием современных материалов и&nbsp;технологий.",
		},
		{
			icon: "/mock/adult-therapy/4-icon.svg",
			title: "Лечение корневых каналов:",
			description:
				"Мы&nbsp;используем самые современные методы лечения корневых каналов, чтобы сохранить ваши зубы на&nbsp;долгие годы.",
		},
		{
			icon: "/mock/adult-therapy/5-icon.svg",
			title: "Пломбирование и&nbsp;реставрация:",
			description:
				"Мы&nbsp;используем высококачественные пломбировочные материалы, которые отличаются прочностью и&nbsp;эстетичностью",
		},
		{
			icon: "/mock/adult-therapy/6-icon.svg",
			title:
				'Специальные кресла KaVo ESTETICA<sup class="reg">&reg;</sup> E30&nbsp;S:',
			description:
				"Наши установки обеспечивают комфорт и&nbsp;точность в&nbsp;процессе лечения.",
		},
		{
			icon: "/mock/adult-therapy/7-icon.svg",
			title: "Современные методы анестезии:",
			description:
				"Мы&nbsp;используем аппликационную и&nbsp;инфильтрационную анестезию, чтобы сделать процесс лечения полностью безболезненным.",
		},
		{
			icon: "/mock/adult-therapy/8-icon.svg",
			title: "Общий наркоз или седация:",
			description:
				"Для пациентов с&nbsp;низким болевым пороком, боязнью стоматологических манипуляций или аллергией на&nbsp;местные анестетики мы&nbsp;предлагаем лечение под общим наркозом или седацией.",
		},
		{
			icon: "/mock/adult-therapy/9-icon.svg",
			title: "Терапия только на&nbsp;микроскопе:",
			description:
				"С&nbsp;использованием стоматологического операционного микроскопа Leica M320 (комплектация Hi-End), который соединил в&nbsp;себе оптику превосходного качества с&nbsp;новым светодиодным освещением и&nbsp;технологией HD-документации.",
		},
	],
};
