import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import DoctorSchedulesSection from "@/widgets/doctors-schedules-section";
import css from "./index.module.css";
import { DOCTOR_SCHEDULES_SECTION } from "./models/doctor-schedules.constants";

export default function DoctorSchedulesPage() {
	return (
		<main className="page-offset">
			<AnimationWrapper className={`${css.titleBlock} section-md container`}>
				<h1 className={css.title}>Расписание врачей</h1>
			</AnimationWrapper>
			<DoctorSchedulesSection
				{...DOCTOR_SCHEDULES_SECTION}
				className="section"
			/>
		</main>
	);
}
