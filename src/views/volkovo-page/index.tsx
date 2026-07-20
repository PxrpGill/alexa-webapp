import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import OurPeopleSection from "@/widgets/our-people-section";
import QuadroSection from "@/widgets/quadro-section";
import StomatologyProgram from "@/widgets/stomatology-program";
import YandexMap from "@/widgets/yandex-map";
import { EMPLOYEES_SECTION } from "../dentist-consultation-page/models/dentist-consultation.constants";
import css from "./index.module.css";
import {
	FORM_DATA,
	GREEN_CTA,
	QAUDRO_MOCK,
	STOMATOLOGY_PROGRAM,
} from "./models/volkovo.constants";
import CtaGreen from "./ui/cta-green";
import VolkovoHero from "./ui/volkovo-hero";

export default function VolkovoPage() {
	return (
		<main>
			<VolkovoHero className={css.hero} />
			<CtaGreen {...GREEN_CTA} className={css.greenCta} />
			<QuadroSection className={css.quadro} {...QAUDRO_MOCK} />
			<StomatologyProgram
				{...STOMATOLOGY_PROGRAM}
				className={css.stomatology}
			/>
			<OurPeopleSection
				className={css.peoples}
				{...EMPLOYEES_SECTION}
				isSlider
			/>
			<AppointmentSchedulingSection {...FORM_DATA} className={css.form} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
