import type { BranchType } from "@/shared/hooks/set-branch-in-cookies";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type VacancyCardProps = {
	slug: string;
	vacancy_name: string;
	description?: string;
	branch: BranchType;
	delay?: string;
} & PropsWithClassName;
