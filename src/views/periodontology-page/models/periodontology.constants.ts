import type { DiagnosticsSectionProps } from "@/widgets/diagnostics-section/types/diagnostics-section.types";
import type { EarlyPeriodontalTreatmentSectionProps } from "@/widgets/early-periodontal-treatment-section/types/early-periodontal-treatment-section.types";
import type { MockTabsSectionProps } from "@/widgets/mock-tabs-section/types/mock-tabs-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TreatmentDelayConsequencesProps } from "@/widgets/treatment-delay-consequences/types/treatment-delay-consequences.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Сохраняем зубы при пародонтите",
		description: "Здоровье десен&nbsp;&mdash; основа сохранения зубов",
		card: {
			title:
				"Точная диагностика состояния десен с&nbsp;системой Florida Probe&nbsp;&mdash; бесплатно",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/pariodontology/1-desktop.jpg",
			},
		},
	},
};

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
	title: "Показания к&nbsp;пародонтологии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{ title: "Кровоточивость при чистке зубов" },
		{ title: "Отечность или болезненность десен" },
		{ title: "Неприятный запах изо рта" },
		{
			title:
				"Появление промежутков или &laquo;карманов&raquo; между зубом и&nbsp;десной",
		},
		{
			title: "Подвижность зубов",
		},
		{
			title: "Ощущение, что зубы стали &laquo;длиннее&raquo;",
		},
		{
			title:
				"Даже лёгкая кровоточивость&nbsp;&mdash; это уже признак воспаления",
			theme: "green",
		},
	],
};

export const MOCK_TABS_SECTION: MockTabsSectionProps = {
	sectionHeader: {
		title: "Кто находится в&nbsp;группе повышенного риска",
		description: "Вероятность развития воспаления выше, если есть:",
	},
	mockTabs: {
		tabs: [
			"Курение",
			"Сахарный диабет",
			"Нарушения прикуса",
			"Нерегулярная или недостаточная гигиена",
			"Иммунодефицитные состояния",
			"Наследственная предрасположенность",
			"Ишемическая болезнь сердца",
			"Заболевания щитовидной железы",
		],
	},
	sectionContent: {
		title:
			"Запишитесь на&nbsp;консультацию пародонтолога, чтобы получить профессиональную оценку состояния десен и&nbsp;рекомендации по&nbsp;дальнейшим действиям.",
		description:
			"Если вы&nbsp;узнали хотя&nbsp;бы один из&nbsp;перечисленных признаков, стоит оценить состояние тканей, удерживающих зуб. На&nbsp;ранних этапах изменения легче остановить и&nbsp;стабилизировать.",
		buttonText: "Записаться на прием",
		poster: {
			original: {
				src: "/mock/pariodontology/mock-tabs.jpeg",
			},
		},
	},
};

export const TREATMENT_DELAY_CONSEQUENCES_MOCK: TreatmentDelayConsequencesProps =
	{
		sectionHeader: {
			title: "Почему важно не&nbsp;откладывать лечение",
			description:
				"Заболевания десен развиваются постепенно и&nbsp;часто без выраженной боли",
		},
		iconCards: {
			cards: [
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/1-icon.svg",
					title: "Пародонтит",
					description:
						"Воспаление распространяется глубже, затрагивает связки и&nbsp;костную ткань.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/2-icon.svg",
					title: "Гингивит",
					description:
						"Воспаление и&nbsp;кровоточивость десны. На&nbsp;этом этапе изменения обратимы.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/3-icon.svg",
					title: "Потеря костной ткани",
					description: "Зуб теряет опору. Появляется подвижность.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/4-icon.svg",
					title: "Потеря зуба",
					description: "Финальный этап запущенного процесса.",
				},
			],
		},
		textCards: {
			cards: [
				{
					title: "Особенность в&nbsp;том, что этот путь может занимать годы.",
					description:
						"Этот процесс может длиться годами и&nbsp;часто проходит без боли",
				},
			],
		},
	};

export const EARLY_PERIODONTAL_TREATMENT_MOCK: EarlyPeriodontalTreatmentSectionProps =
	{
		sectionHeader: {
			title: "Раннее лечение всегда проще и&nbsp;безопаснее",
			description:
				"Раннее лечение гингивита значительно проще и&nbsp;доступнее, чем восстановление утраченной кости или установка импланта.",
			legend:
				"Пародонтология&nbsp;&mdash; это не&nbsp;косметическая процедура, а&nbsp;способ сохранить собственные зубы и&nbsp;избежать сложного протезирования в&nbsp;будущем.",
		},
		card: {
			description:
				"Понять стадию процесса можно только при профессиональном осмотре и&nbsp;точной диагностике.",
			underDescription:
				"Своевременная оценка состояния десен позволяет остановить заболевание до&nbsp;серьёзных последствий.",
			textButton: "Записаться на прием",
		},
	};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticsSectionProps = {
	heroSection: {
		title: "Точная диагностика состояния десен с&nbsp;системой Florida Probe",
		description:
			"Florida Probe&nbsp;&mdash; это компьютерная система диагностики пародонта, которая позволяет определить глубину пародонтальных карманов и&nbsp;оценить состояние тканей вокруг каждого зуба.",
		poster: {
			original: {
				src: "/mock/pariodontology/diagnostics-poster.jpg",
			},
		},
	},
	argumentSection: {
		title: "Почему мы&nbsp;используем компьютерную диагностику Florida Probe",
		description: "Она позволяет:",
		list: [
			"обнаружить заболевание десен на&nbsp;ранней стадии",
			"объективно оценить без субъективных предположение",
			"точно измерить глубину карманов",
			"сравнить результаты до&nbsp;и&nbsp;после лечения",
			"сохранить собственные зубы",
		],
		legend: "Обычный осмотр не&nbsp;дает такой точности",
	},
	ctaSection: {
		title: "Получите точную оценку и&nbsp;персональный план лечения",
		description: "Пройдите компьютерную диагностику состояния десен",
		buttonText: "Записаться на прием",
	},
};
