import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import OurPeopleSection from "@/widgets/our-people-section";

import css from "./index.module.css";
import { EMPLOYEES_SECTION } from "./models/doctors.constants";

export default function DoctorsPage() {
	return (
		<main className="page-offset">
			<AnimationWrapper className={`${css.titleBlock} section-md container`}>
				<h1 className={css.title}>Врачи</h1>
			</AnimationWrapper>
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} />
		</main>
	);
}
