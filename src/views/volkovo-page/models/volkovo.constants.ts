import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import type { AnnualCareProgramsProps } from "@/widgets/annual-care-programs/types/annual-care-programs.types";
import type { PreventionSectionProps } from "@/widgets/prevention-section/types/prevention-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { SolutionsSectionProps } from "@/widgets/solutions-section/types/solutions-section.types";
import type { StomatologyProgramProps } from "@/widgets/stomatology-program/types/stomatology-program.types";
import type { CtaGreenProps } from "../types/cta-green.types";

export const GREEN_CTA: CtaGreenProps = {
	title:
		"Регулярный контроль состояния зубов, профессиональная гигиена и&nbsp;профилактика помогают сохранять здоровье полости рта и&nbsp;уверенность в&nbsp;улыбке каждый день.",
};

export const QAUDRO_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Здоровая улыбка начинается с&nbsp;заботы о&nbsp;себе",
		card: {
			title:
				"Наша клиника предлагает комплексный подход, который защитит вас от&nbsp;боли и&nbsp;лишних трат.",
		},
		poster: {
			webp: {
				src: "/mock/volkovo/volkovo-hero.webp",
			},
		},
	},
};

export const FORM_DATA: AppointmentSchedulingProps = {
	title: "Запись на&nbsp;приём",
	description:
		"Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время",
	poster: {
		webp: {
			src: "/system/form.webp",
		},
	},
};

export const STOMATOLOGY_PROGRAM: StomatologyProgramProps = {
	sectionHeader: {
		title: "Программа стоматологического здоровья",
		description: "Ваш персональный маршрут профилактик",
	},
	ctaBlock: {
		title:
			"На&nbsp;основе диагностики формируется индивидуальный план сохранения здоровья зубов на&nbsp;год.",
		button: {
			title: "Записаться на приём",
			href: "#form",
		},
	},
	descriptionBlock: {
		title: "После первичного осмотра врач оценивает:",
		content:
			"<ul><li>риск развития кариеса;</li><li>качество домашней гигиены;</li><li>состояние дёсен;</li><li>наличие факторов риска;</li><li>необходимую периодичность наблюдения.</li></ul>",
	},
	poster: {
		original: {
			src: "/mock/volkovo/instruments.png",
		},
	},
};

export const ANNUAL_CARE_SECTION_MOCK: AnnualCareProgramsProps = {
	sectionHeader: {
		title: "Сопровождение на&nbsp;протяжении года",
		description:
			"Поддерживайте здоровье зубов и&nbsp;дёсен под контролем с&nbsp;нашими программами регулярной профилактики.",
	},
	programs: [
		{
			title: "Программа<br /> &laquo;Базовая профилактика&raquo;",
			description:
				"Идеально для пациентов с&nbsp;низким риском развития кариеса.",
			period: "year",
			poster: {
				webp: {
					src: "/mock/volkovo/program-poster.webp",
				},
			},
			list: [
				"2&nbsp;профессиональные гигиены в&nbsp;год",
				"2&nbsp;профилактических осмотра стоматолога-терапевта",
				"Фотопротокол (наглядная динамика состояния зубов)",
				"Подбор индивидуальных средств домашнего ухода",
				"Заботливые напоминания о&nbsp;необходимости визита от&nbsp;вашего куратора",
			],
			button: {
				href: "#form",
				title: "Записаться на приём",
			},
			price: 150_000,
		},
		{
			title: "Программа<br /> &laquo;Под контролем&raquo;",
			description:
				"Рекомендуется при склонности к&nbsp;кариесу, наличии коронок/имплантов или чувствительности десен",
			period: "year",
			poster: {
				original: {
					src: "/mock/volkovo/program-poster-1.png",
				},
			},
			list: [
				"3-4 профессиональные гигиены в&nbsp;год",
				"регулярные профилактические осмотры",
				"контроль состояния десен",
				"реминерализующая терапия по&nbsp;показаниям",
				"индивидуальный план профилактики",
				"напоминания о&nbsp;визитах",
			],
			button: {
				href: "#form",
				title: "Записаться на приём",
			},
			price: 150_000,
		},
	],
};

export const PREVENTION_SECTION: PreventionSectionProps = {
	sectionHeader: {
		title:
			"90% стоматологических проблем можно обнаружить до&nbsp;появления боли.",
	},
	content:
		"<p>Большинство стоматологий помогают решить проблему. Мы&nbsp;помогаем не&nbsp;допустить её&nbsp;появления.</p><br /><p>Наша задача&nbsp;&mdash; выявить изменения на&nbsp;ранних стадиях и&nbsp;сохранить ваши зубы здоровыми без сложного лечения.</p>",
};

export const SOLUTIONS_SECTION_MOCK: SolutionsSectionProps = {
	sectionHeader: {
		title: "С&nbsp;каким запросом вы&nbsp;пришли сегодня?",
		description:
			"Каждая услуга решает конкретную проблему. Найдите свою и&nbsp;начните путь к&nbsp;здоровым зубам",
	},
	cards: [
		{
			title: "Пародонтология",
			description: "Лечение воспаления дёсен и&nbsp;кровоточивости",
			href: "#form",
			poster: {
				webp: {
					src: "/mock/volkovo/services/1.webp",
				},
			},
		},
		{
			title: "Профессиональная гигиена",
			description:
				"Глубокая чистка и&nbsp;полировка для здоровых и&nbsp;чистых зубов",
			href: "#form",
			poster: {
				webp: {
					src: "/mock/volkovo/services/2.webp",
				},
			},
		},
		{
			title: "Лечение начального кариеса",
			description: "Лечение воспаления дёсен и&nbsp;кровоточивости",
			href: "#form",
			poster: {
				webp: {
					src: "/mock/volkovo/services/3.webp",
				},
			},
		},
		{
			title: "Отбеливание",
			description:
				"Глубокая чистка и&nbsp;полировка для здоровых и&nbsp;чистых зубов",
			href: "#form",
			poster: {
				webp: {
					src: "/mock/volkovo/services/4.webp",
				},
			},
		},
	],
};
