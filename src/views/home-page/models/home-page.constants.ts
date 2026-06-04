import type { CtaSectionProps } from "@/widgets/cta-section/types/cta-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";

export const CTA_MOCK: CtaSectionProps = {
	poster: {
		webp: {
			src: "/mock/home/cta/desktop.webp",
		},
	},
	title: "Кураторы рядом на&nbsp;каждом этапе лечения",
	content:
		"<p>Мы&nbsp;понимаем, что лечение это всегда волнение и&nbsp;множество вопросов</p><p>Поэтому вас сопровождает персональный куратор: подскажет вам, напомнит о&nbsp;приёме, поможет с&nbsp;организацией и&nbsp;всегда будет на&nbsp;связи</p>",
	description: {
		text: "Мы&nbsp;рядом, чтобы лечение проходило спокойно, понятно и&nbsp;без лишнего стресса",
		icon: "/icons/mini-logo.svg",
	},
};

export const DESCRIPTION_SECTION: DescriptionSectionProps = {
	title: "Улыбка. Забота. Комфорт.<br /> Все&nbsp;&mdash; в&nbsp;одном месте",
	description: "Более 9000 человек стали нашими постоянными пациентами",
};
