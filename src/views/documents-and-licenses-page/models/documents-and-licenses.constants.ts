import type { DetailDocumentsSectionProps } from "@/widgets/detail-documents-section/types/detail-documents-section.types";

export const DOCUMENTS_AND_LICENSES: DetailDocumentsSectionProps = {
	cards: [
		{
			title: "Выписка из&nbsp;реестра",
			preview: {
				webp: {
					src: "/documents/detail-documents/1-1-document.webp",
				},
			},
			detailPosters: [
				{
					webp: {
						src: "/documents/detail-documents/1-1-document.webp",
					},
				},
				{
					webp: {
						src: "/documents/detail-documents/1-2-document.webp",
					},
				},
			],
		},
		{
			title: "Лицензия Медицинской деятельности",
			preview: {
				webp: {
					src: "/documents/detail-documents/2-1-document.webp",
				},
			},
			detailPosters: [
				{
					webp: {
						src: "/documents/detail-documents/2-1-document.webp",
					},
				},
				{
					webp: {
						src: "/documents/detail-documents/2-2-document.webp",
					},
				},
			],
		},
		{
			title: "Лицензия Медицинской деятельности",
			preview: {
				webp: {
					src: "/documents/detail-documents/3-1-document.webp",
				},
			},
			detailPosters: [
				{
					webp: {
						src: "/documents/detail-documents/3-1-document.webp",
					},
				},
			],
		},
	],
};
