import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
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
