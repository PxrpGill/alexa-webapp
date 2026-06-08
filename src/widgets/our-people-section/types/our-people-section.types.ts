import type { EmployeeCardProps } from "@/entities/employee/types/employee-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type OurPeopleSectionProps = {
	title?: string;
	employees?: Array<EmployeeCardProps>;
} & PropsWithClassName;
