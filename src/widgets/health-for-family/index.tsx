import css from "./index.module.css";
import type { HealthForFamilyProps } from "./types/health-for-family.types";
import TabsBlock from "./ui/tabs-block";

export default function HealthForFamily({
	tabsContent,
	tabsBlock,
}: HealthForFamilyProps) {
	return (
		<section className={`${css.root} container`.trim()}>
			<TabsBlock {...tabsBlock} />
		</section>
	);
}
