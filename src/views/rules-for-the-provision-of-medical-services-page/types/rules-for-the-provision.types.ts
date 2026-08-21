import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type RulesForTheProvisionCardProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type RulesForTheProvisionSectionProps = {
	title?: string;
	cards?: RulesForTheProvisionCardProps[];
} & PropsWithClassName;
