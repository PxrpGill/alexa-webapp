import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { FaqSectionProps } from "@/widgets/faq-section/types/faq-section.types";
import type { PromoSectionProps } from "@/widgets/promo-section/types/promo-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { StagesSectionProps } from "@/widgets/stages-section/types/stages-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

export const QUADRO_MOCK: QuadroSectionProps = {
	sectionHeader: {
		description: "Ваш ребёнок боится стоматологов?",
		title: "Ваш ребёнок боится стоматологов?",
		card: {
			title:
				"Подарите себе и&nbsp;ребенку спокойствие&nbsp;&mdash; запишитесь на&nbsp;консультацию и&nbsp;узнайте, подходит&nbsp;ли лечение во&nbsp;сне именно вам.",
			buttonText: "Записаться на консультацию",
		},
		poster: {
			original: {
				src: "/mock/sleepbased-treatment/1-desktop.jpg",
			},
		},
	},
};

export const BRICKWORK_MOCK_SECTION: BrickworkSectionProps = {
	sectionHeader: {
		title: "Почему родители выбирают лечение &laquo;во&nbsp;сне&raquo;",
	},
	cards: [
		{
			icon: "/mock/sleepbased-treatment/1-icon.svg",
			title: "Комфорт для всей семьи",
			description:
				"Не&nbsp;нужно уговаривать, успокаивать или прерывать лечение.",
		},
		{
			icon: "/mock/sleepbased-treatment/2-icon.svg",
			title: "Без слёз и&nbsp;истерик",
			description:
				"Ребёнок спокойно спит, пока идёт лечение&nbsp;&mdash; без страха и&nbsp;стресса.",
		},
		{
			icon: "/mock/sleepbased-treatment/3-icon.svg",
			title: "Подходит даже самым тревожным детям",
			description:
				"Эффективно, если ребенок боится врачей или не&nbsp;может усидеть в&nbsp;кресле.",
		},
		{
			icon: "/mock/sleepbased-treatment/4-icon.svg",
			title: "Полная безопасность",
			description: "Процедура проводится под контролем опытных анестезиологов.",
		},
		{
			icon: "/mock/sleepbased-treatment/4-icon.svg",
			title: "Несколько зубов за&nbsp;один прием",
			description:
				"Длительное лечение проходит за&nbsp;1&nbsp;визит, без перегрузки для ребёнка.",
		},
		{
			title: "Метод, который одобряют педиатры и&nbsp;легко принимают дети",
			description:
				"<p>Подарите ребенку спокойное лечение без слез и&nbsp;страха.</p><br /><p>Запишитесь на&nbsp;консультацию&nbsp;&mdash; мы&nbsp;расскажем, подойдёт&nbsp;ли метод именно вам и&nbsp;ответим на&nbsp;все вопросы.</p>",
			buttonText: "Записаться на консультацию",
			cardTheme: "green",
		},
	],
};

export const FAQ_SECTION_MOCK: FaqSectionProps = {
	title: "F.A.Q",
	cards: [
		{
			question: "Это безопасно для ребёнка?",
			answer:
				"Да, седация и&nbsp;наркоз проходят под контролем опытных врачей. Мы&nbsp;применяем только проверенные препараты, одобренные для детской стоматологии.",
		},
		{
			question: "В&nbsp;каком возрасте можно лечить зубы во&nbsp;сне?",
			answer:
				"Седация возможна с&nbsp;0&nbsp;лет (но&nbsp;по&nbsp;показаниям врача), а&nbsp;общий наркоз&nbsp;&mdash; по&nbsp;показаниям и&nbsp;после оценки состояния ребёнка. Решение принимает врач после личной консультации.",
		},
		{
			question: "Ребёнок будет спать или всё чувствовать?",
			answer:
				"При седации ребёнок остаётся в&nbsp;сознании, но&nbsp;расслаблен и&nbsp;не&nbsp;ощущает тревоги. При наркозе&nbsp;&mdash; полностью спит. Метод подбирается индивидуально, в&nbsp;зависимости от&nbsp;сложности лечения и&nbsp;возраста.",
		},
		{
			question: "Сколько длится восстановление?",
			answer:
				"После седации ребёнок приходит в&nbsp;себя уже через 10&ndash;15 минут и&nbsp;может вернуться к&nbsp;обычному режиму. После наркоза восстановление занимает немного больше времени, но&nbsp;проходит под наблюдением.",
		},
		{
			question: "А&nbsp;если нужно вылечить сразу несколько зубов?",
			answer:
				"Лечение во&nbsp;сне позволяет за&nbsp;одно посещение вылечить даже несколько зубов, что особенно удобно для детей с&nbsp;множественными кариесами или страхом перед врачами.",
		},
		{
			question: "Как подготовиться к&nbsp;лечению во&nbsp;сне?",
			answer:
				"Перед процедурой нужно пройти консультацию со&nbsp;стоматологом и&nbsp;с&nbsp;анестезиологом, сдать анализы. Врач даст четкие рекомендации по&nbsp;питанию, питью и&nbsp;поведению в&nbsp;день лечения.",
		},
	],
};

export const STAGES_SECTION_MOCK: StagesSectionProps = {
	titleBlock: {
		title: "Седация проходит в&nbsp;3&nbsp;этапа",
	},
	cards: {
		cards: [
			{
				poster: {
					original: {
						src: "/mock/treatment-in-dream/stage-1.jpg",
					},
				},
				description:
					"Пациенты могут наслаждаться просмотром мультиков/фильмов, общением с&nbsp;доктором, комфортно располагаясь в&nbsp;специальном кресле и&nbsp;примеряя кислородную маску.",
			},
			{
				poster: {
					webp: {
						src: "/mock/treatment-in-dream/stage-2.webp",
					},
				},
				description:
					"Через специальную маску поступает смесь кислорода с&nbsp;добавлением закиси азота. Для каждого пациента индивидуально подбирается оптимальная концентрация. Уже спустя некоторое время возникает успокаивающее воздействие.",
			},
			{
				poster: {
					webp: {
						src: "/mock/treatment-in-dream/stage-3.webp",
					},
				},
				description:
					"Пациент остается в&nbsp;сознании, продолжает общаться с&nbsp;доктором и&nbsp;следовать необходимым инструкциям. После того как он&nbsp;успокаивается и&nbsp;перестает испытывать страх, требуется введение местного обезболивания и&nbsp;начало лечения.",
			},
		],
	},
};

export const STICKY_TITLE_MOCK: TitleStickySectionProps = {
	title: "Sevorane&nbsp;&mdash; лечение зубов для детей без боли и&nbsp;страха",
	cards: [
		{
			title: "Безопасность и&nbsp;мягкое воздействие:",
			description:
				"Этот наркоз, основанный на&nbsp;севофлуране, не&nbsp;имеет запаха и&nbsp;цвета, а&nbsp;также не&nbsp;вызывает раздражения дыхательных путей.",
		},
		{
			title: "Стабильность и&nbsp;контроль:",
			description:
				"&laquo;Севоран&raquo; обеспечивает стабильный уровень глубины наркоза, что позволяет врачам контролировать состояние ребенка на&nbsp;протяжении всей процедуры.",
		},
		{
			title: "Минимальное влияние на&nbsp;организм:",
			description:
				"&laquo;Севоран&raquo; имеет минимальное влияние на&nbsp;сердечно-сосудистую систему и&nbsp;не&nbsp;вступает в&nbsp;химические реакции с&nbsp;организмом.",
		},
		{
			title: "Идеально для детей и&nbsp;аллергиков:",
			description:
				"&laquo;Севоран&raquo; имеет низкую частоту негативных эффектов и&nbsp;подходит даже для самых чувствительных пациентов. Однако перед процедурой вас обязательно проконсультирует врач-специалист.",
		},
		{
			title: "Современное оборудование:",
			description:
				"Наша клиника оснащена наркозным аппаратом Datex-Ohmeda 9100c NXT, который гарантирует полный контроль всех жизненно важных функций во&nbsp;время процедуры, обеспечивая максимальную безопасность и&nbsp;комфорт для вашего ребёнка.",
		},
	],
	lastCard: {
		poster: {
			original: {
				src: "/mock/sleepbased-treatment/title-sticky.jpg",
			},
		},
		buttonText: "Записаться на прием",
	},
};

export const PROMO_SECTION_MOCK: PromoSectionProps = {
	sectionHeader: {
		title: "Седация",
		description: "Идеальный вариант для первых посещений стоматолога",
	},
	cards: [
		{
			title: "Как работает седация?",
			content:
				"<p>Расслабление и&nbsp;эйфория:</p><p>Закись азота, или &laquo;веселящий газ&raquo;, поступает через специальную маску и&nbsp;вызывает чувство расслабленности и&nbsp;легкой эйфории. Ребенок не&nbsp;испытывает страха и&nbsp;беспокойства, оставаясь в&nbsp;сознании.</p><p>Быстрое усвоение и&nbsp;выведение:</p><p>Закись азота легко усваивается организмом и&nbsp;быстро выводится после процедуры без каких-либо негативных последствий.</p>",
		},
		{
			title: "Преимущества седации:",
			content:
				"<p>Быстрое восстановление:</p><p>Ребенок быстро приходит в&nbsp;сознание и&nbsp;возвращается к&nbsp;своей обычной жизни.</p><p>Ребенок не&nbsp;акцентирует свое внимание на&nbsp;манипуляциях врача.</p>",
		},
		{
			title:
				"Подойдет&nbsp;ли вашему ребёнку седация&nbsp;&mdash; определит врач",
			content:
				"<p>На&nbsp;очной консультации специалист оценит общее состояние, противопоказания и&nbsp;выберет безопасный способ обезболивания.</p><p>Мы&nbsp;не&nbsp;назначаем седацию без показаний&nbsp;&mdash; только после индивидуального осмотра и&nbsp;рекомендаций врача.</p>",
			buttonText: "Записаться на консультацию",
			theme: "green",
		},
	],
};

export const STILL_QUESTIONS_MOCK: StillQuestionProps = {
	title:
		"Рассрочка на&nbsp;лечение во&nbsp;сне&nbsp;&mdash; удобные условия для вашего комфорта!",
	description:
		"<p>В&nbsp;нашей стоматологии теперь доступна рассрочка на&nbsp;лечение во&nbsp;сне:</p><br /><p><b>Первоначальный взнос:</b> всего&nbsp;50%</p><p><b>Срок рассрочки:</b> 6&nbsp;месяцев.</p><p><b>Дальнейшая оплата:</b> равными частями без переплат.</p>",
	poster: {
		original: {
			src: "/mock/sleepbased-treatment/still-questions.jpg",
		},
	},
	buttonText: "Оставить заявку",
};

export const STILL_QUESTIONS_LAST_MOCK: StillQuestionProps = {
	title:
		"Рассрочка на&nbsp;лечение во&nbsp;сне&nbsp;&mdash; удобные условия для вашего комфорта!",
	description:
		"<p>Запишитесь на&nbsp;консультацию&nbsp;&mdash; наш врач подробно расскажет о&nbsp;седации, подберет подходящий вариант и&nbsp;ответит на&nbsp;все ваши вопросы.</p><br /><ul><li>Без боли.</li><li>Без страха.</li><li>Под контролем опытных специалистов.</li></ul>",
	poster: {
		webp: {
			src: "/mock/home/still-questions/still-questions.webp",
		},
	},
	buttonText: "Оставить заявку",
};
