import type { DocumentCardProps } from "@/shared/types/document.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type DocumentsListProps = {
	documents?: DocumentCardProps[];
} & PropsWithClassName;
