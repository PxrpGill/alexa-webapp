import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { TabsBlockProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { StepsForPerfectSmileProps } from "@/widgets/steps-for-perfect-smile/types/steps-for-perfect-smile.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { ElinersSectionTableProps } from "./eliners-table.types";

export type InfoTabsContentProps = {
	[key: string]: {
		whatIncludes?: WhatServiceIncludesProps;
		stickyTitle?: TitleStickySectionProps;
		stepsForPerfectSmile?: StepsForPerfectSmileProps;
		costs?: CostOfServicesProps;
		eliners?: ElinersSectionTableProps;
	};
};

export type InfoTabsProps = {
	tabsBlock?: TabsBlockProps;
	content?: InfoTabsContentProps;
} & PropsWithClassName;
