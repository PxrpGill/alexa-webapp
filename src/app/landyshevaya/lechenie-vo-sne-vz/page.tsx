import TreatmentInDreamPage from "@/views/treatment-in-dream";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Стоматология Алекса | Лечение зубов под седацией или наркозом. Без боли и страха",
		description:
			"Боитесь стоматолога и боли? Аллергия на анестезию? Лечение зубов под седацией или наркозом - безопасное решение. Вы не почувствуете, как проходит процедура!",
	};
};

export default function TreatmentInDream() {
	return <TreatmentInDreamPage />;
}
