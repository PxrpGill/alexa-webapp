import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type EmployeeCardProps = {
	fullname?: string;
	position?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;
