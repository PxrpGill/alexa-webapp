import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Лечение височно-нижнечелюстных нарушений",
		description: "Восстановим работу сустава без ненужных вмешательств",
		card: {
			title: "Точная диагностика и&nbsp;контроль результата",
			description:
				"<p>Вы&nbsp;получите:</p><ul><li>понятную диагностику</li><li>прозрачный план лечения</li><li>сопровождение врача на&nbsp;каждом этапе</li><ul>",
		},
		poster: {
			webp: {
				src: "/mock/gnathologia/1-desktop.webp",
			},
		},
	},
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title:
		"Можно привыкнуть к&nbsp;щелчкам в&nbsp;челюсти.<br /> Но&nbsp;это не&nbsp;значит, что всё в&nbsp;порядке",
	cards: [
		{
			title: "Сначала это почти не&nbsp;мешает:",
			description:
				"<ul><li>щёлкает, когда широко открываете рот</li><li>появляется лёгкий дискомфорт при жевании</li><li>иногда &laquo;тянет&raquo; или &laquo;устает&raquo; челюсть</li></ul>",
		},
		{
			title: "Вы&nbsp;привыкаете и&nbsp;начинаете подстраиваться:",
			description:
				"<ul><li>открываете рот не&nbsp;до&nbsp;конца</li><li>жуёте на&nbsp;одной стороне</li><li>стараетесь лишний раз не&nbsp;нагружать</li></ul>",
		},
		{
			title: "И&nbsp;со&nbsp;временем это превращается&nbsp;в:",
			description:
				"<ul><li>постоянную боль</li><li>ограниченные движения</li><li>постоянный дискомфорт</li></ul>",
		},
		{
			title: "Сначала это почти не&nbsp;мешает:",
			description:
				"<p>Но&nbsp;проблема при этом никуда не&nbsp;уходит&nbsp;&mdash; она постепенно усугубляется.</p><br /><p>Чем раньше разобраться, что происходит с&nbsp;суставом, тем проще и&nbsp;спокойнее это исправить.</p>",
			theme: "green",
			buttonText: "Записаться на прием",
		},
	],
};
