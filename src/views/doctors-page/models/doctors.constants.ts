import { GLOBAL_EMPLOYEES } from "@/shared/config/global-constants.constants";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	employees: [...Object.values(GLOBAL_EMPLOYEES)],
};
