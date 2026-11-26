import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { TabsBlockProps } from "@/widgets/health-for-family/types/health-for-family.types";

export type AdditionalTabsProps = PropsWithClassName & {
	isChangePanelVisible?: boolean;
} & Omit<TabsBlockProps, "description">;
