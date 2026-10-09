import { Fragment } from "react";
import AppointmentSchedulingSection from "@/features/appointment-scheduling-section";
import PageContentFilter from "@/features/page-content-filter";
import { PageFilterContentProvider } from "@/features/page-content-filter/models/page-filter-content-context";
import PageContentResult from "@/features/page-content-filter/ui/page-content-result";
import { Alexik3D } from "@/shared/ui/alexik-3d";
import ChildWhatIncludesServices from "@/widgets/child-what-includes-services";
import CostOfServices from "@/widgets/cost-of-services";
import CtaHelpSection from "@/widgets/cta-help-section";
import Hero from "@/widgets/hero";
import OrthoHowItWorks from "@/widgets/ortho-how-it-works";
import OrthoPriceCards from "@/widgets/ortho-price-cards";
import OurPeopleSection from "@/widgets/our-people-section";
import css from "./index.module.css";
import {
	BRACKETS_HOW_IT_WORKS,
	CHILD_WHAT_INCLUDES_SERVICES,
	COST_OF_SERVICES,
	CTA_HELP_SECTION,
	ELINERS_HOW_IT_WORKS,
	EMPLOYEES_SECTION,
	FORM_DATA,
	HERO_MOCK,
	ORTHO_BRACKETS_CARDS,
	ORTHO_ELINERS_CARDS,
	PAGE_FILTERS,
	PAGE_FILTERS_DICT,
} from "./models/pediatric-orthodontics.constants";

export default function PediatricOrthodonticsPage() {
	return (
		<main className="page-offset">
			<PageFilterContentProvider categories={PAGE_FILTERS}>
				<Hero className="section" {...HERO_MOCK} />
				<ChildWhatIncludesServices
					className="section"
					{...CHILD_WHAT_INCLUDES_SERVICES}
				/>
				<PageContentResult
					content={
						new Map([
							[
								PAGE_FILTERS_DICT.brackets.slug,
								<Fragment key={PAGE_FILTERS_DICT.brackets.slug}>
									<OrthoHowItWorks
										{...BRACKETS_HOW_IT_WORKS}
										className="section"
									/>
									<OrthoPriceCards
										className="section"
										{...ORTHO_BRACKETS_CARDS}
									/>
								</Fragment>,
							],
							[
								PAGE_FILTERS_DICT.eliners.slug,
								<Fragment key={PAGE_FILTERS_DICT.eliners.slug}>
									<OrthoHowItWorks
										{...ELINERS_HOW_IT_WORKS}
										className="section"
									/>
									<OrthoPriceCards
										className="section"
										{...ORTHO_ELINERS_CARDS}
									/>
								</Fragment>,
							],
						])
					}
				/>
				<CtaHelpSection className="section" {...CTA_HELP_SECTION} />
				<OurPeopleSection className="section" {...EMPLOYEES_SECTION} />
				<CostOfServices className="section" {...COST_OF_SERVICES} />
				<AppointmentSchedulingSection {...FORM_DATA} className="section" />
				<Alexik3D className={css.alexik} />
				<PageContentFilter title="Метод лечения:" />
			</PageFilterContentProvider>
		</main>
	);
}
