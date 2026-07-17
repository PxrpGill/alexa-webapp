/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { CtaGreenProps } from "../../types/cta-green.types";
import css from "./index.module.css";

export default function CtaGreen({ title, className }: CtaGreenProps) {
	if (!title) return null;

	return (
		<AnimationWrapper
			as="article"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			</div>
		</AnimationWrapper>
	);
}
