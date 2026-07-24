import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { CertificatesSectionProps } from "./types/certificates-section.types";
import Certificates from "./ui/certificates";
import SectionHeader from "./ui/section-header";

export default function CertificatesSection({
	sectionHeader,
	certificateCards,
	className,
}: CertificatesSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<SectionHeader {...sectionHeader} />
			<Certificates
				certificates={certificateCards}
				className={css.certificates}
			/>
		</AnimationWrapper>
	);
}
