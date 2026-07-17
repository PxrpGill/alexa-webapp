import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
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
