import PeriodontologyPage from "@/views/periodontology-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Стоматология Алекса | Пародонтология",
		description:
			"Удаление налета и зубного камня. Улучшение состояние десен и предотвращение развития кариеса и пародонтита. Заботьтесь о здоровье зубов с нашими услугами!",
	};
};

export default function Periodontology() {
	return <PeriodontologyPage />;
}
