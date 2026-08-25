import AdultTherapyPage from "@/views/adult-therapy-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Семейная стоматология Алекса | Передовое лечение зубов и десен под микроскопом",
		description:
			"Восстановим форму и функцию поврежденных зубов с помощью пломбирования или реставрации. Избавим от боли в зубах, пульпита, периодонтита, кариеса.",
	};
};

export default function AdultTherapy() {
	return <AdultTherapyPage />;
}
