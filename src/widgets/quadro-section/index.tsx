import css from "./index.module.css";
import type { QuadroSectionProps } from "./types/quadro-section.types";
import SectionContent from "./ui/section-content";
import SectionHeader from "./ui/section-header";

export default function QuadroSection({
	className,
	sectionHeader,
	cards,
}: QuadroSectionProps) {
	return (
		<section className={`${css.root} ${className} container`}>
			<SectionHeader {...sectionHeader} />
			<SectionContent cards={cards} />
		</section>
	);
}
