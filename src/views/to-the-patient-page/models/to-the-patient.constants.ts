import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { DocumentsListProps } from "@/widgets/documents-list/types/documents-list.types";

export const DOCUMENTS_MOCK: DocumentsListProps = {
	documents: [
		{
			title: "Постановление от&nbsp;14.12.2016&nbsp;г. &#8470;&nbsp;841",
			href: "http://publication.pravo.gov.ru/document/6100201612190021",
		},
		{
			title: "Постановление от&nbsp;28.12.2020&nbsp;г. &#8470;&nbsp;2299",
			href: "https://base.garant.ru/400165890/",
		},
		{
			title:
				"Порядок оказания медицинской помощи в&nbsp;рамках Территориальной программы (ОМС)",
			href: "/documents/Порядок_оказания_медицинской_помощи_в_рамках_Территориальной_программы.docx",
		},
		{
			title:
				"Гарантийные обязательства и&nbsp;сроки гарантии на&nbsp;стоматологические услуги",
			href: "/documents/Приложение 1. Гарантии.docx",
		},
		{
			title:
				"Постановление Об&nbsp;утверждении Правил предоставления медицинскими организациями платных мед. услуг",
			href: "http://publication.pravo.gov.ru/Document/View/0001202305120025",
		},
		{
			title: "СОУТ",
			href: "/documents/СОУТ.pdf",
		},
		{
			title: "Выписка из&nbsp;реестра",
			href: "/documents/Памятка для родителей НАРКОЗ.pdf",
		},
		{
			title: "Согласие на&nbsp;обработку персональных данных",
			href: SITE_NAVIGATION.userAgreement,
		},
		// {
		// 	title: "Правила внутреннего распорядка",
		// },
		{
			title: "Информированное согласие",
			href: "/documents/Информированное добровольное согласие пациента на комплекс обследований.docx",
		},
		{
			title: "Договор (Потребитель ребенок, Заказчик родитель)",
			href: "/documents/Договор на оказание платных стомотологических услуг.docx",
		},
		{
			title: "Договор общий",
			href: "/documents/Договор на оказание платных стомотологических услуг (2).docx",
		},
		{
			title: "Анкета пациента",
			href: "/documents/Анкета пациента.docx",
		},
		{
			title: "Анкета пациента (Дети)",
			href: "/documents/Анкета ребенка.docx",
		},
		{
			title: "Памятка лечением во&nbsp;сне/наркозом",
			href: "/documents/Памятка для родителей НАРКОЗ (1).pdf",
		},
	],
};
