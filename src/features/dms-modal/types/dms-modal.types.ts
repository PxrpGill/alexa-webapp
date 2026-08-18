import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type DMSFormProps = {
	toggleSuccess: () => void;
};

export type DMSSuccessFormProps = {
	isOpen?: boolean;
} & PropsWithClassName;
