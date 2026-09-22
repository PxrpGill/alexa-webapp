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
			src: "/mock/vacancies/hero-desktop.webp",
			mobile: "/mock/vacancies/hero-mobile.webp",
		},
	},
};
