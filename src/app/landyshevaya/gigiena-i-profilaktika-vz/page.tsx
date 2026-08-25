import AdultHygieneAndPreventionPage from "@/views/adult-hygiene-and-prevention-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Стоматология Алекса | Гигиена и профилактика: забота о здоровье зубов и десен",
		description:
			"Удаление налета и зубного камня. Улучшение состояние десен и предотвращение развития кариеса и пародонтита. Заботьтесь о здоровье зубов с нашими услугами!",
	};
};

export default function AdultHygieneAndPrevention() {
	return <AdultHygieneAndPreventionPage />;
}
