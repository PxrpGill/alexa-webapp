import SurgeryAndImplantationPage from "@/views/surgery-and-implantation-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Стоматология Алекса | Хирургия и имплантация: восстановление здоровья улыбки",
		description:
			"Удаление зубов ультразвуковой системой. Имплантация all-on-4, all-on-6. Операции по пластике уздечки и десны, микрохирургии, подсадке и закрытию рецессии десны.",
	};
};

export default function SurgeryAndImplantation() {
	return <SurgeryAndImplantationPage />;
}
