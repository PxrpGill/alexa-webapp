import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import { Alexik3D } from "@/shared/ui/alexik-3d";
import ChildWhatIncludesServices from "@/widgets/child-what-includes-services";
import CostOfServices from "@/widgets/cost-of-services";
import Hero from "@/widgets/hero";
import HowItWorksSlider from "@/widgets/how-it-works-slider";
import OurPeopleSection from "@/widgets/our-people-section";
import RecommendsForChildren from "@/widgets/recommends-for-children";
import css from "./index.module.css";
import {
	CHILD_WHAT_INCLUDES_SERVICES,
	COST_OF_SERVICES,
	EMPLOYEES_SECTION,
	FORM_DATA,
	HERO_DATA,
	HOW_IT_WORKS_SLIDER,
	RECOMMENDS_FOR_CHILDREN_DATA,
} from "./models/hygiene-and-preventation.constants";

export default function HygieneAndPreventionPage() {
	return (
		<main className="page-offset">
			<Hero {...HERO_DATA} className="section" />
			<ChildWhatIncludesServices
				className={`${css.services} section`}
				{...CHILD_WHAT_INCLUDES_SERVICES}
			/>
			<RecommendsForChildren
				className="section"
				{...RECOMMENDS_FOR_CHILDREN_DATA}
			/>
			<HowItWorksSlider className="section" {...HOW_IT_WORKS_SLIDER} />
			<OurPeopleSection className="section" {...EMPLOYEES_SECTION} />
			<CostOfServices className="section" {...COST_OF_SERVICES} />
			<AppointmentSchedulingSection {...FORM_DATA} className="section" />
			<Alexik3D />
		</main>
	);
}
