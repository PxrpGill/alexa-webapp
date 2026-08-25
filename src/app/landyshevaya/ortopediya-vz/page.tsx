import AdultOrthopedicsPage from "@/views/adult-orthopedics-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title: "Стоматология Алекса | Ортопедия: восстановление и коррекция зубов",
		description:
			"Восстановление целостности и функции зубного ряда. Мы предлагаем: виниры, коронки, импланты, керамические вкладки, съемные протезы. Высокая точность! ",
	};
};

export default function AdultOrthopedics() {
	return <AdultOrthopedicsPage />;
}
