import type { AlgorithmOfActionsProps } from "@/widgets/algorithm-of-actions/types/algorithm-of-actions.types";
import type { DescriptionCardProps } from "../types/tax-deducation.types";

export const DESCRIPTION_SECTION_MOCK: DescriptionCardProps = {
	title:
		"Вы&nbsp;можете оформить налоговый вычет за&nbsp;лечение, полученное в&nbsp;нашей клинике.<br /> Мы&nbsp;постарались сделать этот процесс максимально удобным для вас.",
};

export const ALGORITHM_OF_ACTIONS_MOCK: AlgorithmOfActionsProps = {
	title: "Алгоритм действий:",
	steps: [
		{
			title: "Заполните заявление",
			content:
				"<p>Скачайте и&nbsp;заполните документ, который прикреплен ниже на&nbsp;этой странице.</p>",
		},
		{
			title: "Отправьте нам заявление",
			content:
				"<p>После заполнения отправьте его одним из&nbsp;удобных для вас способов:</p><ul><li>на&nbsp;электронную почту: <a href='mailto:oooalexa@bk.ru'>oooalexa@bk.ru</a></li><li>в&nbsp;мессенджер или СМС по&nbsp;номеру: <a href='tel:79185550296'>+7 (918) 555-02-96</a></li></ul>",
		},
		{
			title: "Ожидайте готовности справки",
			content:
				"<p>Мы&nbsp;подготавливаем справку для налогового вычета в&nbsp;течение <b>5&nbsp;рабочих дней</b>.</p>",
		},
		{
			title: "Заберите справку в&nbsp;клинике",
			content:
				"<p>После подготовки справку можно будет забрать на&nbsp;стойке администратора.</p>",
		},
	],
	cta: {
		title:
			"Если у&nbsp;вас возникли вопросы&nbsp;&mdash; наши администраторы всегда на&nbsp;связи и&nbsp;с&nbsp;радостью помогут",
		buttonText: "Заявление на выдачу справки",
	},
};
