/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { DescriptionCardProps } from "../../types/tax-deducation.types";
import css from "./index.module.css";

export default function DescriptionCard({
	title,
	className,
}: DescriptionCardProps) {
	if (!title) return null;

	return (
		<AnimationWrapper
			as="article"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			</div>
		</AnimationWrapper>
	);
}
