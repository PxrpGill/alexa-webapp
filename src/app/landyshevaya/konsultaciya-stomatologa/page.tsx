import DentistConsultationPage from "@/views/dentist-consultation-page";

export const revalidate = 60;

export const generateMetadata = () => {
	return {
		title:
			"Стоматология Алекса | Консультация стоматолога: диагностика и план лечения",
		description:
			"Получите точные сведения о состоянии ваших зубов. Подберем наиболее эффективный и безопасный метод лечения. Дадим рекомендации по уходу за зубами.",
	};
};

export default function DentistConsultation() {
	return <DentistConsultationPage />;
}
