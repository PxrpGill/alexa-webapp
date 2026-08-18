import type { FaqSectionProps } from "@/widgets/faq-section/types/faq-section.types";
import type { StepperSectionProps } from "@/widgets/health-for-family/types/stepper-section.types";

import type { DMSInfoBlockProps } from "../ui/dms-info-block/types/dms-info-block.types";

export const DMS_INFO_BLOCK_MOCK: DMSInfoBlockProps = {
	title:
		"Наша клиника принимает пациентов по&nbsp;программам добровольного медицинского страхования (ДМС).<br /> Если у&nbsp;вас есть полис ДМС, вы&nbsp;можете получить качественную стоматологическую помощь бесплатно&nbsp;&mdash; за&nbsp;счет вашей страховой компании.",
};

export const FAQ_MOCK_SECTION_MOCK: FaqSectionProps = {
	title: "F.A.Q",
	cards: [
		{
			question: "Как пройти лечение по&nbsp;ДМС в&nbsp;&laquo;Алекса&raquo;?",
			answer:
				"<p>Процедура очень простая:</p><br /><ol><li>Свяжитесь с&nbsp;нашей клиникой по&nbsp;телефону или оставьте заявку</li><li>Расскажите, что у&nbsp;вас есть полис ДМС и&nbsp;какая компания его выдала</li><li>Мы&nbsp;свяжемся со&nbsp;страховой и&nbsp;уточним условия</li><li>Вы&nbsp;приходите на&nbsp;приём и&nbsp;получаете лечение, входящее в&nbsp;покрытие</li></ol><br /><p>Если потребуется согласование&nbsp;&mdash; мы&nbsp;поможем с&nbsp;оформлением необходимых документов.</p>",
		},
		{
			question: "Почему пациенты выбирают &laquo;Алекса&raquo;?",
			answer:
				"<ul><li>Работаем строго по&nbsp;договору с&nbsp;вашей страховой</li><li>Квалифицированные врачи с&nbsp;большим опытом</li><li>Современное оборудование и&nbsp;безопасные материалы</li><li>Собственная парковка для клиентов, игровая комната, зона отдыха</li><li>Забота и&nbsp;внимательное отношение к&nbsp;каждому пациенту</li></ul>",
		},
	],
};

export const STEPPER_SECTION_MOCK: StepperSectionProps = {
	title:
		"Перечень услуг зависит от&nbsp;условий конкретной страховой программы. Чаще всего в&nbsp;рамках полиса ДМС покрываются:",
	steps: [
		"Консультации стоматологов",
		"Лечение кариеса, пульпита, периодонтита",
		"Эстетические и&nbsp;функциональные пломбы",
		"Анестезия",
		"Снимки и&nbsp;диагностика",
		"Профессиональная гигиена полости рта (в&nbsp;некоторых случаях)",
	],
	priceCards: [
		{
			title: "Узнайте, какие услуги входят именно в&nbsp;ваш полис!",
			content:
				"<p>Просто оставьте заявку или позвоните нам&nbsp;&mdash; мы&nbsp;всё уточним напрямую со&nbsp;страховой.</p>",
			button: { title: "Оставить заявку", isOpenDMSModal: true },
		},
	],
};
