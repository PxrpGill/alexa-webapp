import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { Alexik3D } from "@/shared/ui/alexik-3d";
import BeforeAfterSection from "@/widgets/before-after-section";
import ChildWhatIncludesServices from "@/widgets/child-what-includes-services";
import CostOfServices from "@/widgets/cost-of-services";
import Hero from "@/widgets/hero";
import HowItWorksSlider from "@/widgets/how-it-works-slider";
import OurPeopleSection from "@/widgets/our-people-section";
import RecommendsForChildren from "@/widgets/recommends-for-children";
import {
	BEFORE_AFTER_SECTION,
	CHILD_WHAT_INCLUDES_SERVICES,
	COST_OF_SERVICES,
	EMPLOYEES_SECTION,
	FORM_DATA,
	HERO_DATA,
	HOW_IT_WORKS_SLIDER,
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
			<HowItWorksSlider className="section" {...HOW_IT_WORKS_SLIDER} />
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} isSlider />
			<BeforeAfterSection {...BEFORE_AFTER_SECTION} className="section" />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
			<Alexik3D />
		</main>
	);
}
