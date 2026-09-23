import { notFound } from "next/navigation";
import { getDetailVacancy } from "@/shared/api/get-detail-vacancy";
import DetailVacancyPage from "@/views/detail-vacancy-page";

type DetailVacancyParams = {
	params: Promise<{ slug: string }>;
};

export default async function DetailVacancy({ params }: DetailVacancyParams) {
	const { slug } = await params;
	const initialDetailVacancyPageData = await getDetailVacancy({
		vacancySlug: slug,
	});

	if (!initialDetailVacancyPageData) {
		return notFound();
	}

	return <DetailVacancyPage {...initialDetailVacancyPageData} slug={slug} />;
}
