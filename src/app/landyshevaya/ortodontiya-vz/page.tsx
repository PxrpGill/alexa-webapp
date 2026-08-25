import AdultOrthodonticsPage from "@/views/adult-orthodontics-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title: "Стоматология Алекса | Ортодонтия: восстановление и коррекция зубов",
		description:
			"Восстановление целостности и функции зубного ряда. Мы предлагаем: виниры, коронки, импланты, керамические вкладки, съемные протезы. Высокая точность!",
	};
};

export default function AdultOrthodontics() {
	return <AdultOrthodonticsPage />;
}
