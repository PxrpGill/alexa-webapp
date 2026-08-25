import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type PromotionsFormProps = {
	toggleSuccess: () => void;
};

export type PromotionsSuccessFormProps = {
	isOpen?: boolean;
} & PropsWithClassName;
