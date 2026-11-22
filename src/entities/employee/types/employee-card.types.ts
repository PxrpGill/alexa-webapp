import type { CSSProperties, Ref } from "react";
import type { ModalProps } from "@/shared/types/modal.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type AboutEmployeeTabType = {
	tabKey: string;
	tabTitle: string;
};

export type AboutEmployeeContentType = {
	title: string;
	description?: string;
	year?: number;
};

export type AboutEmployeeTabContentType = {
	title?: string;
	content: AboutEmployeeContentType[];
};

export type AboutEmployeeModalProps = PropsWithClassName &
	Partial<ModalProps> & {
		fullname?: string;
		position?: string;
		tabs?: AboutEmployeeTabType[];
		content?: {
			[tabKey: string]: AboutEmployeeTabContentType;
		};
	};

export type EmployeeCardProps = {
	fullname?: string;
	position?: string;
	poster?: PictureFormatType;
	contentsRef?: Ref<HTMLDivElement>;
	contentsStyle?: CSSProperties;
	aboutEmployee?: AboutEmployeeModalProps;
	onAboutButtonClick?: () => void;
} & PropsWithClassName;
