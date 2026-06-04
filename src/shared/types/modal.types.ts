import type { PropsWithChildren } from "react";
import type { PropsWithClassName } from "./props-with-classname";

export type ModalProps = {
	isOpen: boolean;
	toggleClose?: () => void;
	contentClassName?: string;
} & PropsWithChildren &
	PropsWithClassName;
