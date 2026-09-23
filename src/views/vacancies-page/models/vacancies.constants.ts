import type { SaitableVacanciesSectionProps } from "@/features/saitable-vacancy-section/types/saitable-vacancy.types";
import type { NotAvailableVacanicesProps } from "../types/not-available-vacancies.types";
import type { VacanciesHeroProps } from "../types/vacancies-hero.types";

export const NOT_AVAILABLE_VACANCIES: NotAvailableVacanicesProps = {
	title: "Сейчас открытых вакансий нет",
	description:
		"Сейчас мы&nbsp;не&nbsp;ищем новых сотрудников, но&nbsp;будем рады познакомиться с&nbsp;вами.<br /> Оставьте заявку&nbsp;&mdash; мы&nbsp;свяжемся с&nbsp;вами, когда появится подходящая возможность.",
};

export const VACANCIES_HERO: VacanciesHeroProps = {
	title: "Хотите стать частью команды? Давайте работать вместе!",
	description:
		"Оставьте свои контактные данные&nbsp;&mdash; мы&nbsp;свяжемся с&nbsp;вами, чтобы обсудить вакансию и&nbsp;ответить на&nbsp;ваши вопросы.",
	poster: {
		webp: {
			src: "/mock/vacancies/hero-desktop-1.webp",
			mobile: "/mock/vacancies/hero-mobile.webp",
		},
	},
};

export const SAITABLE_VACANCY: SaitableVacanciesSectionProps = {
	title: "Не&nbsp;нашли подходящую вакансию?",
	description:
		"Всё равно оставьте заявку&nbsp;&mdash; возможно, скоро у&nbsp;нас появится позиция, которая вам подойдёт.",
	poster: {
		webp: {
			src: "/system/saitable-form/banner.webp",
		},
	},
};

export const VACANCIES_MAGAZINE_HEADER = {
	title: "Открытые вакансии",
	description:
		"Присоединяйтесь к&nbsp;команде, которая заботится о&nbsp;пациентах каждый день&nbsp;&mdash; от&nbsp;первого приёма до&nbsp;последнего визита.",
};
