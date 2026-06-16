import css from "./index.module.css";
import type { DiagnosticsSectionProps } from "./types/diagnostics-section.types";
import ArgumentSection from "./ui/argument-section";
import CtaSection from "./ui/cta-section";
import HeroSection from "./ui/hero-section";

export default function DiagnosticsSection({
	heroSection,
	className,
	ctaSection,
	argumentSection,
}: DiagnosticsSectionProps) {
	if (!(heroSection || argumentSection || ctaSection)) return null;

	return (
		<section className={`${css.root} ${className} container`}>
			{heroSection && <HeroSection {...heroSection} />}
			{argumentSection && <ArgumentSection {...argumentSection} />}
			{ctaSection && <CtaSection {...ctaSection} />}
		</section>
	);
}
