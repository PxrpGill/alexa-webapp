import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { Alexik3D } from "@/shared/ui/alexik-3d";
import ChildWhatIncludesServices from "@/widgets/child-what-includes-services";
import CostOfServices from "@/widgets/cost-of-services";
import FirstVisitSection from "@/widgets/first-visit-section";
import Hero from "@/widgets/hero";
import OurPeopleSection from "@/widgets/our-people-section";
import RecommendsForChildren from "@/widgets/recommends-for-children";
import {
	CHILD_WHAT_INCLUDES_SERVICES,
	COST_OF_SERVICES,
	EMPLOYEES_SECTION,
	FIRST_VISIT_SECTION_DATA,
	FORM_DATA,
	HERO_DATA,
	RECOMMENDS_FOR_CHILDREN_DATA,
} from "./models/pediatric-dental-consultation.constants";

export default function PediatricDentalConsultationPage() {
	return (
		<main className="page-offset">
			<Hero className="section" {...HERO_DATA} />
			<ChildWhatIncludesServices
				className="section"
				{...CHILD_WHAT_INCLUDES_SERVICES}
			/>
			<RecommendsForChildren
				className="section"
				{...RECOMMENDS_FOR_CHILDREN_DATA}
			/>
			<FirstVisitSection className="section" {...FIRST_VISIT_SECTION_DATA} />
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} />
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
			<Alexik3D />
		</main>
	);
}
