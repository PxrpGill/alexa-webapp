import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type AppointmentFormProps = {
	toggleSuccess: () => void;
};

export type AppointmentSuccessFormProps = {
	isOpen?: boolean;
} & PropsWithClassName;
