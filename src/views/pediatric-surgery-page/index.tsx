import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { Alexik3D } from "@/shared/ui/alexik-3d";
import ChildWhatIncludesServices from "@/widgets/child-what-includes-services";
import CostOfServices from "@/widgets/cost-of-services";
import Hero from "@/widgets/hero";
import OurPeopleSection from "@/widgets/our-people-section";
import RecommendsForChildren from "@/widgets/recommends-for-children";
import {
	CHILD_WHAT_INCLUDES_SERVICES,
	COST_OF_SERVICES,
	EMPLOYEES_SECTION,
	FORM_DATA,
	HERO_DATA,
	RECOMMENDS_FOR_CHILDREN_DATA,
} from "./models/pediatric-surgery.constants";

export default function PediatricSurgeryPage() {
	return (
		<main className="page-offset">
			<Hero {...HERO_DATA} className="section" />
			<ChildWhatIncludesServices
				className="section"
				{...CHILD_WHAT_INCLUDES_SERVICES}
			/>
			<RecommendsForChildren
				className="section"
				{...RECOMMENDS_FOR_CHILDREN_DATA}
			/>
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} isSlider />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
			<Alexik3D />
		</main>
	);
}
