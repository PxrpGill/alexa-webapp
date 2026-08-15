import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ConsultationFormProps = {
	toggleSuccess: () => void;
};

export type ConsultationSuccessFormProps = {
	isOpen?: boolean;
} & PropsWithClassName;
