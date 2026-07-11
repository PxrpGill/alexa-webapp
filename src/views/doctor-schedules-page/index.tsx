import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import DoctorSchedulesSection from "@/widgets/doctors-schedules-section";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import { DOCTOR_SCHEDULES_SECTION } from "./models/doctor-schedules.constants";

export default function DoctorSchedulesPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Расписание врачей</h1>
			</AnimationWrapper>
			<DoctorSchedulesSection
				{...DOCTOR_SCHEDULES_SECTION}
				className={css.doctors}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
